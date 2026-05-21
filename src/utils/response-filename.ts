import { AxiosResponse } from "axios";

export function getFileNameSecureMedia(url: string) {
  const innerUrl = new URL(url);
  const file = innerUrl.searchParams.get("file");
  const fileNameSections = file?.split("/");
  const fileNameSection = fileNameSections?.at(-1);
  const fileName =
    fileNameSection?.at(36) === "_" && fileNameSection?.at(37) === "_"
      ? fileNameSection?.slice(38)
      : fileNameSection;

  return fileName;
}

export function getFileNameContentDisposition(
  response: AxiosResponse<unknown, unknown>,
) {
  let filename: string | undefined =
    response.headers["content-disposition"]?.split("filename=")?.[1];
  if (filename?.startsWith('"')) {
    filename = filename.slice(1);
  }
  if (filename?.endsWith('"')) {
    filename = filename.slice(undefined, -1);
  }
  return filename;
}
