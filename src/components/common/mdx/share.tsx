"use client";

import { cn } from "@/lib/utils";
import { Blog } from "@/schema/blog";
import { useTranslations } from "next-intl";
import { Button } from "../button";
import Image from "next/image";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TelegramShareButton,
} from "react-share";
import Whatsapp from "#/assets/icons/Whatsapp.svg";
import Linkedin from "#/assets/icons/Linkedin.svg";
import Telegram from "#/assets/icons/Telegram.svg";
import { Link } from "lucide-react";
import { env } from "@/env";
import { useClipboard } from "@mantine/hooks";
import React from "react";
import toast from "@/components/common/custom-toast";

export const BlogShare = ({
  blog,
}: Readonly<{
  blog: Blog;
}>) => {
  const t = useTranslations("Mdx");
  const clipboard = useClipboard({ timeout: 500 });
  const clipboardCopy = () => {
    clipboard.copy(url);
    toast.success(t("share-message"));
  };

  // using new URL or getPathname would compromise farsi slug
  const path = `${blog.metadata.locale}/blog/${blog.metadata.slug}`;
  const url = `${env.NEXT_PUBLIC_ROOT_URL}${path}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url,
          title: blog.metadata.title,
          text: blog.metadata.description,
        });
      } catch (err) {
        console.error(err);
        clipboardCopy();
      }
    } else {
      clipboardCopy();
    }
  };

  return (
    <article
      className={cn(
        "flex flex-col items-start rounded-[24px] border-[1.2px] border-primary-200 text-start backdrop-blur-lg dark:border-neutral-800",
        "bg-[linear-gradient(180deg,_#fff_0%,_#DBE8FE_100%)]",
        "dark:bg-[linear-gradient(180deg,_#21212100_0%,_#172E54_100%)]",
        "space-y-6 p-6",
      )}
    >
      <p className="mx-auto text-center text-lg font-semibold">{t("share")}</p>

      <div className="flex w-full items-center justify-between gap-2">
        <ButtonIcon onClick={handleShare}>
          <Link className="!size-6 text-primary-500" />
        </ButtonIcon>

        <WhatsappShareButton url={url}>
          <ButtonIcon>
            <Image
              src={Whatsapp}
              alt={"whatsapp-icon"}
              width={24}
              height={24}
            />
          </ButtonIcon>
        </WhatsappShareButton>

        <TelegramShareButton url={url}>
          <ButtonIcon>
            <Image
              src={Telegram}
              alt={"telegram-icon"}
              width={24}
              height={24}
            />
          </ButtonIcon>
        </TelegramShareButton>

        <LinkedinShareButton url={url}>
          <ButtonIcon>
            <Image
              src={Linkedin}
              alt={"linkedin-icon"}
              width={24}
              height={24}
            />
          </ButtonIcon>
        </LinkedinShareButton>
      </div>
    </article>
  );
};

const ButtonIcon = ({
  children,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>) => {
  return (
    <Button
      variant={"primary"}
      className="rounded-lg bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-50"
      size={"40"}
      shape={"icon"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
