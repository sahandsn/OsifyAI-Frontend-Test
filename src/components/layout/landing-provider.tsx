import { TLayout } from "@/types/general";
import { env } from "@/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import RecaptchaProvider from "@/components/provider/recaptcha";

export default function LandingProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;

  if (env.NEXT_PUBLIC_RECAPTCHA_GA_AVAILABLE === "false") {
    return children;
  }

  return (
    <RecaptchaProvider>
      {children}
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    </RecaptchaProvider>
  );
}
