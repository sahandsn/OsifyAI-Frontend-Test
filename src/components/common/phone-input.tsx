import * as React from "react";
import * as RPNInput from "react-phone-number-input";
import { inputVariants } from "@/components/common/input";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { IndicatorInput } from "./indicator-input";
import { Phone } from "lucide-react";

type PhoneInputProps = Omit<
  React.ComponentProps<typeof IndicatorInput>,
  "onChange" | "value" | "ref"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  } & VariantProps<typeof inputVariants>;

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<
    React.ComponentRef<typeof RPNInput.default>,
    PhoneInputProps
  >(({ className, onChange, value, ...props }, ref) => {
    return (
      <RPNInput.default
        ref={ref}
        className={cn("flex", className)}
        countrySelectComponent={() => null}
        inputComponent={InputComponent}
        numberInputProps={{
          className: cn("h-full", className),
        }}
        smartCaret={false}
        defaultCountry="IR"
        value={value || undefined}
        onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
        {...props}
      />
    );
  });
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof IndicatorInput> &
    VariantProps<typeof inputVariants>
>(({ className, size, ...props }, ref) => {
  return (
    <IndicatorInput
      {...props}
      dir="ltr"
      innerClassName="placeholder:text-start"
      className={cn(className, inputVariants({ size }))}
      ref={ref}
      endIndicator={<Phone />}
    />
  );
});
InputComponent.displayName = "InputComponent";

export { PhoneInput };
