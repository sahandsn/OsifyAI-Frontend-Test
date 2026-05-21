import { TLocale } from "@/i18n/routing";

export const getReadingTimeMinute = (wordCount: number, locale: TLocale) => {
  const WPM_MAP: Record<TLocale, number> = {
    en: 200,
    de: 180,
    fa: 160,
  };
  const WPM = WPM_MAP[locale] || 200;
  return Math.ceil(wordCount / WPM);
};
