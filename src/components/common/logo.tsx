import { getTitle } from "@/constants/assets";
import { useLocale } from "next-intl";
import Image from "next/image";
import imgLogo from "#/branding/logo.png";
import { Link } from "@/i18n/navigation";
import { TRoute } from "@/types/general";
import { cn } from "@/lib/utils";
import { Montserrat, Zain } from "@/fonts/fonts";
import { ComponentProps } from "react";

export const useLogoText = () => {
  const locale = useLocale();
  const titleText = getTitle(locale);
  return titleText;
};

export const LogoImage = (props: Partial<ComponentProps<typeof Image>>) => {
  const text = useLogoText();
  return (
    <Image
      {...props}
      src={imgLogo}
      alt={text}
      width={props.width ?? 44}
      height={props.height ?? 44}
    />
  );
};

export const LogoLink = (
  props: Readonly<{
    href?: TRoute;
    className?: string;
    textClassName?: string;
    img?: ComponentProps<typeof LogoImage>;
  }>,
) => {
  const { href = "/", className, img, textClassName } = props;
  const logo = useLogoText();
  const locale = useLocale();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between gap-1.5 text-3xl font-semibold md:gap-2.5 ltr:flex-row",
        className,
      )}
    >
      <LogoImage {...img} />
      <h2
        className={cn(
          {
            [Zain.className]: locale === "fa",
            [Montserrat.className]: locale !== "fa",
          },
          textClassName,
        )}
      >
        {logo}
      </h2>
    </Link>
  );
};
