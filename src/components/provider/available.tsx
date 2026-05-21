"use client";

import { TRoute, TLayout } from "@/types/general";
import Placeholder from "../common/placeholder";
import { P } from "../common/typography";
import { env } from "@/env";
import { useTranslations } from "next-intl";
import { Construction } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../common/button";

export default function AvailableProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;
  const path = usePathname();
  const t = useTranslations("General");

  const isLandingAvailable = env.NEXT_PUBLIC_LANDING_AVAILABLE === "true";
  const isAppAvailable = env.NEXT_PUBLIC_APP_AVAILABLE === "true";
  const isAppPath =
    path.startsWith("/app") ||
    path.startsWith("/auth") ||
    path.startsWith("/utility");
  const isAvailable = isAppPath ? isAppAvailable : isLandingAvailable;

  const getHref = (): TRoute => {
    if (isAppPath && isLandingAvailable) {
      return "/";
    }

    if (!isAppPath && isAppAvailable) {
      return "/auth/login";
    }

    return "#";
  };

  if (isAvailable) {
    return children;
  }

  const href = getHref();
  const showCta = href !== "#";

  return (
    <Placeholder loading={false} message={<P>{t("unavailable")}</P>}>
      <span className="flex items-center justify-center gap-6">
        <Construction size={36} />
        <Link
          href={href}
          className={cn(buttonVariants(), { hidden: !showCta })}
        >
          {t("not-found-action")}
        </Link>
        <Construction
          className={cn({
            hidden: !showCta,
          })}
          size={36}
        />
      </span>
    </Placeholder>
  );
}
