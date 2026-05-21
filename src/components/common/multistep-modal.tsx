"use client";

import {
  createContext,
  useContext,
  ComponentProps,
  ReactNode,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Button } from "@/components/common/button";
import StepIndicator from "@/components/common/step-indicator";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// CONTEXT
type MultistepModalContextType = {
  next: () => void;
  previous: () => void;
  close: () => void;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  totalSteps: number;
};

const MultistepModalContext = createContext<
  MultistepModalContextType | undefined
>(undefined);

// CUSTOM HOOK
export const useMultistepModal = () => {
  const context = useContext(MultistepModalContext);
  if (!context) {
    throw new Error("useMultistepModal must be used within a MultistepModal");
  }
  return context;
};

type TMultistepModalProps = {
  children: ReactNode;
  steps: ReactNode[];
  dialogProps?: ComponentProps<typeof AlertDialog>;
  className?: string;
  initialIndex?: number;
};

// MAIN COMPONENT
export const MultistepModal = ({
  children,
  steps,
  dialogProps,
  className,
  initialIndex = 0,
}: Readonly<TMultistepModalProps>) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const activeStep = steps[activeIndex];

  const closeRef = useRef<HTMLButtonElement>(null);
  const close = () => {
    closeRef.current?.click();
  };

  const next = () => {
    if (activeIndex === steps.length - 1) {
      close();
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (activeIndex === 0) {
      close();
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const contextValue: MultistepModalContextType = {
    next,
    previous,
    close,
    activeIndex,
    setActiveIndex,
    totalSteps: steps.length,
  };

  return (
    <AlertDialog
      {...dialogProps}
      onOpenChange={(open) => {
        dialogProps?.onOpenChange?.(open);
        setActiveIndex(0);
      }}
    >
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay
          className={cn(
            "fixed inset-0 z-50 bg-[rgba(255,255,255,0.2)] backdrop-blur-[3px]",
            "transition-opacity duration-200",
            "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
          )}
        />

        {/* Modal content */}
        <AlertDialogContent
          data-active-index={activeIndex}
          data-total-steps={steps.length}
          className={cn(
            "min-w-fit",
            "max-h-[100svh] overflow-y-auto",
            "rounded-2xl",
            "bg-neutral-50 shadow-lg dark:bg-neutral-950",
            "border-[1.5px] border-neutral-400 dark:border-neutral-800",
            "px-8 py-6",
            className,
          )}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>
              <StepIndicator
                currentStepIndex={activeIndex}
                totalSteps={steps.length}
              />
            </AlertDialogTitle>
          </AlertDialogHeader>

          <MultistepModalContext.Provider value={contextValue}>
            {activeStep}
          </MultistepModalContext.Provider>

          <AlertDialogCancel ref={closeRef} className="hidden" />
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};

// FOOTER COMPONENT
type TFooterBtn = ComponentProps<typeof Button>;

export const MultistepModalFooter = ({
  next,
  previous,
  className,
}: Readonly<{
  next?: TFooterBtn;
  previous?: TFooterBtn;
  className?: string;
}>) => {
  const t = useTranslations("Patients");
  const { next: nextStep, previous: previousStep } = useMultistepModal();

  return (
    <AlertDialogFooter
      className={cn(
        "mt-6 gap-2 sm:justify-center sm:gap-4 sm:space-x-0",
        className,
      )}
    >
      <Button
        {...previous}
        variant="secondary"
        type="button"
        size={"48"}
        className={cn("w-full sm:w-auto", previous?.className)}
        onClick={previous?.onClick ?? previousStep}
      >
        {previous?.children ?? t("back")}
      </Button>
      <Button
        {...next}
        type="submit"
        size={"48"}
        className={cn("w-full sm:w-auto", next?.className)}
        onClick={next?.onClick ?? nextStep}
      >
        {next?.children ?? t("continue")}
      </Button>
    </AlertDialogFooter>
  );
};
