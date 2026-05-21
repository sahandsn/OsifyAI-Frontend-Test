import { ComponentProps, ReactNode } from "react";
import { Input, inputVariants } from "./input";
import { InputGroup, InputGroupAddon } from "../ui/input-group";
import { cn } from "@/lib/utils";
import { CustomInputGroupInput } from "./custom-input-group";

type TIndicatorInput = ComponentProps<typeof Input> & {
  endIndicator?: ReactNode;
  startIndicator?: ReactNode;
  innerClassName?: string;
};

export const IndicatorInput = (props: Readonly<TIndicatorInput>) => {
  const {
    className,
    size,
    endIndicator,
    startIndicator,
    innerClassName,
    ...inputProps
  } = props;

  return (
    <InputGroup
      aria-disabled={inputProps.disabled}
      className={cn("!outline-0 !ring-0", inputVariants({ className, size }))}
    >
      <CustomInputGroupInput
        {...inputProps}
        className={cn("p-0", innerClassName)}
      />
      <InputGroupAddon
        align={"inline-end"}
        className={cn({
          hidden: !endIndicator,
        })}
      >
        {endIndicator}
      </InputGroupAddon>
      <InputGroupAddon
        align={"inline-start"}
        className={cn({
          hidden: !startIndicator,
        })}
      >
        {startIndicator}
      </InputGroupAddon>
    </InputGroup>
  );
};
