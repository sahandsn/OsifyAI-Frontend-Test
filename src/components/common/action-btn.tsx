"use client";

import React, { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../common/button";

export default function ActionBtn({
  size,
  className,
  children,
}: Readonly<{
  size: ComponentProps<typeof Button>["size"];
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <Link href="/" className={cn(buttonVariants({ size, className }))}>
      {children}
    </Link>
  );
}
