"use client";

import {
  FileUpload,
  FileUploadDropzone,
  FileUploadTrigger,
  FileUploadList,
  FileUploadItem,
  FileUploadItemPreview,
  FileUploadItemMetadata,
  FileUploadItemDelete,
  useFileUpload,
  FileUploadRef,
} from "@/components/ui/file-upload";
import {
  QRCode,
  QRCodeCanvas,
  QRCodeOverlay,
  QRCodeSkeleton,
} from "@/components/ui/qr-code";
import {
  ComponentProps,
  useEffect,
  useId,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { Button } from "./button";
import {
  FileIcon,
  Upload,
  X,
  Lock,
  Smartphone,
  Download,
  RotateCw,
  Loader2Icon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNumber } from "@/hooks/use-number";
import { $api } from "@/api";
import { useWebSocketUploader } from "@/hooks/use-web-socket";
import { useSession } from "@/session";
import { env } from "@/env";
import Image from "next/image";
import imgLogo from "#/branding/logo.png";
import { cn } from "@/lib/utils";
import { useDownload } from "@/hooks/use-download";
import { useIsMobile } from "@/hooks/use-mobile";
import { defaultLocale } from "@/i18n/routing";
import { isNil } from "lodash";
import { useTranslations } from "next-intl";
import Countdown from "react-countdown";
import { inputVariants } from "./input";
import {
  ACCEPTED_FILE_AND_IMAGE_TYPES,
  ACCEPTED_IMAGE_TYPES,
  MAX_SIZE_BYTE,
  ACCEPTED_IMAGE_BONE_AGE,
} from "@/constants/files";

type TFileUploader = StrictOmit<
  ComponentProps<typeof FileUpload>,
  "defaultValue" | "onValueChange"
> & {
  defaultValue?: string[];
  onValueChange: (files: File[] | null) => void;
  hideQrCode?: boolean;
  profile?: TFileInputProfiles;
};

function FileUploaderItems(
  props: Readonly<
    Pick<
      ComponentProps<typeof FileInput>,
      "defaultValue" | "onValueChange" | "accept" | "disabled"
    > & {
      setIsDeleted: Dispatch<SetStateAction<boolean>>;
      isDeleted: boolean;
    }
  >,
) {
  const files = useFileUpload((s) => Array.from(s.files.keys()));
  const { formatNumber } = useNumber();

  // Show default value avatars only if: not deleted AND no files in the store yet
  const showDefaultValue =
    !!props.defaultValue?.length && !props.isDeleted && files.length === 0;
  const showValue = !!files.length;

  if (showDefaultValue) {
    const numberOfShown = 2;
    const sliced = props.defaultValue.slice(0, numberOfShown);
    const rest = props.defaultValue.slice(numberOfShown);
    return (
      <div className="flex items-center justify-between gap-2 rounded-[14px] border p-3">
        <div className="flex grow -space-x-1 overflow-hidden">
          {sliced.map((item) => (
            <Avatar key={item} className="size-10 rounded-[4px] object-cover">
              <AvatarImage src={item} alt={item} className="object-cover" />
              <AvatarFallback className="rounded-[4px] bg-primary-100 text-foreground dark:bg-primary-500">
                <FileIcon />
              </AvatarFallback>
            </Avatar>
          ))}
          {rest.length ? (
            <Avatar className="size-10 rounded-[4px] object-cover">
              <AvatarImage
                src={""}
                alt={`+ ${rest.length}`}
                className="object-cover"
              />
              <AvatarFallback className="rounded-[4px] bg-primary-100 text-foreground dark:bg-primary-500">
                {formatNumber(`+ ${rest.length}`)}
              </AvatarFallback>
            </Avatar>
          ) : null}
        </div>

        <Button
          disabled={props.disabled}
          onClick={() => {
            props.onValueChange?.(null);
            props.setIsDeleted(true);
          }}
          type="button"
          variant="text"
          size="40"
          shape="icon"
        >
          <X />
        </Button>
      </div>
    );
  }

  if (showValue) {
    return (
      <>
        {files.map((file) => (
          <FileUploadItem key={`${file.name}-${file.size}`} value={file}>
            <FileUploadItemPreview />
            <FileUploadItemMetadata />
            <FileUploadItemDelete asChild>
              <Button
                disabled={props.disabled}
                type="button"
                variant="text"
                size="40"
                shape="icon"
              >
                <X />
              </Button>
            </FileUploadItemDelete>
          </FileUploadItem>
        ))}
      </>
    );
  }

  return null;
}

// ─── QR Countdown ────────────────────────────────────────────────────────────

export function QrCodeCountdown({
  remainingSeconds,
  onExpire,
  className,
}: Readonly<{
  remainingSeconds?: number;
  onExpire: () => void;
  className?: string;
}>) {
  const t = useTranslations("fileUploader");
  const { formatNumber } = useNumber();

  if (isNil(remainingSeconds)) return null;

  const now = new Date();
  const timeInMillisFromNow = now.getTime() + remainingSeconds * 1000;

  return (
    <Countdown
      date={timeInMillisFromNow}
      key={remainingSeconds}
      onComplete={onExpire}
      renderer={({ formatted: { minutes, seconds }, completed }) => {
        if (completed) return null;
        return (
          <div
            className={cn(
              "flex items-center gap-1.5 text-xs text-muted-foreground",
              className,
            )}
          >
            <span>{t("qrcode.expires")}</span>
            <span
              className="font-medium tabular-nums text-foreground"
              dir="ltr"
            >
              {formatNumber(minutes)}:{formatNumber(seconds)}
            </span>
          </div>
        );
      }}
    />
  );
}

// ─── QR Code Panel (desktop only) ────────────────────────────────────────────

function QrCodePanel({
  url,
  isLoading,
  remainingSeconds,
  isMaxFilesReached,
  isQrCodeUsed,
  updateQrCode,
}: {
  url: string;
  isLoading: boolean;
  remainingSeconds?: number;
  isMaxFilesReached: boolean;
  updateQrCode: () => void;
  isQrCodeUsed: boolean;
}) {
  const t = useTranslations("fileUploader");
  const [isExpired, setIsExpired] = useState(false);

  const isBlocked = isMaxFilesReached || isExpired || isQrCodeUsed;
  const canUpdate = (isExpired || isQrCodeUsed) && !isMaxFilesReached;

  const getBlockMsg = () => {
    if (isExpired) {
      return t("qrcode.expired");
    }

    if (isQrCodeUsed) {
      return t("qrcode.used");
    }

    if (isMaxFilesReached) {
      return "";
    }

    return "";
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Smartphone className="size-4 text-primary-500" />
        <span className="text-sm font-semibold text-foreground">
          {t("qrcode.title")}
        </span>
      </div>

      {/* QR Code */}
      <div className="relative">
        <QRCode
          size={200}
          quality={100}
          margin={2.5}
          level="L"
          className={cn("transition-all duration-300 hover:cursor-none", {
            "opacity-20 blur-[3px]": isBlocked,
          })}
          foregroundColor="#6099f6"
          value={url}
        >
          <QRCodeCanvas className={cn("rounded-sm")} />
          <QRCodeOverlay className="rounded-full border-2 border-white bg-white p-1.5">
            <Image
              width={28}
              height={28}
              quality={100}
              src={imgLogo}
              className="bg-transparent"
              alt="Logo"
            />
          </QRCodeOverlay>
          <QRCodeSkeleton forceMount={isLoading} className="rounded-xs" />
        </QRCode>

        {/* Expired overlay */}
        {isBlocked ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-sm bg-background/80 p-3 text-center backdrop-blur-[2px]">
            <Lock className="size-5 text-muted-foreground" />
          </div>
        ) : null}
      </div>

      {/* helper section */}
      {isBlocked ? (
        <p className="max-w-[180px] text-center text-xs leading-relaxed text-muted-foreground">
          {getBlockMsg()}
        </p>
      ) : (
        <>
          <QrCodeCountdown
            remainingSeconds={remainingSeconds}
            onExpire={() => setIsExpired(true)}
          />
          <p className="max-w-[180px] text-center text-xs leading-relaxed text-muted-foreground">
            {t("qrcode.helper")}
          </p>
        </>
      )}

      <Button
        size={"24"}
        variant={"text"}
        className={cn("hidden", {
          flex: canUpdate,
        })}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          updateQrCode();
        }}
      >
        <RotateCw />
        {t("qrcode.generate new")}
      </Button>
    </div>
  );
}

