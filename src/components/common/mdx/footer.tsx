"use client";

import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { Blog, resourceItem } from "@/schema/blog";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import z from "zod";

export const BlogFooter = ({ blog }: Readonly<{ blog: Blog }>) => {
  const t = useTranslations("Mdx");
  return (
    <section className="mt-16 space-y-6">
      <BlogFooterStringItem list={blog.metadata.tags} title={t("tags")} />

      <BlogFooterLinkItem
        list={blog.metadata.resources}
        title={t("resources")}
      />
    </section>
  );
};

const BlogFooterStringItem = ({
  list,
  title,
}: Readonly<{ title: string; list: string[] }>) => {
  return (
    <div className="flex items-start gap-4">
      <p className="text-base font-medium text-neutral-950 dark:text-neutral-100">
        {title}
      </p>
      <span className="flex flex-wrap items-center gap-2">
        {list.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="bg-primary-50 px-2.5 py-1 text-center text-primary-500 dark:bg-primary-900 dark:text-primary-100"
          >
            {`#${item}`}
          </Badge>
        ))}
      </span>
    </div>
  );
};

const BlogFooterLinkItem = ({
  list,
  title,
}: Readonly<{ title: string; list: z.infer<typeof resourceItem>[] }>) => {
  return (
    <div className="flex items-start gap-4">
      <p className="text-base font-medium text-neutral-950 dark:text-neutral-100">
        {title}
      </p>
      <span className="flex flex-wrap items-center gap-2">
        {list.map((item) => (
          <Link
            key={item.url}
            // @ts-expect-error external link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge
              variant="secondary"
              className="flex items-center gap-1 bg-primary-50 px-2.5 py-1 text-center text-primary-500 dark:bg-primary-900 dark:text-primary-100 ltr:flex-row-reverse"
            >
              <ArrowUpRight size={16} />
              {item.label}
            </Badge>
          </Link>
        ))}
      </span>
    </div>
  );
};
