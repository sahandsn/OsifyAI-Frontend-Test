import { RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ComponentProps, ReactNode, useId } from "react";
import { cn } from "@/lib/utils";

type TSelectCard = StrictOmit<ComponentProps<typeof RadioGroupItem>, "id"> & {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  showRadio?: boolean;
  padding?: number;
};

export function RadioCard(props: Readonly<TSelectCard>) {
  const {
    title,
    description,
    children,
    className,
    showRadio = false,
    padding = 30,
    ...options
  } = props;
  const id = useId();

  return (
    <label htmlFor={id}>
      <Card
        className={cn(
          "relative border-2 transition-all hover:cursor-pointer hover:border-primary/50",
          "[&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5 [&:has([data-state=checked])]:shadow-lg",
          {
            "cursor-not-allowed opacity-50 hover:cursor-not-allowed":
              props.disabled,
          },
          className,
        )}
      >
        <CardHeader
          className={cn("relative", { "pt-0! hidden": !title && !description })}
          style={{ padding }}
        >
          <CardTitle className="flex items-center gap-2">
            <RadioGroupItem
              id={id}
              className={cn({ hidden: !showRadio })}
              {...options}
            />
            {title}
          </CardTitle>
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
        {children ? (
          <CardContent style={{ padding, paddingTop: 0 }}>
            {children}
          </CardContent>
        ) : null}
      </Card>
    </label>
  );
}
