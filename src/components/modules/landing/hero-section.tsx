"use client";

import { useTranslations } from "next-intl";
import BlurredFrame from "@/components/common/blurred-frame";
import ActionBtn from "@/components/common/action-btn";
import heroLight from "#/branding/hero.png";
import heroDark from "#/branding/hero-dark.png";
import Halo from "@/components/common/halo";
import TiltedBox from "@/components/common/tilted-box";
import { ThemeImage } from "@/components/common/theme-image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate pb-16 pt-12 text-foreground md:py-24"
    >
      {/* Top Blue Halo */}
      <Halo
        dark={{
          color: "#172E54",
          spread: 200,
        }}
        light={{
          color: "#BFD7FE",
          spread: 200,
        }}
        className="-right-30 absolute -top-10 -z-10 opacity-70"
      />

      {/* Left Blue Halo */}
      <Halo
        dark={{
          color: "#172E54",
          spread: 200,
        }}
        light={{
          color: "#BFD7FE",
          spread: 200,
        }}
        className="absolute left-60 top-[40rem] -z-10 opacity-70"
      />

      {/* Right Orange Halo */}
      <Halo
        light={{
          color: "#FECCAA",
          spread: 200,
        }}
        dark={{
          color: "#7C3D12",
          spread: 200,
        }}
        className="absolute bottom-60 right-[16rem] -z-10 opacity-70"
      />

      <div className="relative z-10 mx-auto mt-16 md:mt-32">
        <div className="grid grid-cols-1 gap-10 md:gap-16">
          <div className="md:my-19 flex flex-col items-center justify-center gap-3 text-center md:gap-6 md:text-start">
            <h1
              id="hero-title"
              className="px-8 text-center text-[24px] font-bold leading-[32px] md:text-[48px] md:leading-normal"
            >
              {t.rich("hero.title", {
                highlight: (children) => (
                  <span className="bg-gradient-to-b from-[#4186F6] to-[#B9D7FE] bg-clip-text text-transparent">
                    {children}
                  </span>
                ),
              })}
            </h1>

            <p className="px-13 text-[16px] leading-[24px] text-neutral-800 dark:text-neutral-300 md:leading-normal lg:text-[20px] lg:leading-[32px]">
              {t("hero.description")}
            </p>

            <div className="mt-4">
              <ActionBtn size="56">{t("hero.cta")}</ActionBtn>
            </div>
          </div>

          {/* Image with Floating Icons */}
          <div className="relative flex items-center justify-center">
            {/* Main Central Image */}
            <BlurredFrame className="rounded-[16px] p-3 sm:rounded-[32px] md:p-8">
              <ThemeImage
                dark={{
                  src: heroDark,
                  alt: t("hero.imageAlt"),
                  width: 853,
                  priority: true,
                  fetchPriority: "high",
                  height: 544,
                }}
                light={{
                  src: heroLight,
                  alt: t("hero.imageAlt"),
                  priority: true,
                  fetchPriority: "high",
                  width: 853,
                  height: 544,
                }}
                className="mx-auto h-[211px] w-[330px] rounded-[8px] sm:rounded-[24px] md:h-[544px] md:w-[853px]"
              />
            </BlurredFrame>

            {/* Left square tilted box */}
            <TiltedBox
              src="/assets/icons/Growth-Chart.svg"
              alt={t("hero.leftIconAlt")}
              rotation={-16}
              className="absolute -top-14 left-8 rounded-[10px] sm:left-8 sm:top-[-5%]"
              priority
            />

            {/* Right square tilted box */}
            <TiltedBox
              src="/assets/icons/Bot.svg"
              alt={t("hero.rightIconAlt")}
              rotation={16}
              className="absolute -bottom-16 right-10 sm:bottom-1/2 sm:right-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
