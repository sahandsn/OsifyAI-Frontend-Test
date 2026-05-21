import { format } from "date-fns";
import { isNil, isObject, omitBy, isNull, isUndefined } from "lodash";
import { ApiAcceptableDate } from "@/constants/date";

const serializeFormDataPair = (
  data: FormData,
  key: string,
  value: unknown,
): void => {
  if (isUndefined(value)) {
    return;
  }

  if (isNull(value)) {
    data.append(key, "");
    return;
  }

  if (value instanceof File) {
    data.append(key, value);
    return;
  }

  if (typeof value === "string" || value instanceof Blob) {
    data.append(key, value);
    return;
  }

  if (value instanceof Date) {
    data.append(key, format(value, ApiAcceptableDate));
    return;
  }

  if (isObject(value)) {
    const refinedObj = omitBy(value, isNil);
    data.append(key, JSON.stringify(refinedObj));
    return;
  }

  data.append(key, JSON.stringify(value));
  return;
};

export const bodySerializer = <
  T extends Record<string, any> | Array<Record<string, any>> | undefined | null,
>(
  body: T,
): FormData => {
  const data = new FormData();

  if (isNil(body)) {
    return data;
  }

  Object.entries(body).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => serializeFormDataPair(data, key, item));
    } else {
      serializeFormDataPair(data, key, value);
    }
  });

  return data;
};
