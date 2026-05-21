import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { DangerCircleLinear } from "solar-icon-set";
import { toast as sonnerToast } from "sonner";

type TToastVariant = "success" | "error" | "info" | "warning";
type TToastMessage = string;

const variants = {
  error: {
    bg: "!bg-error-50 dark:!bg-error-950",
    text: "!text-error-500 dark:!text-error-400",
    bar: "!bg-error-500 dark:!bg-error-400",
  },
  info: {
    bg: "!bg-info-50 dark:!bg-info-950",
    text: "!text-info-500 dark:!text-info-400",
    bar: "!bg-info-500 dark:!bg-info-400",
  },
  success: {
    bg: "!bg-success-50 dark:!bg-success-950",
    text: "!text-success-500 dark:!text-success-400",
    bar: "!bg-success-500 dark:!bg-success-400",
  },
  warning: {
    bg: "!bg-warning-50 dark:!bg-warning-950",
    text: "!text-warning-500 dark:!text-warning-400",
    bar: "!bg-warning-500 dark:!bg-warning-400",
  },
};

const makeVariant = (
  message: TToastMessage,
  variant: TToastVariant,
  options?: { id?: string },
) => {
  const v = variants[variant];

  return sonnerToast(message, {
    id: options?.id,
    icon: <DangerCircleLinear className="size-6" />,
    action: {
      label: (
        <X className="relative z-[999999] h-4 w-4 stroke-current text-neutral-950 dark:text-neutral-100" />
      ),
      onClick: () => sonnerToast.dismiss(),
    },
    classNames: {
      actionButton:
        "absolute z-[999999] -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 !bg-transparent p-0 m-0 border-0 !shadow-none !rounded-none hover:!bg-transparent active:!bg-transparent focus:!bg-transparent",
    },
    className: cn(
      "relative z-[999999] rtl:text-right !gap-2 lg:!gap-4 ltr:text-left !rounded-[16px] !border-0 overflow-hidden lg:!max-w-[364px] !max-w-[280px]",
      v.bg,
      v.text,
    ),
    description: (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 h-[4px] w-full rounded-b-[16px]",
          v.bar,
        )}
      />
    ),
  });
};

const toast = {
  ...sonnerToast,
  error: (message: TToastMessage, options?: { id?: string }) =>
    makeVariant(message, "error", options),
  info: (message: TToastMessage, options?: { id?: string }) =>
    makeVariant(message, "info", options),
  success: (message: TToastMessage, options?: { id?: string }) =>
    makeVariant(message, "success", options),
  warning: (message: TToastMessage, options?: { id?: string }) =>
    makeVariant(message, "warning", options),
};

export default toast;
