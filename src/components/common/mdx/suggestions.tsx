"use client";

import { useTranslations } from "next-intl";
import { Blog } from "@/schema/blog";
import BlogCard from "../blog-card";
import { cn } from "@/lib/utils";

export const BlogSuggestions = ({
  suggestedBlogs,
}: Readonly<{ suggestedBlogs: Blog[] }>) => {
  const t = useTranslations("Mdx");

  return (
    <section
      className={cn("mt-40 space-y-20", {
        hidden: suggestedBlogs.length === 0,
      })}
    >
      <h2 className="text-center text-4xl font-bold dark:text-neutral-100">
        {t("suggested blogs")}
      </h2>

      <span className="flex grid-cols-3 flex-wrap justify-between gap-6 md:grid">
        {suggestedBlogs.map((blog) => (
          <BlogCard key={blog.metadata.slug} blog={blog} />
        ))}
      </span>
    </section>
  );
};
