"use client";

import { Button } from "@/components/common/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { ComponentProps } from "react";
import { MoonLinear as Moon, SunLinear as Sun } from "solar-icon-set";

export default function ThemeSwitcher({
  className,
  onSelect,
  btn,
}: Readonly<{
  className?: string;
  onSelect?: () => void;
  btn?: ComponentProps<typeof Button>;
}>) {
  const { setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("ThemeSwitcher");

  return (
    <Button
      variant={"text"}
      size={btn?.size ?? "56"}
      shape={"icon"}
      onClick={() => {
        if (resolvedTheme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
        onSelect?.();
      }}
      className={cn(
        "text-neutral-900 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-100",
        className,
      )}
      title={t("screen-reader-title")}
    >
      <Sun
        size={24}
        className={cn(
          "absolute !size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
        )}
      />
      <Moon
        size={24}
        className={cn(
          "absolute !size-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0",
        )}
      />

      <span className="sr-only">{t("screen-reader-title")}</span>
    </Button>
  );
}
