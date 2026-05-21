import { TErrorObject } from "@/types/general";
import "@tanstack/react-query";

interface MyMeta extends Record<string, unknown> {
  skipInvalidation?: boolean;
  awaits?: Array<QueryKey>;
  skips?: Array<QueryKey>;
  invalidateAll?: boolean;
}

declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: MyMeta;
    mutationMeta: MyMeta;
    defaultError: TErrorObject;
  }
}
