import { MetadataRoute } from "next";
import { Locale } from "next-intl";
import { format } from "date-fns";
import { tz } from "@date-fns/tz";
import { getPathname } from "@/i18n/navigation";
import { defaultLocale, routing } from "@/i18n/routing";
import { TRoute } from "@/types/general";
import { env } from "@/env";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

export type SitemapLinks = {
  href: TRoute;
  priority: number;
  lastModified?: Date;
  languages?: Languages<string>;
  images?: MetadataRoute.Sitemap[number]["images"];
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
};

export function sitemapBuilder(arr: SitemapLinks[]): MetadataRoute.Sitemap {
  return arr.map((props) => {
    return getEntries(props);
  });
}

function getEntries(props: SitemapLinks): MetadataRoute.Sitemap[number] {
  const lastModified = format(
    props.lastModified ?? new Date(),
    "yyyy-MM-dd'T'HH:mm:ssxxx",
    { in: tz(env.NEXT_PUBLIC_DEFAULT_Timezone) },
  );
  return {
    url: getUrl(props.href, defaultLocale.key),
    lastModified,
    changeFrequency: props.changeFrequency ?? "daily",
    priority: props.priority,
    alternates: {
      languages:
        props.languages ??
        Object.fromEntries(
          routing.locales.map((cur) => [cur, getUrl(props.href, cur)]),
        ),
    },
    images: props.images ?? undefined,
  };
}

export function getUrl(href: TRoute, locale: Locale) {
  const pathname = getPathname({ locale, href });
  const newHref = new URL(pathname, env.NEXT_PUBLIC_ROOT_URL).href;
  return decodeURIComponent(newHref);
}
