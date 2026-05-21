import { useDate } from "@/hooks/use-date";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

const headerVariants = cva("text-xs", {
  variants: {
    variant: {
      error: "text-error-foreground",
      warning: "text-warning-foreground",
      info: "text-muted-foreground",
      success: "text-success-foreground",
    },
  },
  defaultVariants: {
    variant: "error",
  },
});

const footerVariants = cva("text-xs px-2 rounded", {
  variants: {
    variant: {
      error: "text-error-foreground bg-error",
      warning: "text-warning-foreground bg-warning",
      info: "text-muted-foreground bg-background",
      success: "text-success-foreground bg-success",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

type TSeverity = "error" | "warning" | "info" | "success";

type THeader = {
  Icon?: LucideIcon;
  value?: ReactNode;
  severity: TSeverity;
};
type TFooter = {
  label: ReactNode;
  severity: TSeverity;
};

type TShowDataCompact = {
  header?: THeader;
  value: ReactNode;
  label: ReactNode;
  footer: TFooter;
  className?: string;
};

type TShowDataFull = {
  header: TFooter & { Icon: LucideIcon };
  value: {
    amount: ReactNode;
    unit: ReactNode;
  };
  label: ReactNode;
  footer?: {
    label: ReactNode;
    date: Date;
  };
  className?: string;
};

export function ShowDataCompact(props: Readonly<TShowDataCompact>) {
  const { footer, label, value, header, className } = props;
  return (
    <section
      className={cn(
        "flex flex-col gap-2",
        { "justify-center": !header },
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1 rtl:flex-row-reverse",
          headerVariants({
            variant: header?.severity,
          }),
          { hidden: !header },
        )}
      >
        {header?.Icon ? <header.Icon className="size-5" /> : undefined}
        {header?.value ? <span>{header.value}</span> : undefined}
      </div>

      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl font-extrabold">{value}</h3>
        <p>{label}</p>
        <span
          className={cn(
            footerVariants({
              variant: footer.severity,
            }),
          )}
        >
          {footer.label}
        </span>
      </div>
    </section>
  );
}

export function ShowDataFull(props: Readonly<TShowDataFull>) {
  const { label, value, header, className, footer } = props;
  const { format, dateFormat } = useDate();
  return (
    <section className={cn("flex flex-col gap-1", className)}>
      <div
        className={cn(
          "flex w-fit flex-row-reverse items-center gap-1 py-1 ltr:ms-auto rtl:me-auto rtl:flex-row",
          footerVariants({
            variant: header?.severity,
          }),
          { hidden: !header },
        )}
      >
        {header?.Icon ? <header.Icon className="size-4" /> : undefined}
        {header?.label ? <span>{header.label}</span> : undefined}
      </div>

      <div className="flex flex-col items-start gap-3 rtl:items-end">
        <p>{label}</p>
        <span className="flex items-center gap-2 rtl:flex-row-reverse">
          <h3 className="text-xl font-bold">{value.amount}</h3>
          <p className="text-muted-foreground">{value.unit}</p>
        </span>
        {footer ? (
          <span className="flex w-full flex-grow items-center justify-between gap-5 text-muted-foreground">
            <span> {footer?.label}</span>
            <span>{format(footer?.date, dateFormat)}</span>
          </span>
        ) : null}
      </div>
    </section>
  );
}
