import { MetadataRoute } from "next";
import { getUrl, sitemapBuilder, SitemapLinks } from "@/utils/sitemap";
import {
  getAllLocalizedBlogs,
  getAllSameBlogsFromSlug,
} from "@/utils/get-blog";
import { parseISO } from "date-fns";
import { defaultLocale } from "@/i18n/routing";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllLocalizedBlogs(defaultLocale.key);
  const links: SitemapLinks[] = [
    {
      href: "/",
      priority: 1,
    },
    {
      href: "/about",
      priority: 0.8,
    },
    {
      href: "/contact",
      priority: 0.8,
    },
    {
      href: "/blogs",
      priority: 0.8,
    },
    {
      href: "/privacy",
      priority: 0.1,
    },
    {
      href: "/terms",
      priority: 0.1,
    },
    {
      href: "/trust",
      priority: 0.1,
    },
  ];

  const blogLinks = await Promise.all(
    blogs.map(async (blog) => {
      const sameBlogs = await getAllSameBlogsFromSlug(blog.metadata.slug);

      const sitemap: SitemapLinks = {
        href: {
          pathname: "/blog/[slug]",
          params: { slug: blog.metadata.slug },
        },
        images: [blog.metadata.image],
        priority: 0.9,
        lastModified: parseISO(blog.metadata.date),
        languages: Object.fromEntries(
          sameBlogs.map((cur) => [
            cur.metadata.locale,
            getUrl(
              {
                pathname: "/blog/[slug]",
                params: { slug: cur.metadata.slug },
              },
              cur.metadata.locale,
            ),
          ]),
        ),
      };

      return sitemap;
    }),
  );

  return sitemapBuilder([...links, ...blogLinks]);
}
