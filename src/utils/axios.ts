import axiosBase from "axios";
import { defaultLocale } from "@/i18n/routing";
import { getQueryClient } from "./query-client";
import { SESSION_API_ROUTE, SessionData } from "@/session";
import { TGeneralError } from "@/api";
import toast from "@/components/common/custom-toast";
import { env } from "@/env";

const queryClient = getQueryClient();

const axios = axiosBase.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axios.interceptors.request.use((config) => {
  // locale
  const cacheData = queryClient.getQueryData<SessionData>(SESSION_API_ROUTE);
  config.headers["Accept-Language"] =
    cacheData?.user?.language ?? defaultLocale.key;

  // timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  config.headers["Timezone"] = timezone ?? env.NEXT_PUBLIC_DEFAULT_Timezone;

  return config;
});

// Add the response interceptor to handle messages
axios.interceptors.response.use(undefined, (error) => {
  const status = error.response?.status;
  const data = error.response?.data;
  //   const isNetworkError = error?.code === "ERR_NETWORK";
  //   const locale = error?.config?.headers?.["Accept-Language"];
  if (status >= 400) {
    const generalErrors: TGeneralError[] = data?.general_errors ?? [];
    // const generalErrorsAction: TGeneralErrorAction | undefined =
    //   data?.redirect_url;
    generalErrors?.forEach((error) => {
      // Use a unique ID based on error code and message to prevent duplicate toasts
      const toastId = `error-${error.code ?? "unknown"}-${error.msg}`;
      // toast.error(error.msg, {
      // id: toastId,
      //   action:
      //     generalErrorsAction?.name && generalErrorsAction.path
      //       ? {
      //           label: generalErrorsAction?.name,
      //           onClick: () => {
      //             // https://madacode.medium.com/next-js-client-side-navigation-tidbit-userouter-vs-window-location-href-ad6655e013e3
      //             window.location.href = generalErrorsAction.path;
      //           },
      //         }
      //       : undefined,
      // });
      toast.error(error.msg, {
        id: toastId,
      });
    });
  }

  return Promise.reject(error);
});

export { axios };