// ─── Dropzone Content ─────────────────────────────────────────────────────────

function DropzoneContent({
  isMaxFilesReached,
  currentFiles,
  maxFiles,
  isDragging,
  isDownloading,
}: {
  isMaxFilesReached: boolean;
  currentFiles: number;
  maxFiles: number | undefined;
  isDragging: boolean;
  isDownloading: boolean;
}) {
  const t = useTranslations("fileUploader");
  const { formatNumber } = useNumber();

  if (isMaxFilesReached) {
    return (
      <div className="flex flex-col items-center gap-3 py-2">
        {/* Count badge */}
        <div className="flex items-center justify-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 dark:border-primary-800 dark:bg-primary-950">
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            {t("max-files.reached", {
              current: formatNumber(currentFiles),
              max: formatNumber(maxFiles ?? currentFiles),
            })}
          </span>
        </div>

        {/* Lock icon + hint */}
        <div className="flex items-start gap-2 text-foreground">
          <Lock className="size-4 shrink-0" />
          <p className="text-xs">{t("max-files.hint")}</p>
        </div>
      </div>
    );
  }
  const Icon = isDownloading ? Loader2Icon : isDragging ? Download : Upload;

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Upload icon — animates when dragging */}
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-full transition-all duration-200",
          "bg-primary-50 ring-8 ring-primary-50/50 dark:bg-primary-950 dark:ring-primary-950/50",
          {
            "scale-110 bg-primary-100 ring-primary-100/60 dark:bg-primary-900 dark:ring-primary-900/60":
              isDragging,
          },
        )}
      >
        <Icon
          className={cn(
            "size-5 text-primary-500 transition-transform duration-200 dark:text-primary-400",
            {
              "scale-110": isDragging,
              "animate-spin": isDownloading,
            },
          )}
        />
      </div>

      {/* Normal text — hidden while dragging */}
      {!isDragging ? (
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium text-foreground">
            {t("dropzone.title")}
          </p>
          <p className="text-xs text-muted-foreground">{t("dropzone.or")}</p>
        </div>
      ) : null}

      {/* Drag-active text — only visible while dragging */}
      {isDragging ? (
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          {t("dropzone.drop-here")}
        </p>
      ) : null}

      {/* Browse button — hidden while dragging */}
      {!isDragging ? (
        <FileUploadTrigger asChild>
          <Button variant="secondary" size="40" type="button">
            {t("dropzone.pick-button")}
          </Button>
        </FileUploadTrigger>
      ) : null}
    </div>
  );
}

