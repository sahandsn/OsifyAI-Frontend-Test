export const BLANK_VALUE = "none";

export const toBlankValue = (value: string | null | undefined) => {
  if (value === "") {
    return BLANK_VALUE;
  }

  return value ?? "";
};

export const fromBlankValue = (value: string | null | undefined) => {
  if (value === BLANK_VALUE) {
    return "";
  }

  return value;
};
