"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { CourseUpLinear, CourseDownLinear } from "solar-icon-set";
import { Diff, Info } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { Badge as BadgeBase } from "@/components/ui/badge";

export const badgeVariants = cva(
  "flex shadow-none pointer-events-none items-center rounded-full border-[1px] font-medium",
  {
    variants: {
      variant: {
        default:
          "border-primary-600 hover:bg-primary-50 bg-primary-50 text-primary-600 dark:hover:bg-primary-950 dark:bg-primary-950 dark:text-primary-400",
        success:
          "border-success-600 hover:bg-success-50 bg-success-50 text-success-600 dark:hover:bg-success-950 dark:bg-success-950 dark:text-success-400",
        error:
          "border-error-600 hover:bg-error-50 bg-error-50 text-error-600 dark:hover:bg-error-950 dark:bg-error-950 dark:text-error-400",
        warning:
          "border-warning-600 hover:bg-warning-50 bg-warning-50 text-warning-600 dark:hover:bg-warning-950 dark:bg-warning-950 dark:text-warning-400",
        info: "border-info-500 hover:bg-info-50 bg-info-50 text-info-500 dark:hover:bg-info-950 dark:bg-info-950 dark:text-info-400",
      },
      size: {
        "32": "py-0.5 px-1 leading-[16px] text-[10px]",
        "40": "py-1 px-2 leading-[18px] text-[12px]",
        "48": "py-2 px-4 leading-[20px] text-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "40",
    },
  },
);

type TBadge = VariantProps<typeof badgeVariants> &
  StrictOmit<ComponentProps<typeof BadgeBase>, "variant"> & {
    trend?: "increase" | "decrease" | "no-change" | "estimate";
  };

export const Badge = ({
  variant,
  size,
  trend,
  className,
  ...props
}: Readonly<TBadge>) => {
  if (!trend) {
    return (
      <BadgeBase
        {...props}
        className={cn(badgeVariants({ className, variant, size }))}
      />
    );
  }

  if (trend === "increase") {
    return (
      <BadgeBase
        {...props}
        className={cn(
          badgeVariants({ className, variant: variant ?? "success", size }),
          "flex items-center gap-1",
        )}
      >
        {props.children}
        <CourseUpLinear className="h-3 w-3 stroke-[2px]" />
      </BadgeBase>
    );
  }

  if (trend === "decrease") {
    return (
      <BadgeBase
        {...props}
        className={cn(
          badgeVariants({ className, variant: variant ?? "error", size }),
          "flex items-center gap-1",
        )}
      >
        {props.children}
        <CourseDownLinear className="h-3 w-3 stroke-[2px]" />
      </BadgeBase>
    );
  }

  if (trend === "estimate") {
    return (
      <BadgeBase
        {...props}
        className={cn(
          badgeVariants({ className, variant: variant ?? "info", size }),
          "flex items-center gap-1",
        )}
      >
        {props.children}
        <Diff className="h-3 w-3 stroke-[2px]" />
      </BadgeBase>
    );
  }

  return (
    <BadgeBase
      {...props}
      className={cn(
        badgeVariants({ className, variant, size }),
        "flex items-center gap-1",
      )}
    >
      {props.children}
      <Info className="h-3 w-3 stroke-[2px]" />
    </BadgeBase>
  );
};
