"use client";

import { axios } from "@/utils/axios";
import { TErrorObject, TExport } from "@/types/general";
import { getQueryClient } from "@/utils/query-client";
import {
  getFileNameSecureMedia,
  getFileNameContentDisposition,
} from "@/utils/response-filename";
import { useIsMutating, useMutation } from "@tanstack/react-query";
import FileSaver from "file-saver";
import { useCallback } from "react";

const client = getQueryClient();

type TDownload = { url: string; fileName?: string };
type TDownloadExcel = TDownload & { queryParams?: Object };

export const useDownload = () => {
  const { mutateAsync, ...mutation } = useMutation<
    TExport,
    TErrorObject,
    TDownload
  >({
    mutationKey: ["download-file"],
    mutationFn: async ({ url, fileName }) => {
      const response = await axios.get(url, {
        responseType: "blob",
      });
      const filename = fileName ?? getFileNameSecureMedia(url);
      return { file: response.data, filename: filename };
    },
    onError() {
      client.invalidateQueries();
    },
    meta: {
      skipInvalidation: true,
    },
  });

  const downloadingCount = useIsMutating({ mutationKey: ["download-file"] });
  const isDownloading = downloadingCount > 0;

  const downloadAsync = useCallback(
    async (props: Pick<TDownload, "url">) => {
      const res = await mutateAsync(props);
      return res;
    },
    [mutateAsync],
  );

  return { downloadAsync, mutateAsync, ...mutation, isDownloading };
};

export const useDownloadSave = () => {
  const mutation = useMutation<TExport, TErrorObject, TDownload>({
    mutationFn: async ({ url, fileName }) => {
      const response = await axios.get(url, {
        responseType: "blob",
      });
      const filename = fileName ?? getFileNameSecureMedia(url);
      return { file: response.data, filename: filename };
    },
    onError() {
      client.invalidateQueries();
    },
    onSuccess({ file, filename }, { fileName }) {
      FileSaver(file, fileName ?? filename);
    },
    meta: {
      skipInvalidation: true,
    },
  });

  const downloadSave = (props: TDownload) => {
    mutation.mutate(props);
  };

  return { downloadSave, ...mutation };
};

export const useDownloadExcel = () => {
  const exportMutation = useMutation<TExport, TErrorObject, TDownloadExcel>({
    mutationKey: ["download-save-excel-file"],
    mutationFn: async ({ queryParams, url, fileName }) => {
      const response = await axios.get(url, {
        params: { ...queryParams, export: true },
        responseType: "blob",
        paramsSerializer: {
          indexes: null,
        },
      });
      const filename = fileName ?? getFileNameContentDisposition(response);
      return { file: response.data, filename: filename };
    },
    onSuccess: ({ file, filename }) => {
      FileSaver(file, filename);
    },
    meta: {
      skipInvalidation: true,
    },
  });

  const downloadingCount = useIsMutating({
    mutationKey: ["download-save-excel-file"],
  });
  const isDownloading = downloadingCount > 0;

  const downloadAsync = async (props: TDownloadExcel) => {
    await exportMutation.mutateAsync(props);
  };

  return { downloadAsync, isDownloading, ...exportMutation };
};
