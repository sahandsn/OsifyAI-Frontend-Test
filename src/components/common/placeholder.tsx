"use client";

import { ComponentProps, ReactNode } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { CardComponent } from "./card";
import { LogoLink } from "./logo";

type TPlaceholder = {
  message?: ReactNode;
  reversed?: boolean;
  minified?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  size?: ComponentProps<typeof CardComponent>["size"];
};

export default function Placeholder(props: Readonly<TPlaceholder>) {
  const t = useTranslations("General");

  const {
    message = t("loading"),
    reversed = false,
    minified = false,
    loading = true,
    className,
    children,
    size = "lg",
  } = props;

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
    >
      <CardComponent className={cn("m-auto w-fit")} size={size}>
        <section
          id="placeholder-id"
          className={cn("flex w-fit items-start justify-center gap-6", {
            "flex-col-reverse": reversed,
            "flex-col": !reversed,
            "items-center": !minified,
          })}
        >
          <LogoLink />
          <section
            className={cn("flex items-center gap-x-2", {
              "text-bold text-xl": reversed,
            })}
          >
            {loading ? <Loader className="animate-spin" /> : null}
            {message}
          </section>
          {children}
        </section>
      </CardComponent>
    </div>
  );
}
