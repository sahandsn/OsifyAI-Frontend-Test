"use client";

import { Calendar } from "@/components/ui/calendar";
import { inputVariants } from "@/components/common/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDate } from "@/hooks/use-date";
import { cn } from "@/lib/utils";
import * as React from "react";
import { DateRange, DropdownProps } from "react-day-picker";
import { CalendarMinimalisticLinear as CalendarIcon } from "solar-icon-set";
import { CalendarSelect } from "./calender-select";
import { CustomSelectItem } from "./custom-select-item";
import { VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { Button } from "./button";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";
import { tz } from "@date-fns/tz";

type TProps = {
  value: DateRange | undefined;
  onChange: (date: DateRange | undefined) => void;
  placeholder?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  id?: string;
  presets?: TPreset[];
} & VariantProps<typeof inputVariants>;

type TPreset = {
  label: React.ReactNode;
  value: DateRange;
};

export function DateRangePicker(props: Readonly<TProps>) {
  const t = useTranslations("Date Range");
  const {
    format,
    orgTimezone,
    isJalali,
    addDays,
    addMonths,
    endOfMonth,
    startOfMonth,
    startOfDay,
    startOfWeek,
    addWeeks,
    endOfWeek,
  } = useDate();

  const {
    onChange,
    value,
    className,
    size,
    placeholder = t("placeholder"),
    disabled,
    clearable,
    id,
    presets,
  } = props;

  const canClean = clearable && value?.from && value.to;
  const dateInputFormat = isJalali ? "yyyy/MM/dd" : "MM/dd/yyyy";
  const today = startOfDay(new Date(), {
    in: tz(orgTimezone),
  });

  const defaultPresets: TPreset[] = presets ?? [
    {
      label: t("today"),
      value: {
        from: addDays(today, 0, {
          in: tz(orgTimezone),
        }),
        to: addDays(today, 0, {
          in: tz(orgTimezone),
        }),
      },
    },
    {
      label: t("yesterday"),
      value: {
        from: addDays(today, -1, {
          in: tz(orgTimezone),
        }),
        to: addDays(today, -1, {
          in: tz(orgTimezone),
        }),
      },
    },
    {
      label: t("this week"),
      value: {
        from: startOfWeek(today, {
          in: tz(orgTimezone),
        }),
        to: addDays(today, 0, {
          in: tz(orgTimezone),
        }),
      },
    },
    {
      label: t("last week"),
      value: {
        from: startOfWeek(
          addWeeks(today, -1, {
            in: tz(orgTimezone),
          }),
          { in: tz(orgTimezone) },
        ),
        to: endOfWeek(
          addWeeks(today, -1, {
            in: tz(orgTimezone),
          }),
          {
            in: tz(orgTimezone),
          },
        ),
      },
    },
    {
      label: t("this month"),
      value: {
        from: startOfMonth(today, {
          in: tz(orgTimezone),
        }),
        to: addDays(today, 0, {
          in: tz(orgTimezone),
        }),
      },
    },
    {
      label: t("last month"),
      value: {
        from: startOfMonth(
          addMonths(today, -1, {
            in: tz(orgTimezone),
          }),
          { in: tz(orgTimezone) },
        ),
        to: endOfMonth(
          addMonths(today, -1, {
            in: tz(orgTimezone),
          }),
          {
            in: tz(orgTimezone),
          },
        ),
      },
    },
  ];

  return (
    <Popover>
      <PopoverTrigger
        id={id}
        disabled={disabled}
        className={cn(
          "flex min-w-56 items-center justify-between gap-2 !outline-0 !ring-0",
          inputVariants({ className, size }),
        )}
      >
        {canClean ? (
          <Button
            variant="text-destructive"
            shape="icon"
            size={"24"}
            className="!p-0"
            onPointerDown={(e) => {
              // prevent DropdownMenuTrigger from toggling
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onChange(undefined);
            }}
          >
            <X className="!size-5 !text-neutral-700" />
          </Button>
        ) : (
          <CalendarIcon
            className="!size-6 !text-neutral-700"
            color="var(--color-neutral-700)"
          />
        )}

        <p
          className={cn("grow", {
            "text-start": !value?.from && !value?.to,
          })}
        >
          {value?.from && value.to ? (
            format(value.to, dateInputFormat) +
            " ~ " +
            format(value.from, dateInputFormat)
          ) : (
            <span className="text-neutral-500 dark:text-neutral-800">
              {placeholder}
            </span>
          )}
        </p>
      </PopoverTrigger>

      <PopoverContent
        className="w-fit max-w-80 space-y-4 overflow-hidden border-[1.5px] border-neutral-400 p-4 dark:border-neutral-800"
        align="start"
        alignOffset={-8}
        sideOffset={10}
      >
        <Calendar
          className={cn("bg-transparent p-0")}
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
          mode="range"
          required={true}
          selected={value}
          defaultMonth={value?.from}
          captionLayout="dropdown"
          disabled={props.disabled}
          timeZone={orgTimezone ?? undefined}
          onSelect={(date) => {
            onChange(date);
          }}
        />

        <Separator />

        <div
          className={cn("flex flex-wrap gap-2", {
            hidden: !defaultPresets.length,
          })}
        >
          {defaultPresets.map((preset) => (
            <Button
              size={"32"}
              variant={"secondary"}
              className="w-fit"
              key={preset.label?.toString()}
              onClick={() => {
                onChange(preset.value);
              }}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
