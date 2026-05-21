import { TMetadata, TPage } from "@/types/general";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import linkPreviewMetadata from "@/utils/metadata";
import { setSafeRequestLocale } from "@/utils/set-safe-request-locale";
import { cn } from "@/lib/utils";

export async function generateMetadata(
  props: Readonly<TMetadata>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations();
  const metadata = linkPreviewMetadata({
    description: t("Metadata.privacy.description"),
    keywords: t("Metadata.privacy.keywords"),
    title: t("Metadata.privacy.title"),
    url: "/privacy",
    locale,
  });

  return metadata;
}

export default async function PrivacyPolicyPage(props: Readonly<TPage>) {
  const { locale } = await props.params;
  setSafeRequestLocale(locale);
  const { default: Privacy } = await import(`./${locale}.mdx`);

  return (
    <main
      className={cn(
        "prose mb-14 mt-24 max-w-none md:mt-36",
        "prose-headings:text-neutral-950 prose-p:text-neutral-800 prose-a:text-inherit prose-a:no-underline prose-headings:dark:text-neutral-100 prose-p:dark:text-neutral-500",
        "prose-li:text-neutral-800 prose-li:marker:text-neutral-800 prose-li:dark:text-neutral-500 prose-li:marker:dark:text-neutral-500",
        "prose-blockquote:border-neutral-400 prose-blockquote:not-italic prose-blockquote:dark:border-neutral-800",
        "prose-strong:font-semibold prose-strong:text-neutral-900 prose-strong:dark:text-neutral-100",
        "w-full",
      )}
    >
      <Privacy />
    </main>
  );
}
