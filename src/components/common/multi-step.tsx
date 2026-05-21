"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CardComponent } from "./card";

interface IBoneAgeForm {
  children: ReactNode;
  currentStep: number;
  totalStep: number;
  className?: string;
}

export default function MultiStep(props: Readonly<IBoneAgeForm>) {
  const { children, currentStep, totalStep, className } = props;
  const t = useTranslations("General");
  return (
    <CardComponent className={cn("md:w-lg w-full", className)}>
      <section className="flex flex-col gap-6">
        <section>
          {t("steps-total", {
            current: currentStep,
            total: totalStep,
          })}
        </section>
        {children}
      </section>
    </CardComponent>
  );
}
