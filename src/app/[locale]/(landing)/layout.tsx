"use client";

import FooterNoAuth from "@/components/common/footer-no-auth";
import { LandingHeader } from "@/components/common/header/header-landing";
import LandingProvider from "@/components/layout/landing-provider";
import { TLayout } from "@/types/general";
import { BannerProvider } from "@/components/provider/banner";

export default function LandingLayout(props: Readonly<TLayout>) {
  const { children } = props;

  return (
    <LandingProvider>
      <BannerProvider scope="landing">
        <LandingHeader />
        <div className="empty-sides w-full pt-8">{children}</div>
        <FooterNoAuth />
      </BannerProvider>
    </LandingProvider>
  );
}
