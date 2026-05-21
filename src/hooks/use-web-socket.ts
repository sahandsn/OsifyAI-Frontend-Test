"use client";

import { $api } from "@/api";
import { env } from "@/env";
import { getQueryClient } from "@/utils/query-client";
import { useCallback } from "react";
import useWebSocket from "react-use-websocket";

const client = getQueryClient();

// type TMessage = "boneage-reload" | "boneage-init";
// type TData = { message: TMessage };

// NOTICE: it is not shown in chrome devTools, but the socket is only open during the lifecycle of the component it is called in
// so it will be closed when navigating away from the page
// and reopened when navigating back to the page

export function useWebSocketPatient(patientUuid?: string | null) {
  const getSocketUrl = useCallback(() => {
    return new URL(`/ws/${patientUuid}/`, env.NEXT_PUBLIC_API_URL_WS).href;
  }, [patientUuid]);

  // TODO: these sockets need security mechanism now that frontend cannot access sessionid and send it it for backend as query params
  useWebSocket(
    getSocketUrl,
    {
      retryOnError: true,
      reconnectAttempts: Infinity,
      fromSocketIO: false,
      share: true,
      onMessage: () => {
        // const dataMsg: TData = JSON.parse(event.data);
        client.invalidateQueries();
      },
      shouldReconnect: () => {
        return true;
      },
    },
    Boolean(patientUuid),
  );
}

export function useWebSocketUploader(
  uploaderUuid?: string | null,
  options?: {
    onMessage?: () => void;
  },
) {
  const getSocketUrl = useCallback(() => {
    return new URL(`/ws/${uploaderUuid}/`, env.NEXT_PUBLIC_API_URL_WS).href;
  }, [uploaderUuid]);
  useWebSocket(
    getSocketUrl,
    {
      retryOnError: true,
      reconnectAttempts: Infinity,
      fromSocketIO: false,
      share: true,
      onMessage: () => {
        // const dataMsg: TData = JSON.parse(event.data);
        client.invalidateQueries({
          queryKey: $api.queryOptions("get", "/uploader/{uuid}/", {
            params: {
              path: {
                uuid: uploaderUuid ?? "",
              },
            },
          }).queryKey,
        });
        options?.onMessage?.();
      },
      shouldReconnect: () => {
        return true;
      },
    },
    Boolean(uploaderUuid),
  );
}

export function useWebSocketOrganization(orgUuid?: string) {
  const getSocketUrl = useCallback(() => {
    return new URL(`/ws/${orgUuid}/`, env.NEXT_PUBLIC_API_URL_WS).href;
  }, [orgUuid]);
  useWebSocket(
    getSocketUrl,
    {
      retryOnError: true,
      reconnectAttempts: Infinity,
      fromSocketIO: false,
      share: true,
      onMessage: () => {
        // const dataMsg: TData = JSON.parse(event.data);
        client.invalidateQueries({
          queryKey: $api.queryOptions("get", "/management/").queryKey,
        });

        client.invalidateQueries({
          queryKey: $api.queryOptions(
            "get",
            "/organizations/report/management/",
          ).queryKey,
        });
        client.invalidateQueries({
          queryKey: $api.queryOptions("get", "/organizations/report/visit/")
            .queryKey,
        });
        client.invalidateQueries({
          queryKey: $api.queryOptions("get", "/organizations/report/patient/")
            .queryKey,
        });
      },
      shouldReconnect: () => {
        return true;
      },
    },
    Boolean(orgUuid),
  );
}

export function useWebSocketVisitTreatment(
  visitUuid?: string,
  treatmentUuid?: string,
) {
  const getSocketUrl = useCallback(() => {
    return new URL(`/ws/${treatmentUuid}/`, env.NEXT_PUBLIC_API_URL_WS).href;
  }, [treatmentUuid]);
  useWebSocket(
    getSocketUrl,
    {
      retryOnError: true,
      reconnectAttempts: Infinity,
      fromSocketIO: false,
      share: true,
      onMessage: () => {
        // const dataMsg: TData = JSON.parse(event.data);
        client.invalidateQueries({
          queryKey: $api.queryOptions("get", "/visits/treatment/{uuid}/", {
            params: {
              path: {
                uuid: visitUuid ?? "",
              },
            },
          }).queryKey,
        });
      },
      shouldReconnect: () => {
        return true;
      },
    },
    Boolean(treatmentUuid),
  );
}
