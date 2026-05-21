import { MetadataRoute } from "next";
import { getUrl } from "@/utils/sitemap";
import { getLocalizedBlogsPaginated } from "@/utils/get-blog";
import { format, parseISO } from "date-fns";
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

  return blogs.flatMap(({ blog, sameBlogs }) => {
    const languages = {
      ...Object.fromEntries(
        sameBlogs.map((cur) => [
          cur.metadata.locale,
          getUrl(
            { pathname: "/blog/[slug]", params: { slug: cur.metadata.slug } },
            cur.metadata.locale,
          ),
        ]),
      ),
      "x-default": getUrl(
        { pathname: "/blog/[slug]", params: { slug: blog.metadata.slug } },
        defaultLocale.key,
      ),
    };

    const lastModified = format(
      parseISO(blog.metadata.date),
      "yyyy-MM-dd'T'HH:mm:ssxxx",
    );

    const images = [new URL(blog.metadata.image, baseUrl).href];

    return sameBlogs.map((cur) => ({
      url: getUrl(
        { pathname: "/blog/[slug]", params: { slug: cur.metadata.slug } },
        cur.metadata.locale,
      ),
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.9,
      alternates: { languages },
      images,
    }));
  });
}
