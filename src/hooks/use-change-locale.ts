"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";

export function useChangeLocale() {
  const pathname = usePathname();
  const router = useRouter();

  // With `pathnames`: Pass `params` as well
  const params = useParams();

  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  function changeLocale(locale: Locale) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params, query },
      { locale },
    );
  }
  return changeLocale;
}
