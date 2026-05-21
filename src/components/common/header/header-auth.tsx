"use client";

import ThemeSwitcher from "@/components/common/theme-switcher";
import { cn } from "@/lib/utils";
import { TLink } from "@/types/general";
import { LogoLink } from "../logo";

export type TNavItem = {
  path: TLink;
  title: string;
};

export function AuthHeader(
  props: Readonly<{
    className?: string;
  }>,
) {
  const { className } = props;

  return (
    <header
      className={cn(
        "fixed inset-x-6 top-6 z-[999] flex flex-row-reverse items-center justify-between rounded-[16px] border-[1.5px] border-neutral-400 bg-[linear-gradient(90deg,rgba(255,255,255,0.64)_0%,rgba(255,255,255,1)_100%)] p-4 backdrop-blur-3xl dark:border-neutral-800 dark:bg-[linear-gradient(79.22deg,#212121_0.12%,rgba(33,33,33,0)_172.29%)] md:sticky md:px-6 md:py-4",
        className,
      )}
      style={{
        top: "calc(1.5rem + var(--landing-banner-height, 0px))",
      }}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-2 rtl:flex-row-reverse",
        )}
      >
        <ThemeSwitcher
          className="p-0"
          btn={{
            size: "40",
          }}
        />
      </div>

      <LogoLink />
    </header>
  );
}
