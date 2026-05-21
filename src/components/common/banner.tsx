"use client";

import { useEffect, useRef } from "react";
import { useBanner, BannerScope } from "@/hooks/use-banner";
import { cn } from "@/lib/utils";

type TProps = ReturnType<typeof useBanner> & {
  scope: BannerScope;
};

export const Banner = ({ banner }: Readonly<TProps>) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!banner || !bannerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === bannerRef.current) {
          const height = bannerRef.current.offsetHeight;
          document.documentElement.style.setProperty(
            "--landing-banner-height",
            `${height}px`,
          );
        }
      }
    });

    resizeObserver.observe(bannerRef.current);

    return () => {
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty("--landing-banner-height");
    };
  }, [banner]);

  if (!banner) {
    return null;
  }

  return (
    <div
      ref={bannerRef}
      className={cn(
        "sticky top-0 z-[90] w-full text-sm font-medium transition-all",
      )}
    >
      {banner.content}
    </div>
  );
};
