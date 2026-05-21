"use client";

import Placeholder from "@/components/common/placeholder";
import { Button } from "@/components/common/button";
import { useLogOut } from "@/session";
import { useTranslations } from "next-intl";

export default function ManualLogout() {
  const logOutMutation = useLogOut();

  const t = useTranslations("General");
  const tx = useTranslations("Login");

  return (
    <Placeholder message={t("login-again")} loading={false}>
      <Button
        onClick={() => {
          logOutMutation.logOut();
        }}
        loading={logOutMutation.isPending}
      >
        {tx("title")}
      </Button>
    </Placeholder>
  );
}
