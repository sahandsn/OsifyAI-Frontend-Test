import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { SelectItem } from "../ui/select";

export const CustomSelectItem = ({
  className,
  value,
  children,
}: Readonly<{
  value: string;
  children: ReactNode;
  className?: string;
}>) => (
  <SelectItem
    value={value}
    className={cn(
      "flex cursor-pointer items-center justify-center gap-0 rounded-[10px] !pl-0 !pr-0 hover:!bg-neutral-300 hover:!text-neutral-950 data-[state=checked]:bg-neutral-300 data-[state=checked]:text-neutral-950 dark:hover:!bg-neutral-800 dark:hover:!text-neutral-100 data-[state=checked]:dark:bg-neutral-800 data-[state=checked]:dark:text-neutral-100",
      className,
    )}
  >
    {children}
  </SelectItem>
);
