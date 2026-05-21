"use client";

import { useTranslations } from "next-intl";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../common/button";
import {
  ContrastIcon,
  SunDimIcon,
  LucideIcon,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Download,
  RotateCw,
  FileIcon,
} from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Slider } from "@/components/ui/slider";
import {
  Annotorious,
  ImageAnnotator,
  ShapeType,
  useAnnotator,
} from "@annotorious/react";
import { TImageCoordinates } from "@/types/services";
import { getRectanglePointsInPercentage } from "@/lib/rectangle";
import { useDownloadSave } from "@/hooks/use-download";
import { useNumber } from "@/hooks/use-number";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getFileNameSecureMedia } from "@/utils/response-filename";

type TImageItem = {
  src: string;
  alt: string;
  coordinates?: TImageCoordinates;
};

type TEditableImageDialog = {
  // Single image mode (backward compatibility)
  coordinates?: TImageCoordinates;
  alt?: string;
  src?: string;
  // Multi image mode
  images?: TImageItem[];
  initialIndex?: number;
  children: React.ReactNode;
};

export const EditableImageDialog = (props: Readonly<TEditableImageDialog>) => {
  const {
    alt,
    src,
    coordinates = [],
    images: _images,
    initialIndex = 0,
    children,
  } = props;
  const contentRef = useRef<EditableImageDialogContentHandle>(null);

  // Normalize to array
  const images: TImageItem[] =
    _images ?? (src ? [{ src, alt: alt ?? "", coordinates }] : []);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentImage = images[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    contentRef.current?.resetFilters?.();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    contentRef.current?.resetFilters?.();
  };

  if (!currentImage) return <>{children}</>;

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) {
          setCurrentIndex(initialIndex);
          contentRef.current?.resetFilters?.();
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[100svh] overflow-y-scroll md:max-w-3xl">
        <DialogHeader />
        {/* We recreate Annotorious when image changes to ensure clean state if needed, 
            though typically we want it to persist or update coordinates. 
            For simplicity and avoiding staleness, we can key it. */}
        <Annotorious key={currentImage.src}>
          <EditableImageDialogContent
            image={{
              alt: currentImage.alt,
              src: currentImage.src,
            }}
            coordinates={currentImage.coordinates}
            ref={contentRef}
            // Navigation props
            hasMultiple={images.length > 1}
            onNext={handleNext}
            onPrev={handlePrev}
            currentIndex={currentIndex}
            totalImages={images.length}
          />
        </Annotorious>
      </DialogContent>
    </Dialog>
  );
};

type EditableImageDialogContentHandle = {
  resetFilters: () => void;
};

type EditableImageDialogContentProps = {
  image: {
    src: string;
    alt: string;
  };
  coordinates?: TImageCoordinates;
  hasMultiple?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalImages?: number;
};

export const EditableImageDialogContent = forwardRef<
  EditableImageDialogContentHandle,
  EditableImageDialogContentProps
