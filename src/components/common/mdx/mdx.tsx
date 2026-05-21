import { Blog } from "@/schema/blog";
import { ComponentType } from "react";
import { BlogJsonLd } from "./json-ld";
import { BlogHeader } from "./header";
import { BlogIntroduction } from "./introduction";
import { BlogFooter } from "./footer";
import { BlogSuggestions } from "./suggestions";
import { BlogShare } from "./share";
import { BlogRelated } from "./related";
import { BlogToc } from "./toc";
import { cn } from "@/lib/utils";

export function Mdx({
  blog,
  File,
  suggestedBlogs,
  relatedBlogs,
}: Readonly<{
  blog: Blog;
  File: ComponentType;
  relatedBlogs: Blog[];
  suggestedBlogs: Blog[];
}>) {
  return (
    <section className="mb-36 mt-20 md:mt-40">
      <BlogJsonLd blog={blog} />

      <BlogHeader blog={blog} />

      <section className="mt-16 flex grid-cols-[798px_1fr] flex-col gap-12 lg:grid">
        <section>
          <BlogIntroduction blog={blog} />

          <BlogToc blog={blog} />

          <main
            className={cn(
              "prose mt-14 w-full max-w-none",
              // links
              "prose-a:text-inherit prose-a:no-underline",
              // list items
              "prose-li:text-neutral-800 prose-li:marker:text-neutral-800 prose-li:dark:text-neutral-500 prose-li:marker:dark:text-neutral-500",
              // texts
              "prose-p:font-normal prose-p:text-neutral-800 prose-p:dark:text-neutral-500",
              // headings
              "[&_[id]]:scroll-mt-13 prose-headings:font-bold prose-headings:text-neutral-950 prose-h2:text-lg prose-headings:dark:text-neutral-100 prose-h2:md:text-xl md:[&_[id]]:scroll-mt-24",
              // blockquotes
              "prose-blockquote:p:before:content-none prose-blockquote:p:after:content-none prose-blockquote:border-neutral-400 prose-blockquote:not-italic prose-blockquote:dark:border-neutral-800",
              // bold text
              "prose-strong:font-semibold prose-strong:text-neutral-900 prose-strong:dark:text-neutral-100",
              // table
              "prose-table:border-separate prose-table:border-spacing-0",
              "prose-table:w-full prose-table:overflow-hidden prose-table:rounded-lg",
              "prose-table:border prose-table:border-neutral-400 prose-table:dark:border-neutral-800",
              "prose-thead:bg-neutral-100 prose-thead:dark:bg-neutral-900/50",
              "prose-th:border-b prose-th:border-neutral-400 prose-th:dark:border-neutral-800",
              "prose-td:border-b prose-td:border-neutral-400 prose-td:dark:border-neutral-800",
              "prose-th:p-4 prose-th:text-start prose-th:font-semibold prose-th:text-neutral-900 prose-th:dark:text-neutral-100",
              "prose-td:p-4 prose-td:text-neutral-800 prose-td:dark:text-neutral-500",
              "prose-tr:even:bg-neutral-50/30 prose-tr:even:dark:bg-neutral-900/30",
            )}
          >
            <File />
          </main>

          <BlogFooter blog={blog} />
        </section>

        <aside className="top-28 mt-10 h-fit space-y-8 lg:sticky">
          <BlogRelated suggestedBlogs={relatedBlogs} />

          <BlogShare blog={blog} />
        </aside>
      </section>

      <BlogSuggestions suggestedBlogs={suggestedBlogs} />
    </section>
  );
}
