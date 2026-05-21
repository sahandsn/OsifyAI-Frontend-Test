import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";

type TAppearance = "simple" | "reversed";

export interface ILabaledField {
  label: ReactNode;
  value?: ReactNode;
  className?: string;
  classNameValue?: string;
  classNameLabel?: string;
  appearance?: TAppearance;
  popover?: ReactNode;
}

export default function LabaledField(props: Readonly<ILabaledField>) {
  const {
    label,
    value,
    className,
    appearance = "simple",
    popover,
    classNameLabel,
    classNameValue,
  } = props;
  return (
    <span
      className={cn("flex flex-col gap-2 text-secondary-foreground", className)}
    >
      <div
        className={cn(
          "flex items-center gap-2 text-lg",
          {
            "text-base font-semibold": appearance === "simple",
          },
          classNameLabel,
        )}
      >
        {label}
        {popover ? (
          <Popover>
            <PopoverTrigger type="button">
              <Info className="size-4 text-secondary-foreground" />
            </PopoverTrigger>
            <PopoverContent>
              <p className="max-w-60">{popover}</p>
            </PopoverContent>
          </Popover>
        ) : undefined}
      </div>
      {value ? (
        <div
          className={cn(
            "text-xl font-bold",
            { "text-3xl": appearance === "reversed" },
            classNameValue,
          )}
        >
          {value}
        </div>
      ) : null}
    </span>
  );
}
