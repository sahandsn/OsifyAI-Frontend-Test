import { MetadataRoute } from "next";
import { sitemapBuilder, SitemapLinks } from "@/utils/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links: SitemapLinks[] = [
    {
      href: "/",
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      href: "/about",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      href: "/contact",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      href: "/blogs",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      href: "/privacy",
      priority: 0.1,
      changeFrequency: "monthly",
    },
    {
      href: "/terms",
      priority: 0.1,
      changeFrequency: "monthly",
    },
    {
      href: "/trust",
      priority: 0.1,
      changeFrequency: "monthly",
    },
  ];

  return sitemapBuilder([...links]);
}
