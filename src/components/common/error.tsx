"use client";

import Placeholder from "@/components/common/placeholder";
import { Button } from "@/components/common/button";
import { v4 as randomUUID } from "uuid";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CheckCheck, Copy } from "lucide-react";
import { useClipboard } from "@mantine/hooks";
import { useMemo } from "react";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { TError } from "@/types/general";
import { useLogOut } from "@/session";

export function ErrorComponent(props: Readonly<TError>) {
  const uuid = useMemo(() => randomUUID(), []);
  const t = useTranslations("General");
  const tr = useTranslations("Login");
  const router = useRouter();
  const logOutMutation = useLogOut();
  const clipboard = useClipboard({ timeout: 1000 });

  useQuery({
    queryKey: ["/api/log-error/"],
    queryFn: async () => {
      axios.post("/api/log-error", {
        error: {
          name: props.error?.name,
          message: props.error?.message,
          stack: props.error?.stack,
          digest: props.error?.digest,
          cause: props.error?.cause,
        },
        uuid,
      });
    },
  });

  return (
    <Placeholder message={t("error-message")} loading={false}>
      <section className="flex flex-wrap gap-6">
        <Button
          onClick={() => {
            logOutMutation.logOut();
          }}
          variant="secondary"
          loading={logOutMutation.isPending}
        >
          {tr("title")}
        </Button>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          {t("not-found-action")}
        </Button>
      </section>

      <Button
        size="32"
        variant="text"
        className={cn("gap-2 text-sm text-muted-foreground", {
          "hover:cursor-copy": !clipboard.copied,
        })}
        onClick={() => {
          clipboard.copy(uuid);
        }}
      >
        {clipboard.copied ? <CheckCheck size={16} /> : <Copy size={16} />}
        <p className="text-wrap">{uuid}</p>
      </Button>
    </Placeholder>
  );
}
