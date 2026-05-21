// hooks/use-patient-visits-report.ts
"use client";

import { useSession } from "@/session";
import { $api } from "@/api";
import { operations } from "@/types/api-swagger";
import { parseAsJson, useQueryStates } from "nuqs";
import {
  ColumnFiltersState,
  OnChangeFn,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import {
  filterSchema,
  paginationSchema,
  sortingSchema,
} from "@/schema/general";

export type TVisitsListParams =
  operations["membership_patient_visits_list"]["parameters"]["query"];

export function usePatientVisitsReport(patientUuid: string) {
  const { session } = useSession();

  const [state, setState] = useQueryStates({
    page: parseAsJson<PaginationState>(paginationSchema.parse).withDefault({
      pageIndex: 0,
      pageSize: 10,
    }),
    sort: parseAsJson<SortingState>(sortingSchema.parse).withDefault([
      { id: "report_created_at", desc: true },
    ]),
    filter: parseAsJson<ColumnFiltersState>(filterSchema.parse).withDefault([]),
  });

  const { page: pagination, sort: sorting, filter: columnFilters } = state;

  const handleColumnFiltersChange: OnChangeFn<ColumnFiltersState> = (
    updater,
  ) => {
    setState((prev) => {
      const newFilters =
        typeof updater === "function" ? updater(prev.filter) : updater;

      return {
        ...prev,
        filter: newFilters,
        page: { ...prev.page, pageIndex: 0 },
      };
    });
  };

  const handlePaginationChange: OnChangeFn<PaginationState> = (updater) => {
    setState((prev) => ({
      ...prev,
      page: typeof updater === "function" ? updater(prev.page) : updater,
    }));
  };

  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    setState((prev) => ({
      ...prev,
      sort: typeof updater === "function" ? updater(prev.sort) : updater,
    }));
  };

  const { data: visits, isFetching } = $api.useQuery(
    "get",
    "/membership-patient/{uuid}/visits/",
    {
      params: {
        path: {
          uuid: patientUuid,
        },
        query: {
          page: pagination.pageIndex + 1,
        },
      },
    },
    {
      enabled: !!session?.isLoggedIn && !!patientUuid,
    },
  );

  const deleteMutation = $api.useMutation("delete", "/visits/{uuid}/");

  return {
    pagination,
    sorting,
    columnFilters,
    isFetching,

    visits: visits?.results ?? [],
    visitsCount: visits?.count ?? 0,

    deleteMutation,

    handleColumnFiltersChange,
    handlePaginationChange,
    handleSortingChange,
  };
}
