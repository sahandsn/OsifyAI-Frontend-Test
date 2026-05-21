"use client";

import { useLocale } from "next-intl";
import { useMemo } from "react";
import Holidays from "date-holidays";
import { eachDayOfInterval } from "date-fns";

type CountryConfig = {
  country: string;
  state?: string;
  languages: string[];
};

const COUNTRY_BY_LOCALE: Record<string, CountryConfig> = {
  fa: { country: "IR", languages: ["fa", "en"] },
  de: { country: "DE", languages: ["de", "en"] },
  en: { country: "GB", state: "ENG", languages: ["en"] },
};

export const useHolidays = () => {
  const locale = useLocale();

  const hd = useMemo(() => {
    const conf = COUNTRY_BY_LOCALE[locale] ?? COUNTRY_BY_LOCALE.en;
    const instance = conf.state
      ? new Holidays(conf.country, conf.state, {
          types: ["public"],
          languages: conf.languages,
        })
      : new Holidays(conf.country, {
          types: ["public"],
          languages: conf.languages,
        });
    return instance;
  }, [locale]);

  const getHolidayName = (date: Date | string): string | null => {
    const d = typeof date === "string" ? new Date(date) : date;
    const result = hd.isHoliday(d);
    if (!result) return null;
    const publicOnes = result.filter((h) => h.type === "public");
    if (publicOnes.length === 0) return null;
    return publicOnes.map((h) => h.name).join(", ");
  };

  const isHoliday = (date: Date | string) => getHolidayName(date) !== null;

  const getHolidaysInRange = (start: Date, end: Date) => {
    const range = eachDayOfInterval({ start, end });
    const list = range
      .map((item) => {
        return {
          date: item,
          holidayName: getHolidayName(item),
        };
      })
      .filter((item) => item.holidayName !== null);
    return list;
  };

  return { isHoliday, getHolidayName, getHolidaysInRange };
};
