"use client";

import { useMemo } from "react";
import { $api } from "@/api";
import { useSession } from "@/session";
import { components } from "@/types/api-swagger";
import { useDoctors } from "./use-doctors";

type AppointmentConfigLight = components["schemas"]["AppointmentConfigLight"];

export const useAppointmentConfigs = () => {
  const { session, isPending } = useSession();
  const { isMultipleDoctors } = useDoctors();

  const query = $api.useQuery(
    "get",
    "/appointment-config/",
    {
      params: {
        query: {
          page_size: 1_000_000_000,
        },
      },
    },
    { enabled: !!session?.isLoggedIn },
  );

  const pending = isPending || query.isPending;

  const configs = useMemo<AppointmentConfigLight[]>(
    () => query.data?.results ?? [],
    [query.data?.results],
  );

  const disabled = configs.length === 0;
  const silent = !isMultipleDoctors && !disabled && !!configs.at(0)?.uuid;

  return {
    configs,
    pending,
    disabled,
    silent,
  };
};
