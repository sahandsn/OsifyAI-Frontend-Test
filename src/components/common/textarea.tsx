import { ComponentProps } from "react";
import { Textarea as TextareaBase } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { inputVariants } from "./input";

export const Textarea = ({
  className,
  ...props
}: Readonly<ComponentProps<typeof TextareaBase>>) => {
  return (
    <TextareaBase
      {...props}
      className={cn(inputVariants({ className: cn("h-auto", className) }))}
    />
  );
};
