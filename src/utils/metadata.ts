import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { AppleWebApp } from "next/dist/lib/metadata/types/extra-types";
import { getTitle } from "@/constants/assets";
import { TRoute } from "@/types/general";
import { env } from "@/env";
import {
  defaultLocale,
  ENGLISH,
  FARSI,
  GERMAN,
  routing,
  TLocale,
} from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import { isString } from "lodash";
import pwaIcon from "#/branding/pwa-icon.png";
import imgLogo from "#/branding/logo.png";
import { hasLocale } from "next-intl";

const openGraph = ({
  locale,
  description,
  title,
  url,
  image,
}: {
  locale: TLocale;
  title: string;
  description: string;
  url: TRoute;
  image?: string;
}): OpenGraph => {
  return {
    type: "website",
    locale,
    url: new URL(getPathname({ href: url, locale }), env.NEXT_PUBLIC_ROOT_URL)
      .href,
    title,
    description,
    siteName: getTitle(locale),
    images:
      image ?? new URL("/branding/logo.png", env.NEXT_PUBLIC_ROOT_URL).href,
  };
};

const twitter = ({
  description,
  title,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}): Twitter => {
  return {
    card: "summary",
    title,
    description,
    images:
      image ?? new URL("/branding/logo.png", env.NEXT_PUBLIC_ROOT_URL).href,
  };
};

const appleWebApp = ({ title }: { title: string }): AppleWebApp => {
  return {
    capable: true,
    statusBarStyle: "default",
    title: title,
    startupImage: "/branding/pwa-icon.png",
  };
};

const robotsMeta = ({ robots }: { robots?: Robots }): Robots => {
  const settings: Robots = {
    index: true,
    follow: true,
    nocache: false,
    nosnippet: false,
    noimageindex: false,
    noarchive: false,
    notranslate: true,
    "max-image-preview": "large",
    "max-video-preview": "large",
    nositelinkssearchbox: true,
    ...robots,
  };
  return {
    ...settings,
    googleBot: {
      ...settings,
    },
  };
};

export default function linkPreviewMetadata({
  keywords,
  description,
  title,
  locale,
  url,
  robots,
  image,
}: {
  locale: string;
  title: Metadata["title"];
  description: string;
  keywords: string;
  url: TRoute;
  robots?: Robots;
  image?: string;
}): Metadata {
  const verifiedLocale = hasLocale(routing.locales, locale)
    ? locale
    : defaultLocale.key;

  return {
    openGraph: openGraph({
      locale: verifiedLocale,
      description,
      title: isString(title) ? title : getTitle(locale),
      url,
      image,
    }),
    twitter: twitter({
      description,
      title: isString(title) ? title : getTitle(locale),
      image,
    }),
    appleWebApp: appleWebApp({
      title: isString(title) ? title : getTitle(locale),
    }),
    other: { "apple-mobile-web-app-capable": "yes" },
    robots: robotsMeta({ robots }),
    applicationName: getTitle(locale),
    title,
    description,
    keywords,
    icons: {
      icon: imgLogo.src,
      apple: pwaIcon.src,
    },
    alternates: {
      canonical: new URL(
        getPathname({ href: url, locale: verifiedLocale }),
        env.NEXT_PUBLIC_ROOT_URL,
      ).href,
      languages: {
        [ENGLISH.key]: new URL(
          getPathname({ href: url, locale: ENGLISH.key }),
          env.NEXT_PUBLIC_ROOT_URL,
        ).href,
        [GERMAN.key]: new URL(
          getPathname({ href: url, locale: GERMAN.key }),
          env.NEXT_PUBLIC_ROOT_URL,
        ).href,
        [FARSI.key]: new URL(
          getPathname({ href: url, locale: FARSI.key }),
          env.NEXT_PUBLIC_ROOT_URL,
        ).href,
      },
    },
  };
}
