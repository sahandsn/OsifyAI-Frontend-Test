import { cn } from "@/lib/utils";

export type TStepIndicatorProps = {
  currentStepIndex: number;
  totalSteps: number;
};

const StepIndicator = ({
  currentStepIndex,
  totalSteps,
}: Readonly<TStepIndicatorProps>) => {
  return (
    <div className={cn("flex w-full items-center justify-center gap-1")}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = currentStepIndex >= index;

        return (
          <span
            key={index}
            className={cn("h-1 w-9 rounded-[8px]", {
              "bg-primary-500": isActive,
              "bg-neutral-400 dark:bg-neutral-700": !isActive,
            })}
          />
        );
      })}
    </div>
  );
};

export default StepIndicator;
