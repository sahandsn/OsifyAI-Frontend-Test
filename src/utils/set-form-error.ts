import { TErrorObject } from "@/types/general";
import { isObject } from "lodash";
import type { FieldValues, FieldPath, UseFormReturn } from "react-hook-form";

/* ───────────────────────── types ───────────────────────── */

export type ApiErrorItem = { code: string; msg: string };

export type ApiFieldErrorsTree =
  | ApiErrorItem[]
  | { [key: string]: ApiFieldErrorsTree };

export type FlatApiFieldErrors = Record<string, ApiErrorItem[]>;

type FieldMap<T extends FieldValues> = Partial<
  Record<FieldPath<T>, string | string[]>
>;

/* ─────────────────────── type guards ─────────────────────── */

export function isApiErrorObject(error: unknown): error is TErrorObject {
  return Boolean(error && isObject(error) && "field_errors" in error);
}

/* ────────────────────── flatten errors ───────────────────── */

export function flattenApiFieldErrors(
  input: ApiFieldErrorsTree,
  prefix = "",
  out: FlatApiFieldErrors = {},
): FlatApiFieldErrors {
  if (Array.isArray(input)) {
    if (prefix) out[prefix] = input;
    return out;
  }

  if (!input || typeof input !== "object") {
    return out;
  }

  for (const [key, value] of Object.entries(input)) {
    const path = prefix ? `${prefix}.${key}` : key;
    flattenApiFieldErrors(value, path, out);
  }

  return out;
}

/* ─────────────────────── utilities ──────────────────────── */

function joinErrors(arr: ApiErrorItem[] | undefined): string | null {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return arr.map((e) => e.msg).join("; ");
}

function normalizeFieldMap<T extends FieldValues>(
  fieldMap?: FieldMap<T>,
): Array<[FieldPath<T>, string[]]> {
  if (!fieldMap) return [];

  return (Object.entries(fieldMap) as [FieldPath<T>, string | string[]][])
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => [k, Array.isArray(v) ? v : [v]]);
}

/* ─────────────────── mapped field errors ─────────────────── */

function collectCombinedMessage(
  fieldErrors: FlatApiFieldErrors,
  apiFields: string[],
): string | null {
  const messages: string[] = [];

  for (const f of apiFields) {
    const msg = joinErrors(fieldErrors[f]);
    if (msg) messages.push(msg);
  }

  return messages.length ? messages.join("; ") : null;
}

function applyMappedErrors<T extends FieldValues>(
  form: UseFormReturn<T>,
  fieldErrors: FlatApiFieldErrors,
  mappings: Array<[FieldPath<T>, string[]]>,
  handled: Set<string>,
): void {
  for (const [formField, apiFields] of mappings) {
    const message = collectCombinedMessage(fieldErrors, apiFields);
    if (!message) continue;

    form.setError(formField, { type: "api", message });
    handled.add(formField as string);
  }
}

/* ────────────────── identity field errors ────────────────── */

function applyIdentityErrors<T extends FieldValues>(
  form: UseFormReturn<T>,
  fieldErrors: FlatApiFieldErrors,
  handled: Set<string>,
): void {
  for (const [path, errors] of Object.entries(fieldErrors)) {
    if (handled.has(path)) continue;

    const message = joinErrors(errors);
    if (!message) continue;

    form.setError(path as FieldPath<T>, {
      type: "api",
      message,
    });
  }
}

/* ───────────────────────── public API ────────────────────── */

/**
 * Sets react-hook-form field errors from a nested API error response.
 *
 * @example
 * setFormError(form, apiError)
 *
 * @example
 * setFormError(form, apiError, {
 *   bmi: ["calculation.weight", "calculation.height"],
 * });
 */
export function setFormError<T extends FieldValues>(
  form: UseFormReturn<T>,
  error: unknown,
  fieldMap?: FieldMap<T>,
): void {
  if (!isApiErrorObject(error)) {
    console.error("Invalid API error object", error);
    return;
  }

  const fieldErrors = flattenApiFieldErrors(error.field_errors);
  const handled = new Set<string>();

  const mappings = normalizeFieldMap(fieldMap);
  if (mappings.length) {
    applyMappedErrors(form, fieldErrors, mappings, handled);
  }

  applyIdentityErrors(form, fieldErrors, handled);
}
