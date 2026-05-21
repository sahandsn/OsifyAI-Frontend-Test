const MEGABYTE = 1024 * 1024;
const MAX_FILE_SIZE_MB = 50;
export const MAX_SIZE_BYTE = MAX_FILE_SIZE_MB * MEGABYTE;

export const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
] as const;
export const ACCEPTED_IMAGE_EXTENDED_TYPES = [
  ...ACCEPTED_IMAGE_TYPES,
  "application/dicom",
  "image/dcm",
  "image/dicom",
  "image/bmp",
] as const;

export const ACCEPTED_FILE_TYPES = [
  "application/zip",
  "application/vnd.rar",
  "application/x-rar-compressed",
  "application/x-7z-compressed",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv",
] as const;

export const ACCEPTED_FILE_AND_IMAGE_TYPES = [
  ...ACCEPTED_IMAGE_TYPES,
  ...ACCEPTED_FILE_TYPES,
] as const;
export const ACCEPTED_FILE_AND_IMAGE_EXTENDED_TYPES = [
  ...ACCEPTED_IMAGE_EXTENDED_TYPES,
  ...ACCEPTED_FILE_TYPES,
] as const;

export const ACCEPTED_IMAGE_BONE_AGE = [
  // simple
  "image/png",
  "image/jpeg",
  // complex
  "application/dicom",
  "image/dcm",
  "image/dicom",
  "image/bmp",
] as const;
