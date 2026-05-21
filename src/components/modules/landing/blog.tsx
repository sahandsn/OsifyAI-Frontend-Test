"use client";

import { Blog, zBlogCategory, zBlogSort } from "@/schema/blog";
import { ContactUsForm } from "./contact-us-form";
import BlogCard from "@/components/common/blog-card";
import { parseAsInteger, parseAsStringLiteral, useQueryState } from "nuqs";
import TiltedBox from "@/components/common/tilted-box";
import documentText from "#/assets/icons/document.svg";
import { useLocale, useTranslations } from "next-intl";
import { ResponsiveTabControl } from "@/components/common/responsive-tab-control";
import { CommonSelect } from "@/components/common/common-select";
import { Tabs } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Button } from "@/components/common/button";
import Halo from "@/components/common/halo";
import { inputVariants } from "@/components/common/input";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getPathname, Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useDate } from "@/hooks/use-date";
import { parseISO } from "date-fns";
import { useIsMobile } from "@/hooks/use-mobile";
import z from "zod";
import { useLocalStorage, useClickOutside } from "@mantine/hooks";
import { buttonVariants } from "@/components/common/button";
import { TLink } from "@/types/general";
import { useNumber } from "@/hooks/use-number";
import { generatePagination } from "@/utils/pagination";
import { getTitle } from "@/constants/assets";
import serializeJavascript from "serialize-javascript";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const BlogPageComponent = ({
  allBlogs,
  filteredBlogs: { blogs, pagination },
  specialBlogs,
}: Readonly<{
  filteredBlogs: {
    blogs: Blog[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalBlogs: number;
    };
  };
  allBlogs: Blog[];
  specialBlogs: Blog[];
}>) => {
  const t = useTranslations("landing.blogs");
  const locale = useLocale();
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("title"),
    description: t("title"),
    url: new URL(
      getPathname({ href: "/blogs", locale }),
      process.env.NEXT_PUBLIC_ROOT_URL,
    ).href,
    numberOfItems: blogs.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    publisher: {
      "@type": "Organization",
      name: getTitle(locale),
      logo: {
        "@type": "ImageObject",
        url: new URL("/branding/logo.png", process.env.NEXT_PUBLIC_ROOT_URL)
          .href,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: blogs.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: new URL(
          getPathname({
            href: {
              pathname: "/blog/[slug]",
              params: { slug: blog.metadata.slug },
            },
            locale,
          }),
          process.env.NEXT_PUBLIC_ROOT_URL,
        ).href,
        item: {
          "@type": "BlogPosting",
          headline: blog.metadata.title,
          description: blog.metadata.description,
          author: {
            "@type": "Person",
            name: blog.metadata.author || "Editorial Team",
          },
          datePublished: blog.metadata.date,
          dateModified: blog.metadata.date,
          image: blog.metadata.image
            ? new URL(blog.metadata.image, process.env.NEXT_PUBLIC_ROOT_URL)
                .href
            : undefined,
          publisher: {
            "@type": "Organization",
            name: getTitle(locale),
            logo: {
              "@type": "ImageObject",
              url: new URL(
                "/branding/logo.png",
                process.env.NEXT_PUBLIC_ROOT_URL,
              ).href,
            },
          },
          keywords: blog.metadata.tags?.join(", "),
        },
      })),
    },
  };
  return (
    <main className="mb-36 space-y-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJavascript(jsonLdData, { isJSON: true }),
        }}
      />

      <BlogHeader allBlogs={allBlogs} />
      <BlogSpecialSection specialBlogs={specialBlogs} />
      <BlogList blogs={blogs} pagination={pagination} />
      <ContactUsForm />
    </main>
  );
};

