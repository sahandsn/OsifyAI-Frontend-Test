"use client";

import { Link } from "@/i18n/navigation";
import { SheetClose } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { TItem } from "@/hooks/use-nav";

const RenderNavItem = ({
  item,
  mobile,
}: Readonly<{
  item: TItem;
  mobile?: boolean;
}>) => {
  if (mobile) {
    return (
      <SheetClose asChild className="py-3 pr-6">
        <Link
          href={item.path}
          className={cn(
            "relative flex w-full items-center justify-start gap-2 font-normal text-neutral-700 after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-neutral-900 after:opacity-0 dark:text-neutral-100 dark:after:bg-neutral-100 ltr:pl-8 ltr:pr-0",
            {
              "bg-neutral-300 text-[16px] font-semibold text-neutral-900 after:opacity-100 dark:bg-neutral-800 dark:text-neutral-100":
                item.isActive,
            },
          )}
        >
          {item.title}
        </Link>
      </SheetClose>
    );
  }

  return (
    <Link href={item.path}>
      <span
        className={cn(
          "font-normal text-neutral-700 lg:text-base xl:text-[20px]",
          {
            "font-semibold text-neutral-900 dark:text-neutral-100":
              item.isActive,
          },
        )}
      >
        {item.title}
      </span>
    </Link>
  );
};

export default RenderNavItem;
