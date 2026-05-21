"use client";

import { TLayout } from "@/types/general";
import Placeholder from "../common/placeholder";
import { P } from "../common/typography";
import { useTranslations } from "next-intl";
import { browserName, browserVersion } from "react-device-detect";
import { GiUpgrade } from "react-icons/gi";

// Minimum supported browser versions, only major versions are considered
// will show wall only if the browser is recognized and its version is below the minimum
// if the browser is not recognized, it will be considered as supported

// https://nextjs.org/docs/15/architecture/supported-browsers
const minBrowserVersionSupport: { [key: string]: number } = {
  Chrome: 64,
  Firefox: 67,
  Safari: 12,
  Edge: 79,
};

export default function MinBrowserVersionSupportProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;

  const t = useTranslations("General");

  const minAcceptableVersion =
    minBrowserVersionSupport?.[browserName] ?? undefined;

  const isAvailable =
    !minAcceptableVersion ||
    Number(browserVersion ?? Infinity) >= minAcceptableVersion;

  if (isAvailable) {
    return children;
  }

  return (
    <Placeholder
      loading={false}
      message={
        <P>
          {t("upgrade your browser", {
            browser: browserName,
            version: minAcceptableVersion,
          })}
        </P>
      }
    >
      <GiUpgrade size={50} />
    </Placeholder>
  );
}
