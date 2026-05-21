import { cn } from "@/lib/utils";

type BlurredFrameProps = Readonly<{
  children: React.ReactNode;
  className?: string; // layout / spacing / width
}>;

export default function BlurredFrame({
  children,
  className,
}: BlurredFrameProps) {
  return (
    <div
      className={cn(
        "w-fit",
        // base frame styles
        "border-[1.2px] border-white/70",
        "bg-white/30",
        "backdrop-blur-lg",
        "shadow-lg",
        // default shape
        "rounded-3xl",
        // allow caller overrides
        className,
      )}
    >
      {children}
    </div>
  );
}
