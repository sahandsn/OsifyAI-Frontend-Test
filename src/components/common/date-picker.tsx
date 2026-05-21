"use client";

import { Button } from "@/components/common/button";
import { Calendar } from "@/components/ui/calendar";
import { inputVariants } from "@/components/common/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDate } from "@/hooks/use-date";
import { cn } from "@/lib/utils";
import {
  digitsArToEn,
  digitsEnToFa,
  digitsFaToEn,
} from "@persian-tools/persian-tools";
import * as React from "react";
import { DropdownProps } from "react-day-picker";
import { CalendarMinimalisticLinear as CalendarIcon } from "solar-icon-set";
import { withMask } from "use-mask-input";
import { CalendarSelect } from "./calender-select";
import { CustomSelectItem } from "./custom-select-item";
import { VariantProps } from "class-variance-authority";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { tz } from "@date-fns/tz";

type Props = StrictOmit<
  React.ComponentProps<typeof InputGroupInput>,
  "onChange" | "value"
> & {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
} & VariantProps<typeof inputVariants>;

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export function DatePicker(props: Readonly<Props>) {
  const { format, parse, isJalali, orgTimezone } = useDate();

  const dateInputFormat = isJalali ? "yyyy/MM/dd" : "MM/dd/yyyy";
  const dateInputMask = isJalali ? "9999/99/99" : "99/99/9999";

  const { onChange, value, className, size, placeholder, ...inputProps } =
    props;

  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const maskRef = React.useCallback(
    (element: HTMLInputElement | null) => {
      if (element) {
        inputRef.current = element;
        withMask(dateInputMask, {
          placeholder: "_",
          showMaskOnHover: false,
          rightAlign: false,
        })(element);
      }
    },
    [dateInputMask],
  );

  React.useEffect(() => {
    if (inputRef.current) {
      if (value) {
        const formatted = format(value, dateInputFormat);
        inputRef.current.value = formatted;
      }
    }
  }, [value, format, dateInputFormat]);

  return (
    <InputGroup
      aria-disabled={inputProps.disabled}
      className={cn("!outline-0 !ring-0", inputVariants({ className, size }))}
    >
      <InputGroupInput
        {...inputProps}
        className={cn(
          "text-neutral-900 placeholder:text-neutral-500 disabled:opacity-80 aria-disabled:opacity-80 dark:text-neutral-100 dark:placeholder:text-neutral-800",
        )}
        dir="ltr"
        type="text"
        defaultValue={value ? format(value, dateInputFormat) : ""}
        placeholder={placeholder ?? dateInputFormat}
        ref={maskRef}
        onChange={(e) => {
          let raw = e.target.value;

          if (isJalali) {
            const persianValue = digitsEnToFa(raw);

            if (raw !== persianValue) {
              const cursorStart = e.target.selectionStart;
              const cursorEnd = e.target.selectionEnd;

              e.target.value = persianValue;

              if (cursorStart !== null && cursorEnd !== null) {
                e.target.setSelectionRange(cursorStart, cursorEnd);
              }

              raw = persianValue;
            }
          }

          const normalized = digitsFaToEn(digitsArToEn(raw));
          const referenceDate = new Date();
          const date = parse(normalized, dateInputFormat, referenceDate, {
            in: tz(orgTimezone),
          });
          if (isValidDate(date)) {
            onChange(date);
          } else {
            onChange(undefined);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />

      <InputGroupAddon>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="text"
              className="p-0"
              disabled={props.disabled}
            >
              <CalendarIcon
                className="!h-6 !w-6 !text-neutral-700"
                color="var(--color-neutral-700)"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden border-none p-0"
            align="center"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              className={cn(
                "bg-neutral-white border-[1.5px] border-neutral-400 dark:border-neutral-800 dark:bg-neutral-950",
              )}
              classNames={{
                nav: cn(
                  "absolute top-0 inset-x-0 w-full flex items-center justify-between",
                ),
                month_caption: cn("mx-auto"),
                chevron: cn("size-5"),
                day: cn(
                  "h-10 w-10 font-normal text-[16px] leading-[24px] tracking-normal text-center align-middle text-neutral-900 dark:text-neutral-100 !rounded-[8px]",
                  "p-0 data-[today=true]:!bg-primary-100 dark:data-[today=true]:!bg-primary-900 dark:data-[today=true]:!text-neutral-100",
                ),
                day_button: cn(
                  "hover:bg-primary-100 dark:hover:bg-primary-900 !rounded-[8px] p-0 !h-10 !w-10 flex items-center justify-center",
                ),
                day_selected: cn("bg-primary-500 rounded-[8px]"),
                dropdowns: cn("flex gap-2"),
                dropdown_root: cn(
                  "border-[1.5px] border-neutral-400 dark:border-neutral-800 rounded-[12px] py-1 px-4 relative",
                ),
                caption_label: cn(
                  "flex items-center gap-1 p-0 font-normal text-[14px] leading-[24px] tracking-normal text-neutral-900 dark:text-neutral-100",
                ),
                years_dropdown: cn(
                  "border-[1.5px] border-neutral-400 dark:border-neutral-800 rounded-[12px] p-2 backdrop-blur-3xl",
                  "bg-[linear-gradient(90deg,rgba(255,255,255,0.4096)_0%,rgba(255,255,255,0.64)_100%)]",
                  "dark:bg-[linear-gradient(79.22deg,#212121_0.12%,rgba(33,33,33,0)_172.29%)]",
                ),
                months_dropdown: cn(
                  "border-[1.5px] border-neutral-400 dark:border-neutral-800 rounded-[12px] p-2 backdrop-blur-3xl",
                  "bg-[linear-gradient(90deg,rgba(255,255,255,0.4096)_0%,rgba(255,255,255,0.64)_100%)]",
                  "dark:bg-[linear-gradient(79.22deg,#212121_0.12%,rgba(33,33,33,0)_172.29%)]",
                ),
                week: cn("flex gap-px"),
                weekdays: cn("flex gap-px"),
                weekday: cn(
                  "font-medium text-xs leading-[18px] tracking-normal text-center align-middle text-neutral-700 dark:text-neutral-500",
                  "flex-1 size-10 h-[18px]",
                ),
              }}
              components={{
                Dropdown: (props: DropdownProps) => {
                  const { name, value, onChange, options = [] } = props;
                  const selectItems = options.map((option) => (
                    <CustomSelectItem
                      className={cn(
                        "!px-3 !py-1",
                        "text-center text-[14px] font-normal leading-[24px] tracking-normal",
                        "[&_svg]:hidden",
                      )}
                      key={option.value}
                      value={option.value.toString()}
                    >
                      {option.label || option.value.toString()}
                    </CustomSelectItem>
                  ));
                  const selectClassName = cn(
                    "h-8",
                    name === "months" ? "min-w-[120px]" : "min-w-[90px]",
                    props.className,
                  );
                  const handleValueChange = (newValue: string) => {
                    const event = {
                      target: { value: newValue },
                      currentTarget: { value: newValue },
                      type: "change" as const,
                      nativeEvent: new Event("change"),
                      persist: () => {},
                      preventDefault: () => {},
                      stopPropagation: () => {},
                      isDefaultPrevented: () => false,
                      isPropagationStopped: () => false,
                    } as React.ChangeEvent<HTMLSelectElement>;
                    onChange!(event);
                  };
                  return (
                    <CalendarSelect
                      value={value?.toString() || ""}
                      onChange={handleValueChange}
                      className={selectClassName}
                    >
                      {selectItems}
                    </CalendarSelect>
                  );
                },
              }}
              mode="single"
              required={true}
              selected={value}
              defaultMonth={value}
              captionLayout="dropdown"
              disabled={props.disabled}
              timeZone={orgTimezone ?? undefined}
              onSelect={(date) => {
                onChange(date);
                if (date) {
                  setOpen(false);
                }
              }}
            />
          </PopoverContent>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  );
}
