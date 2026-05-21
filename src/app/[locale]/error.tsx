"use client";

import { TError } from "@/types/general";
import { ErrorComponent } from "@/components/common/error";

export default function ErrorPage(props: Readonly<TError>) {
  return <ErrorComponent {...props} />;
}
