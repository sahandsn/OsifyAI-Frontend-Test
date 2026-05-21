"use client";

import { Link } from "@/i18n/navigation";
import { Blog } from "@/schema/blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function BlogBreadcrumb({
  blog,
}: Readonly<{
  blog: Blog;
}>) {
  const t = useTranslations("landing");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">{t("nav-items.home")}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronLeftIcon className="ltr:rotate-180" />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage>{blog.metadata.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
