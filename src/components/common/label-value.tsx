import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TProps = {
  label: ReactNode;
  value?: ReactNode;
  className?: string;
  variant?: "horizontal" | "vertical" | "inside";
};

export function LabelValueComponent(props: Readonly<TProps>) {
  const { label, value, className, variant = "vertical" } = props;

  return (
    <section
      className={cn(
        "flex flex-wrap",
        {
          "flex-row items-center justify-between gap-x-6 gap-y-2":
            variant !== "vertical",
          "min-w-[100px] flex-col gap-2": variant === "vertical",
          "rounded border": variant === "inside",
        },
        className,
      )}
    >
      <span
        className={cn({
          "text-muted-foreground": variant === "vertical",
          "px-3 py-1.5": variant !== "vertical",
        })}
      >
        {label}
      </span>
      <span
        className={cn("rounded px-3 py-1.5", {
          border: variant !== "inside",
          "text-muted-foreground": variant !== "vertical",
        })}
      >
        {value || "-"}
      </span>
    </section>
  );
}
