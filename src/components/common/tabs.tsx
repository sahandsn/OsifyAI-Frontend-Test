import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPathname, Link } from "@/i18n/navigation";
import { TRoute } from "@/types/general";
import { Lock, LucideIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TTabs = {
  items: {
    title: ReactNode;
    href: TRoute;
    Icon?: LucideIcon;
    active?: boolean;
    hidden?: boolean;
    disabled?: boolean;
  }[];
};

export function TabsComponent(props: Readonly<TTabs>) {
  const { items } = props;
  const locale = useLocale();
  const activeItem = items.find((item) => item.active);

  return (
    <Tabs
      defaultValue={
        activeItem ? getPathname({ href: activeItem?.href, locale }) : undefined
      }
    >
      <TabsList className="flex h-fit w-full justify-start gap-2 overflow-x-auto rounded-none border-0 bg-background p-0 md:gap-4">
        {items
          .filter((item) => !item.hidden)
          .map((item) => {
            const DisplayIcon = item.disabled ? Lock : item.Icon;
            const triggerClassName = cn(
              // general styles
              "rounded-[8px] border-0 px-4 py-2.5 !shadow-none transition duration-300 md:px-6 md:py-3",
              // color styles
              "text-neutral-700 hover:bg-neutral-300 data-[state=active]:bg-neutral-300 data-[state=active]:text-neutral-900 dark:hover:bg-neutral-800 dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-neutral-100",
              // text styles
              "text-center align-middle text-[14px] font-semibold leading-[20px] tracking-normal md:text-[16px] md:leading-[24px]",
              // disabled
              "disabled:pointer-events-none disabled:opacity-50",
            );

            return (
              <TabsTrigger
                key={getPathname({ href: item.href, locale })}
                value={getPathname({ href: item.href, locale })}
                className={triggerClassName}
                disabled={item.disabled}
                asChild={!item.disabled}
              >
                {item.disabled ? (
                  <span className="inline-flex items-center gap-2">
                    {DisplayIcon ? <DisplayIcon size={16} /> : null}
                    {item.title}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2"
                  >
                    {DisplayIcon ? <DisplayIcon size={16} /> : null}
                    {item.title}
                  </Link>
                )}
              </TabsTrigger>
            );
          })}
      </TabsList>
    </Tabs>
  );
}
