import type { Metadata, Viewport } from "next";
import "../globals.css";
import { getTitle, getTitleTemplate } from "@/constants/assets";
import { getTranslations } from "next-intl/server";
import { routing, getDirection, defaultLocale } from "@/i18n/routing";
import { redirect } from "@/i18n/navigation";
import { TLayout, TMetadata } from "@/types/general";
import ServerProvider from "@/components/layout/server-provider";
import linkPreviewMetadata from "@/utils/metadata";
import { hasLocale } from "next-intl";
import { IranSansX } from "@/fonts/fonts";

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f0f0f0",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Readonly<TMetadata>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations();
  const metadata = linkPreviewMetadata({
    description: t("Metadata.root.description"),
    keywords: t("Metadata.root.keywords"),
    title: {
      default: getTitle(locale),
      template: getTitleTemplate(locale),
    },
    url: "/",
    locale,
  });

  return metadata;
}

export default async function RootLayout(props: Readonly<TLayout>) {
  const { children } = props;
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) {
    redirect({ href: "/", locale: defaultLocale.key });
  }
  const direction = getDirection(locale);

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      className="h-full bg-background"
      translate="no"
    >
      <body
        className={`${IranSansX.className} h-full bg-background antialiased`}
      >
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
