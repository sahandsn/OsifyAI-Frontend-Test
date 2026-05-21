import { TMetadata, TPage } from "@/types/general";
import { Metadata } from "next";
import linkPreviewMetadata from "@/utils/metadata";
import { setSafeRequestLocale } from "@/utils/set-safe-request-locale";
import {
  getAllBlogs,
  getFile,
  getLocalizedBlogFromSlug,
  getLocalizedBlogFromSlugArray,
} from "@/utils/get-blog";
import { TLocale } from "@/i18n/routing";
import { Mdx } from "@/components/common/mdx/mdx";
import { env } from "@/env";
import { notFound } from "next/navigation";
import { redirect } from "@/i18n/navigation";

// a note on slugs:
// content files can be named  ANYTHING, as long as their metadata's "sharedSlug" is the same, localization will work properly
// "slug" field in metadata is the source of truth localized slugs
// user will be redirected to the correct localized slug if the requested locale does not match the slug in metadata

export async function generateStaticParams(): Promise<
  { locale: TLocale; slug: string }[]
> {
  const allBlogs = await getAllBlogs();
  return allBlogs.map((blog) => ({
    locale: blog.metadata.locale,
    slug: blog.metadata.slug,
  }));
}

export async function generateMetadata(
  props: Readonly<TMetadata<"slug">>,
): Promise<Metadata | undefined> {
  const { locale, slug } = await props.params;
  const blog = await getLocalizedBlogFromSlug(slug, locale);
  if (!blog) {
    return undefined;
  }
  const metadata = linkPreviewMetadata({
    description: blog.metadata.description,
    keywords: blog.metadata.keywords.join(", "),
    title: blog.metadata.title,
    url: {
      pathname: "/blog/[slug]",
      params: { slug: blog.metadata.slug },
    },
    locale,
    image: new URL(blog.metadata.image, env.NEXT_PUBLIC_ROOT_URL).href,
  });

  return metadata;
}

export default async function BlogSlugPage(props: Readonly<TPage<"slug">>) {
  const { locale, slug } = await props.params;
  setSafeRequestLocale(locale);

  const blog = await getLocalizedBlogFromSlug(slug, locale);
  if (!blog) {
    notFound();
  }

  if (decodeURIComponent(slug) !== blog.metadata.slug) {
    redirect({
      href: {
        pathname: "/blog/[slug]",
        params: { slug: blog.metadata.slug },
      },
      locale: locale as TLocale,
    });
  }

  const BlogFile = await getFile(blog);
  if (!BlogFile) {
    notFound();
  }

  const [relatedBlogs, suggestedBlogs] = await Promise.all([
    getLocalizedBlogFromSlugArray(blog.metadata.related, locale),
    getLocalizedBlogFromSlugArray(blog.metadata.suggested, locale),
  ]);

  return (
    <Mdx
      blog={blog}
      File={BlogFile}
      relatedBlogs={relatedBlogs}
      suggestedBlogs={suggestedBlogs}
    />
  );
}
