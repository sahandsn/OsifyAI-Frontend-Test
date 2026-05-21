// utils/tableFilter.ts

export type RangeFilter = { from?: number; to?: number };

/**
 * Determines if the provided value is a valid RangeFilter.
 *
 * @param value - The value to validate.
 * @returns `true` if the value is a valid RangeFilter; otherwise, `false`.
 */
export function isRangeFilter(value: unknown): value is RangeFilter {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const filter = value as { from?: unknown; to?: unknown };

  // At least one of 'from' or 'to' must be present
  if (filter.from === undefined && filter.to === undefined) {
    return false;
  }

  // Helper function to determine if a value can be converted to a number
  const canConvertToNumber = (val: unknown): boolean => {
    if (typeof val === "number") {
      return !isNaN(val);
    }
    if (typeof val === "string") {
      const num = Number(val);
      return !isNaN(num);
    }
    return false;
  };

  // If 'from' exists, check if it's a number or a string that can be converted to a number
  if (filter.from !== undefined && !canConvertToNumber(filter.from)) {
    return false;
  }

  // If 'to' exists, check if it's a number or a string that can be converted to a number
  if (filter.to !== undefined && !canConvertToNumber(filter.to)) {
    return false;
  }

  // If both 'from' and 'to' exist, ensure 'from' is not greater than 'to'
  if (filter.from !== undefined && filter.to !== undefined) {
    const fromNumber =
      typeof filter.from === "number" ? filter.from : Number(filter.from);
    const toNumber =
      typeof filter.to === "number" ? filter.to : Number(filter.to);
    if (fromNumber > toNumber) {
      return false;
    }
  }

  return true;
}
