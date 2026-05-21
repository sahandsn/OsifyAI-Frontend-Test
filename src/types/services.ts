import { components } from "./api-swagger";

export type TImageCoordinates = components["schemas"]["BoneAge"]["coordinates"];

export type TProduct = components["schemas"]["Visit"];

export type TPatientDetails = {
  patientUuid: string;
};
