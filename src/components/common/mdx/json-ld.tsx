import {
  BlogPosting,
  CreativeWork,
  ImageObject,
  Organization,
  Person,
  WithContext,
} from "schema-dts";
import serialize from "serialize-javascript";
import { env } from "@/env";
import { getPathname } from "@/i18n/navigation";
import { getTitle } from "@/constants/assets";
import { Blog, zBlogCategory } from "@/schema/blog";
import { getReadingTimeMinute } from "@/utils/wpm";
import z from "zod";

export const BlogJsonLd = ({ blog }: Readonly<{ blog: Blog }>) => {
  const publisher: Organization = {
    "@type": "Organization",
    name: getTitle(blog.metadata.locale),
    url: env.NEXT_PUBLIC_ROOT_URL,
    logo: {
      "@type": "ImageObject",
      url: new URL("/branding/logo.png", env.NEXT_PUBLIC_ROOT_URL).href,
    } satisfies ImageObject,
  };

  const author: Person = {
    "@type": "Person",
    name: blog.metadata.author,
    url: env.NEXT_PUBLIC_ROOT_URL,
  };

  const url = new URL(
    getPathname({
      href: {
        pathname: "/blog/[slug]",
        params: { slug: blog.metadata.slug },
      },
      locale: blog.metadata.locale,
    }),
    env.NEXT_PUBLIC_ROOT_URL,
  ).href;

  const readingTimeMin = getReadingTimeMinute(
    blog.wordCount,
    blog.metadata.locale,
  );

  const getCitationType = (category: z.infer<typeof zBlogCategory>) => {
    switch (category) {
      case "medical":
        return "MedicalScholarlyArticle";
      case "technology":
        return "TechArticle";
      case "life-style":
        return "MedicalWebPage";
      case "research-and-education":
        return "ScholarlyArticle";
      case "news-and-updates":
        return "NewsArticle";
      case "general-health":
        return "HealthTopicContent";
      default:
        return "MedicalWebPage";
    }
  };
  const citation: CreativeWork[] = blog.metadata.resources?.map((source) => ({
    "@type": getCitationType(blog.metadata.category),
    name: source.label,
    url: source.url,
  }));

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": new URL(`/api/blog/${blog.metadata.id}`, env.NEXT_PUBLIC_ROOT_URL)
      .href,
    headline: blog.metadata.title,
    description: blog.metadata.description,
    datePublished: new Date(blog.metadata.date).toISOString(),
    url,
    mainEntityOfPage: url,
    author,
    publisher,
    image: new URL(blog.metadata.image, env.NEXT_PUBLIC_ROOT_URL).href,
    articleSection: blog.metadata.category,
    keywords: blog.metadata.keywords,
    wordCount: blog.wordCount,
    timeRequired: `PT${readingTimeMin}M`,
    inLanguage: blog.metadata.locale,
    citation,
    identifier: blog.metadata.id.toString(),
    ...(blog.metadata.approvedBy && {
      reviewedBy: {
        "@type": "Person",
        name: blog.metadata.approvedBy,
      } satisfies Person,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serialize(jsonLd, { isJSON: true }),
      }}
    />
  );
};
