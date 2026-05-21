"use client";

import { useEffect } from "react";
import { useSession } from "@/session";
import { useLocale } from "next-intl";
import { useChangeLocale } from "@/hooks/use-change-locale";
import { localeKeys } from "@/i18n/routing";
import { TLayout } from "@/types/general";
import { usePathname } from "@/i18n/navigation";

export function LocaleSynchronizer(props: Readonly<Pick<TLayout, "children">>) {
  const { children } = props;
  const { session } = useSession();
  const locale = useLocale();
  const pathname = usePathname();
  const changeLocale = useChangeLocale();

  useEffect(() => {
    if (
      session.hasSession &&
      session.user?.language &&
      session.user.language !== locale &&
      localeKeys.includes(session.user.language) &&
      // it can mess up with login
      !pathname.startsWith("/auth")
    ) {
      changeLocale(session.user.language);
    }
  }, [
    session.user?.language,
    locale,
    changeLocale,
    session.hasSession,
    pathname,
  ]);

  return children;
}
