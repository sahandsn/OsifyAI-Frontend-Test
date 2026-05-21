import { useLocale, useTranslations } from "next-intl";
import {
  digitsEnToFa,
  phoneNumberNormalizer,
} from "@persian-tools/persian-tools";
import { isNil, isNumber } from "lodash";

export const useNumber = () => {
  const locale = useLocale();
  const t = useTranslations("General");

  const formatNumber = (
    n: number | string | null | undefined,
    options?:
      | {
          simple?: boolean;
          nilFormatter?: () => string | number;
          abs?: boolean;
          phoneNumber?: boolean;
        }
      | undefined
      | null,
  ) => {
    if (isNil(n)) {
      return options?.nilFormatter?.() ?? t("not available");
    }

    if (isNumber(n) && options?.abs) {
      // Wrap in LRE (\u202A) and PDF (\u202C) to ensure LTR rendering of the number
      return locale === "fa"
        ? options?.simple
          ? digitsEnToFa(String(Math.abs(n)))
          : `\u202A${digitsEnToFa(String(Math.abs(n)))}\u202C`
        : String(Math.abs(n));
    }

    if (options?.phoneNumber) {
      const raw = String(n);

      try {
        const normalized = phoneNumberNormalizer(raw, "0");
        return locale === "fa"
          ? `\u202A${digitsEnToFa(normalized)}\u202C`
          : `\u202A${normalized}\u202C`;
      } catch {
        // Not a phone number (or unexpected input) → fallback to normal number formatting
        return locale === "fa"
          ? options?.simple
            ? digitsEnToFa(raw)
            : `\u202A${digitsEnToFa(raw)}\u202C`
          : raw;
      }
    }

    // Wrap in LRE (\u202A) and PDF (\u202C) to ensure LTR rendering of the number
    return locale === "fa"
      ? options?.simple
        ? digitsEnToFa(String(n))
        : `\u202A${digitsEnToFa(String(n))}\u202C`
      : String(n);
  };

  return { formatNumber };
};
