"use server";

import { allBlogs } from "@/lib/cached-blogs";
import { Blog, zBlogSearchParamsSchema } from "@/schema/blog";
import { ComponentType } from "react";
import z from "zod";

export type TBlogQueryParams = z.infer<typeof zBlogSearchParamsSchema>;

export const getFilteredBlogs = async (locale: string, query: unknown) => {
  const ITEMS_PER_PAGE = 9;

  // 2. Validate inputs using Zod
  // If validation fails (e.g. invalid category), it falls back to defaults defined in schema
  const parsedQuery = zBlogSearchParamsSchema.safeParse(query);

  // Use valid data, or default to empty/initial state if parsing completely fails
  const { category, sort, page } = parsedQuery.success
    ? parsedQuery.data
    : zBlogSearchParamsSchema.parse({});

  // 3. Get all localized blogs
  const allLocalized = await getAllLocalizedBlogs(locale);
  let filtered = [...allLocalized];

  // 4. Filter (by category)
  // We don't need to check if category is valid here, Zod already guaranteed it
  if (category && category !== "all") {
    filtered = filtered.filter((blog) => blog.metadata.category === category);
  }

  // 5. Sort
  filtered.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();
    return sort === "oldest" ? dateA - dateB : dateB - dateA;
  });

  // 6. Pagination
  const totalBlogs = filtered.length;
  const totalPages = Math.ceil(totalBlogs / ITEMS_PER_PAGE);

  // Ensure page doesn't exceed total pages (e.g., user goes to ?page=100 but there are only 2 pages)
  const validPage = page > totalPages && totalPages > 0 ? totalPages : page;

  const start = (validPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedBlogs = filtered.slice(start, end);

  return {
    blogs: paginatedBlogs,
    pagination: {
      currentPage: validPage,
      totalPages,
      totalBlogs,
    },
  };
};

export const getLocalizedBlogFromSlug = async (
  slug: string,
  locale: string,
) => {
  const blogs = await getAllSameBlogsFromSlug(slug);
  const localizedBlog = blogs.find((blog) => blog.metadata.locale === locale);
  return localizedBlog;
};

export const getAllSameBlogsFromSlug = async (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const allBlogs = await getAllBlogs();

  const blog = allBlogs.find((blog) => blog.metadata.slug === decodedSlug);
  if (!blog) {
    return [];
  }

  const everyBlog = allBlogs.filter(
    (b) => b.metadata.sharedSlug === blog.metadata.sharedSlug,
  );
  return everyBlog;
};

export const getAllBlogs = async () => {
  return allBlogs;
};

export const getAllLocalizedBlogs = async (locale: string) => {
  const allBlogs = await getAllBlogs();
  return allBlogs.filter((blog) => blog.metadata.locale === locale);
};

export const getLocalizedBlogsPaginated = async (
  locale: string,
  offset: number,
  limit: number,
) => {
  const allBlogs = await getAllBlogs();
  const localized = allBlogs.filter((b) => b.metadata.locale === locale);
  const paginated = localized.slice(offset, offset + limit);

  return paginated.map((blog) => ({
    blog,
    sameBlogs: allBlogs.filter(
      (b) => b.metadata.sharedSlug === blog.metadata.sharedSlug,
    ),
  }));
};

export const getFile = async (
  blog: Blog,
): Promise<ComponentType | undefined> => {
  const { default: BlogFile } = await import(
    `@/content/${blog.metadata.sharedSlug}/${blog.metadata.locale}.mdx`
  );
  return BlogFile;
};

export const getLocalizedBlogFromSlugArray = async (
  slugs: string[],
  locale: string,
) => {
  const blogs =
    (await Promise.all(
      slugs.map(async (s) => getLocalizedBlogFromSlug(s, locale)),
    )) ?? [];
  return blogs.filter((b): b is NonNullable<typeof b> => Boolean(b));
};

export const getSpecialBlogs = async (locale: string) => {
  const slugs = ["common-child-nutrition-mistakes-from-infancy-to-adolescence"];

  const blogs = await getLocalizedBlogFromSlugArray(slugs, locale);

  return blogs;
};

export const getBlogFromId = async (id: number) => {
  const allBlogs = await getAllBlogs();
  const blog = allBlogs.find((b) => b.metadata.id === id);
  return blog;
};
