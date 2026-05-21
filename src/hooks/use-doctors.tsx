"use client";

import { useMemo } from "react";
import { $api } from "@/api";
import { useSession } from "@/session";
import { components } from "@/types/api-swagger";

// Type support from your schema
type OrganizationUser = components["schemas"]["OrganizationUser"];

export const useDoctors = () => {
  const { session, isPending } = useSession();

  const query = $api.useQuery(
    "get",
    "/membership/",
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

  const doctors = useMemo(() => {
    const results = query.data?.results ?? [];
    const seen = new Set<string>();

    return results.reduce<OrganizationUser[]>((acc, item) => {
      const uuid = item.user.uuid;
      const isDoctor = !!item.user.doctor?.is_registered;

      // Check uniqueness using the Set (O(1) lookup)
      if (isDoctor && !seen.has(uuid)) {
        seen.add(uuid);
        acc.push(item); // Push is faster than spreading [...] for large arrays
      }

      return acc;
    }, []);
  }, [query.data?.results]);

  const isMultipleDoctors = doctors.length > 1;

  const disabled = doctors.length === 0;

  return {
    doctors,
    pending,
    isMultipleDoctors,
    disabled,
  };
};
