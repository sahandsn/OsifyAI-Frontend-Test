"use client";

import { CustomSelectItem } from "@/components/common/custom-select-item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { SelectTrigger } from "./select";

export type SelectOption = {
  key: string;
  label: string;
};

interface CommonSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
  placeholder?: string;
}

export const CommonSelect = ({
  value,
  onValueChange,
  options,
  className,
  placeholder,
}: CommonSelectProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={cn(
          // Base styles
          "hover cursor-pointer rounded-[10px] border border-neutral-400 bg-neutral-50 px-[14px] py-3 text-[14px] font-normal leading-[24px] tracking-[0] outline-none transition-colors dark:border-neutral-800",
          // Colors
          "text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 hover:dark:bg-neutral-950",
          // Responsive sizing matches your design
          "md:px-4 md:py-8 lg:text-[18px] lg:leading-[28px]",
          // Icon styling
          "[&>svg:nth-of-type(2)]:hidden [&>svg]:size-5 [&>svg]:!text-neutral-900 dark:[&>svg]:!text-neutral-100",
          className,
        )}
      >
        <SelectValue placeholder={placeholder} />
        <ChevronDown className="ms-1 size-4 text-neutral-900 dark:text-neutral-100" />
      </SelectTrigger>
      <SelectContent className="rounded-[10px] [&_svg]:hidden">
        <SelectGroup className="flex flex-col p-2">
          {options.map((opt) => (
            <CustomSelectItem key={opt.key} value={opt.key}>
              {opt.label}
            </CustomSelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
