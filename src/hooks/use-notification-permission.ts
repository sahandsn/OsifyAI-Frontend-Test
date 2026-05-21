"use client";

import { useLocalStorage } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import toast from "@/components/common/custom-toast";

export const useNotificationPermission = () => {
  const t = useTranslations("General");
  const [permission, setPermission] = useLocalStorage<NotificationPermission>({
    key: "notificationPermission",
    defaultValue: "denied",
  });

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, [setPermission]);

  const requestPermission = async (): Promise<NotificationPermission> => {
    if ("Notification" in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    } else {
      setPermission("denied");
      toast.error(t("notification-device-no-support"));
      return "denied";
    }
  };

  return { permission, requestPermission };
};
