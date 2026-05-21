"use client";

import { ChangeEvent, ComponentProps } from "react";
import {
  digitsFaToEn,
  digitsEnToFa,
  digitsArToEn,
} from "@persian-tools/persian-tools";
import { useLocale } from "next-intl";
import { isNil, isNumber, isString } from "lodash";
import { Input as InputBase } from "@/components/ui/input";

export const useNormalizedInput = () => {
  const locale = useLocale();

  const handleNormalization = (value: string) => {
    const normalizedValue = isNil(value)
      ? value
      : // always store values in English digits
        digitsFaToEn(digitsArToEn(value));
    return normalizedValue;
  };

  const normalizedHandleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange?: ComponentProps<typeof InputBase>["onChange"],
  ) => {
    const normalizedValue = handleNormalization(e.target.value);
    e.target.value = normalizedValue;
    onChange?.(e);
  };

  const getNormalizedValue = (
    value: ComponentProps<typeof InputBase>["value"],
  ) => {
    if (locale !== "fa" || isNil(value)) {
      return value;
    }

    // always display values in Persian digits
    if (isString(value) || isNumber(value)) {
      return digitsEnToFa(value);
    }

    return value.map((val) => digitsEnToFa(val));
  };

  return { normalizedHandleChange, getNormalizedValue, handleNormalization };
};
