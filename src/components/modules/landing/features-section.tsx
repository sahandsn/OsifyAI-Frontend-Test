"use client";

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import UnderlinedText from "@/components/common/underlined-text";
import ChecklistMinimalistic from "#/assets/icons/Checklist-Minimalistic.svg";
import Graph from "#/assets/icons/Graph.svg";
import AlarmTurnOff from "#/assets/icons/Alarm-Turn-Off.svg";

interface FeatureItem {
  title: string;
  desc: string;
  icon: StaticImageData;
}

type FeaturesSectionProps = Readonly<{
  className?: string;
}>;

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  const t = useTranslations("landing");

  const featureItems: FeatureItem[] = [
    {
      title: t("features.items.1.title"),
      desc: t("features.items.1.desc"),
      icon: ChecklistMinimalistic,
    },
    {
      title: t("features.items.2.title"),
      desc: t("features.items.2.desc"),
      icon: Graph,
    },
    {
      title: t("features.items.3.title"),
      desc: t("features.items.3.desc"),
      icon: AlarmTurnOff,
    },
  ];

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className={cn("relative isolate", className)}
    >
      {/* Header */}
      <div className="mb-12 text-center md:mb-20">
        <h2
          id="features-title"
          className="mb-10 text-[24px] font-bold text-neutral-950 dark:text-neutral-50 lg:text-[40px]"
        >
          {t.rich("features.title", {
            underline: (children) => (
              <UnderlinedText
                variant={{
                  light: "primary-500",
                  dark: "secondary-500",
                }}
              >
                {children}
              </UnderlinedText>
            ),
          })}
        </h2>
        <p className="mx-auto max-w-2xl text-[16px] leading-5 text-neutral-800 dark:text-neutral-300 lg:text-[20px]">
          {t("features.description")}
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featureItems.map((item) => (
          <article
            className={cn(
              "flex flex-col items-start rounded-[24px] border-[1.2px] border-primary-200 px-8 py-12 text-start backdrop-blur-lg dark:border-neutral-800",
              "bg-[linear-gradient(180deg,_#fff_0%,_#DBE8FE_100%)]",
              "dark:bg-[linear-gradient(180deg,_#21212100_0%,_#172E54_100%)]",
            )}
            key={item.title.trim().toLowerCase()}
          >
            <div className="mb-4">
              <Image src={item.icon} alt={item.title} width={32} height={32} />
            </div>
            <h3 className="mb-[12px] text-lg font-bold md:text-[24px]">
              {item.title}
            </h3>
            <p className="text-start text-[14px] font-normal leading-[20px] text-neutral-900 dark:text-neutral-300 lg:text-[18px] lg:leading-[28px]">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
