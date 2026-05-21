import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function useMDXComponents(): MDXComponents {
  return {
    // h2: (p) => <h2 className="text-xl font-bold" {...p} />,
    // p: (p) => <p className="leading-7 [&:not(:first-child)]:mt-4" {...p} />,
    img: (p) => (
      <Image
        src={String(p.src)}
        alt={String(p.alt ?? "")}
        width={1280}
        height={630}
        className={cn("rounded-3xl")}
      />
    ),
  };
}
