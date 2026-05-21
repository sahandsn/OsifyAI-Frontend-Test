import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TitledPickerProps = {
  className?: string;
  children: ReactNode;
};

export const TitledPicker = ({
  className,
  children,
}: Readonly<TitledPickerProps>) => {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      {children}
    </div>
  );
};
