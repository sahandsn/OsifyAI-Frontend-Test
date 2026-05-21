import type { MetadataRoute } from "next";
import { env } from "@/env";
import { locales } from "@/i18n/routing";

export default function robots(): MetadataRoute.Robots {
  const enabled: string[] = ["/"];
  const disabled: string[] = ["/app/", "/auth/", "/api/", "/utility/"];
  const localized = (list: string[]) => {
    const newList = list.flatMap((item) => {
      return locales.map((locale) => `/${locale.key}${item}`);
    });
    return [...newList, ...list];
  };

  return {
    rules: {
      userAgent: "*",
      allow: localized(enabled),
      disallow: localized(disabled),
    },
    host: env.NEXT_PUBLIC_ROOT_URL,
    sitemap: new URL("/sitemap.xml", env.NEXT_PUBLIC_ROOT_URL).href,
  };
}
