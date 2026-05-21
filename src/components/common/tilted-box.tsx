import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentType, SVGAttributes } from "react";

export type TiltedBoxProps = Readonly<{
  src?: string | StaticImport;
  Icon?: ComponentType<SVGAttributes<SVGSVGElement>>;
  alt: string;
  rotation?: number;
  className?: string;
  priority?: boolean;
  boxSizeClassName?: string;
  iconSizeClassName?: string;
  iconClassName?: string;
  radiusClassName?: string;
}>;

export default function TiltedBox({
  src,
  Icon,
  alt,
  rotation = 0,
  className,
  priority = false,
  boxSizeClassName = "h-[40px] w-[40px] sm:h-[90px] sm:w-[90px]",
  iconSizeClassName = "h-[24px] w-[24px] sm:h-[52px] sm:w-[52px]",
  iconClassName = "text-neutral-950",
  radiusClassName = "rounded-[10px] sm:rounded-[24px]",
}: TiltedBoxProps) {
  const inverseRotation = -rotation;

  return (
    <div
      className={cn("z-20", className)}
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <div
        className={cn(
          radiusClassName,
          "bg-white dark:border-2 dark:border-neutral-800 dark:bg-neutral-950",
        )}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className={cn("flex items-center justify-center", boxSizeClassName)}
        >
          {/* Render Solar Icon or Image */}
          {Icon ? (
            <div
              style={{ transform: `rotate(${inverseRotation}deg)` }}
              className={cn(iconSizeClassName, iconClassName)}
            >
              <Icon className="h-full w-full" aria-label={alt} />
            </div>
          ) : src ? (
            <Image
              src={src}
              alt={alt}
              width={52}
              height={52}
              priority={priority}
              className={iconSizeClassName}
              style={{ transform: `rotate(${inverseRotation}deg)` }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
