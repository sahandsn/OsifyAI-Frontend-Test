"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useDate } from "@/hooks/use-date";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { parseISO } from "date-fns";
import { Blog } from "@/schema/blog";

export const BlogCard = ({
  blog,
  className,
}: Readonly<{
  blog: Blog;
  className?: string;
}>) => {
  const t = useTranslations("landing.blogs");
  const tx = useTranslations("Mdx.category");
  const tt = useTranslations("Mdx");
  const { format, dateFormat } = useDate();

  const parsedDate = parseISO(blog.metadata.date);

  return (
    // <Card
    //   className={cn(
    //     "rounded-4xl w-full gap-0 border border-primary-200 bg-neutral-50 py-0 dark:border-neutral-800 dark:bg-neutral-950 md:max-w-[310px] lg:max-w-[360px] xl:max-w-[389px]",
    //     className,
    //   )}
    // >
    // <Link
    //   href={{
    //     pathname: "/blog/[slug]",
    //     params: { slug: blog.metadata.slug },
    //   }}
    //   className={className}
    // >
    //     <CardHeader className="px-0">
    //       <div
    //         className={cn(
    //           "relative h-[250px] w-full overflow-hidden rounded-t-lg xl:h-[300px]",
    //         )}
    //       >
    // <Image
    //   src={blog.metadata.image}
    //   fill={true}
    //   alt={blog.metadata.title}
    //   className={cn("h-full w-full object-cover")}
    // />
    //       </div>
    //     </CardHeader>

    //     <CardContent className={cn("p-6")}>
    // <div className={cn("mb-4 flex items-center justify-between")}>
    //   <Badge
    //     variant="default"
    //     className={cn(
    //       "rounded-full bg-primary-50 px-2.5 py-1 text-center text-xs font-medium text-primary-500 hover:text-neutral-50 dark:bg-primary-900 dark:text-primary-100 lg:text-[14px] lg:leading-[20px]",
    //     )}
    //   >
    //     {tx(blog.metadata.category)}
    //   </Badge>
    //   <span
    //     className={cn(
    //       "text-[14px] font-medium leading-[20px] text-neutral-700 ltr:text-left rtl:text-right",
    //     )}
    //   >
    //     {format(parsedDate, dateFormat)}
    //   </span>
    // </div>

    // <div className={cn("mb-3 space-y-2 lg:mb-6")}>
    //   <h4
    //     className={cn(
    //       "align-middle text-[18px] font-bold leading-[24px] text-neutral-950 dark:text-neutral-100 lg:text-[20px] lg:leading-[32px] ltr:text-left rtl:text-right",
    //     )}
    //   >
    //     {blog.metadata.title}
    //   </h4>

    //   <p
    //     className={cn(
    //       "lg:h-18 line-clamp-3 text-[14px] font-normal leading-[22px] text-neutral-700 dark:text-neutral-500 lg:text-[16px] lg:leading-[24px] ltr:text-left rtl:text-right",
    //     )}
    //   >
    //     {blog.metadata.description}
    //   </p>
    // </div>

    //       <CardFooter
    //         className={cn("m-0 flex items-center justify-between gap-0 p-0")}
    //       >
    // <span
    //   className={cn(
    //     "text-[14px] font-medium leading-[20px] text-neutral-700 ltr:text-left rtl:text-right",
    //   )}
    // >
    //   {tt("author", {
    //     name: blog.metadata.author,
    //   })}
    // </span>
    // <span
    //   className={cn(
    //     "flex h-auto items-center justify-end gap-1.5 p-0 text-center text-sm font-semibold leading-[20px] text-primary-500",
    //   )}
    // >
    //   <p>{t("read_more")}</p>
    //   <ArrowLeft className={cn("h-5 w-5 ltr:rotate-180")} />
    // </span>
    //       </CardFooter>
    //     </CardContent>
    //   </Link>
    // </Card>

    <Link
      href={{
        pathname: "/blog/[slug]",
        params: { slug: blog.metadata.slug },
      }}
      className={className}
    >
      <Card className="flex h-full w-full flex-col rounded-[2rem]">
        <CardHeader className="p-0">
          <div className="relative h-[250px] w-full overflow-hidden rounded-t-[2rem] lg:h-[300px]">
            <Image
              src={blog.metadata.image}
              fill={true}
              sizes="100%"
              alt={blog.metadata.title}
              className={cn("h-full w-full object-cover")}
            />
          </div>
        </CardHeader>
        <CardContent className="h-full p-6">
          <div className={cn("mb-4 flex items-center justify-between")}>
            <Badge
              variant="default"
              className={cn(
                "rounded-full bg-primary-50 px-2.5 py-1 text-center text-xs font-medium text-primary-500 hover:text-neutral-50 dark:bg-primary-900 dark:text-primary-100 lg:text-[14px] lg:leading-[20px]",
              )}
            >
              {tx(blog.metadata.category)}
            </Badge>
            <span
              className={cn(
                "text-[14px] font-medium leading-[20px] text-neutral-700 ltr:text-left rtl:text-right",
              )}
            >
              {format(parsedDate, dateFormat)}
            </span>
          </div>

          <div className={cn("mb-3 space-y-2 lg:mb-6")}>
            <h4
              title={blog.metadata.title}
              className={cn(
                "line-clamp-3 align-middle text-[18px] font-bold leading-[24px] text-neutral-950 dark:text-neutral-100 lg:text-[20px] lg:leading-[32px] ltr:text-left rtl:text-right",
              )}
            >
              {blog.metadata.title}
            </h4>

            <p
              title={blog.metadata.description}
              className={cn(
                "line-clamp-3 text-[14px] font-normal leading-[22px] text-neutral-700 dark:text-neutral-500 lg:text-[16px] lg:leading-[24px] ltr:text-left rtl:text-right",
              )}
            >
              {blog.metadata.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-6 pt-0 text-sm">
          <span className="text-neutral-700">
            {tt("author", {
              name: blog.metadata.author,
            })}
          </span>

          <span className={cn("flex items-center gap-2 text-primary-500")}>
            <p>{t("read_more")}</p>
            <ArrowLeft className={cn("h-5 w-5 ltr:rotate-180")} />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
