"use client";

import { TLayout } from "@/types/general";
import { getQueryClient } from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
