"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideIcon, Phone, Mail, Headset, FileVideo } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "../common/button";
import { TDirection } from "@/i18n/routing";

interface NavItem {
  title: string;
  href: string;
  isSeparated?: boolean;
  dir?: TDirection;
  Icon: LucideIcon;
}

export function Support() {
  const t = useTranslations("PageTitles");

  const items: NavItem[] = [
    {
      title: "0911 475 4235",
      href: "tel:+98-911-475-4235",
      isSeparated: true,
      Icon: Phone,
      dir: "ltr",
    },
    {
      title: "osifyai@gmail.com",
      href: "mailto:osifyai@gmail.com",
      Icon: Mail,
      dir: "ltr",
      isSeparated: true,
    },
    {
      title: t("tutorials"),
      href: "/tutorials",
      Icon: FileVideo,
      dir: "ltr",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="32" variant="secondary">
          <Headset size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={4}>
        {items.map((item) => {
          return (
            <div key={item.href} dir={item.dir}>
              <DropdownMenuGroup>
                <DropdownMenuItem className="hover:cursor-pointer" asChild>
                  <Link
                    // @ts-expect-error external link
                    href={item.href}
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <item.Icon size={16} />
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              {item.isSeparated ? <DropdownMenuSeparator /> : null}
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
