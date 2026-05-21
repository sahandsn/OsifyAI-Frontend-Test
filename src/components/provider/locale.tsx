import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { TLayout } from "@/types/general";

export default async function LocaleProvider({
  children,
}: Readonly<Pick<TLayout, "children">>) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
