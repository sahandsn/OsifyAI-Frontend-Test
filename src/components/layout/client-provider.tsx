"use client";

import { TLayout } from "@/types/general";
import { DirectionProvider } from "@radix-ui/react-direction";
import AvailableProvider from "@/components/provider/available";
import { useLocale, useTranslations } from "next-intl";
import { getDirection } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";
import { AppProgressProvider } from "@bprogress/next";
import { ComponentProps, Suspense, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { en, de, fa } from "zod/locales";
import z from "zod";
import { $ZodErrorMap } from "zod/v4/core";
import { isArray } from "lodash";
import { LocaleSynchronizer } from "../provider/locale-synchronizer";
import DisableDevtool from "disable-devtool";
import { env } from "@/env";
import { LoadingComponent } from "../common/loading";

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function ClientProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;
  const locale = useLocale();
  const direction = getDirection(locale);
  const isMobile = useIsMobile();
  const t = useTranslations("ZodErrorMap");

  const customError: $ZodErrorMap = (iss) => {
    switch (iss.code) {
      case "too_small":
        if (!iss.input || (isArray(iss.input) && iss.input.length === 0)) {
          return t("required");
        }
        return t("too_small", { minimum: Number(iss.minimum) });

      case "too_big":
        return t("too_big", { maximum: Number(iss.maximum) });

      case "invalid_format":
        if (!iss.input || (isArray(iss.input) && iss.input.length === 0)) {
          return t("required");
        }
        return t("invalid_format", { format: capitalize(iss.format) });

      case "invalid_type":
        if (!iss.input || (isArray(iss.input) && iss.input.length === 0)) {
          return t("required");
        }
        return t("invalid_type", {
          expected: capitalize(iss.expected),
          received: capitalize(typeof iss.input),
        });
      case "invalid_value":
        if (!iss.input || (isArray(iss.input) && iss.input.length === 0)) {
          return t("required");
        }
        return t("invalid_value", {
          expected: capitalize(iss.values.join(", ")),
          received: capitalize(typeof iss.input),
        });
      default:
        break;
    }
  };

  switch (locale) {
    case "de":
      z.config({
        ...de(),
        customError,
      });
      break;
    case "fa":
      z.config({
        ...fa(),
        customError,
      });
      break;
    case "en":
      z.config({
        ...en(),
        customError,
      });
      break;
    default:
      z.config(fa());
      break;
  }

  const getPosition = (): ComponentProps<typeof Toaster>["position"] => {
    if (isMobile) {
      return "top-right";
    }

    if (direction === "ltr") {
      return "top-left";
    }

    return "top-right";
  };

  useEffect(() => {
    DisableDevtool({
      tkName: "osify",
      md5: env.NEXT_PUBLIC_DISABLE_DEVTOOLS_HASH,
      ignore() {
        return !env.NEXT_PUBLIC_DISABLE_DEVTOOLS_HASH;
      },
    });
  }, []);

  return (
    <Suspense fallback={<LoadingComponent />}>
      <AppProgressProvider
        height="4px"
        color="hsl(var(--primary))"
        options={{ showSpinner: false, direction }}
        shallowRouting={true}
        delay={200}
        disableSameURL={true}
      >
        <LocaleSynchronizer>
          <DirectionProvider dir={direction}>
            <AvailableProvider>{children}</AvailableProvider>

            <Toaster
              richColors
              // closeButton
              dir={direction}
              position={getPosition()}
            />
          </DirectionProvider>
        </LocaleSynchronizer>
      </AppProgressProvider>
    </Suspense>
  );
}
