"use client";

import { TLayout } from "@/types/general";
import Placeholder from "../common/placeholder";
import { useVersionCheck } from "@/hooks/use-version-check";
import { GitPullRequestArrow } from "lucide-react";
import { Button } from "../common/button";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { cn } from "@/lib/utils";

export default function VersionProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;
  const version = useVersionCheck();
  const t = useTranslations("General");
  const confettiRef = useRef<ConfettiRef>(null);
  const isShown = version.updated;

  return (
    <>
      <Placeholder
        loading={false}
        className={cn("hidden bg-background", {
          "fixed z-[999999] pwa:flex": isShown,
        })}
        message={
          <section className="flex items-center gap-2">
            <GitPullRequestArrow size={22} />
            <span>{t("version-message")}</span>
          </section>
        }
      >
        <Button
          onClick={() => {
            version.update();
          }}
          className="z-10"
        >
          {t("version-action")}
        </Button>
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />
      </Placeholder>
      {children}
    </>
  );
}
