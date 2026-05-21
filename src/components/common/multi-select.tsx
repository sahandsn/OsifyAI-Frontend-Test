"use client";

import * as React from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { inputVariants } from "@/components/common/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Checkbox } from "../ui/checkbox";
import { InfiniteScrollWrapper } from "./infinite-scroll-wrapper";

type Option<T extends string> = { label: string; value: T };

export interface MultiSelectProps<T extends string = string> {
  options: Option<T>[];
  value?: T[];
  onChange: (value: T[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  clearable?: boolean;
  infiniteScroll?: StrictOmit<
    React.ComponentProps<typeof InfiniteScrollWrapper>,
    "children"
  >;
}

export function MultiSelect<T extends string = string>({
  options,
  value = [] as T[],
  onChange,
  placeholder = "Select...",
  className,
  disabled = false,
  id,
  clearable,
  infiniteScroll,
}: MultiSelectProps<T>) {
  const handleSelect = (itemValue: T) => {
    if (value.includes(itemValue)) {
      onChange(value.filter((v) => v !== itemValue));
    } else {
      onChange([...value, itemValue]);
    }
  };

  const canClean = clearable && !!value.length;

  const displayValue =
    value.length > 0
      ? options
          .filter((opt) => value.includes(opt.value))
          .map((opt) => opt.label)
          .join(", ")
      : "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger id={id} asChild disabled={disabled}>
        <div className={cn("w-full cursor-pointer", className)}>
          <InputGroup
            className={cn("!outline-0 !ring-0", inputVariants({ className }))}
          >
            <InputGroupInput
              readOnly
              value={displayValue}
              placeholder={placeholder}
              className="cursor-pointer truncate border-none bg-transparent p-0 placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:ring-offset-0 dark:placeholder:text-neutral-800"
            />
            {canClean ? (
              <InputGroupButton
                className="!bg-transparent !p-0"
                onPointerDown={(e) => {
                  // prevent DropdownMenuTrigger from toggling
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onChange([]);
                }}
                variant={"ghost"}
              >
                <X className="!size-5 !text-neutral-700" />
              </InputGroupButton>
            ) : (
              <InputGroupAddon align={"inline-end"}>
                <ChevronDown className="!size-4" />
              </InputGroupAddon>
            )}
          </InputGroup>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="z-[110] max-h-80 w-[--radix-dropdown-menu-trigger-width] rounded-[8px]"
        align="start"
      >
        <InfiniteScrollWrapper {...infiniteScroll}>
          {options.map((option) => {
            const isSelected = value.includes(option.value);

            return (
              <DropdownMenuItem
                key={option.value}
                onSelect={(e) => {
                  e.preventDefault();
                  handleSelect(option.value);
                }}
                className={cn(
                  "flex cursor-pointer items-start justify-start px-3 py-2",
                  "text-neutral-900 hover:!bg-neutral-300 dark:text-neutral-100 dark:hover:!bg-neutral-800",
                )}
              >
                <Checkbox
                  className="mt-[1px] rounded-[4px]"
                  checked={isSelected}
                />
                <span className="me-2 text-wrap">{option.label}</span>
              </DropdownMenuItem>
            );
          })}
        </InfiniteScrollWrapper>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
