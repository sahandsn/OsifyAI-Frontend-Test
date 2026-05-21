import { Button } from "@/components/common/button";
import { InfoPopover } from "@/components/common/custom-popover";
import { useFeatureFlags } from "@/hooks/use-feature-flags";
import { useWebSocketVisitTreatment } from "@/hooks/use-web-socket";
import { cn } from "@/lib/utils";
import { useSession } from "@/session";
import { Info, Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { useReactMediaRecorder } from "react-media-recorder";
import { Microphone3Linear, SoundwaveLinear } from "solar-icon-set";
import { CardComponent } from "./card";
import { P } from "./typography";

function blobToFile(blob: Blob, fileName: string, fileType?: string): File {
  return new File([blob], fileName, {
    type: fileType ?? blob.type,
    lastModified: Date.now(),
  });
}

type AudioRecorderProps = {
  onStop: (blob: File) => void;
  className?: string;
  pending: boolean;
  isCalculating?: boolean;
  settings:
    | {
        mode: "visit";
        visitUuid: string;
        treatmentUuid: string;
      }
    | {
        mode: "add-patient" | "add-management";
      };
};

export default function VoiceRecorder({
  onStop,
  className,
  pending,
  settings,
  isCalculating,
}: Readonly<AudioRecorderProps>) {
  const t = useTranslations("VoiceRecorder");
  const tra = useTranslations("PatientDetails");

  const { session } = useSession();
  const { featureFlags } = useFeatureFlags();
  useWebSocketVisitTreatment(
    settings.mode === "visit" ? settings.visitUuid : "",
    settings.mode === "visit" ? settings.treatmentUuid : "",
  );
  const { startRecording, stopRecording, status } = useReactMediaRecorder({
    video: false,
    audio: true,
    blobPropertyBag: { type: "audio/wav" },
    onStop(_, blob) {
      const file = blobToFile(
        blob,
        `voice-recording-${session.user?.uuid ?? "unknown"}.wav`,
        "audio/wav",
      );
      onStop?.(file);
    },
  });

  const isPending = status === "recording" || pending;

  if (
    featureFlags.voice === "disabled" ||
    settings.mode === "add-management" ||
    settings.mode === "add-patient"
  ) {
    return null;
  }

  if (isCalculating) {
    return (
      <section className="flex flex-col gap-y-4">
        <div
          className={cn(
            "flex items-center gap-2 text-lg font-semibold text-foreground",
          )}
        >
          <p>{t("start-action")}</p>
        </div>

        <CardComponent>
          <P className="flex animate-pulse items-center gap-2 ps-2">
            <Loader className="shrink-0 animate-spin" size={14} />
            {tra("ai-loading")}
          </P>
        </CardComponent>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xs border border-neutral-400 p-6 dark:border-neutral-800 md:max-w-80",
        {
          "border-primary-500 bg-primary-50": isPending,
        },
        className,
      )}
    >
      {isPending ? (
        <>
          <SoundwaveLinear className="text-primary-500" />
          <p className="text-primary-500">{t("loading")}</p>
          <Button
            type="button"
            loading={pending}
            size={"32"}
            onClick={stopRecording}
            variant={"secondary-destructive"}
          >
            {t("end-action")}
          </Button>
        </>
      ) : (
        <>
          <Button type="button" size={"32"} onClick={startRecording}>
            {t("start-action")}
            <Microphone3Linear size={24} />
          </Button>

          <div className="flex items-center gap-2 text-wrap text-neutral-700">
            <p className="text-sm">{t("description")}</p>
            <InfoPopover content={t("description-info")}>
              <Info size={16} />
            </InfoPopover>
          </div>
        </>
      )}
    </section>
  );
}
