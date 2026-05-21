import { MetadataRoute } from "next";
import { sitemapBuilder, SitemapLinks } from "@/utils/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links: SitemapLinks[] = [
    {
      href: "/",
      priority: 1,
      changeFrequency: "monthly",
    },
  ];

  return sitemapBuilder([...links]);
}
