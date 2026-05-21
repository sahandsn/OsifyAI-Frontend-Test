"use client";

import { Blog } from "@/schema/blog";
import { useTranslations } from "next-intl";

export const BlogIntroduction = ({ blog }: Readonly<{ blog: Blog }>) => {
  const t = useTranslations("Mdx");
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{t("introduction")}</h2>
      <p className="text-lg font-normal text-neutral-800 dark:text-neutral-500">
        {blog.metadata.description}
      </p>
    </section>
  );
};
