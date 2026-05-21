"use client";

import { useTranslations } from "next-intl";
import TiltedBox from "@/components/common/tilted-box";
import Halo from "@/components/common/halo";
import phoneCallingOrange from "#/assets/icons/PhoneCallingOrange.svg";
import { ContactForm } from "@/components/common/contact-form";
import { ContactInfo } from "@/components/common/contact-info";
import { getTitle } from "@/constants/assets";
import { getPathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import type { ContactPage, WithContext } from "schema-dts";
import serialize from "serialize-javascript";

export default function Contact() {
  const t = useTranslations("ContactUs");
  const locale = useLocale();

  const jsonLdData: WithContext<ContactPage> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: t("title.label"),
    description: t("title.description"),
    url: new URL(
      getPathname({ href: "/contact", locale }),
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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        availableLanguage: ["Persian", "English", "German"],
      },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate mx-auto mb-32 mt-36 md:mt-[15.5rem]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serialize(jsonLdData, { isJSON: true }),
        }}
      />

      {/* Decorative Tilted Icon */}
      <TiltedBox
        src={phoneCallingOrange}
        alt="phone-calling-icon"
        boxSizeClassName="h-[54px] w-[54px]"
        iconSizeClassName="h-[32px] w-[32px]"
        radiusClassName="rounded-[15.5px] shadow-[0px_0px_27.8767px_rgba(163,163,163,0.12)] dark:shadow-[0px_0px_27.8767px_rgba(163,163,163,0.24)]"
        className="absolute right-[20%] top-[-5%] hidden lg:block"
        rotation={16}
      />

      <Halo
        light={{
          color: "#BFD7FE",
          spread: 150,
        }}
        dark={{
          color: "#1E478A",
          spread: 150,
        }}
        className="absolute -right-[8rem] -top-[12rem] -z-10 opacity-60"
      />

      {/* Header */}
      <header className="z-10 mx-auto mb-[6.5rem] items-center justify-center text-center lg:w-[1000px]">
        <span className="text-2xl font-semibold text-secondary-500">
          {t("title.label")}
        </span>

        <h1
          id="contact-title"
          className="mb-6 mt-4 text-[24px] font-bold text-neutral-950 dark:text-neutral-100 md:text-5xl lg:text-5xl"
        >
          {t.rich("title.title", {
            highlight: (chunks) => (
              <span className="bg-gradient-to-b from-[#4186F6] to-[#B9D7FE] bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
        </h1>

        <p className="text-[16px] font-normal text-neutral-800 dark:text-neutral-300">
          {t("title.description")}
        </p>
      </header>

      {/* Main Content Grid */}
      <section className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <Halo
          light={{
            color: "#FECCAA",
            spread: 120,
          }}
          dark={{
            color: "#7C3D12",
            spread: 120,
          }}
          className="absolute right-0 top-60 -z-10 opacity-50"
        />
        <ContactForm />
        <ContactInfo />
      </section>
    </section>
  );
}