const BlogList = ({
  blogs,
  pagination,
}: Readonly<{
  blogs: Blog[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalBlogs: number;
  };
}>) => {
  const t = useTranslations("Blogs");
  const tx = useTranslations("Mdx");
  const { formatNumber } = useNumber();

  const [sort, setSort] = useQueryState(
    "sort",
    parseAsStringLiteral(zBlogSort.options)
      .withOptions({ shallow: false })
      .withDefault("newest"),
  );

  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withOptions({ shallow: false }).withDefault(1),
  );

  const pageNumbers = generatePagination(
    pagination.currentPage,
    pagination.totalPages,
  );

  const [category, setCategory] = useQueryState(
    "category",
    parseAsStringLiteral(zBlogCategory.options)
      .withOptions({ shallow: false })
      .withDefault("all"),
  );

  const changeCategory = (val: string) => {
    const parsed = zBlogCategory.safeParse(val);

    if (parsed.success) {
      setCategory(parsed.data);
    } else {
      console.error("Invalid category option selected:", val);
    }
  };
  return (
    <section
      id="blog-list"
      aria-labelledby="blog-list-title"
      className="space-y-20"
    >
      <Tabs value={category} onValueChange={changeCategory}>
        <div className="flex w-full items-center justify-between space-x-1 self-center">
          <ResponsiveTabControl
            options={[...zBlogCategory.options].reverse().map((option) => ({
              key: option,
              label: tx(`category.${option}`),
            }))}
            value={category}
            onValueChange={changeCategory}
          />

          <div className="w-auto">
            <CommonSelect
              options={zBlogSort.options.map((option) => ({
                key: option,
                label: t(`sort.${option}`),
              }))}
              value={sort}
              onValueChange={(val) => {
                const parsed = zBlogSort.safeParse(val);

                if (parsed.success) {
                  setSort(parsed.data);
                } else {
                  console.error("Invalid sort option selected:", val);
                }
              }}
            />
          </div>
        </div>
      </Tabs>

      <div className="space-y-4 text-center">
        <h2
          id="blog-list-title"
          className="text-4xl font-bold text-primary-500"
        >
          {t("all blogs - title")}
        </h2>
        <p className="text-neutral-800 dark:text-neutral-300">
          {t("all blogs - description")}
        </p>
      </div>
      {blogs.length ? (
        <>
          <div className="flex grid-cols-3 flex-wrap justify-start gap-8 md:grid">
            {blogs.map((blog) => (
              <BlogCard key={blog.metadata.slug} blog={blog} />
            ))}
          </div>

          <Pagination>
            <PaginationContent>
              {pageNumbers.map((p) => {
                if (p === "ellipsis") {
                  return <PaginationEllipsis key={p} />;
                }
                const isActive = p === page;
                return (
                  <Button
                    key={p}
                    size={"40"}
                    shape={"icon"}
                    variant={isActive ? "primary" : "text"}
                    onClick={() => {
                      setPage(p);
                    }}
                  >
                    {formatNumber(p)}
                  </Button>
                );
              })}
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <p className="text-center text-neutral-800 dark:text-neutral-400">
          {t("empty list")}
        </p>
      )}
    </section>
  );
};

const BlogHeader = ({ allBlogs }: Readonly<{ allBlogs: Blog[] }>) => {
  const t = useTranslations("ContactUs");
  const tx = useTranslations("Blogs");

  return (
    <section
      id="blog-header"
      aria-labelledby="blog-header-title"
      className="relative z-10 mx-auto mb-32 mt-32 md:mt-48"
    >
      {/* Decorative Tilted Icon */}
      <TiltedBox
        src={documentText}
        alt="document-text-icon"
        boxSizeClassName="h-[54px] w-[54px]"
        iconSizeClassName="h-[32px] w-[32px]"
        radiusClassName="rounded-[15.5px] shadow-[0px_0px_27.8767px_rgba(163,163,163,0.12)] dark:shadow-[0px_0px_27.8767px_rgba(163,163,163,0.24)]"
        className="absolute -top-[10%] right-[12%] hidden lg:block"
        rotation={16}
      />

      <Halo
        light={{
          color: "#BFD7FE",
          spread: 150,
        }}
        dark={{
          color: "#1E478A",
          spread: 150,
        }}
        className="absolute -right-20 -top-40 opacity-70"
      />

      <Halo
        light={{
          color: "#FFE6D5",
          spread: 150,
        }}
        dark={{
          color: "#432007",
          spread: 150,
        }}
        className="absolute -left-20 bottom-40 opacity-70"
      />

      {/* Header */}
      <div className="mx-auto mb-[72px] mt-28 items-center justify-center text-center md:mt-60 lg:w-[1000px]">
        <span className="text-2xl font-semibold text-secondary-500">
          {tx("blogs")}
        </span>
        <h1
          id="blog-header-title"
          className="mb-6 mt-4 text-[24px] font-bold text-neutral-950 dark:text-neutral-100 lg:text-5xl"
        >
          {tx.rich("title", {
            span: (children) => (
              <span className="bg-gradient-to-b from-[#4186F6] to-[#B9D7FE] bg-clip-text text-transparent">
                {children}
              </span>
            ),
          })}
        </h1>
        <p className="text-[16px] font-normal text-neutral-800 dark:text-neutral-300">
          {t("description")}
        </p>
      </div>

      <BlogSearch allBlogs={allBlogs} />
    </section>
  );
};

