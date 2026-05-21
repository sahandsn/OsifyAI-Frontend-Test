import { FieldValues, FieldPath } from "react-hook-form";
import { isApiErrorObject, flattenApiFieldErrors } from "./set-form-error";

/**
 * Type definition for fields in each step of the multistep form.
 * Can be a simple field path or a record mapping form fields to API error keys.
 */
export type StepFields<T extends FieldValues> = Array<
  Array<FieldPath<T> | Partial<Record<FieldPath<T>, string>>>
>;

/**
 * Checks API errors against a list of step fields and navigates to the first step with an error.
 *
 * @param error The error object returned from the API.
 * @param stepFields An array of arrays, where each inner array contains the field names for a step.
 * @param setActiveIndex A function to set the active step index (from useMultistepModal).
 */
export function navigateToErrorStep<T extends FieldValues>(
  error: unknown,
  stepFields: StepFields<T>,
  setActiveIndex: (index: number) => void,
): void {
  if (!isApiErrorObject(error)) {
    return;
  }

  const fieldErrors = flattenApiFieldErrors(error.field_errors);
  const errorKeys = Object.keys(fieldErrors);

  if (errorKeys.length === 0) {
    return;
  }

  const errorStepIndex = stepFields.findIndex((fields) =>
    fields.some((field) => {
      // Check for exact match or nested match
      return errorKeys.some((errorKey) => {
        if (typeof field === "string") {
          return errorKey === field || errorKey.startsWith(`${field}.`);
        } else {
          // If it's a mapping, keys are form fields, values are API fields.
          // We check if the VALUE exists in the error.
          const apiFields = Object.values(field);
          return apiFields.some(
            (apiField) =>
              apiField &&
              (errorKey === apiField || errorKey.startsWith(`${apiField}.`)),
          );
        }
      });
    }),
  );

  if (errorStepIndex !== -1) {
    setActiveIndex(errorStepIndex);
  }
}
