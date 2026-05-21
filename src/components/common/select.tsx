import {
  SelectTrigger as SelectTriggerBase,
  SelectContent as SelectContentBase,
  SelectItem as SelectItemBase,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { inputVariants } from "@/components/common/input";
import { VariantProps } from "class-variance-authority";

type TSelectTriggerProps = React.ComponentProps<typeof SelectTriggerBase> &
  VariantProps<typeof inputVariants>;

export const SelectTrigger = ({
  className,
  size,
  ...props
}: Readonly<TSelectTriggerProps>) => {
  return (
    <SelectTriggerBase
      {...props}
      className={cn(
        inputVariants({ className, size }),
        "data-[placeholder]:text-neutral-500 dark:data-[placeholder]:text-neutral-800",
      )}
    />
  );
};

type TSelectContentProps = React.ComponentProps<typeof SelectContentBase>;

export const SelectContent = ({
  className,
  ...props
}: Readonly<TSelectContentProps>) => {
  return (
    <SelectContentBase
      {...props}
      className={cn(
        "flex flex-col items-center gap-2 rounded-xs bg-white dark:bg-neutral-950",
        "min-w-[var(--radix-select-trigger-width)]",
        className,
      )}
    />
  );
};

type TSelectItemProps = React.ComponentProps<typeof SelectItemBase>;

export const SelectItem = ({
  className,
  ...props
}: Readonly<TSelectItemProps>) => {
  return (
    <SelectItemBase
      {...props}
      className={cn(
        "hover:cursor-pointer",
        "px-6 py-2",
        "[&>span:first-child]:hidden",
        "mx-auto w-full justify-center rounded-sm text-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 focus:text-neutral-900 data-[state=checked]:bg-neutral-300 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-neutral-100 dark:data-[state=checked]:bg-neutral-700",
        className,
      )}
    />
  );
};
