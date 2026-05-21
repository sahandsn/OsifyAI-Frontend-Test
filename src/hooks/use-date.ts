"use client";

import { useLocale } from "next-intl";
import { DayPicker as DayPickerInternational } from "react-day-picker";
import { DayPicker as DayPickerJalali } from "react-day-picker/persian";
import {
  newDate,
  format as formatJalali,
  getDate as getDateJ,
  getMonth as getMonthJ,
  getYear as getYearJ,
  setDate as setDateJ,
  setMonth as setMonthJ,
  setYear as setYearJ,
  getDaysInMonth as getDaysInMonthJ,
  differenceInYears as differenceInYearsJ,
  parse as parseJ,
  differenceInCalendarDays as differenceInCalendarDaysJ,
  addDays as addDaysJ,
  addMonths as addMonthsJ,
  endOfMonth as endOfMonthJ,
  startOfMonth as startOfMonthJ,
  startOfDay as startOfDayJ,
  startOfWeek as startOfWeekJ,
  endOfWeek as endOfWeekJ,
  addWeeks as addWeeksJ,
} from "date-fns-jalali";
import {
  format as formatInternational,
  getDate as getDateG,
  getMonth as getMonthG,
  getYear as getYearG,
  setDate as setDateG,
  setMonth as setMonthG,
  setYear as setYearG,
  getDaysInMonth as getDaysInMonthG,
  differenceInYears as differenceInYearsG,
  parse as parseG,
  differenceInCalendarDays as differenceInCalendarDaysG,
  addDays as addDaysG,
  addMonths as addMonthsG,
  endOfMonth as endOfMonthG,
  startOfMonth as startOfMonthG,
  startOfDay as startOfDayG,
  startOfWeek as startOfWeekG,
  endOfWeek as endOfWeekG,
  addWeeks as addWeeksG,
  getDay as getDayG,
} from "date-fns";
import { enUS, de, faIR } from "react-day-picker/locale";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import type { Locale } from "react-day-picker";
import { tz } from "@date-fns/tz";

export const useDate = () => {
  const currentLocale = useLocale();

  const jalali = currentLocale === "fa";

  const reactDayPickerLocale = (): Locale | undefined => {
    switch (currentLocale) {
      case "en":
        return enUS;
      case "de":
        return de;
      case "fa":
        // Cast the custom locale to Locale type
        return {
          ...faIR,
          localize: {
            ...faIR.localize,
            day: (n: number) => {
              const persianDays = [
                "یک",
                "دو",
                "سه",
                "چهار",
                "پنج",
                "جمعه",
                "شنبه",
              ];
              return persianDays[n];
            },
            month: (n: number) =>
              [
                "فروردین",
                "اردیبهشت",
                "خرداد",
                "تیر",
                "مرداد",
                "شهریور",
                "مهر",
                "آبان",
                "آذر",
                "دی",
                "بهمن",
                "اسفند",
              ][n],
          },
          formatLong: {
            date: () => "yyyy/MM/dd",
            time: () => "HH:mm",
            dateTime: () => "yyyy/MM/dd HH:mm",
          },
          options: {
            weekStartsOn: 6,
            firstWeekContainsDate: 1,
          },
        };
      default:
        return faIR;
    }
  };

  const createDate = (year: number, month: number, date: number) => {
    return jalali ? newDate(year, month, date) : new Date(year, month, date);
  };

  const monthFormat = jalali ? "MMMM" : "MMM";
  const dateFormat = jalali ? "dd MMMM yyyy" : "d MMM yyyy";
  const timeFormat = "HH:mm";
  const dateTimeFormat = jalali ? "d MMMM yyyy HH:mm" : "d MMM yyyy HH:mm";

  const orgTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const customFormatInternational = (
    ...params: Parameters<typeof formatInternational>
  ) => {
    try {
      const reqOptions = params[2];
      const options = {
        ...reqOptions,
        in: reqOptions?.in ?? tz(orgTimezone),
      };
      return formatInternational(params[0], params[1], options);
    } catch (e) {
      console.log(e);
      return "";
    }
  };

  const customFormatJalali = (...params: Parameters<typeof formatJalali>) => {
    try {
      const reqOptions = params[2];
      const options = {
        ...reqOptions,
        in: reqOptions?.in ?? tz(orgTimezone),
      };
      const formatted = formatJalali(params[0], params[1], options);
      return digitsEnToFa(formatted);
    } catch (e) {
      console.log(e);
      return "";
    }
  };

  const getDay = (...params: Parameters<typeof getDayG>) => {
    if (jalali) {
      return getDayG(...params) + 1;
    }

    return getDayG(...params);
  };

  const locale = reactDayPickerLocale();

  return {
    DayPicker: jalali ? DayPickerJalali : DayPickerInternational,
    isJalali: jalali,
    format: jalali ? customFormatJalali : customFormatInternational,
    createDate,
    getDate: jalali ? getDateJ : getDateG,
    getMonth: jalali ? getMonthJ : getMonthG,
    getYear: jalali ? getYearJ : getYearG,
    setDate: jalali ? setDateJ : setDateG,
    setMonth: jalali ? setMonthJ : setMonthG,
    setYear: jalali ? setYearJ : setYearG,
    getDaysInMonth: jalali ? getDaysInMonthJ : getDaysInMonthG,
    differenceInYears: jalali ? differenceInYearsJ : differenceInYearsG,
    differenceInCalendarDays: jalali
      ? differenceInCalendarDaysJ
      : differenceInCalendarDaysG,
    parse: jalali ? parseJ : parseG,
    monthFormat,
    dateFormat,
    timeFormat,
    dateTimeFormat,
    reactDayPickerLocale: locale,
    orgTimezone,
    addDays: jalali ? addDaysJ : addDaysG,
    addMonths: jalali ? addMonthsJ : addMonthsG,
    endOfMonth: jalali ? endOfMonthJ : endOfMonthG,
    startOfMonth: jalali ? startOfMonthJ : startOfMonthG,
    startOfDay: jalali ? startOfDayJ : startOfDayG,
    startOfWeek: jalali ? startOfWeekJ : startOfWeekG,
    endOfWeek: jalali ? endOfWeekJ : endOfWeekG,
    addWeeks: jalali ? addWeeksJ : addWeeksG,
    getDay,
  };
};
