import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";
import { ComponentType, SVGProps } from "react";
import { SiAparat } from "react-icons/si";

import Instagram from "#/assets/icons/Instagram.svg";
import InstagramDark from "#/assets/icons/InstagramDark.svg";

import Email from "#/assets/icons/Email.svg";
import EmailDark from "#/assets/icons/EmailDark.svg";

import Linkedin from "#/assets/icons/Linkedin.svg";
import LinkedinDark from "#/assets/icons/LinkedinDark.svg";

export type SocialIcon =
  | {
      iconType: "image";
      icon: StaticImageData;
      key: string;
      href: string;
      alt: string;
      label: string;
    }
  | {
      iconType: "component";
      icon: ComponentType<SVGProps<SVGSVGElement>>;
      key: string;
      href: string;
      alt: string;
      label: string;
    };

export const useSocialMedia = () => {
  const t = useTranslations("Footer.social");
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const socialIcons: SocialIcon[] = [
    {
      iconType: "image",
      icon: isDark ? InstagramDark : Instagram,
      key: "instagram",
      href: "https://www.instagram.com/osifyai/",
      alt: t("instagram.alt"),
      label: t("instagram.label"),
    },
    {
      iconType: "image",
      icon: isDark ? EmailDark : Email,
      key: "email",
      href: "mailto:osifyai@gmail.com",
      alt: t("email.alt"),
      label: t("email.label"),
    },
    {
      iconType: "image",
      icon: isDark ? LinkedinDark : Linkedin,
      key: "linkedin",
      href: "https://linkedin.com/company/osifyai",
      alt: t("linkedin.alt"),
      label: t("linkedin.label"),
    },
    {
      iconType: "component",
      icon: SiAparat,
      key: "aparat",
      href: "https://www.aparat.com/OsifyAI",
      alt: t("aparat.alt"),
      label: t("aparat.label"),
    },
  ];
  return socialIcons;
};
