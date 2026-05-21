import { cn } from "@/lib/utils";

type TIframe = {
  src: string;
  className?: string;
};

export default function Iframe(props: Readonly<TIframe>) {
  const { src, className } = props;
  return (
    <section>
      <iframe
        className={cn(
          "m-auto aspect-video w-full rounded-lg md:w-3/4",
          className,
        )}
        src={src}
        allowFullScreen={true}
        title={src}
      ></iframe>
    </section>
  );
}
