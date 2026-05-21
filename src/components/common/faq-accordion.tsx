import { cn } from "@/lib/utils";
import { FaqItem } from "@/types/faq";
import { useTheme } from "next-themes";
import { useRef } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqAccordionItem = ({ faq }: { faq: FaqItem }) => {
  const isDark = useTheme().resolvedTheme === "dark";
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    triggerRef.current?.click();
  };

  return (
    <AccordionItem
      value={faq.q}
      onClick={handleClick}
      className={cn(
        "cursor-pointer rounded-2xl border border-neutral-50 p-6 backdrop-blur-[4px] transition-all data-[state=open]:space-y-5 data-[state=open]:bg-neutral-50 dark:border-neutral-800 dark:data-[state=open]:bg-neutral-950 lg:p-8",
        {
          "bg-[linear-gradient(79.22deg,#212121_0.12%,rgba(33,33,33,0)_172.29%)]":
            isDark,
        },
        {
          "[background:linear-gradient(90deg,rgba(255,255,255,0.4096)_0%,rgba(255,255,255,0.64)_100%)]":
            !isDark,
        },
      )}
    >
      <AccordionTrigger
        ref={triggerRef}
        className={cn(
          "pointer-events-none w-full rounded-2xl p-0 text-right align-middle text-[14px] font-semibold leading-[20px] tracking-normal text-neutral-900 hover:no-underline dark:text-neutral-100 lg:text-lg lg:leading-8 xl:text-xl ltr:text-left rtl:text-right",
        )}
      >
        {faq.q}
      </AccordionTrigger>
      <AccordionContent
        className={cn(
          "lg:text-md flex w-full flex-col gap-4 p-0 text-[14px] font-normal leading-[22px] tracking-normal text-neutral-800 dark:text-neutral-300 lg:leading-7 xl:text-lg",
        )}
      >
        {faq.a}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordionItem;
