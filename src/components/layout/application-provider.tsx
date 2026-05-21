"use client";

import { TLayout } from "@/types/general";
import LandscapeProvider from "../provider/landscape";
import VersionProvider from "../provider/version";
import PwaProvider from "../provider/pwa";
import MinBrowserVersionSupportProvider from "../provider/min-browser-version-support";

export function ApplicationProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;

  return (
    <LandscapeProvider>
      <VersionProvider>
        <PwaProvider>
          <MinBrowserVersionSupportProvider>
            {children}
          </MinBrowserVersionSupportProvider>
        </PwaProvider>
      </VersionProvider>
    </LandscapeProvider>
  );
}
