"use client";

import { $api } from "@/api";
import { useApiAccess } from "@/hooks/use-access";

export const usePlanAccess = () => {
  const { orgAccess } = useApiAccess();
  const query = $api.useQuery(
    "get",
    "/organizations/",
    {},
    {
      enabled: orgAccess,
    },
  );

  const plan = query.data?.subscription?.pricing_plan;

  return {
    isPending: query.isPending,
    growth: !!plan?.growth,
  };
};
