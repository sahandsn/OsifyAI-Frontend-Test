import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";
import { Arrow } from "@radix-ui/react-popover";

type TInfoPopover = {
  children: ReactNode;
  content: ReactNode;
  contentProps?: ComponentProps<typeof PopoverContent>;
  arrowWidth?: number;
  arrowHeight?: number;
  className?: string;
};

export const InfoPopover = (props: Readonly<TInfoPopover>) => {
  const {
    children,
    content,
    contentProps,
    arrowWidth = 70,
    arrowHeight = 20,
    className,
  } = props;

  return (
    <Popover>
      <PopoverTrigger
        type="button"
        className={cn("hover:cursor-pointer", className)}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent
        {...contentProps}
        sideOffset={6}
        className={cn(
          "relative z-[9999] max-w-fit rounded-[12px] bg-primary-100 p-4 text-neutral-900 dark:bg-primary-950 dark:text-neutral-100",
          contentProps?.className,
        )}
      >
        <Arrow
          width={arrowWidth}
          height={arrowHeight}
          className="fill-primary-100 dark:fill-primary-950"
          style={{ shapeRendering: "geometricPrecision" }}
        />
        {content}
      </PopoverContent>
    </Popover>
  );
};
