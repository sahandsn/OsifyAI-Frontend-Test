import { intervalToDuration } from "date-fns";
import { floor, isNil, round } from "lodash";

export function calculateFullAgeRelative(
  dob?: string | Date,
  reference: string | Date = new Date(),
) {
  if (isNil(dob)) {
    return {
      years: 0,
      months: 0,
      days: 0,
    };
  }
  const { years, months, days } = intervalToDuration({
    start: dob,
    end: reference,
  });
  return { years, months, days };
}

export function calculateFullAgeMonths(ageInMonths: number | null | undefined) {
  if (isNil(ageInMonths)) {
    return { years: 0, months: 0 };
  }
  const years = floor(ageInMonths / 12);
  const months = round(ageInMonths % 12);
  return { years, months };
}
