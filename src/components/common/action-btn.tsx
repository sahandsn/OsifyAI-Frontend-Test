"use client";

import React, { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../common/button";
import { useSession } from "@/session";

export default function ActionBtn({
  size,
  className,
  children,
}: Readonly<{
  size: ComponentProps<typeof Button>["size"];
  className?: string;
  children: React.ReactNode;
}>) {
  const { isPending, isEnabled } = useSession();
  const pending = isPending && isEnabled;

  if (pending) {
    return (
      <Button size={size} loading={pending} className={cn(className)}>
        {children}
      </Button>
    );
  }

  return (
    <Link
      href="/auth/login"
      className={cn(buttonVariants({ size, className }))}
    >
      {children}
    </Link>
  );
}
