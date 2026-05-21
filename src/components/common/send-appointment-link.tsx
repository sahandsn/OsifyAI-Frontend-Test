"use client";

import { z } from "zod";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Label } from "@/components/common/label";
import { $api } from "@/api";
import { ComponentProps, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/common/button";
import { setFormError } from "@/utils/set-form-error";
import { Select, SelectValue } from "@/components/ui/select";
import {
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/common/select";
import { cn } from "@/lib/utils";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/common/phone-input";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { LetterLinear } from "solar-icon-set";
import { userName } from "@/utils/user-name";
import { useAppointmentConfigs } from "@/hooks/use-appointment-configs";
import { fromBlankValue, toBlankValue } from "@/utils/blank-value";
import { useSidebar } from "@/components/ui/sidebar";
import toast from "./custom-toast";
import { useDoctors } from "@/hooks/use-doctors";
import { useFeatureFlags } from "@/hooks/use-feature-flags";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import { LoadingComponent } from "@/components/common/loading";
import { useDate } from "@/hooks/use-date";
import { useHolidays } from "@/hooks/use-holidays";
import { tz } from "@date-fns/tz";
import {
  format as formatDate,
  isBefore,
  startOfDay as startOfDayG,
} from "date-fns";
import { ApiAcceptableDate } from "@/constants/date";

export const useSendBookingLinkSchema = () => {
  const zSchema = z
    .object({
      phone_number: z.string().refine((data) => {
        if (data) {
          return isValidPhoneNumber(data);
        }

        return true;
      }),
      appointment_config: z.uuid(),
      is_emergency: z.boolean(),
      possible_interval: z.uuid().nullish(),
    })
    .refine((data) => !data.is_emergency || !!data.possible_interval, {
      path: ["possible_interval"],
      params: { code: "required" },
    });

  return { zSchema };
};

type TForm = z.infer<ReturnType<typeof useSendBookingLinkSchema>["zSchema"]>;

export const SendAppointmentLink = ({
  dialogProps,
  onSuccess,
}: Readonly<{
  dialogProps?: ComponentProps<typeof AlertDialog>;
  onSuccess?: () => void;
}>) => {
  const t = useTranslations("SendAppointmentLink");
  const tx = useTranslations("Organization");
  const tr = useTranslations("ExtendBookingSchedule");
  const sidebar = useSidebar();
  const { isMultipleDoctors } = useDoctors();
  const { configs, pending, disabled } = useAppointmentConfigs();
  const { featureFlags } = useFeatureFlags();
  const {
    endOfMonth,
    startOfMonth,
    orgTimezone,
    startOfDay,
    format,
    timeFormat,
  } = useDate();
  const { getHolidayName, getHolidaysInRange } = useHolidays();

  const closeRef = useRef<HTMLButtonElement>(null);
  const { zSchema } = useSendBookingLinkSchema();

  const todayGeneral = new Date();
  const [calendarMonth, setCalendarMonth] = useState<Date>(todayGeneral);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const form = useForm<TForm>({
    resolver: zodResolver(zSchema),
    defaultValues: {
      phone_number: undefined,
      appointment_config: undefined,
      is_emergency: false,
      possible_interval: null,
    },
  });

  const isEmergency = useWatch({
    control: form.control,
    name: "is_emergency",
  });
  const appointmentConfig = useWatch({
    control: form.control,
    name: "appointment_config",
  });
  const selectedIntervalUuid = useWatch({
    control: form.control,
    name: "possible_interval",
  });

  const todayInTz = startOfDay(calendarMonth, { in: tz(orgTimezone) });
  const firstDayOfMonth = startOfMonth(todayInTz, { in: tz(orgTimezone) });
  const lastDayOfMonth = endOfMonth(todayInTz, { in: tz(orgTimezone) });

  const monthHolidays = getHolidaysInRange(firstDayOfMonth, lastDayOfMonth);

  const scheduleQuery = $api.useQuery(
    "get",
    "/appointment-calendar/{appointment_config}/days/",
    {
      params: {
        path: { appointment_config: appointmentConfig ?? "" },
        query: {
          from_date: formatDate(firstDayOfMonth, ApiAcceptableDate),
          to_date: formatDate(lastDayOfMonth, ApiAcceptableDate),
          page_size: 1_000_000_000,
        },
      },
    },
    { enabled: !!appointmentConfig && isEmergency },
  );

  const intervalsQuery = $api.useQuery(
    "get",
    "/appointment-calendar/{appointment_config}/{date}/intervals/",
    {
      params: {
        path: {
          appointment_config: appointmentConfig ?? "",
          date: selectedDate ? formatDate(selectedDate, ApiAcceptableDate) : "",
        },
        query: {
          page_size: 1_000_000_000,
        },
      },
    },
    { enabled: !!appointmentConfig && !!selectedDate && isEmergency },
  );

  const daysData = scheduleQuery.data?.results ?? [];
  const intervals =
    intervalsQuery.data?.results
      ?.filter((interval) => {
        const start = new Date(interval.start);
        return !isBefore(start, startOfDayG(new Date()));
      })
      .sort((a, b) => a.start.localeCompare(b.start)) ?? [];

  const mutation = $api.useMutation("post", "/appointment-booking/create/", {
    onSuccess() {
      toast.success(t("success msg"));
      closeRef.current?.click();
      form.reset();
      setSelectedDate(undefined);
      onSuccess?.();
    },
    onError(error) {
      setFormError(form, error);
    },
  });

  const onSubmit = (data: TForm) => {
    mutation.mutate({
      body: {
        phone_number: data.phone_number,
        appointment_config: data.appointment_config,
        possible_interval: data.is_emergency ? data.possible_interval : null,
      },
    });
  };

  return (
    <AlertDialog
      {...dialogProps}
      onOpenChange={(isOpen) => {
        dialogProps?.onOpenChange?.(isOpen);
        const silent = !isMultipleDoctors && !disabled && configs.at(0)?.uuid;
        form.reset({
          phone_number: undefined,
          appointment_config: silent ? configs.at(0)?.uuid : undefined,
          is_emergency: false,
          possible_interval: null,
        });
        setSelectedDate(undefined);
        setCalendarMonth(new Date());
      }}
    >
      <AlertDialogTrigger asChild>
        <Button
          size={"48"}
          className={cn("w-full text-sm", {
            hidden: featureFlags.appointment === "disabled",
          })}
          loading={pending}
        >
          <LetterLinear className={cn({ "!hidden": pending })} />
          {sidebar.open ? t("button") : undefined}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay
          className={cn(
            "fixed inset-0 z-50 bg-[rgba(255,255,255,0.2)] backdrop-blur-[3px]",
            "transition-opacity duration-200",
            "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
          )}
        />

        <AlertDialogContent
          className={cn(
            "z-[99999]",
            "max-w-md",
            "max-h-[100svh] overflow-y-auto",
            "rounded-2xl",
            "bg-neutral-50 shadow-lg dark:bg-neutral-950",
            "border-[1.5px] border-neutral-400 dark:border-neutral-800",
            "px-8 py-6",
          )}
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[20px] font-bold leading-[28px] text-neutral-900 dark:text-neutral-100">
              {t("title")}
            </AlertDialogTitle>
          </AlertDialogHeader>

          {featureFlags.appointment === "limited" ? (
            t("limited")
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-4 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem autoFocus>
                      <Label htmlFor="booking_phone_number" required>
                        {t("phone_number.label")}
                      </Label>
                      <FormControl autoFocus>
                        <PhoneInput
                          {...field}
                          placeholder={t("phone_number.placeholder")}
                          id={"booking_phone_number"}
                          disabled={pending}
                          autoFocus
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="appointment_config"
                  render={({ field }) => (
                    <FormItem
                      className={cn({
                        hidden: !isMultipleDoctors,
                      })}
                    >
                      <Label htmlFor="appointment_configs" required>
                        {t("appointment_config.label")}
                      </Label>
                      <Select
                        onValueChange={(val) => {
                          field.onChange(fromBlankValue(val));
                          form.setValue("possible_interval", null);
                          setSelectedDate(undefined);
                        }}
                        value={toBlankValue(field.value)}
                        key={toBlankValue(field.value)}
                        disabled={pending}
                      >
                        <FormControl>
                          <SelectTrigger id="appointment_configs">
                            <SelectValue
                              placeholder={t("appointment_config.placeholder")}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="relative z-[99999]">
                          {configs.map((config) => {
                            const user = userName(config.user_read_only);
                            return (
                              <SelectItem key={config.uuid} value={config.uuid}>
                                {tx("user-name", {
                                  isDoctor: "true",
                                  firstName: user.firstName ?? "",
                                  lastName: user.lastName ?? "",
                                })}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="is_emergency"
                  render={({ field }) => (
                    <FormItem
                      className={cn(
                        "flex items-start gap-3 space-y-0 rounded-[12px] border px-4 py-3",
                        "border-neutral-400 dark:border-neutral-800",
                      )}
                    >
                      <FormControl>
                        <Checkbox
                          id="emergency_booking"
                          checked={field.value}
                          onCheckedChange={(checked) => {
                            const next = checked === true;
                            field.onChange(next);
                            if (!next) {
                              form.setValue("possible_interval", null);
                              setSelectedDate(undefined);
                            }
                          }}
                          className="mt-0.5 h-5 w-5 rounded-[6px] border-neutral-400 shadow-none data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 dark:border-neutral-800 dark:data-[state=checked]:border-primary-950"
                        />
                      </FormControl>
                      <div className="flex flex-col gap-1">
                        <Label
                          htmlFor="emergency_booking"
                          className="cursor-pointer text-[14px] font-semibold leading-[20px] text-neutral-900 dark:text-neutral-100"
                        >
                          {t("emergency.label")}
                        </Label>
                        <p className="text-[12px] leading-[18px] text-neutral-600 dark:text-neutral-400">
                          {t("emergency.description")}
                        </p>
                      </div>
                    </FormItem>
                  )}
                />

                {isEmergency && appointmentConfig ? (
                  <FormField
                    control={form.control}
                    name="possible_interval"
                    render={() => (
                      <FormItem className="space-y-4">
                        <div className="flex flex-col gap-8">
                          {/* Calendar */}
                          <div className="flex flex-col items-center">
                            <Label className="mb-2 self-start text-[14px] font-semibold">
                              {t("emergency.pickDate")}
                            </Label>
                            <Calendar
                              mode="single"
                              disabled={(date) =>
                                isBefore(date, startOfDayG(new Date()))
                              }
                              selected={selectedDate}
                              onSelect={(_, triggerDate) => {
                                if (triggerDate) {
                                  setSelectedDate(triggerDate);
                                  form.setValue("possible_interval", null);
                                }
                              }}
                              month={calendarMonth}
                              onMonthChange={setCalendarMonth}
                              classNames={{
                                today: "rounded-md",
                                disabled: "text-muted-foreground",
                              }}
                              components={{
                                DayButton: (dayProps) => {
                                  const dStr = formatDate(
                                    dayProps.day.date,
                                    ApiAcceptableDate,
                                  );
                                  const d = daysData.find(
                                    (day) => day.date === dStr,
                                  );
                                  const isPast = isBefore(
                                    dayProps.day.date,
                                    startOfDayG(new Date()),
                                  );

                                  const isNotFull =
                                    !!d &&
                                    d.capacity > 0 &&
                                    d.reserved < d.capacity;
                                  const isFull =
                                    !!d &&
                                    d.capacity > 0 &&
                                    d.reserved >= d.capacity;
                                  const holidayName = getHolidayName(
                                    dayProps.day.date,
                                  );

                                  return (
                                    <CalendarDayButton
                                      {...dayProps}
                                      title={holidayName ?? undefined}
                                      className={cn(
                                        "!rounded-md !ring-0",
                                        {
                                          "!bg-partly-full-doctor-interval !text-partly-full-doctor-interval-foreground":
                                            isNotFull && !isPast,
                                          "!bg-full-doctor-interval !text-full-doctor-interval-foreground":
                                            isFull && !isPast,
                                          "!bg-neutral-300 !text-partly-full-doctor-interval-foreground dark:!bg-neutral-800":
                                            isNotFull && isPast,
                                          "!bg-neutral-300 !text-full-doctor-interval-foreground dark:!bg-neutral-800":
                                            isFull && isPast,
                                          "!opacity-60": isPast,
                                          "hover:!bg-neutral-200 hover:!text-foreground hover:dark:!bg-neutral-900":
                                            !isNotFull &&
                                            !isFull &&
                                            !dayProps.modifiers.selected,
                                          "z-10 !bg-neutral-300 !text-foreground dark:!bg-neutral-800":
                                            dayProps.modifiers.selected &&
                                            !isFull &&
                                            !isNotFull,
                                          "!ring-1 !ring-inset !ring-error-300 dark:!ring-error-900/70":
                                            !!holidayName,
                                          "!text-error-600 dark:!text-error-400":
                                            !!holidayName && !d,
                                        },
                                        dayProps.className,
                                      )}
                                    >
                                      {holidayName ? (
                                        <span className="pointer-events-none absolute right-1 top-1 size-1.5 rounded-full bg-error-500" />
                                      ) : null}
                                      <span
                                        className={cn(
                                          "font-medium leading-none",
                                          {
                                            "!text-lg !font-extrabold":
                                              dayProps.modifiers.selected,
                                            underline: dayProps.modifiers.today,
                                          },
                                        )}
                                      >
                                        {dayProps.children}
                                      </span>
                                    </CalendarDayButton>
                                  );
                                },
                              }}
                            />

                            <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-[12px] px-4 py-3">
                              <div className="flex items-center gap-2">
                                <div className="size-3 rounded-full border border-partly-full-doctor-interval-foreground bg-partly-full-doctor-interval" />
                                <span className="text-[12px] font-medium text-muted-foreground">
                                  {tr("partiallyBooked")}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="size-3 rounded-full border border-full-doctor-interval-foreground bg-full-doctor-interval" />
                                <span className="text-[12px] font-medium text-muted-foreground">
                                  {tr("fullyBooked")}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="size-3 rounded-full bg-error-500" />
                                <span className="text-[12px] font-medium text-muted-foreground">
                                  {tr("holiday")}
                                </span>
                              </div>
                            </div>

                            {monthHolidays.length > 0 ? (
                              <ul className="flex w-full flex-col gap-1 px-4 text-[11px] text-muted-foreground">
                                {monthHolidays.map(({ date, holidayName }) => (
                                  <li
                                    key={date.toString()}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="size-1.5 shrink-0 rounded-full bg-error-500" />
                                    <span className="font-medium tabular-nums">
                                      {format(date, "d MMMM")}
                                    </span>
                                    <span className="truncate">
                                      {holidayName}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>

                          {/* Intervals */}
                          <div
                            className={cn("flex flex-col gap-3", {
                              hidden: !selectedDate,
                            })}
                          >
                            <Label className="text-[14px] font-semibold">
                              {selectedDate
                                ? format(selectedDate, "EEEE, d MMMM yyyy")
                                : t("emergency.pickInterval")}
                            </Label>

                            {selectedDate && intervalsQuery.isPending ? (
                              <LoadingComponent />
                            ) : null}

                            {selectedDate &&
                            !intervalsQuery.isPending &&
                            intervals.length === 0 ? (
                              <p className="text-[13px] text-muted-foreground">
                                {t("emergency.noIntervals")}
                              </p>
                            ) : null}

                            {selectedDate && intervals.length > 0 ? (
                              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {intervals.map((interval) => {
                                  const isFull =
                                    (interval.reserved ?? 0) >=
                                    interval.capacity;
                                  const isSelected =
                                    interval.uuid === selectedIntervalUuid;
                                  return (
                                    <button
                                      type="button"
                                      key={interval.uuid}
                                      onClick={() =>
                                        form.setValue(
                                          "possible_interval",
                                          interval.uuid,
                                          { shouldValidate: true },
                                        )
                                      }
                                      className={cn(
                                        "flex items-center justify-center rounded-[16px] border px-4 py-3 text-center transition-colors",
                                        {
                                          "!bg-partly-full-doctor-interval !text-partly-full-doctor-interval-foreground":
                                            !isFull,
                                          "!bg-full-doctor-interval !text-full-doctor-interval-foreground":
                                            isFull,
                                          "border-2 border-primary-500":
                                            isSelected,
                                          "opacity-60": !isSelected,
                                        },
                                      )}
                                    >
                                      <div
                                        className="text-[16px] font-bold tabular-nums"
                                        dir="ltr"
                                      >
                                        {format(
                                          new Date(interval.start),
                                          timeFormat,
                                        )}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : null}

                <AlertDialogFooter className="mt-6 gap-2 sm:justify-center sm:gap-4 sm:space-x-0">
                  <Button
                    variant="secondary"
                    type="button"
                    size={"48"}
                    className="w-full sm:w-auto"
                    onClick={() => closeRef.current?.click()}
                  >
                    {t("cancel")}
                  </Button>
                  <Button
                    type="submit"
                    size={"48"}
                    className="w-full sm:w-auto"
                    loading={mutation.isPending || pending}
                    disabled={
                      disabled || (isEmergency && !selectedIntervalUuid)
                    }
                  >
                    {t("submit")}
                  </Button>
                </AlertDialogFooter>
              </form>
            </Form>
          )}

          <AlertDialogCancel ref={closeRef} className="hidden" />
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};
