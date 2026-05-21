"use client";

import { $api } from "@/api";
import { useSession } from "@/session";
import { components } from "@/types/api-swagger";
import { useApiAccess } from "@/hooks/use-access";

export const useFeatureFlags = () => {
  const { isPending } = useSession();
  const { orgAccess } = useApiAccess();
  const query = $api.useQuery(
    "get",
    "/organizations/",
    {},
    {
      enabled: orgAccess,
    },
  );
  const pending = isPending || query.isPending;
  const featureFlags: components["schemas"]["FeatureFlag"] = query.data
    ?.feature_flag ?? {
    ocr: "enabled",
    appointment: "enabled",
    voice: "enabled",
  };

  return { pending, featureFlags };
};