const BlogSearch = ({ allBlogs }: Readonly<{ allBlogs: Blog[] }>) => {
  const tx = useTranslations("Blogs");
  const t = useTranslations("Mdx");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  const popularSearches: z.infer<typeof zBlogCategory>[] = [
    "general-health",
    "technology",
  ];

  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>({
    key: "search-history",
    defaultValue: [],
  });
  const history = allBlogs.filter((blog) =>
    searchHistory.includes(blog.metadata.sharedSlug),
  );
  const addHistory = (value: string) => {
    setSearchHistory([...new Set([...searchHistory, value])]);
  };
  const filtered = useBlogSearchAutoComplete({ allBlogs, query: search });

  return (
    <section ref={ref} className="relative mx-auto max-w-[662px] space-y-1">
      <InputGroup
        className={cn("!outline-0 !ring-0", inputVariants({ size: "48" }))}
      >
        <InputGroupAddon align={"inline-end"}>
          <Search />
        </InputGroupAddon>

        <InputGroupInput
          onFocus={() => {
            setOpen(true);
          }}
          placeholder={tx("search - placeholder")}
          value={search}
          onChange={(e) => {
            const val = e.target.value;
            setSearch(val);
          }}
        />
      </InputGroup>
      <div
        className={cn(
          "absolute w-full rounded-2xl border-[1.2px] border-neutral-400 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950",
          {
            hidden: !open || (search && filtered.length === 0),
          },
        )}
      >
        {search ? (
          <div
            className={cn("flex flex-col gap-5", {
              hidden: filtered.length === 0,
            })}
          >
            {filtered.map((item) => (
              <Link
                onClick={() => {
                  addHistory(item.metadata.sharedSlug);
                  setOpen(false);
                }}
                href={{
                  pathname: "/blog/[slug]",
                  params: {
                    slug: item.metadata.slug,
                  },
                }}
                key={item.metadata.slug}
                className="space-y-2.5 rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-900"
              >
                <p className="text-neutral-900 dark:text-neutral-100">
                  {item.metadata.title}
                </p>
                <p className="text-neutral-700 dark:text-neutral-500">
                  {tx.rich("in category - name", {
                    name: t(`category.${item.metadata.category}`),
                    span: (chunk) => (
                      <span className="text-primary-500">{chunk}</span>
                    ),
                  })}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {history.length ? (
              <BlogSearchSuggestion
                data={history.map((item) => ({
                  title: item.metadata.title,
                  value: item.metadata.sharedSlug,
                  url: {
                    pathname: "/blog/[slug]",
                    params: {
                      slug: item.metadata.slug,
                    },
                  },
                }))}
                onSelect={(value) => {
                  addHistory(value);
                  setOpen(false);
                }}
                title={tx("recent searches")}
              />
            ) : null}

            <BlogSearchSuggestion
              data={popularSearches.map((item) => ({
                title: t(`category.${item}`),
                value: item,
                url: {
                  pathname: "/blogs",
                  query: {
                    category: item,
                  },
                },
              }))}
              onSelect={() => {
                setOpen(false);
              }}
              title={tx("popular searches")}
            />
          </div>
        )}
      </div>
    </section>
  );
};

const BlogSearchSuggestion = ({
  data,
  title,
  onSelect,
}: Readonly<{
  title: string;
  data: {
    title: string;
    value: string;
    url: TLink;
  }[];
  onSelect?: (value: string) => void;
}>) => {
  return (
    <div className="space-y-2">
      <p className="text-lg font-medium dark:text-neutral-100">{title}</p>
      <span className="flex items-center gap-2">
        {data.map((item) => (
          <Link
            onClick={() => {
              onSelect?.(item.value);
            }}
            key={item.value}
            className={cn(
              buttonVariants({
                variant: "secondary",
              }),
              "min-w-0 rounded-[8px] border-neutral-400 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-500",
            )}
            href={item.url}
          >
            <p className="truncate"> {item.title}</p>
          </Link>
        ))}
      </span>
    </div>
  );
};

const useBlogSearchAutoComplete = ({
  allBlogs,
  query,
}: Readonly<{
  allBlogs: Blog[];
  query: string;
}>) => {
  const filtered = allBlogs.filter((blog) =>
    blog.metadata.title.toLowerCase().includes(query.toLowerCase()),
  );
  return filtered.slice(0, 5);
};

const BlogSpecialCard = ({
  blog,
  variant,
}: Readonly<{ blog: Blog; variant: "large" | "small" }>) => {
  const t = useTranslations("Mdx.category");
  const tt = useTranslations("Mdx");
  const tx = useTranslations("landing.blogs");
  const { format, dateFormat } = useDate();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Link
        href={{
          pathname: "/blog/[slug]",
          params: {
            slug: blog.metadata.slug,
          },
        }}
      >
        <article className="flex h-full max-w-[531px] items-start gap-4">
          <Image
            height={236}
            width={267}
            priority={variant === "large"}
            src={blog.metadata.image}
            alt={blog.metadata.title}
            className="aspect-[267/236] h-auto w-[40%] max-w-[267px] shrink-0 rounded-[16px] object-cover sm:rounded-[24px]"
          />

          <div className="flex h-full w-full flex-col justify-between gap-2">
            <h3
              title={blog.metadata.title}
              className="line-clamp-3 text-xl font-bold text-neutral-950 dark:text-neutral-100"
            >
              {blog.metadata.title}
            </h3>

            <div className="mt-4 flex items-center justify-between">
              <Badge
                variant="secondary"
                className="w-fit bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-100"
              >
                {t(blog.metadata.category)}
              </Badge>

              <span className="text-neutral-700">
                {format(parseISO(blog.metadata.date), dateFormat)}
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "small") {
    return (
      <Link
        href={{
          pathname: "/blog/[slug]",
          params: {
            slug: blog.metadata.slug,
          },
        }}
      >
        <article className="flex h-fit max-w-[531px] items-start gap-6">
          <Image
            height={236}
            width={267}
            src={blog.metadata.image}
            alt={blog.metadata.title}
            className="crop aspect-[267/236] h-auto w-[35%] max-w-[267px] shrink-0 rounded-[24px] object-cover"
          />

          <div className="flex h-full flex-col justify-between">
            <div className="">
              <h3 className="line-clamp-2 text-xl font-bold text-neutral-950 dark:text-neutral-100">
                {blog.metadata.title}
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-neutral-700">
                  {format(parseISO(blog.metadata.date), dateFormat)}
                </span>
                <Badge
                  variant="secondary"
                  className="bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-100"
                >
                  {t(blog.metadata.category)}
                </Badge>
              </div>

              <p className="mt-4 line-clamp-4 text-neutral-700 dark:text-neutral-500">
                {blog.metadata.description}
              </p>
            </div>

            <div className="mt-4.5 flex items-center justify-between gap-2">
              <p className="truncate text-neutral-700">
                {tt("author", { name: blog.metadata.author })}
              </p>
              <span
                className={cn(
                  "flex h-auto items-center justify-end gap-1.5 p-0 text-center text-sm font-semibold leading-[20px] text-primary-500",
                )}
              >
                <p className="shrink-0">{tx("read_more")}</p>
                <ArrowLeft className={cn("h-5 w-5 ltr:rotate-180")} />
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={{
        pathname: "/blog/[slug]",
        params: {
          slug: blog.metadata.slug,
        },
      }}
    >
      <article className="max-w-[669px]">
        <Image
          height={338}
          width={669}
          priority={true}
          src={blog.metadata.image}
          alt={blog.metadata.title}
          className="aspect-[669/338] h-auto w-full rounded-[24px] object-cover"
        />

        <div className="mt-6 flex items-center justify-between">
          <h3 className="line-clamp-2 text-2xl font-bold text-neutral-950 dark:text-neutral-100">
            {blog.metadata.title}
          </h3>
          <Badge
            variant="secondary"
            className="mt-6 bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-100"
          >
            {t(blog.metadata.category)}
          </Badge>
        </div>
        <p className="mt-4 line-clamp-2 text-neutral-700 dark:text-neutral-500">
          {blog.metadata.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-neutral-700">
            <span>{tt("author", { name: blog.metadata.author })}</span>
            <span>{format(parseISO(blog.metadata.date), dateFormat)}</span>
          </div>

          <span
            className={cn(
              "flex h-auto items-center justify-end gap-1.5 p-0 text-center text-sm font-semibold leading-[20px] text-primary-500",
            )}
          >
            <p>{tx("read_more")}</p>
            <ArrowLeft className={cn("h-5 w-5 ltr:rotate-180")} />
          </span>
        </div>
      </article>
    </Link>
  );
};

const BlogSpecialSection = ({
  specialBlogs,
}: Readonly<{
  specialBlogs: Blog[];
}>) => {
  const t = useTranslations("landing.blogs");
  const largeSpecialCard = specialBlogs.at(0);
  const smallSpecialCards = specialBlogs.slice(1, 3);
  return (
    <section aria-label={t("title")} className="mx-auto">
      <div className="flex flex-wrap justify-center gap-8">
        {/* Main Featured Post (Right side in RTL, Left in LTR) - Spans 7 Columns */}
        <div>
          {largeSpecialCard ? (
            <BlogSpecialCard blog={largeSpecialCard} variant="large" />
          ) : null}
        </div>

        {/* Side Stacked Posts (Left side in RTL, Right in LTR) - Spans 5 Columns */}
        <div className="flex flex-col justify-between gap-8">
          {smallSpecialCards.map((item) => (
            <BlogSpecialCard
              key={item.metadata.slug}
              variant="small"
              blog={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
