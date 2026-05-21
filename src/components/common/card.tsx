import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type TProps = {
  Icon?: LucideIcon | IconType;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
} & VariantProps<typeof cardVariants>;

const cardVariants = cva(undefined, {
  variants: {
    size: {
      md: "p-6",
      lg: "p-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export function CardComponent(props: Readonly<TProps>) {
  const {
    children,
    Icon,
    title,
    className,
    headerClassName,
    contentClassName,
    size,
  } = props;
  const childrenOnly = !title && !Icon;

  return (
    <Card
      className={cn(
        "rounded-lg border-[1.5px] border-neutral-400 bg-neutral-50 p-0 shadow-none dark:border-neutral-800 dark:bg-neutral-950",
        className,
      )}
    >
      <CardHeader
        className={cn(
          "flex !pb-0 text-neutral-900",
          cardVariants({ size, className: headerClassName }),
          {
            "!p-0": childrenOnly,
          },
        )}
      >
        <CardTitle className="my-auto flex items-center gap-2 !text-neutral-900 dark:!text-neutral-100">
          {Icon ? <Icon size={24} /> : null}
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent
        className={cn(
          cardVariants({
            size,
            className: contentClassName,
          }),
        )}
      >
        {children}
      </CardContent>
    </Card>
  );
}
