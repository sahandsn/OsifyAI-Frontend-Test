"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNav } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import ActionBtn from "../action-btn";
import LocaleSwitcher from "../locale-switcher";
import RenderNavItem from "../render-nav-item";
import ThemeSwitcher from "../theme-switcher";
import { LogoLink } from "../logo";

const SwitcherGroup = () => (
  <div className="flex items-center gap-1">
    <ThemeSwitcher className="border-none bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800" />
    <Suspense>
      <LocaleSwitcher className="border-none bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800" />
    </Suspense>
  </div>
);

const SheetHeaderContent = () => (
  <SheetHeader className="px-3 pt-12">
    <SheetTitle className="flex items-center justify-between">
      <SheetClose asChild>
        <button className="border-none">
          <X size={28} />
        </button>
      </SheetClose>
      <SwitcherGroup />
    </SheetTitle>
  </SheetHeader>
);

export const LandingHeader = ({
  className,
}: Readonly<{ className?: string }>) => {
  const isMobile = useIsMobile();
  const nav = useNav();
  const t = useTranslations("Landing");

  return (
    <div
      className={cn(
        "empty-sides fixed left-0 right-0 top-[16px] z-50 transition-all duration-300",
      )}
      style={{
        transform: "translateY(var(--landing-banner-height, 0px))",
      }}
    >
      <header
        className={cn(
          "flex flex-row items-center justify-between rounded-2xl border-[1.2px] border-primary-200 dark:border-neutral-800 md:rounded-3xl",
          "bg-[linear-gradient(180deg,rgba(255,255,255,0.64)_0%,rgba(255,255,255,1)_100%)] backdrop-blur-3xl dark:bg-[linear-gradient(180deg,rgba(33,33,33,1)_0%,rgba(33,33,33,0)_100%)]",
          "px-4 py-3 md:px-6 md:py-4",
          className,
        )}
      >
        <LogoLink />

        {/* Desktop Nav */}
        <div className="hidden gap-6 md:flex md:items-center md:justify-between xl:gap-10">
          {nav.map((item) => {
            return (
              <RenderNavItem item={item} key={JSON.stringify(item.path)} />
            );
          })}
        </div>
        {/* Desktop Actions */}
        <div className="hidden gap-4 md:flex md:items-center">
          <SwitcherGroup />
          <ActionBtn size="56">{t("action")}</ActionBtn>
        </div>
        {/* Hamburger Menu */}
        <Sheet>
          <SheetTrigger asChild className="z-[110] inline-flex md:hidden">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent
            className={cn(
              "z-[100] flex flex-col justify-start gap-6 border-none !bg-neutral-50 p-0 dark:!bg-neutral-950 sm:max-w-[224px] [&>button]:hidden",
              { "max-w-[224px]": isMobile },
            )}
          >
            <SheetHeaderContent />
            <nav className="flex flex-col items-start gap-2.5">
              {nav.map((item) => (
                <RenderNavItem
                  item={item}
                  mobile={true}
                  key={JSON.stringify(item.path)}
                />
              ))}
              <ActionBtn size="56" className="mx-auto w-fit">
                {t("action")}
              </ActionBtn>
            </nav>
            <SheetFooter />
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};
