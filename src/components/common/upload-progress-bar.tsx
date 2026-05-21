"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useTranslations } from "next-intl";

interface UploadProgressBarProps {
  onComplete: () => void;
  duration?: number;
  className?: string;
  stillInFlight?: boolean;
}

export const UploadProgressBar = ({
  onComplete,
  duration = 1500,
  className = "",
  stillInFlight,
}: Readonly<UploadProgressBarProps>) => {
  const t = useTranslations("fileUploader.uploading");
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useLayoutEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useLayoutEffect(() => {
    const startTime = Date.now();
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;
    let isCancelled = false;

    const updateProgress = () => {
      if (isCancelled) return;

      const elapsed = Date.now() - startTime;
      const max = stillInFlight ? 99 : 100;
      const newProgress = Math.min((elapsed / duration) * 100, max);

      setProgress(Math.round(newProgress));

      if (newProgress < 100) {
        rafId = requestAnimationFrame(updateProgress);
      } else {
        timeoutId = setTimeout(() => {
          if (!isCancelled) {
            onCompleteRef.current();
          }
        }, 200);
      }
    };

    rafId = requestAnimationFrame(updateProgress);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [duration, stillInFlight]);

  return (
    <div
      className={`flex h-[148px] w-full flex-col items-center justify-center gap-4 rounded-[8px] border border-solid border-primary-500 bg-primary-50 p-5 dark:border-primary-600 dark:bg-neutral-950 ${className}`}
    >
      <div className="text-[12px] font-bold text-neutral-900 dark:text-neutral-400">
        {t("percentage", { progress })}
      </div>

      {/* shadcn Progress Bar - Controlled Component */}
      <Progress value={progress} className="h-2 w-full" />

      {/* Loading Text */}
      <p className="text-sm font-medium text-neutral-400 dark:text-neutral-100">
        {t("text")}
      </p>
    </div>
  );
};
