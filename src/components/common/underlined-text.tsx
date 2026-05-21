"use client";

import Primary500 from "#/assets/icons/Primary-500-Underline.svg";
import Secondary200 from "#/assets/icons/Secondary-200-Underline.svg";
import Secondary300 from "#/assets/icons/Secondary-300-Underline.svg";
import Secondary500 from "#/assets/icons/Secondary-500-Underline.svg";
import { cn } from "@/lib/utils";
import { isObject } from "lodash";
import Image from "next/image";

type TVariant =
  | "primary-500"
  | "secondary-500"
  | "secondary-200"
  | "secondary-300";

const underlineSvgs: Record<TVariant, string> = {
  "primary-500": Primary500,
  "secondary-500": Secondary500,
  "secondary-200": Secondary200,
  "secondary-300": Secondary300,
};

type UnderlinedTextProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  variant:
    | TVariant
    | {
        light: TVariant;
        dark: TVariant;
      };
}>;

export default function UnderlinedText({
  children,
  className,
  variant,
}: UnderlinedTextProps) {
  const differentVariants = isObject(variant);

  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <span className="pointer-events-none absolute bottom-[-21px] left-0 aspect-[118/21] h-[21px] w-full">
        {differentVariants ? (
          <>
            <Image
              src={underlineSvgs[variant.dark]}
              alt="underline image"
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              className="hidden object-contain dark:block"
            />
            <Image
              src={underlineSvgs[variant.light]}
              alt="underline image"
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              className="block object-contain dark:hidden"
            />
          </>
        ) : (
          <Image
            src={underlineSvgs[variant]}
            alt="underline image"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            className="object-contain"
          />
        )}
      </span>
    </span>
  );
}
