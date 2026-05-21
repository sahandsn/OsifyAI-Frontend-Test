import { TranslationFn } from "@/types/translation-fn";
import { components } from "./api-swagger";
import { Mars as Male, Venus as Female } from "lucide-react";

export const GenderList = ["Male", "Female"] as const;

export const gendersList = (t: TranslationFn) =>
  GenderList.map((option) => ({
    value: option,
    label: t(`General.${option}`),
    Icon: option === "Female" ? Female : Male,
  }));

export type TPatient = components["schemas"]["Patient"];

export type TDoctor = components["schemas"]["User"];
