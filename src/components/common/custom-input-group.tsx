import { ComponentProps } from "react";
import { InputGroupInput } from "@/components/ui/input-group";
import { useNormalizedInput } from "@/hooks/use-normalized-input";
import { cn } from "@/lib/utils";

export const CustomInputGroupInput = ({
  onChange,
  value,
  className,
  normalizeNumbers = true,
  ...props
}: Readonly<
  ComponentProps<typeof InputGroupInput> & {
    normalizeNumbers?: boolean;
  }
>) => {
  const { getNormalizedValue, normalizedHandleChange } = useNormalizedInput();

  return (
    <InputGroupInput
      {...props}
      className={cn(
        "text-neutral-900 placeholder:text-neutral-500 disabled:opacity-80 aria-disabled:opacity-80 dark:text-neutral-100 dark:placeholder:text-neutral-800",
        className,
      )}
      value={normalizeNumbers ? getNormalizedValue(value) : value}
      onChange={
        normalizeNumbers ? (e) => normalizedHandleChange(e, onChange) : onChange
      }
    />
  );
};
