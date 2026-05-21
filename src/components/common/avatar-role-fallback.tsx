"use client";

import { AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  ClipboardPlus,
  Stethoscope,
  User,
  type LucideProps,
} from "lucide-react";

export type AvatarRole = "doctor" | "employee" | "patient";

const ICONS: Record<AvatarRole, React.ComponentType<LucideProps>> = {
  doctor: Stethoscope,
  employee: ClipboardPlus,
  patient: User,
};

type AvatarRoleFallbackProps = {
  role: AvatarRole;
  className?: string;
  iconProps?: LucideProps;
};

export function AvatarRoleFallback({
  role,
  className,
  iconProps,
}: AvatarRoleFallbackProps) {
  const Icon = ICONS[role];
  return (
    <AvatarFallback
      className={cn(
        "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300",
        className,
      )}
    >
      <Icon {...iconProps} />
    </AvatarFallback>
  );
}
