import { MetadataRoute } from "next";
import { getUrl, sitemapBuilder, SitemapLinks } from "@/utils/sitemap";
import {
  getAllSameBlogsFromSlug,
  getLocalizedBlogsPaginated,
} from "@/utils/get-blog";
import { parseISO } from "date-fns";
import { defaultLocale } from "@/i18n/routing";
import { env } from "@/env";

export const NUMBER_OF_BLOG_SITEMAPS = 1;
const LINKS_PER_SITEMAP = 10000;

export async function generateSitemaps() {
  return Array.from({ length: NUMBER_OF_BLOG_SITEMAPS }, (_, id) => ({ id }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_ROOT_URL;

  const blogs = await getLocalizedBlogsPaginated(
    defaultLocale.key,
    id * LINKS_PER_SITEMAP,
    LINKS_PER_SITEMAP,
  );

  const blogLinks = await Promise.all(
    blogs.map(async (blog) => {
      const sameBlogs = await getAllSameBlogsFromSlug(blog.metadata.slug);

      const sitemap: SitemapLinks = {
        href: {
          pathname: "/blog/[slug]",
          params: { slug: blog.metadata.slug },
        },
        images: [new URL(blog.metadata.image, baseUrl).href],
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

  return sitemapBuilder([...blogLinks]);
}
