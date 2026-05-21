"use client";

import { useQuery } from "@tanstack/react-query";
import { getMessaging, getToken } from "firebase/messaging";
import firebaseApp from "@/constants/fcm";
import { env } from "@/env";
import { setCookie } from "cookies-next";
import { addYears } from "date-fns";
import toast from "@/components/common/custom-toast";
import { useTranslations } from "next-intl";

export const useFcmToken = ({ preferred }: { preferred: boolean }) => {
  const t = useTranslations("General");
  const { data: token, isFetching } = useQuery<string | undefined>({
    queryKey: ["fcmToken", preferred],
    queryFn: async () => {
      if (
        "serviceWorker" in navigator &&
        preferred &&
        "Notification" in window
      ) {
        // Register service worker
        const registration = await navigator.serviceWorker
          .register("/firebase-messaging-sw.js")
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
            return undefined;
          });
        if (!registration) {
          toast.error(t("notification-device-no-support"));
          return undefined;
        }

        // Retrieve token
        try {
          const messaging = getMessaging(firebaseApp);
          const currentToken = await getToken(messaging, {
            vapidKey: env.NEXT_PUBLIC_FIREBASE_vapidKey,
            serviceWorkerRegistration: registration,
          });

          if (currentToken) {
            setCookie("fcmToken", currentToken, {
              expires: addYears(new Date(), 1),
            });
            return currentToken;
          } else {
            toast.error(t("notification-token-fetch-failed"));
            return undefined;
          }
        } catch (error) {
          console.log("notification token could not fetch", error);
          toast.error(t("notification-token-fetch-failed"));
          return undefined;
        }
      }
    },
    enabled: preferred && env.NEXT_PUBLIC_FCM_AVAILABLE === "true",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { token, isTokenPending: isFetching };
};
