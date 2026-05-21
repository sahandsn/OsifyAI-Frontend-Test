"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type THaloStyle = {
  color: string;
  className?: string;
  spread: number;
};

export type HaloProps = {
  light: THaloStyle;
  dark: THaloStyle;
  className?: string;
};

export default function Halo({ light, dark, className }: Readonly<HaloProps>) {
  const buildStyle = (config: THaloStyle): CSSProperties => {
    const spread = config.spread ?? 140; // px
    const blur = spread * 1.2;

    return {
      // Make the actual element effectively a point; the glow is from box-shadow
      width: 0,
      height: 0,
      backgroundColor: "transparent",

      // Big soft glow; this does NOT affect scrollbars
      boxShadow: `0 0 ${blur}px ${spread}px ${config.color}`,
      borderRadius: "9999px",
    };
  };

  const commonClassName =
    "pointer-events-none -z-50 mix-blend-screen mix-blend-normal";

  return (
    <>
      {/* Light mode halo */}
      <div
        style={buildStyle(light)}
        className={cn(
          commonClassName,
          className,
          "!block dark:!hidden",
          light.className,
        )}
      />

      {/* Dark mode halo */}
      <div
        style={buildStyle(dark)}
        className={cn(
          commonClassName,
          className,
          "!hidden dark:!block",
          dark.className,
        )}
      />
    </>
  );
}
