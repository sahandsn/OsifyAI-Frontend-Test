import AboutUs from "@/components/modules/landing/about-us";
import linkPreviewMetadata from "@/utils/metadata";
import { TMetadata, TPage } from "@/types/general";
import { setSafeRequestLocale } from "@/utils/set-safe-request-locale";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(
  props: Readonly<TMetadata>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations();
  const metadata = linkPreviewMetadata({
    description: t("Metadata.about-us.description"),
    keywords: t("Metadata.about-us.keywords"),
    title: t("about-us.hero-title"),
    url: "/about",
    locale,
  });

  return metadata;
}

export default async function AboutUsPage(props: Readonly<TPage>) {
  const { locale } = await props.params;
  setSafeRequestLocale(locale);
  return <AboutUs />;
}
