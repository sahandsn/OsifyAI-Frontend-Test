import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getPathname, Link } from "@/i18n/navigation";
import { TRoute } from "@/types/general";
import { ComponentProps, ReactNode } from "react";
import { useLocale } from "next-intl";
import { Loader } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface IBreadcrumbItem {
  link: TRoute;
  title: ReactNode;
  isActive?: boolean;
  loading?: boolean;
}

export interface IBreadcrumbComponent {
  data: IBreadcrumbItem[];
  action?: {
    btn: ComponentProps<typeof Button>;
    link: ComponentProps<typeof Link>;
  };
}

export default function BreadcrumbComponent(
  props: Readonly<IBreadcrumbComponent>,
) {
  const { data, action } = props;
  const locale = useLocale();

  return (
    <span className="flex items-center justify-between gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          {data.map((item, index) => {
            const isLast = index === data.length - 1;
            return (
              <div
                key={`${getPathname({ href: item.link, locale }).slice(1)}-${isLast}`}
                className="flex items-center gap-2"
              >
                <BreadcrumbItem className="text-lg">
                  <BreadcrumbLink asChild>
                    {item.loading ? (
                      <Loader className="animate-spin" />
                    ) : item.isActive || isLast ? (
                      <BreadcrumbPage>{item.title}</BreadcrumbPage>
                    ) : (
                      <Link href={item.link}>{item.title}</Link>
                    )}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {isLast ? undefined : (
                  <BreadcrumbSeparator className="text-lg rtl:rotate-180" />
                )}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      {action ? (
        <Link {...action?.link} className={cn("w-fit", action.link.className)}>
          <Button {...action?.btn} />
        </Link>
      ) : null}
    </span>
  );
}
