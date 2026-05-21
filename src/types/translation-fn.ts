import type { useTranslations } from "next-intl";
import type { getTranslations } from "next-intl/server";

export type TranslationFn =
  | ReturnType<typeof useTranslations<never>>
  | Awaited<ReturnType<typeof getTranslations<never>>>;
