import { ComponentProps } from "react";
import { Input as InputBase } from "../ui/input";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useNormalizedInput } from "@/hooks/use-normalized-input";

export const inputVariants = cva(
  "border transition-colors shadow-none duration-300 outline-0 focus:outline-0 focus-visible:outline-0 ring-0 hover:ring-0 focus:ring-0 focus-visible:ring-0 border-neutral-400 dark:border-neutral-800 focus:border-primary-500 hover:border-primary-500 group-hover:border-primary-500 active:border-primary-500 text-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-800 placeholder:text-neutral-500 rounded-xs font-normal aria-[invalid=true]:border-error-400 focus:aria-[invalid=true]:border-error-400 disabled:opacity-80 aria-disabled:opacity-80",
  {
    variants: {
      size: {
        "40": "h-10 px-4 py-2.5 text-xs",
        "48": "h-12 px-4 py-3 text-sm",
        "56": "h-14 p-4 text-sm",
      },
    },
    defaultVariants: {
      size: "48",
    },
  },
);

export const Input = ({
  size,
  className,
  onChange,
  value,
  normalizeNumbers = true,
  ...props
}: Readonly<
  ComponentProps<typeof InputBase> &
    VariantProps<typeof inputVariants> & { normalizeNumbers?: boolean }
>) => {
  const { getNormalizedValue, normalizedHandleChange } = useNormalizedInput();

  return (
    <InputBase
      {...props}
      className={cn(inputVariants({ size, className }))}
      value={normalizeNumbers ? getNormalizedValue(value) : value}
      onChange={
        normalizeNumbers ? (e) => normalizedHandleChange(e, onChange) : onChange
      }
    />
  );
};
