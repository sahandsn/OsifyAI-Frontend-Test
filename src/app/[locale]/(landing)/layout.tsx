"use client";

import { LandingHeader } from "@/components/common/header/header-landing";
import { TLayout } from "@/types/general";

export default function LandingLayout(props: Readonly<TLayout>) {
  const { children } = props;

  return (
    <>
      <LandingHeader />
      <div className="empty-sides w-full pt-8">{children}</div>
    </>
  );
}
