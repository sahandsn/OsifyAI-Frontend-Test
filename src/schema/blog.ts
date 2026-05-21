// src/schema/blog.ts
import { z } from "zod";

export const resourceItem = z.object({
  label: z.string(),
  url: z.url(),
});

export const tocItemSchema = z.object({
  depth: z.number(),
  value: z.string(),
  id: z.string(),
});

export const zBlogCategory = z.enum([
  "medical",
  "technology",
  "life-style",
  "research-and-education",
  "news-and-updates",
  "general-health",
  "all",
]);

export const zBlogSort = z.enum(["newest", "oldest"]);

export const zBlogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  locale: z.enum(["en", "de", "fa"]),
  sharedSlug: z.string(),
  id: z.coerce.number(),
  slug: z.string(),
  image: z.string(),
  author: z.string(),
  date: z.coerce.date(),
  category: zBlogCategory.exclude(["all"]),
  tags: z.array(z.string()).default([]),
  resources: z.array(resourceItem).default([]),
  related: z.array(z.string()).default([]),
  suggested: z.array(z.string()).default([]),
  approvedBy: z.string().optional(),
  titleGradientIndices: z.array(z.number()).default([]),
});

export type ParsedBlogMetadata = z.infer<typeof zBlogFrontmatterSchema>;
export type TocItem = z.infer<typeof tocItemSchema>;

export type BlogMetadata = Omit<ParsedBlogMetadata, "date"> & { date: string };
export type Blog = {
  metadata: BlogMetadata;
  wordCount: number;
  toc: TocItem[];
};

export const zBlogSearchParamsSchema = z.object({
  // Reuse the category enum from your main schema, but add "all" as an option
  category: zBlogCategory.optional().default("all"),
  sort: zBlogSort.optional().default("newest"),
  // Handle string-to-number conversion for the page param safely
  page: z.coerce.number().int().min(1).positive().optional().default(1),
});
