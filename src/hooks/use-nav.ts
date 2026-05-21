import { TNavItem } from "@/components/common/header/header-auth";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export type TItem = TNavItem & {
  isActive: boolean;
};

export function useNav() {
  const t = useTranslations("landing.nav-items");
  const pathname = usePathname();

  const items: TItem[] = [
    {
      path: "/",
      title: t("home"),
      isActive: pathname === "/",
    },
  ];

  return items;
}