>(
  (
    {
      image,
      coordinates = [],
      hasMultiple,
      onNext,
      onPrev,
      currentIndex,
      totalImages,
    },
    ref,
  ) => {
    const t = useTranslations("EditableImage");
    const anno = useAnnotator();
    const { downloadSave, isPending } = useDownloadSave();
    const { formatNumber } = useNumber();

    const defaultBrightness = 100;
    const [brightness, setBrightness] = useState<number[]>([defaultBrightness]);

    const defaultContrast = 100;
    const [contrast, setContrast] = useState<number[]>([defaultContrast]);

    const filter = `brightness(${brightness[0]}%) contrast(${contrast[0]}%)`;

    const resetFilters = () => {
      setContrast([defaultContrast]);
      setBrightness([defaultBrightness]);
    };

    useImperativeHandle(ref, () => ({
      resetFilters,
    }));

    useEffect(() => {
      coordinates?.forEach((item) => {
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
    }, [anno, coordinates]);

    return (
      <section className="flex flex-col items-center gap-4 p-2">
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* 1. Controls Row (Sliders + Zoom/Reset) */}
              <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex w-full flex-1 flex-col gap-6 md:flex-row">
                  <SliderControl
                    defaultValue={[defaultBrightness]}
                    max={200}
                    min={0}
                    step={1}
                    onValueChange={setBrightness}
                    value={brightness}
                    Icon={SunDimIcon}
                    title={t("brightness")}
                  />
                  <SliderControl
                    defaultValue={[defaultContrast]}
                    max={200}
                    min={0}
                    step={1}
                    onValueChange={setContrast}
                    value={contrast}
                    Icon={ContrastIcon}
                    title={t("contrast")}
                  />
                </div>

                <div className="flex shrink-0 flex-row items-center gap-4">
                  <div className="flex shrink-0 flex-row items-center gap-2">
                    <Button
                      variant="secondary"
                      shape={"icon"}
                      onClick={() => zoomOut()}
                    >
                      <ZoomOut size={20} />
                    </Button>

                    <Button
                      variant="secondary"
                      shape={"icon"}
                      onClick={() => zoomIn()}
                    >
                      <ZoomIn size={20} />
                    </Button>
                  </div>

                  <Button
                    variant="secondary"
                    shape={"icon"}
                    onClick={() => {
                      resetTransform();
                      resetFilters();
                    }}
                    className="w-fit"
                  >
                    <RotateCw />
                  </Button>

                  <Button
                    variant="primary"
                    shape={"icon"}
                    loading={isPending}
                    onClick={() => {
                      downloadSave({
                        url: image.src,
                      });
                    }}
                    className="w-fit"
                  >
                    <Download />
                  </Button>
                </div>
              </div>

              {/* 2. Navigation Row (Next/Prev) - Only if multiple */}
              {hasMultiple ? (
                <div className="flex w-full items-center justify-between gap-4 rtl:flex-row-reverse">
                  <Button
                    variant="secondary"
                    onClick={onPrev}
                    disabled={!hasMultiple}
                    className="rtl:flex-row-reverse"
                  >
                    <ChevronLeft className="size-4" />
                    {t("previous", { defaultMessage: "Previous" })}
                  </Button>
                  <span className="text-sm text-neutral-500">
                    {currentIndex !== undefined && totalImages !== undefined
                      ? `${formatNumber(currentIndex + 1)} / ${formatNumber(totalImages)}`
                      : ""}
                  </span>
                  <Button
                    variant="secondary"
                    onClick={onNext}
                    disabled={!hasMultiple}
                    className="rtl:flex-row-reverse"
                  >
                    {t("next", { defaultMessage: "Next" })}
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              ) : null}

              {/* 3. Image Area */}
              <TransformComponent contentClass="!max-w-full hover:cursor-move w-full flex justify-center bg-black/5 min-h-[300px]">
                <ImageAnnotator
                  key={image.src}
                  autoSave={true}
                  style={{
                    fill: "#2662D9",
                    fillOpacity: 0.1,
                    stroke: "#2662D9",
                    strokeOpacity: 0.5,
                  }}
                  drawingEnabled={false}
                >
                  <Avatar className="m-auto h-fit w-fit rounded-none">
                    <AvatarImage
                      style={{ filter }}
                      src={image.src}
                      alt={image.alt}
                      className="mx-auto max-h-[60vh] max-w-full rounded-none object-contain hover:cursor-move"
                    />
                    <AvatarFallback className="!m-auto !size-[150px] rounded-none bg-primary-100 text-foreground dark:bg-primary-500">
                      <FileIcon />
                    </AvatarFallback>
                  </Avatar>
                </ImageAnnotator>
              </TransformComponent>

              <p className="line-clamp-1 text-sm text-muted-foreground">
                {getFileNameSecureMedia(image.src)}
              </p>
            </>
          )}
        </TransformWrapper>
      </section>
    );
  },
);

EditableImageDialogContent.displayName = "EditableImageDialogContent";

const SliderControl = ({
  Icon,
  title,
  ...rest
}: Readonly<
  { Icon: LucideIcon; title: string } & React.ComponentProps<typeof Slider>
>) => {
  return (
    <div className="flex w-full flex-1 items-center gap-2">
      <label
        htmlFor={title}
        className="text-sm font-medium text-muted-foreground"
      >
        <Icon size={22} aria-label={title} />
      </label>
      <Slider id={title} {...rest} className="w-full" />
    </div>
  );
};
