import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Blog } from "@/schema/blog";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const BlogRelated = ({
  suggestedBlogs,
}: Readonly<{ suggestedBlogs: Blog[] }>) => {
  const t = useTranslations("Mdx");

  return (
    <section
      className={cn("mt-4 hidden space-y-4 md:block", {
        "hidden md:hidden": suggestedBlogs.length === 0,
      })}
    >
      <p className="text-lg font-semibold text-neutral-950 dark:text-neutral-100">
        {t("related")}
      </p>

      <div className="flex grid-cols-2 flex-wrap gap-4 md:grid">
        {suggestedBlogs.map((blog) => (
          <Link
            key={blog.metadata.slug}
            href={{
              pathname: "/blog/[slug]",
              params: {
                slug: blog.metadata.slug,
              },
            }}
          >
            <article className="flex flex-col gap-2">
              <Image
                alt={blog.metadata.title}
                src={blog.metadata.image}
                width={185}
                height={104}
                className="rounded-xl"
              />
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {blog.metadata.title}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
