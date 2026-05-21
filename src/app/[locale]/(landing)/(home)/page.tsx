import { Home } from "@/components/modules/landing/home";
import { TMetadata, TPage } from "@/types/general";
import { getSpecialBlogs } from "@/utils/get-blog";
import { setSafeRequestLocale } from "@/utils/set-safe-request-locale";
import linkPreviewMetadata from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getTitle } from "@/constants/assets";

export async function generateMetadata(
  props: Readonly<TMetadata>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations();
  const metadata = linkPreviewMetadata({
    description: t("Metadata.root.description"),
    keywords: t("Metadata.root.keywords"),
    title: {
      absolute: getTitle(locale),
    },
    url: "/",
    locale,
  });

  return metadata;
}
export default async function LandingPage(props: Readonly<TPage>) {
  const { locale } = await props.params;
  setSafeRequestLocale(locale);
  const blogs = await getSpecialBlogs(locale);
  return <Home blogs={blogs} />;
}
