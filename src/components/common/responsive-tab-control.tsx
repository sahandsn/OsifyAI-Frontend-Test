"use client";

import { CommonSelect, SelectOption } from "@/components/common/common-select";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ResponsiveTabControlProps {
  options: SelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const ResponsiveTabControl = ({
  options,
  value,
  onValueChange,
  className,
}: ResponsiveTabControlProps) => {
  return (
    <div className={cn("flex w-auto items-center", className)}>
      {/* Desktop: TabsList */}
      <TabsList
        className={cn(
          "hidden justify-between gap-2 rounded-[12px] border border-neutral-400 px-[8px] py-[33px] dark:border-neutral-800 lg:flex",
          "bg-neutral-50 dark:bg-neutral-950",
        )}
      >
        {options.map((tab) => (
          <TabsTrigger
            value={tab.key}
            key={tab.key}
            className={cn(
              "cursor-pointer rounded-[8px] border-none px-4 py-2.5 text-center align-middle text-[18px] font-normal leading-[28px] tracking-[0] transition-colors",
              "text-neutral-700 dark:bg-neutral-950 dark:text-neutral-600",
              "data-[state=active]:bg-primary-500 data-[state=active]:text-neutral-50 data-[state=active]:dark:bg-primary-500 data-[state=active]:dark:text-neutral-50",
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Mobile: The reusable Select component */}
      {/* We use `lg:hidden` to hide this dropdown when the TabsList appears */}
      <div className="block w-full lg:hidden">
        <CommonSelect
          value={value}
          onValueChange={onValueChange}
          options={options}
        />
      </div>
    </div>
  );
};
