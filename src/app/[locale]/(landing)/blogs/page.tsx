import { TMetadata, TPage } from "@/types/general";
import { Metadata } from "next";
import linkPreviewMetadata from "@/utils/metadata";
import { setSafeRequestLocale } from "@/utils/set-safe-request-locale";
import {
  getAllLocalizedBlogs,
  getFilteredBlogs,
  getSpecialBlogs,
} from "@/utils/get-blog";
import { BlogPageComponent } from "@/components/modules/landing/blog";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(
  props: Readonly<TMetadata>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations("Blogs");
  const metadata = linkPreviewMetadata({
    description: t("all blogs - description"),
    keywords: t("description"),
    title: t("all blogs - title"),
    url: "/blogs",
    locale,
  });

  return metadata;
}

export default async function BlogsPage(props: Readonly<TPage>) {
  const { locale } = await props.params;
  const searchParams = await props.searchParams;

  setSafeRequestLocale(locale);

  const [filteredBlogs, allBlogs, specialBlogs] = await Promise.all([
    getFilteredBlogs(locale, searchParams),
    getAllLocalizedBlogs(locale),
    getSpecialBlogs(locale),
  ]);

  return (
    <BlogPageComponent
      allBlogs={allBlogs}
      filteredBlogs={filteredBlogs}
      specialBlogs={specialBlogs}
    />
  );
}
