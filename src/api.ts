import createFetchClient, { Middleware } from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "@/types/api-swagger";
import { env } from "./env";
import { defaultLocale } from "./i18n/routing";
import { SessionData, SESSION_API_ROUTE } from "./session";
import { getQueryClient } from "@/utils/query-client";
import toast from "@/components/common/custom-toast";

export type TGeneralError = { code: string; msg: string };
export type TGeneralErrorAction = { name: string; path: string };

const client = getQueryClient();

const headersMiddleware: Middleware = {
  async onRequest({ request }) {
    // locale
    const cacheData = client.getQueryData<SessionData>(SESSION_API_ROUTE);
    request.headers.set(
      "Accept-Language",
      cacheData?.user?.language ?? defaultLocale.key,
    );

    // timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    request.headers.set(
      "Timezone",
      timezone ?? env.NEXT_PUBLIC_DEFAULT_Timezone,
    );

    return request;
  },
};
const generalErrorMiddleware: Middleware = {
  async onResponse({ response }) {
    const isLoggedOut =
      response.status === 403 && response.url.includes("/users/");

    if (response.status >= 400 && !isLoggedOut) {
      // General Error
      // {
      //   "detail": {
      //     "first_name": [
      //       "This field may not be blank."
      //     ],
      //     "birth_date": [
      //       "Date has wrong format. Use one of these formats instead: YYYY-MM-DD."
      //     ]
      //   },
      //   "status": 400,
      //   "code": {
      //     "first_name": [
      //       "blank"
      //     ],
      //     "birth_date": [
      //       "invalid"
      //     ]
      //   },
      //   "trace_id": "f02d49871e9f4ba8921eb22998ae95d1",
      //   "field_errors": {
      //     "first_name": [
      //       {
      //         "code": "blank",
      //         "msg": "This field may not be blank."
      //       }
      //     ],
      //     "birth_date": [
      //       {
      //         "code": "invalid",
      //         "msg": "Date has wrong format. Use one of these formats instead: YYYY-MM-DD."
      //       }
      //     ]
      //   },
      //   "general_errors": [],
      //   "redirect_url": {
      //      name: "",
      //      path: ""
      //    }
      // }
      const data = await response.clone().json();
      const generalErrors: TGeneralError[] = data?.general_errors ?? [];
      // const generalErrorsAction: TGeneralErrorAction | undefined =
      //   data?.redirect_url;
      generalErrors?.forEach((error) => {
        // Use a unique ID based on error code and message to prevent duplicate toasts
        const toastId = `error-${error.code}-${error.msg}`;
        toast.error(error.msg, { id: toastId });
        //   toast.error(error.msg, {
        //     action:
        //       generalErrorsAction?.name && generalErrorsAction.path
        //         ? {
        //             label: generalErrorsAction?.name,
        //             onClick: () => {
        //               // https://madacode.medium.com/next-js-client-side-navigation-tidbit-userouter-vs-window-location-href-ad6655e013e3
        //               window.location.href = generalErrorsAction.path;
        //             },
        //           }
        //         : undefined,
        //   });
      });
    }
    // if (response.type) {
    //   toast.error("");
    // }

    return response;
  },
};

const fetchClient = createFetchClient<paths>({
  baseUrl: env.NEXT_PUBLIC_API_URL,
  credentials: "include",
});
fetchClient.use(headersMiddleware);
fetchClient.use(generalErrorMiddleware);

export const $api = createClient(fetchClient);
