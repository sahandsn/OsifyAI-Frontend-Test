import NotFound from "@/components/common/not-found";
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
    description: t("Metadata.notFound.description"),
    keywords: t("Metadata.notFound.keywords"),
    title: t("Metadata.notFound.title"),
    url: "/not-found",
    locale,
    robots: {
      index: false,
      follow: false,
    },
  });

  return metadata;
}

export default async function NotFoundPage(props: Readonly<TPage>) {
  const { locale } = await props.params;
  setSafeRequestLocale(locale);
  return <NotFound />;
}
