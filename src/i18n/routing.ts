import { env } from "@/env";
import { defineRouting } from "next-intl/routing";

export type TDirection = "rtl" | "ltr";
export type TLocale = "en" | "de" | "fa";
interface ILocaleItem {
  key: TLocale;
  title: string;
  direction: TDirection;
}

export const ENGLISH: ILocaleItem = {
  key: "en",
  title: "English",
  direction: "ltr",
} as const;
export const GERMAN: ILocaleItem = {
  key: "de",
  title: "Deutsche",
  direction: "ltr",
} as const;
export const FARSI: ILocaleItem = {
  key: "fa",
  title: "فارسی",
  direction: "rtl",
} as const;

export const getDirection: (locale: string) => TDirection = (
  locale: string,
) => {
  const lang = locales.find((lang) => lang.key === locale);
  if (lang) {
    return lang.direction;
  } else {
    return defaultLocale.direction;
  }
};

export const locales = [ENGLISH, GERMAN, FARSI] as const;
export const localeKeys = locales.map((locale) => locale.key);
export const defaultLocale = locales.find(
  (l) => l.key === env.NEXT_PUBLIC_DEFAULT_LOCALE_KEY,
)!;
export const pathnames = {
  "#": "#",

  "/": "/",

  "/not-found": {
    en: "/not-found",
    de: "/nicht-gefunden",
    fa: "/یافت-نشد",
  },

  "/blog/[slug]": {
    en: "/blog/[slug]",
    de: "/blog/[slug]",
    fa: "/[slug]/وبلاگ",
  },
};

export const routing = defineRouting({
  locales: localeKeys,
  defaultLocale: defaultLocale.key,
  pathnames: pathnames,
  localePrefix: "as-needed",
  localeDetection: false,
});
