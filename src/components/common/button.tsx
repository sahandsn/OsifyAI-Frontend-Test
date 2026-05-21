import { Loader2Icon } from "lucide-react";
import { Button as BaseBtn } from "@/components/ui/button";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "shadow-none font-medium hover:cursor-pointer disabled:cursor-not-allowed disabled:hover:cursor-not-allowed rounded-xs flex items-center justify-center transition-colors duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-neutral-50 hover:bg-primary-100 hover:text-primary-600 disabled:bg-neutral-300 disabled:text-neutral-600 active:bg-primary-800 active:text-primary-50 data-[selected=true]:bg-primary-800 data-[selected=true]:text-primary-50 aria-selected:bg-primary-800 aria-selected:text-primary-50",
        "primary-destructive":
          "bg-error-500 text-neutral-50 hover:bg-error-800 hover:text-error-50 disabled:bg-neutral-300 disabled:text-neutral-600 active:bg-error-800 active:text-error-50 data-[selected=true]:bg-error-800 data-[selected=true]:text-error-50 aria-selected:bg-error-800 aria-selected:text-error-50",
        "primary-success":
          "bg-success-500 text-neutral-50 hover:bg-success-800 hover:text-success-50 disabled:bg-neutral-300 disabled:text-neutral-600 active:bg-success-800 active:text-success-50 data-[selected=true]:bg-success-800 data-[selected=true]:text-success-50 aria-selected:bg-success-800 aria-selected:text-success-50",
        secondary:
          "border bg-transparent border-primary-500 text-primary-500 hover:bg-transparent hover:border-primary-400 hover:text-primary-400 disabled:bg-transparent disabled:border-neutral-500 disabled:text-neutral-500 active:bg-transparent active:border-primary-800 active:text-primary-800 data-[selected=true]:bg-transparent data-[selected=true]:border-primary-800 data-[selected=true]:text-primary-800 aria-selected:bg-transparent aria-selected:border-primary-800 aria-selected:text-primary-800",
        "secondary-destructive":
          "border bg-transparent border-error-500 text-error-500 hover:bg-transparent hover:border-error-400 hover:text-error-400 disabled:bg-transparent disabled:border-neutral-500 disabled:text-neutral-500 active:bg-transparent active:border-error-800 active:text-error-800 data-[selected=true]:bg-transparent data-[selected=true]:border-error-800 data-[selected=true]:text-error-800 aria-selected:bg-transparent aria-selected:border-error-800 aria-selected:text-error-800",
        text: "bg-transparent text-primary-500 hover:bg-transparent hover:text-primary-400 disabled:bg-transparent disabled:text-neutral-500 active:bg-transparent active:text-primary-800 data-[selected=true]:bg-transparent data-[selected=true]:text-primary-800 aria-selected:bg-transparent aria-selected:text-primary-800",
        "text-destructive":
          "bg-transparent text-error-500 hover:bg-transparent hover:text-error-400 disabled:bg-transparent disabled:text-neutral-500 active:bg-transparent active:text-error-800 data-[selected=true]:bg-transparent data-[selected=true]:text-error-800 aria-selected:bg-transparent aria-selected:text-error-800",
      },
      size: {
        "24": "h-6 px-4 py-1 text-xs leading-3",
        "28": "h-7 px-4 py-1 text-xs leading-3",
        "32": "h-8 px-6 py-2 text-xs leading-4",
        "40": "h-10 px-4 py-2.5 text-sm leading-5",
        "48": "h-12 px-6 py-3 text-base leading-6",
        "56": "h-14 px-8 py-4 text-base leading-6",
      },
      shape: {
        button: "",
        icon: "aspect-square",
      },
      gap: {
        "6": "gap-1.5",
        "16": "gap-4",
      },
    },
    compoundVariants: [
      { shape: "icon", size: "24", className: "p-1" },
      { shape: "icon", size: "32", className: "p-1.5" },
      { shape: "icon", size: "40", className: "p-2" },
      { shape: "icon", size: "48", className: "p-3" },
      { shape: "icon", size: "56", className: "p-4" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "40",
      gap: "6",
    },
  },
);

type TButtonProps = StrictOmit<
  ComponentProps<typeof BaseBtn>,
  "size" | "variant"
> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export function Button(props: Readonly<TButtonProps>) {
  const {
    loading,
    disabled,
    children,
    className,
    size,
    variant,
    gap,
    shape,
    ...buttonProps
  } = props;
  const isDisabled = loading || disabled;

  return (
    <BaseBtn
      {...buttonProps}
      disabled={isDisabled}
      className={cn(
        "hover:cursor-pointer",
        { "hover:cursor-not-allowed": isDisabled },
        buttonVariants({
          size,
          variant,
          gap,
          shape,
          className,
        }),
      )}
    >
      {loading ? <Loader2Icon className="animate-spin" /> : null}
      {loading && shape === "icon" ? null : children}
    </BaseBtn>
  );
}
