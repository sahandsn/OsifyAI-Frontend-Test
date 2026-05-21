import { TMetadata, TPage } from "@/types/general";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import linkPreviewMetadata from "@/utils/metadata";
import Contact from "@/components/modules/landing/contact";
import { setSafeRequestLocale } from "@/utils/set-safe-request-locale";

export async function generateMetadata(
  props: Readonly<TMetadata>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations();
  const metadata = linkPreviewMetadata({
    description: t("Metadata.contact.description"),
    keywords: t("Metadata.contact.keywords"),
    title: t("ContactUs.label"),
    url: "/contact",
    locale,
  });

  return metadata;
}

export default async function ContactUsPage(props: Readonly<TPage>) {
  const { locale } = await props.params;
  setSafeRequestLocale(locale);
  return <Contact />;
}
