import { ReactNode, RefObject } from "react";

type TSectionLayout = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  ref?: RefObject<HTMLElement | null>;
  parentClassName?: string;
};

export default function SectionLayout(props: Readonly<TSectionLayout>) {
  const { children, title, className, description, id, ref } = props;
  return (
    <section className="flex flex-col gap-10" id={id} ref={ref}>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <h2 className="w-full text-center text-5xl">{title}</h2>
          {description ? (
            <p className="w-full text-center text-lg text-muted-foreground lg:max-w-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div className={className}>{children}</div>
    </section>
  );
}
