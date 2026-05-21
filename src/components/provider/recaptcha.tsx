"use client";

import { env } from "@/env";
import { useLocale } from "next-intl";
import { TLayout } from "@/types/general";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function RecaptchaProvider({
  children,
}: Readonly<Pick<TLayout, "children">>) {
  const locale = useLocale();

  if (env.NEXT_PUBLIC_RECAPTCHA_GA_AVAILABLE === "false") {
    return children;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      language={locale}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
