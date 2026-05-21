"use client";

import BlogCard from "@/components/common/blog-card";
import { H2 } from "@/components/common/typography";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Blog } from "@/schema/blog";
import { useTranslations } from "next-intl";

const Blogs = ({
  blogs,
}: Readonly<{
  blogs: Blog[];
}>) => {
  const t = useTranslations("landing.blogs");

  return (
    <section
      id="blogs"
      aria-labelledby="blogs-title"
      className={cn("flex flex-col gap-8")}
    >
      {/* title */}
      <H2
        id="blogs-title"
        className={cn(
          "p-0 text-center text-[24px] font-bold leading-[32px] tracking-[0%] text-neutral-950 dark:text-neutral-100 lg:text-[40px] lg:leading-[56px]",
        )}
      >
        {t("title")}
      </H2>

      {/* posts container */}
      <section className={cn("flex grid-cols-3 flex-col gap-6 md:grid")}>
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.metadata.slug} />
        ))}
      </section>

      <Link href="/" className="self-end">
        {t("see_all")}
      </Link>
    </section>
  );
};

export default Blogs;
