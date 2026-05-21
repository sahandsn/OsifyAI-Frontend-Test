import { redirect } from "@/i18n/navigation";
import { TPage } from "@/types/general";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export default async function CatchAllPage(props: Readonly<TPage>) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  redirect({
    href: "/not-found",
    locale,
  });
}
