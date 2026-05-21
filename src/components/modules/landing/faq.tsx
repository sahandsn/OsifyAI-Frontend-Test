"use client";

import { useTheme } from "next-themes";
import Halo from "@/components/common/halo";
import { Select, SelectValue } from "@/components/ui/select";
import { H2 } from "@/components/common/typography";
import { cn } from "@/lib/utils";
import FaqAccordionItem from "@/components/common/faq-accordion";
import { Accordion } from "@/components/ui/accordion";
import { faqCategories, FaqCategory } from "@/types/faq";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";

const getFaqs = (t: ReturnType<typeof useTranslations>) => {
  return faqCategories.flatMap((category) => {
    const items = t.raw(`faqs.${category}.items`) as { q: string; a: string }[];
    return items.map((item) => ({ category, ...item }));
  });
};

const LandingFaq = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedCategory, setSelectedCategory] =
    useState<FaqCategory>("product");
  const t = useTranslations("landing.faq");

  const faqs = useMemo(() => getFaqs(t), [t]);

  return (
    <section
      id="faq"
      aria-label={t("title")}
      className={cn("lg:my-25 relative w-full")}
    >
      {/* Orange Halo */}
      <Halo
        dark={{
          color: "#7C3D12",
          spread: 200,
        }}
        light={{
          color: "#FECCAA",
          spread: 200,
        }}
        className="absolute left-80 top-[15rem] opacity-70"
      />

      {/* Blue Halo */}
      <Halo
        dark={{
          color: "#172E54",
          spread: 150,
        }}
        light={{
          color: "#BFD7FE",
          spread: 150,
        }}
        className="absolute right-[10rem] top-[20rem] opacity-40"
      />

      {/* Content */}
      <section
        className={cn(
          "lg:gap-18 relative flex w-full grow flex-col items-center gap-8",
        )}
      >
        <H2
          className={cn(
            "text-center text-[24px] font-bold leading-[32px] tracking-normal text-neutral-950 dark:text-neutral-100 lg:text-3xl lg:leading-[normal] xl:text-4xl",
          )}
        >
          {t("title")}
        </H2>
        <section
          className={cn("flex w-full flex-col gap-4 lg:flex-row lg:gap-[34px]")}
        >
          {/* Mobile Select */}
          <Select
            onValueChange={(value) => setSelectedCategory(value as FaqCategory)}
            value={selectedCategory}
          >
            <SelectTrigger
              className={cn(
                "w-fit gap-1 rounded-[10px] border-[1.2px] border-neutral-400 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950 lg:hidden [&>span]:text-[14px] [&>span]:font-normal [&>span]:leading-[24px] [&>span]:tracking-normal [&>span]:text-neutral-900 dark:[&>span]:text-neutral-100",
                "[&>svg:nth-of-type(2)]:hidden",
              )}
            >
              <SelectValue />
              <ChevronDown
                className={cn("size-4 text-neutral-900 dark:text-neutral-100")}
              />
            </SelectTrigger>
            <SelectContent className={cn("[&_svg]:hidden")}>
              {faqCategories.map((category) => (
                <SelectItem
                  value={category}
                  key={category}
                  className={cn(
                    "flex cursor-pointer items-center justify-center gap-0 rounded-[10px] !pl-0 !pr-0 hover:!bg-neutral-300 hover:!text-neutral-950 data-[state=checked]:bg-neutral-300 data-[state=checked]:text-neutral-950 dark:hover:!bg-neutral-800 dark:hover:!text-neutral-100 data-[state=checked]:dark:bg-neutral-800 data-[state=checked]:dark:text-neutral-100",
                  )}
                >
                  {t(`faqs.${category}.title`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Desktop Select */}
          <section className={cn("hidden flex-col gap-[14px] lg:flex")}>
            {faqCategories.map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "flex cursor-pointer items-center justify-start gap-2 rounded-3xl border-[1.2px] border-neutral-50 p-8 backdrop-blur-[4px] transition-all lg:min-w-[220px] xl:min-w-[290px]",
                  {
                    "bg-neutral-50 dark:bg-neutral-950":
                      category === selectedCategory,
                  },
                  { "border-neutral-800": isDark },
                  {
                    "[background:linear-gradient(90deg,rgba(255,255,255,0.4096)_0%,rgba(255,255,255,0.64)_100%)]":
                      category !== selectedCategory && !isDark,
                  },
                  {
                    "bg-[linear-gradient(79.22deg,#212121_0.12%,rgba(33,33,33,0)_172.29%)]":
                      category !== selectedCategory && isDark,
                  },
                )}
              >
                <div
                  className={cn("h-full rounded-full bg-secondary-500 p-1", {
                    hidden: category !== selectedCategory,
                  })}
                ></div>
                <p
                  className={cn(
                    "align-middle font-medium leading-8 tracking-[0%] text-neutral-700 lg:text-lg xl:text-xl ltr:text-left ltr:lg:text-base rtl:text-right",
                    {
                      "font-semibold tracking-normal text-neutral-900 dark:text-neutral-100 ltr:before:-left-2 rtl:before:-right-2":
                        category === selectedCategory,
                    },
                    { "dark:text-neutral-600": category !== selectedCategory },
                  )}
                >
                  {t(`faqs.${category}.title`)}
                </p>
              </div>
            ))}
          </section>

          {/* Accordion */}
          <Accordion
            type="single"
            collapsible
            className={cn("flex w-full flex-col gap-3 lg:gap-4")}
            defaultValue="item-1"
          >
            {faqs
              .filter((faq) => faq.category === selectedCategory)
              .map((faq) => (
                <FaqAccordionItem key={faq.q} faq={faq} />
              ))}
          </Accordion>
        </section>
      </section>
    </section>
  );
};

export default LandingFaq;
