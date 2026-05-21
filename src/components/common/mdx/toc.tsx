"use client";

import { useHash } from "@/hooks/use-hash";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Blog, TocItem } from "@/schema/blog";
import { useTranslations } from "next-intl";
import { ListLinear } from "solar-icon-set";

export const BlogToc = ({ blog }: Readonly<{ blog: Blog }>) => {
  const t = useTranslations("Mdx");

  return (
    <section className="mt-14 space-y-6">
      <div className="flex items-center gap-2 font-bold text-secondary-500">
        <ListLinear className="rtl:-scale-x-100" size={24} />
        <h2 className="text-xl">{t("toc")}</h2>
      </div>

      <ul className="flex flex-col gap-4">
        {blog.toc.map((item) => (
          <BlogTocItem {...item} blog={blog} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

const BlogTocItem = (props: Readonly<TocItem & { blog: Blog }>) => {
  const hash = useHash();
  const decodedHash = decodeURIComponent(hash);
  const isActive = decodedHash === props.id;

  return (
    <Link
      href={{
        pathname: "/blog/[slug]",
        params: {
          slug: props.blog.metadata.slug,
        },
        hash: props.id,
      }}
      key={props.id}
    >
      <li className="flex items-center gap-4 text-lg font-normal">
        <span
          className={cn(
            "h-10 w-1 rounded-[20px] bg-neutral-400 dark:bg-neutral-800",
            {
              "bg-secondary-500": isActive,
            },
          )}
        />
        <span
          className={cn("text-neutral-800 dark:text-neutral-500", {
            "text-neutral-950 dark:text-neutral-100": isActive,
          })}
        >
          {props.value}
        </span>
      </li>
    </Link>
  );
};
