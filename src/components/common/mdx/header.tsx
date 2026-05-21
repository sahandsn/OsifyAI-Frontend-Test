"use client";

import { Badge } from "@/components/ui/badge";
import { BlogBreadcrumb } from "./breadcrumb";
import { Blog } from "@/schema/blog";
import { useTranslations } from "next-intl";
import { BadgeCheck } from "lucide-react";
import { useDate } from "@/hooks/use-date";
import { parseISO } from "date-fns";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Halo from "../halo";
import { getReadingTimeMinute } from "@/utils/wpm";
import { useNumber } from "@/hooks/use-number";

export function BlogHeader({
  blog,
}: Readonly<{
  blog: Blog;
}>) {
  const t = useTranslations("Mdx.category");
  const tx = useTranslations("Mdx");
  const { format, dateFormat } = useDate();
  const { formatNumber } = useNumber();
  const titleWords = blog.metadata.title.split(" ");
  const gradientIndices = blog.metadata.titleGradientIndices ?? [];
  const readingTimeMin = getReadingTimeMinute(
    blog.wordCount,
    blog.metadata.locale,
  );

  return (
    <section className="relative flex flex-col gap-20">
      <BlogBreadcrumb blog={blog} />

      <div className="space-y-5 text-center text-base">
        <h1 className="text-2xl font-bold text-neutral-950 dark:text-neutral-100 md:text-5xl">
          {titleWords.map((word, index) => {
            const isGradient = gradientIndices.includes(index);

            return (
              <span
                key={`${word}-${index}`}
                className={cn({
                  "bg-[linear-gradient(224.02deg,#4186F6_0%,#B9D7FE_101.78%)] bg-clip-text text-transparent":
                    isGradient,
                })}
              >
                {word}
                {index < titleWords.length - 1 ? " " : ""}
              </span>
            );
          })}
        </h1>

        <Badge
          variant="secondary"
          className="bg-primary-50 px-2.5 py-1 text-primary-500 dark:bg-primary-900 dark:text-primary-100"
        >
          {t(blog.metadata.category)}
        </Badge>

        {blog.metadata.approvedBy ? (
          <div className="flex items-center justify-center gap-2">
            <BadgeCheck className="text-primary-500" size={24} />
            {tx("approvedBy", { name: blog.metadata.approvedBy })}
          </div>
        ) : null}

        <div className="flex flex-col items-center justify-center gap-2 text-neutral-700 md:flex-row md:flex-wrap">
          <span>{tx("author", { name: blog.metadata.author })}</span>
          <Separator
            orientation="vertical"
            className="hidden bg-neutral-700 md:block"
          />
          <span>
            {tx("published-date", {
              date: format(parseISO(blog.metadata.date), dateFormat),
            })}
          </span>
          <Separator
            orientation="vertical"
            className="hidden bg-neutral-700 md:block"
          />
          <span>{tx("read-time", { time: formatNumber(readingTimeMin) })}</span>
        </div>
      </div>

      <Image
        src={blog.metadata.image}
        alt={blog.metadata.title}
        width={1280}
        height={720}
        className="h-auto w-full rounded-3xl object-cover"
        priority
      />

      <Halo
        light={{
          color: "#FECCAA",
          spread: 100,
        }}
        dark={{
          color: "#7C3D12",
          spread: 100,
        }}
        className="absolute -left-28 top-40 z-10 opacity-50"
      />
    </section>
  );
}
