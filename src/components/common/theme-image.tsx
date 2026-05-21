import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

type TImg = ComponentProps<typeof Image>;

type TThemeImageProps = {
  light: TImg;
  dark: TImg;
  className?: string;
};

export const ThemeImage = (props: Readonly<TThemeImageProps>) => {
  const { dark, light, className } = props;
  return (
    <>
      <Image
        {...dark}
        alt={dark.alt}
        className={cn("hidden dark:block", className, dark.className)}
      />
      <Image
        {...light}
        alt={light.alt}
        className={cn("block dark:hidden", className, light.className)}
      />
    </>
  );
};
