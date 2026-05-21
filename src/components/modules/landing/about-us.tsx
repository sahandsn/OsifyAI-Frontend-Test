"use client";

import DoctorMeasuringHeightDarkDesktop from "#/assets/images/doctor-measuring-height-dark-desktop.png";
import DoctorMeasuringHeightDarkMobile from "#/assets/images/doctor-measuring-height-dark-mobile.png";
import DoctorMeasuringHeightLightDesktop from "#/assets/images/doctor-measuring-height-light-desktop.png";
import DoctorMeasuringHeightLightMobile from "#/assets/images/doctor-measuring-height-light-mobile.png";
import DoctorTypingDarkDesktop from "#/assets/images/doctor-typing-dark-desktop.png";
import DoctorTypingDarkMobile from "#/assets/images/doctor-typing-dark-mobile.png";
import DoctorTypingLightDesktop from "#/assets/images/doctor-typing-light-desktop.png";
import DoctorTypingLightMobile from "#/assets/images/doctor-typing-light-mobile.png";
import BotOrange from "#/assets/icons/Bot.svg";
import UnderlinedText from "@/components/common/underlined-text";
import { H1, H2 } from "@/components/common/typography";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { JSX } from "react";
import {
  GraphUpLinear,
  MedalRibbonStarLinear,
  PointOnMapLinear,
  SolarIconProps,
} from "solar-icon-set";
import Halo from "@/components/common/halo";
import TiltedBox from "@/components/common/tilted-box";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContactUsForm } from "./contact-us-form";
import ActionBtn from "@/components/common/action-btn";
import { ThemeImage } from "@/components/common/theme-image";
import { getTitle } from "@/constants/assets";
import { getPathname } from "@/i18n/navigation";
import serialize from "serialize-javascript";

interface FeatureItem {
  title: string;
  desc: string;
  icon: (props: SolarIconProps) => JSX.Element;
}

