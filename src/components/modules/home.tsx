"use client";

import { getTitle } from "@/constants/assets";
import { getPathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import type { WebSite, WithContext } from "schema-dts";
import serialize from "serialize-javascript";
import Blogs from "./blogs";
import { Blog } from "@/schema/blog";

export function Home({
  blogs,
}: Readonly<{
  blogs: Blog[];
}>) {
  const tt = useTranslations("Metadata");
  const locale = useLocale();

  const jsonLdData: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: new URL(
      getPathname({ href: "/", locale }),
      process.env.NEXT_PUBLIC_ROOT_URL,
    ).href,
    name: getTitle(locale),
    description: tt("root.description"),
    publisher: {
      "@type": "Organization",
      name: getTitle(locale),
      logo: {
        "@type": "ImageObject",
        url: new URL("/branding/logo.png", process.env.NEXT_PUBLIC_ROOT_URL)
          .href,
      },
    },
    mainEntityOfPage: new URL(
      getPathname({ href: "/", locale }),
      process.env.NEXT_PUBLIC_ROOT_URL,
    ).href,
  };

  return (
    <main
      className={cn(
        "relative flex flex-col gap-y-20 pb-20 md:gap-y-36 md:pb-36",
      )}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serialize(jsonLdData, { isJSON: true }),
        }}
      />
      <Blogs blogs={blogs} />
    </main>
  );
}
