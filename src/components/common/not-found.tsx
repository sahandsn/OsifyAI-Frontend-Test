"use client";

import { getTitle } from "@/constants/assets";
import Placeholder from "@/components/common/placeholder";
import { Button } from "@/components/common/button";
import { env } from "@/env";
import { getPathname, Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import type { WebPage, WithContext } from "schema-dts";
import serialize from "serialize-javascript";
import { buttonVariants } from "../common/button";

export default function NotFound() {
  const t = useTranslations("General");
  const tr = useTranslations("Login");
  const tt = useTranslations("Metadata");
  const router = useRouter();
  const locale = useLocale();

  const jsonLdData: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": new URL(
      getPathname({ href: "/not-found", locale }),
      process.env.NEXT_PUBLIC_ROOT_URL,
    ).href,
    name: tt("notFound.title"),
    description: tt("notFound.description"),
    isPartOf: {
      "@type": "WebSite",
      name: getTitle(locale),
      url: new URL(env.NEXT_PUBLIC_ROOT_URL).href,
    },
  };

  return (
    <Placeholder message={t("not-found-message")} loading={false}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serialize(jsonLdData, { isJSON: true }),
        }}
      />
      <div className="flex flex-wrap gap-6">
        <Link href="/" className={cn(buttonVariants({ variant: "secondary" }))}>
          {tr("title")}
        </Link>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          {t("not-found-action")}
        </Button>
      </div>
    </Placeholder>
  );
}
