import { getPathname, Link } from "@/i18n/navigation";
import { ComponentProps } from "react";

export type TError = {
  error: Error & { digest?: string };
  reset: () => void;
};

type Params<ParamKeys extends string = never> = Promise<
  { locale: string } & Record<ParamKeys, string>
>;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export type TLayout<ParamKeys extends string = never> = {
  children: React.ReactNode;
  params: Params<ParamKeys>;
};
export type TPage<ParamKeys extends string = never> = {
  params: Params<ParamKeys>;
  searchParams: SearchParams;
};
export type TMetadata<ParamKeys extends string = never> = {
  params: Params<ParamKeys>;
};

export type TLink = ComponentProps<typeof Link>["href"];
export type TRoute = ComponentProps<typeof getPathname>["href"];

export type TResponseFalse<T> = Partial<Record<keyof T, string[]>> & {
  message?: string;
  detail?: string;
  nonFieldErrors?: string;
};

export type TExport = { file: File; filename?: string };

export type TErrorField = {
  code: string;
  msg: string;
};

export type TErrorObject = {
  detail: string;
  code: string;
  field_errors: Record<string, TErrorField[]>;
  general_errors: TErrorField[];
  status: number;
  trace_id: string;
};
