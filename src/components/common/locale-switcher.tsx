"use client";

import { $api } from "@/api";
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
import { SESSION_API_ROUTE, useSession } from "@/session";
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
  const { session, isPending, isEnabled } = useSession();
  const t = useTranslations("LocaleSwitcher");
  const changeLocaleFn = useChangeLocale();
  const { start, stop } = useProgress();

  const loading = isPending && isEnabled;

  const changeLocale = (locale: TLocale = defaultLocale.key) => {
    start(0.3);
    changeLocaleFn(locale);
    stop(300);
  };

  const mutation = $api.useMutation("patch", "/users/", {
    onSuccess(res) {
      changeLocale(res.language);
    },
    meta: {
      awaits: [SESSION_API_ROUTE],
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"text"}
          size={btn?.size ?? "56"}
          shape={"icon"}
          title={t("screen-reader-title")}
          loading={mutation.isPending || loading}
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
                if (session.hasSession) {
                  mutation.mutate({
                    body: {
                      language: locale.key,
                    },
                  });
                } else {
                  changeLocale(locale.key);
                }
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
