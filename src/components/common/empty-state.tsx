"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  hidden?: boolean;
  className?: string;
}

/**
 * A reusable empty state component with a dashed border card design.
 * Use this when displaying a placeholder for empty lists or data.
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  hidden = false,
  className,
}: Readonly<EmptyStateProps>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center",
        { hidden },
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[600px] flex-col items-center gap-6 rounded-[16px] border-[2px] border-dashed p-12",
          "border-neutral-400 bg-transparent dark:border-neutral-700",
        )}
      >
        {/* Icon */}
        <div
          className={cn("flex h-[80px] w-[80px] items-center justify-center")}
        >
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[18px] font-bold leading-[28px] text-neutral-900 dark:text-neutral-100">
            {title}
          </h2>
          <p className="max-w-[400px] text-[14px] font-normal leading-[24px] text-neutral-700 dark:text-neutral-500">
            {description}
          </p>
        </div>

        {/* Action */}
        {action}
      </div>
    </div>
  );
}
