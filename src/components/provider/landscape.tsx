"use client";

import { TLayout } from "@/types/general";
import { useTranslations } from "next-intl";
import Placeholder from "../common/placeholder";
import { RotateCcwSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LandscapeProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;

  const t = useTranslations("General");

  return (
    <>
      <Placeholder
        loading={false}
        message={
          <section className="flex items-center gap-2">
            <RotateCcwSquare size={22} />
            <span>{t("portrait-only")}</span>
          </section>
        }
        className={cn(
          "fixed z-[999999] hidden bg-background max-md:landscape:flex",
        )}
      />
      {children}
    </>
  );
}