// Inner component — must be rendered inside <FileUpload> provider to access store
function FileInputDropzoneContent({
  isMaxFilesReached,
  currentFiles,
  maxFiles,
  showQrCode,
  url,
  isLoading,
  isDownloading,
  remainingSeconds,
  updateQrCode,
  isQrCodeUsed,
}: {
  isMaxFilesReached: boolean;
  currentFiles: number;
  maxFiles: number | undefined;
  showQrCode: boolean;
  url: string;
  isLoading: boolean;
  isDownloading: boolean;
  remainingSeconds?: number;
  updateQrCode: () => void;
  isQrCodeUsed: boolean;
}) {
  const isDragging = useFileUpload((s) => s.dragOver);

  return (
    <div
      className={cn("flex items-center gap-6", {
        "justify-center": !showQrCode,
        "justify-between": showQrCode,
      })}
    >
      {/* Left: Dropzone content */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <DropzoneContent
          isMaxFilesReached={isMaxFilesReached}
          currentFiles={currentFiles}
          maxFiles={maxFiles}
          isDragging={isDragging}
          isDownloading={isDownloading}
        />
      </div>

      {/* Divider (desktop with QR) */}
      {showQrCode ? (
        <div className="hidden h-40 w-px bg-border md:block" />
      ) : null}

      {/* Right: QR Code panel (desktop only) */}
      {showQrCode ? (
        <div className="hidden md:flex">
          <QrCodePanel
            key={remainingSeconds ?? "loading"}
            url={url}
            isLoading={isLoading}
            remainingSeconds={remainingSeconds}
            isMaxFilesReached={isMaxFilesReached}
            updateQrCode={updateQrCode}
            isQrCodeUsed={isQrCodeUsed}
          />
        </div>
      ) : null}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

/**
 * File input component providing drag-and-drop, QR code upload, and file list management.
 *
 * ### `null` vs `undefined` Handling
 * There is a critical distinction in how `null` and `undefined` are processed when this component's value is serialized for API requests (e.g., via `bodySerializer`):
 *
 * - **`undefined` (Omit):** Indicates that no changes should be made to the file. The field will be completely omitted from the `FormData` payload.
 * - **`null` (Delete):** Indicates that the existing file should be removed. When a user explicitly removes a file using the component's UI (e.g., clicking the clear/'X' button), `onValueChange` is called with `null`. The serializer converts `null` into an empty string (`""`), instructing the backend to drop/delete the attachment.
 */
export const FileInput = ({
  defaultValue,
  hideQrCode,
  onValueChange,
  /**
   * profile setting will override the relevant props
   *
   */
  profile,
  ...props
}: Readonly<TFileUploader>) => {
  const profileSettings = profile ? FILE_INPUT_PROFILES[profile] : {};
  const [isDeleted, setIsDeleted] = useState(false);
  const isMobile = useIsMobile();

  const currentDefaultCount = defaultValue?.length ?? 0;
  const valueCount = props.value?.length ?? 0;

  const maxFiles = profileSettings.maxFiles ?? props.maxFiles;

  const isMaxFilesReached =
    (currentDefaultCount === maxFiles && !isDeleted) || valueCount === maxFiles;

  const currentFiles = isDeleted
    ? valueCount
    : currentDefaultCount || valueCount;

  const {
    ref,
    url,
    isLoading,
    remainingSeconds,
    isQrCodeUsed,
    updateQrCode,
    isDownloading,
  } = useFileInput({
    onValueChange,
    accept: props.accept,
    maxFiles: props.maxFiles,
    maxSize: props.maxSize,
    hideQrCode: hideQrCode,
    isMaxReached: isMaxFilesReached,
    multiple: props.multiple,
    profile,
  });

  const showQrCode = !hideQrCode && !isMobile;

  return (
    <FileUpload
      {...props}
      {...profileSettings}
      ref={ref}
      onValueChange={onValueChange}
      disabled={isMaxFilesReached || props.disabled}
      className={cn({
        "pointer-events-none cursor-not-allowed hover:cursor-not-allowed":
          isDownloading,
      })}
    >
      {/* Main layout: dropzone (+ QR code panel on desktop) */}
      <FileUploadDropzone
        className={cn(
          inputVariants(),
          "h-auto p-6 text-base",
          "border-dashed bg-background/50",
          "data-dragging:border-primary-500 data-dragging:bg-primary-50/50 dark:data-dragging:bg-primary-950/40",
          {
            "cursor-not-allowed opacity-60 hover:border-border hover:bg-background/50":
              isMaxFilesReached || props.disabled,
          },
        )}
      >
        <FileInputDropzoneContent
          isMaxFilesReached={isMaxFilesReached}
          currentFiles={currentFiles}
          maxFiles={maxFiles}
          showQrCode={showQrCode}
          url={url}
          isLoading={isLoading}
          remainingSeconds={remainingSeconds}
          updateQrCode={updateQrCode}
          isQrCodeUsed={isQrCodeUsed}
          isDownloading={isDownloading}
        />
      </FileUploadDropzone>

      {/* File list */}
      <FileUploadList forceMount={true}>
        <FileUploaderItems
          {...props}
          {...profileSettings}
          onValueChange={onValueChange}
          defaultValue={defaultValue}
          setIsDeleted={setIsDeleted}
          isDeleted={isDeleted}
        />
      </FileUploadList>
    </FileUpload>
  );
};

export type TFileInputProfiles = "bone_age" | "ocr" | "attachment" | "simple";

export const FILE_INPUT_PROFILES: Record<
  TFileInputProfiles,
  Pick<
    ComponentProps<typeof FileInput>,
    // make sure they are synced with TUploaderComponent
    "accept" | "maxFiles" | "maxSize" | "multiple"
  >
> = {
  simple: {
    accept: ACCEPTED_IMAGE_TYPES.join(","),
    maxSize: MAX_SIZE_BYTE,
    maxFiles: 1,
    multiple: false,
  },
  bone_age: {
    accept: ACCEPTED_IMAGE_BONE_AGE.join(","),
    maxSize: MAX_SIZE_BYTE,
    maxFiles: 1,
    multiple: false,
  },
  ocr: {
    accept: ACCEPTED_IMAGE_TYPES.join(","),
    maxSize: MAX_SIZE_BYTE,
    maxFiles: 10,
    multiple: true,
  },
  attachment: {
    accept: ACCEPTED_FILE_AND_IMAGE_TYPES.join(","),
    maxSize: MAX_SIZE_BYTE,
    maxFiles: 10,
    multiple: true,
  },
};

// ─── Hook (unchanged) ─────────────────────────────────────────────────────────

const useFileInput = (
  props: Readonly<
    Pick<
      ComponentProps<typeof FileInput>,
      | "onValueChange"
      | "accept"
      | "maxFiles"
      | "maxSize"
      | "hideQrCode"
      | "multiple"
    >
  > & {
    isMaxReached: boolean;
    profile?: TFileInputProfiles;
  },
) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<FileUploadRef>(null);
  const instanceId = useId();
  const processedFiles = useRef(new Set<string>());
  const { session, isSuccess, isPending } = useSession();
  const isMobile = useIsMobile();
  const [isDownloading, setIsDownloading] = useState(false);
  const { downloadAsync } = useDownload();
  const enabled =
    !props.hideQrCode &&
    !isMobile &&
    isSuccess &&
    !props.isMaxReached &&
    // to make sure isMobile is the real final value
    mounted;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const generateQrCode = $api.useQuery(
    "post",
    "/uploader/",
    {
      params: {
        query: {
          ordering: instanceId,
        },
      },
    },
    {
      enabled,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  );
  const readQrCode = $api.useQuery(
    "get",
    "/uploader/{uuid}/",
    {
      params: {
        path: {
          uuid: generateQrCode.data?.uuid ?? "",
        },
      },
    },
    {
      enabled: !!generateQrCode.data?.uuid,
      refetchOnWindowFocus: false,
    },
  );

  useWebSocketUploader(readQrCode.data?.uuid, {
    onMessage: () => {
      processedFiles.current.clear();
    },
  });

  const getUrlString = () => {
    const locale = session.user?.language ?? defaultLocale.key;
    const url = new URL(`/${locale}/utility/upload`, env.NEXT_PUBLIC_ROOT_URL);
    return url.toString();
  };

  useEffect(() => {
    const myFunc = async () => {
      const filesFromWs = readQrCode.data?.uploader_files ?? [];
      const newFiles = filesFromWs.filter(
        (item) => item.file && !processedFiles.current.has(item.file),
      );

      if (!newFiles.length) {
        return;
      }

      try {
        setIsDownloading(true);
        const blobs = await Promise.all(
          newFiles.map(async (item) => {
            if (!item.file) return null;
            const res = await downloadAsync({ url: item.file });
            processedFiles.current.add(item.file!);
            return new File(
              [res.file as Blob],
              item.file_name || "downloaded-file",
              {
                type: (res.file as Blob).type,
              },
            );
          }),
        );

        const validFiles = blobs.filter((file): file is File => file !== null);
        if (validFiles.length > 0) {
          ref.current?.addFiles(validFiles);
        }
      } catch (e) {
        console.error("Error processing files from WebSocket:", e);
      } finally {
        setIsDownloading(false);
      }
    };

    myFunc();
  }, [downloadAsync, readQrCode.data?.uploader_files]);

  return {
    ref,
    url: getUrlString(),
    isLoading: generateQrCode.isFetching || readQrCode.isFetching || isPending,
    isDownloading,
    remainingSeconds: readQrCode.data?.remaining_seconds,
    isQrCodeUsed: !!readQrCode.data?.uploader_files.length,
    updateQrCode: () => {
      generateQrCode.refetch();
    },
  };
};
