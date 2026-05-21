import CheckCircle from "#/assets/icons/Check-Circle.svg";
import Image from "next/image";
import { ReactNode } from "react";
import { CheckCircleBold } from "solar-icon-set";
import { cn } from "@/lib/utils";

const PricingFeature = ({
  children,
  highlight = false,
}: Readonly<{ children: ReactNode; highlight?: boolean }>) => {
  return (
    <li
      className={cn(
        "flex items-start gap-2.5 text-xs font-normal leading-[22px] text-neutral-950 dark:text-neutral-300 xl:text-sm ltr:text-left",
        {
          "font-bold text-primary-700 dark:text-primary-300": highlight,
        },
      )}
    >
      {highlight ? (
        <CheckCircleBold size={20} className="shrink-0 !text-primary-500" />
      ) : (
        <Image src={CheckCircle.src} alt="check" width={18} height={18} />
      )}
      {children}
    </li>
  );
};

export default PricingFeature;
