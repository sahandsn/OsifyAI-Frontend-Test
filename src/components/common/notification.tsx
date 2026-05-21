"use client";

import { useFcmToken } from "@/hooks/use-fcmToken";
import { getMessaging, onMessage } from "firebase/messaging";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";
import { isAndroid, isIOS } from "react-device-detect";
import { useTranslations } from "next-intl";
import { getQueryClient } from "@/utils/query-client";
import { Button } from "../common/button";
import { MessageSquareX, BellRing, BellOff } from "lucide-react";
import { SESSION_API_ROUTE, useSession } from "@/session";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useNotificationPermission } from "@/hooks/use-notification-permission";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { $api } from "@/api";
import { TRoute } from "@/types/general";
import firebaseApp from "@/constants/fcm";

// type TNotificationType = "BoneAge";
type TNotificationData = {
  uuid: string;
  link: string;
  pathname: TRoute;
  title: string;
  body: string;
};

type TNotificationComponent = {
  shown?: boolean;
};

export default function NotificationComponent(
  props: Readonly<TNotificationComponent>,
) {
  const { shown = true } = props;
  const client = getQueryClient();
  const t = useTranslations("General");
  const { session } = useSession();
  const { permission, requestPermission } = useNotificationPermission();
  const router = useRouter();

  const { token, isTokenPending } = useFcmToken({
    preferred: permission === "granted",
  });
  const osTyps = useMemo(() => {
    if (isAndroid) {
      return "android";
    } else if (isIOS) {
      return "ios";
    } else {
      return "web";
    }
  }, []);

  const { isSuccess, isFetching: isRegisterPending } = $api.useQuery(
    "post",
    "/fcm-devices/",
    {
      body: {
        registration_id: token ?? "",
        type: osTyps,
      },
    },
    {
      enabled: Boolean(token && session?.isLoggedIn),
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );
  useEffect(() => {
    if (isSuccess) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Foreground push notification received:", payload);

        const dataJson = payload?.data?.data
          ? (JSON.parse(payload?.data?.data) as TNotificationData)
          : undefined;
        // const typeString = payload?.data?.type
        //   ? (payload?.data?.type as TNotificationType)
        //   : undefined;

        if (dataJson) {
          toast.success(dataJson.title, {
            description: dataJson.body,
            action: {
              label: t("show-notification-details"),
              onClick: () => {
                router.push(dataJson?.pathname);
              },
            },
            actionButtonStyle: {
              color: "hsl(var(--primary-foreground))",
              backgroundColor: "hsl(var(--primary))",
            },
          });
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [client, isSuccess, router, session, t, token]);

  const notifyMutation = $api.useMutation("patch", "/users/", {
    meta: {
      awaits: [SESSION_API_ROUTE],
      skipInvalidation: true,
    },
  });

  const isPending =
    notifyMutation.isPending || isTokenPending || isRegisterPending;

  if (!session?.isLoggedIn) {
    return undefined;
  }

  return (
    <AlertDialog
      open={permission === "granted" ? false : undefined}
      defaultOpen={permission === "default" && "Notification" in window}
    >
      <TooltipProvider>
        <Tooltip
          defaultOpen={permission === "default"}
          open={permission === "granted" ? false : undefined}
        >
          <TooltipTrigger asChild>
            <AlertDialogTrigger asChild>
              <Button
                size="32"
                variant={permission !== "granted" ? "primary" : "secondary"}
                onClick={async () => {
                  if (session.isLoggedIn) {
                    if (permission === "granted") {
                      notifyMutation.mutate({
                        body: {
                          notification: !session.user?.notification,
                        },
                      });
                    }
                  } else {
                    toast.error(t("doctor-only"));
                  }
                }}
                loading={isPending}
                className={cn({ hidden: !shown })}
              >
                {permission !== "granted" && !isPending ? (
                  <MessageSquareX size={18} />
                ) : null}
                {permission === "granted" &&
                !isPending &&
                session.user?.notification ? (
                  <BellRing size={18} />
                ) : null}
                {permission === "granted" &&
                !isPending &&
                !session.user?.notification ? (
                  <BellOff size={18} />
                ) : null}
              </Button>
            </AlertDialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("notification-tooltip")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("notification-title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("notification-description")}
          </AlertDialogDescription>

          {permission === "denied" ? <p>{t("notification-blocked")}</p> : null}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("close")}</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              requestPermission();
            }}
            disabled={permission === "denied"}
          >
            {t("continue")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
