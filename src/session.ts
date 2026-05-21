"use client";

import { $api } from "@/api";
import { useRouter } from "@/i18n/navigation";
import { getQueryClient } from "@/utils/query-client";
import { components } from "@/types/api-swagger";
import { TRoute } from "@/types/general";
import { partialMatchKey } from "@tanstack/react-query";
import { deleteCookie, getCookies } from "cookies-next";
import { TLoginChoice } from "./hooks/use-auth-store";

export const sessionCheckQueryOptions = () =>
  $api.queryOptions("get", "/users/has-session/", {});

export const sessionQueryOptions = () =>
  $api.queryOptions("get", "/users/", {});

export const SESSION_CHECK_API_ROUTE = sessionCheckQueryOptions().queryKey;
export const SESSION_API_ROUTE = sessionQueryOptions().queryKey;

export interface SessionData {
  isLoggedIn: boolean;
  hasSession: boolean;
  user?: components["schemas"]["User"];
}

// Cleans up client-side storage.
// Note: The actual secure auth cookie is HttpOnly and is removed
// automatically by the browser when the backend logout API succeeds.
const wipeClientStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
  const cookies = getCookies();
  if (cookies) {
    Object.keys(cookies).forEach((name) => deleteCookie(name));
  }
};

// --------------------
// useSession (GET)
// --------------------
export function useSession(enabled = true) {
  const checkQuery = $api.useQuery(
    "get",
    "/users/has-session/",
    {},
    {
      staleTime: Infinity,
      enabled,
    },
  );
  const query = $api.useQuery(
    "get",
    "/users/",
    {},
    {
      staleTime: Infinity,
      enabled: !!checkQuery.data?.has_session && enabled,
    },
  );

  const session: SessionData = {
    /** Check if DOCTOR app is logged in */
    isLoggedIn:
      (!!query?.data?.sessions.find((s) => s.current)?.org_uuid?.length ||
        !!query.data?.is_superuser) &&
      !!checkQuery.data?.has_session,
    /** Check if ANY USER (doctor app or patient app) is logged in */
    hasSession: !!checkQuery.data?.has_session,
    user: query.data,
  };

  return {
    ...query,
    session,
    isPending: checkQuery.isPending || (query.isPending && query.isEnabled),
  };
}

// --------------------
// useLogIn (POST)
// --------------------
export function useLogIn() {
  const mutation = $api.useMutation("post", "/users/otp/callback/", {
    meta: {
      invalidateAll: true,
    },
  });
  const router = useRouter();

  type LogInVariables = Parameters<typeof mutation.mutate>[0]["body"];
  type LogInOptions = Parameters<typeof mutation.mutate>[1];

  const logIn = (
    loginData: LogInVariables & {
      redirectTo?: TRoute;
      choice: TLoginChoice;
    },
    options?: LogInOptions,
  ) => {
    mutation.mutate(
      {
        body: loginData,
      },
      {
        ...options,
        onSuccess(data, vars, req, ctx) {
          if (data.should_signup && loginData.choice === "doctor") {
            return router.push("/auth/signup");
          } else if (data.pending && loginData.choice === "doctor") {
            return router.push("/auth/signup/success");
          } else {
            const route = loginData.redirectTo ?? "/auth/login";
            router.push(route);
          }
          options?.onSuccess?.(data, vars, req, ctx);
        },
      },
    );
  };

  return { logIn, ...mutation };
}

// --------------------
// useLogOut (DELETE)
// --------------------
export function useLogOut() {
  const router = useRouter();
  const mutation = $api.useMutation("delete", "/users/logout/", {
    meta: {
      // Bypasses global MutationCache to prevent refetch storms during redirect
      skipInvalidation: true,
    },
  });

  const client = getQueryClient();

  type LogOutOptions = Parameters<typeof mutation.mutate>[1];

  const logOut = (
    logoutData?: { redirectTo?: TRoute },
    options?: LogOutOptions,
  ) => {
    // Stop active queries to prevent them from failing/hanging during the logout transition
    client.cancelQueries();

    mutation.mutate(
      {},
      {
        ...options,
        onSettled(data, error, vars, req, ctx) {
          // 1. Wipe accessible client storage (backend handles the HttpOnly auth cookie)
          wipeClientStorage();

          // 2. Nuke the cache entirely. clear() does NOT trigger observers to refetch.
          client.clear();

          // 3. Send the user to the login screen
          const route = logoutData?.redirectTo ?? "/auth/logout";
          router.push(route);
          options?.onSettled?.(data, error, vars, req, ctx);
        },
      },
    );
  };

  return { logOut, ...mutation };
}

// --------------------
// useSwitchAccount (POST)
// --------------------
export function useSwitchAccount() {
  const router = useRouter();
  const client = getQueryClient();

  const mutation = $api.useMutation("post", "/users/account/switch/", {
    meta: {
      skipInvalidation: true,
    },
  });

  type SwitchAccountOptions = Parameters<typeof mutation.mutate>[1];

  const switchAccount = (
    switchData: { redirectTo?: TRoute; org_uuid: string | null },
    options?: SwitchAccountOptions,
  ) => {
    mutation.mutate(
      {
        body: {
          org_uuid: switchData.org_uuid,
        },
      },
      {
        ...options,
        async onSuccess(data, vars, req, ctx) {
          await client.cancelQueries();

          // optional: drop old org-scoped cache here if you want

          const sessionCheck = await client.fetchQuery({
            ...sessionCheckQueryOptions(),
            staleTime: 0,
          });

          const route = switchData.redirectTo ?? "/auth/login";
          if (!sessionCheck?.has_session) {
            router.push(route);
            options?.onSuccess?.(data, vars, req, ctx);
            return;
          }

          await client.fetchQuery({
            ...sessionQueryOptions(),
            staleTime: 0,
          });

          await client.resetQueries({
            predicate: (query) => {
              const target = [SESSION_CHECK_API_ROUTE, SESSION_API_ROUTE].every(
                (key) => !partialMatchKey(query.queryKey, key),
              );
              return target;
            },
          });

          router.push(route);
          options?.onSuccess?.(data, vars, req, ctx);
        },
      },
    );
  };

  return { switchAccount, ...mutation };
}
