"use client";

import { Button } from "@/components/common/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useChangeLocale } from "@/hooks/use-change-locale";
import { defaultLocale, locales, TLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useProgress } from "@bprogress/next";
import { useLocale, useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { Languages } from "lucide-react";

export default function LocaleSwitcher({
  className,
  dropDownClassName,
  btn,
}: Readonly<{
  className?: string;
  dropDownClassName?: string;
  btn?: ComponentProps<typeof Button>;
}>) {
  const activeLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const changeLocaleFn = useChangeLocale();
  const { start, stop } = useProgress();

  const changeLocale = (locale: TLocale = defaultLocale.key) => {
    start(0.3);
    changeLocaleFn(locale);
    stop(300);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"text"}
          size={btn?.size ?? "56"}
          shape={"icon"}
          title={t("screen-reader-title")}
          className={className}
        >
          <Languages
            strokeWidth={1.3}
            className="!size-6 text-neutral-900 dark:text-neutral-100"
          />

          <span className="sr-only">{t("screen-reader-title")}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={cn("z-[110]", dropDownClassName)}>
        <DropdownMenuGroup className="p-2">
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale.key}
              onSelect={() => {
                changeLocale(locale.key);
              }}
              className={cn(
                "justify-center text-neutral-900 hover:cursor-pointer hover:!bg-neutral-300 dark:text-neutral-100 dark:hover:!bg-neutral-800",
                {
                  "!bg-neutral-300 dark:!bg-neutral-800":
                    locale.key === activeLocale,
                },
              )}
            >
              {locale.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
