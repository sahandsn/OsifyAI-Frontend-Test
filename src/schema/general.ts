import { z } from "zod";

export const paginationSchema = z.object({
  pageIndex: z.number().int().min(0).default(0),
  pageSize: z.number().int().min(1).default(10),
});

export const sortingSchema = z.array(
  z.object({
    id: z.string(),
    desc: z.boolean(),
  }),
);

export const filterSchema = z.array(
  z.object({
    id: z.string(),
    value: z.string(),
  }),
);

export const graphStateSchema = z.object({
  graph: z.object({
    uuid: z.string(),
    title: z.string(),
    org: z.enum(["CDC", "WHO"]),
  }),
});

export const zDateRangeSchema = z.object({
  from: z.coerce.date<Date>().optional(),
  to: z.coerce.date<Date>().optional(),
});
