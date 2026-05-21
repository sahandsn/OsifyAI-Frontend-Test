"use client";

import Image, { ImageProps } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { RefObject, useEffect, useMemo } from "react";
import { ImageAnnotator, ShapeType, useAnnotator } from "@annotorious/react";
import "@annotorious/react/annotorious-react.css";
import { TImageCoordinates } from "@/types/services";
import { getRectanglePointsInPercentage } from "@/lib/rectangle";

export default function EditableImage(
  props: Readonly<
    StrictOmit<ImageProps, "src"> & {
      externalSrc: string;
      coordinates?: TImageCoordinates;
      triggerBtnRef?: RefObject<HTMLButtonElement | null>;
    }
  >,
) {
  const { coordinates = [], externalSrc: src, alt, className, ...rest } = props;
  const anno = useAnnotator();

  // Memoize the coordinates value
  const memoizedCoordinates = useMemo(
    () => coordinates,
    // Dependency array: Re-calculate only when the stringified data changes.
    // This effectively performs a deep comparison.

    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/use-memo
    [JSON.stringify(coordinates)],
  );

  useEffect(() => {
    if (anno && memoizedCoordinates) {
      anno.clearAnnotations();

      memoizedCoordinates?.forEach((item) => {
        const [topLeft, topRight, bottomLeft] =
          getRectanglePointsInPercentage(item);
        anno?.addAnnotation({
          target: {
            selector: {
              type: ShapeType.RECTANGLE,
              geometry: {
                bounds: {
                  minX: 0,
                  maxX: 0,
                  minY: 0,
                  maxY: 0,
                },
                // // from start point of x (top-left)
                x: `${topLeft[0]}%`,
                // x stretches to the right
                w: `${topRight[0] - topLeft[0]}%`,
                // from start point of y (top-right)
                y: `${topLeft[1]}%`,
                // y stretches to the down
                h: `${bottomLeft[1] - topLeft[1]}%`,
              },
            },
            annotation: "some string",
          },
        });
      });
    }
  }, [anno, memoizedCoordinates]);

  return (
    <aside className="relative flex h-full w-full">
      <ImageAnnotator
        containerClassName="relative overflow-hidden p-0 border-none w-full h-full pointer-events-none"
        autoSave={true}
        style={{
          fill: "#2662D9",
          fillOpacity: 0.1,
          stroke: "#2662D9",
          strokeOpacity: 0.5,
        }}
        drawingEnabled={false}
      >
        <AspectRatio className="relative overflow-hidden border-none p-0">
          <Image
            alt={alt}
            src={src}
            quality={100}
            className={cn("object-contain", className)}
            sizes="100%"
            {...rest}
          />
        </AspectRatio>
      </ImageAnnotator>
    </aside>
  );
}
