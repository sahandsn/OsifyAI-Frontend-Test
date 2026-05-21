"use client";

import { Select, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { SelectContent, SelectTrigger } from "./select";

interface CalendarSelectProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function CalendarSelect({
  value,
  onChange,
  children,
  className,
}: CalendarSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "flex h-8 cursor-pointer items-center justify-center !gap-2 rounded-[12px] !px-4 !py-1",
          "bg-neutral-white border-[1.5px] border-neutral-400 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100",
          "[&>svg:nth-of-type(2)]:hidden [&>svg]:size-5 [&>svg]:!text-neutral-900 dark:[&>svg]:!text-neutral-100",
          "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0",
          className,
        )}
      >
        <SelectValue />
        <ChevronDown className="size-4 text-neutral-900 dark:text-neutral-100" />
      </SelectTrigger>
      <SelectContent align="center" alignOffset={6}>
        <div className={cn("flex flex-col gap-2 p-2")}>{children}</div>
      </SelectContent>
    </Select>
  );
}