const AboutUs = () => {
  const t = useTranslations("about-us");
  const locale = useLocale();
  const isMobile = useIsMobile();

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: t("hero-title"),
    description: t("hero-description"),
    url: new URL(
      getPathname({ href: "/about", locale }),
      process.env.NEXT_PUBLIC_ROOT_URL,
    ).href,

    mainEntity: {
      "@type": "Organization",
      name: getTitle(locale),
      url: process.env.NEXT_PUBLIC_ROOT_URL,
      logo: {
        "@type": "ImageObject",
        url: new URL("/branding/logo.png", process.env.NEXT_PUBLIC_ROOT_URL)
          .href,
      },
      description: t("mission.description"),
    },
    knowsAbout: [
      t("features.items.1.title"),
      t("features.items.2.title"),
      t("features.items.3.title"),
    ],
    publisher: {
      "@type": "Organization",
      name: getTitle(locale),
      logo: {
        "@type": "ImageObject",
        url: new URL("/branding/logo.png", process.env.NEXT_PUBLIC_ROOT_URL)
          .href,
      },
    },
  };

  const featureItems: FeatureItem[] = [
    {
      title: t("features.items.1.title"),
      desc: t("features.items.1.desc"),
      icon: MedalRibbonStarLinear,
    },
    {
      title: t("features.items.2.title"),
      desc: t("features.items.2.desc"),
      icon: GraphUpLinear,
    },
    {
      title: t("features.items.3.title"),
      desc: t("features.items.3.desc"),
      icon: PointOnMapLinear,
    },
  ];

  return (
    <main
      className={cn(
        "relative isolate mx-auto flex flex-col justify-between gap-y-[88px] pb-[88px] pt-[92px] lg:pt-[248px]",
      )}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serialize(jsonLdData, { isJSON: true }),
        }}
      />
      {/* Decorative Tilted Icon */}
      <TiltedBox
        src={BotOrange}
        alt="bot-icon"
        boxSizeClassName="h-[54px] w-[54px]"
        iconSizeClassName="h-[32px] w-[32px]"
        radiusClassName="rounded-[15.5px] shadow-[0px_0px_27.8767px_rgba(163,163,163,0.12)] dark:shadow-[0px_0px_27.8767px_rgba(163,163,163,0.24)]"
        className="absolute top-[9%] hidden lg:right-[4%] lg:block xl:right-[9%]"
        rotation={16}
      />

      {/* Blue Halo */}
      <Halo
        light={{
          color: "#BFD7FE",
          spread: 150,
        }}
        dark={{
          color: "#172E54",
          spread: 150,
        }}
        className="absolute -right-[40px] top-[104px] z-[1]"
      />

      {/* Hero */}
      <section
        id="hero"
        aria-labelledby="about-hero-title"
        className="z-10 mx-auto items-center justify-center space-y-4 p-4 text-center lg:mb-[104px] lg:p-0"
      >
        <h2 className="text-center text-[16px] leading-6 text-secondary-500 sm:font-bold lg:text-[24px] lg:font-semibold lg:leading-8">
          {t("hero-title")}
        </h2>
        <H1
          id="about-hero-title"
          className="mx-auto mt-4 text-center text-[24px] font-bold text-neutral-950 dark:text-neutral-100 sm:text-center sm:align-middle sm:leading-8 lg:text-4xl lg:text-[48px] lg:leading-[64px]"
        >
          {t.rich("hero-text", {
            span: (children) => (
              <span className="bg-gradient-to-b from-[#4186F6] to-[#B9D7FE] bg-clip-text text-transparent">
                {children}
              </span>
            ),
          })}
        </H1>
        <p className="mt-4 text-center align-middle text-[16px] font-normal leading-[24px] text-neutral-800 dark:text-neutral-300 lg:text-[20px] lg:leading-[32px]">
          {t("hero-description")}
        </p>
      </section>

      {/* story section */}
      <section
        id="story"
        aria-labelledby="about-story-title"
        className={cn(
          "flex flex-col items-center justify-between gap-12 md:flex-row-reverse",
        )}
      >
        <div
          className={cn(
            "relative rounded-3xl bg-[linear-gradient(224.02deg,#4186F6_0%,#B9D7FE_101.78%)] md:max-w-[418px]",
            "dark:bg-[linear-gradient(256.56deg,#142C6F_0%,#3677E5_100%)]",
          )}
        >
          <ThemeImage
            light={{
              src: isMobile
                ? DoctorTypingLightMobile
                : DoctorTypingLightDesktop,
              alt: t("story.imageAlt"),
            }}
            dark={{
              src: isMobile ? DoctorTypingDarkMobile : DoctorTypingDarkDesktop,
              alt: t("story.imageAlt"),
            }}
          />
        </div>
        <div className={cn("flex flex-col gap-[48px] lg:w-[59%]")}>
          <div className={cn("flex flex-col gap-y-4")}>
            <H2
              id="about-story-title"
              className={cn(
                "text-[24px] font-bold leading-8 text-neutral-950 ltr:text-left rtl:text-right",
                "xl:text-[32px] xl:leading-[48px]",
                "dark:text-neutral-100",
              )}
            >
              {t("story.title")}
            </H2>
            <p
              className={cn(
                "align-middle text-[16px] font-normal leading-6 text-neutral-800 ltr:text-left rtl:text-right",
                "xl:text-[20px] xl:leading-[32px] md:ltr:text-left md:rtl:text-right",
                "dark:text-neutral-300",
              )}
            >
              {t("story.description-mobile.1")}
              <br className="lg:hidden" />
              {t("story.description-mobile.2")}
              <br className="lg:hidden" />
              {t("story.description-mobile.3")}
            </p>
          </div>
        </div>
      </section>

      {/* mission section */}
      <section
        id="mission"
        aria-labelledby="about-mission-title"
        className={cn(
          "relative flex flex-col items-center justify-between gap-8 md:flex-row",
        )}
      >
        {/* Orange halo */}
        <Halo
          dark={{
            color: "#432007",
            spread: 120,
          }}
          light={{
            color: "#FFE6D5",
            spread: 120,
          }}
          className="absolute -left-0 bottom-0"
        />
        <div
          className={cn(
            "relative rounded-3xl bg-[linear-gradient(224.02deg,#4186F6_0%,#B9D7FE_101.78%)] md:max-w-[418px]",
            "dark:bg-[linear-gradient(256.56deg,#142C6F_0%,#3677E5_100%)]",
          )}
        >
          <ThemeImage
            light={{
              src: isMobile
                ? DoctorMeasuringHeightLightMobile
                : DoctorMeasuringHeightLightDesktop,
              alt: t("mission.imageAlt"),
            }}
            dark={{
              src: isMobile
                ? DoctorMeasuringHeightDarkMobile
                : DoctorMeasuringHeightDarkDesktop,
              alt: t("mission.imageAlt"),
            }}
            className="ltr:scale-x-[-1]"
          />
        </div>
        <div className={cn("flex flex-col gap-[48px] lg:w-[59%]")}>
          <div className={cn("flex flex-col gap-y-6")}>
            <H2
              id="about-mission-title"
              className={cn(
                "text-[24px] font-bold leading-[32px] text-neutral-950 ltr:text-left rtl:text-right",
                "xl:text-[32px] xl:leading-[48px] ltr:text-left rtl:text-right",
                "dark:text-neutral-100",
              )}
            >
              <UnderlinedText variant="secondary-500">
                {t("mission.title")}
              </UnderlinedText>
            </H2>
            <p
              className={cn(
                "align-middle text-[16px] font-normal leading-6 text-neutral-800 ltr:text-left rtl:text-right",
                "font-normal xl:text-[20px] xl:leading-[32px] md:ltr:text-left md:rtl:text-right",
                "dark:text-neutral-300",
              )}
            >
              {t("mission.description")}
            </p>
            <ActionBtn size={"48"}> {t("mission.button")}</ActionBtn>
          </div>
        </div>
      </section>

      {/* features section */}
      <section
        id="features"
        aria-labelledby="about-features-title"
        className="flex flex-col gap-[32px] space-y-[32px] lg:space-y-[48px]"
      >
        <div className="flex flex-col gap-4 text-center">
          <h2
            id="about-features-title"
            className="text-center text-[24px] font-bold text-neutral-950 dark:text-neutral-50 sm:text-[40px] lg:text-[40px] lg:leading-[56px]"
          >
            {t("features.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-center text-[16px] font-normal leading-5 text-neutral-800 dark:text-neutral-300 sm:text-[20px] lg:text-[20px] lg:leading-[32px]">
            {t("features.description")}
          </p>
        </div>
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featureItems.map((item) => (
            <article
              className={cn(
                "flex flex-col items-start rounded-[24px] border-[1.2px] border-primary-200 px-[32px] py-[52px] text-start backdrop-blur-lg dark:border-neutral-800",
                "bg-[linear-gradient(180deg,_#fff_0%,_#DBE8FE_100%)]",
                "dark:bg-[linear-gradient(180deg,_#21212100_0%,_#172E54_100%)]",
              )}
              key={item.title.trim().toLowerCase()}
            >
              <div className="mb-4">
                <item.icon size={32} color="hsl(var(--primary-500))" />
              </div>
              <h3 className="mb-1 text-[24px] font-bold">{item.title}</h3>
              <p className="text-start text-[14px] font-normal text-neutral-900 dark:text-neutral-300 sm:text-[18px]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ContactUsForm />
    </main>
  );
};

export default AboutUs;
