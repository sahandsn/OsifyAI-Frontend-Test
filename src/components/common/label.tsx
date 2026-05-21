import { Label as LabelBase } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TLabelProps = ComponentProps<typeof LabelBase> & {
  required?: boolean;
};

export const Label = ({
  className,
  children,
  required,
  ...props
}: TLabelProps) => {
  return (
    <LabelBase
      {...props}
      className={cn(
        "text-base font-medium text-neutral-800 dark:text-neutral-300",
        className,
      )}
    >
      {required ? (
        <span className="flex items-center">{children} *</span>
      ) : (
        children
      )}
    </LabelBase>
  );
};
