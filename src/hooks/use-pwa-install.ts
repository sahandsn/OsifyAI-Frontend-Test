import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import {
  Dock,
  Ellipsis,
  EllipsisVertical,
  FileDown,
  LayoutGrid,
  LucideIcon,
  MonitorSmartphone,
  Plus,
  Share,
  Smartphone,
} from "lucide-react";
import {
  isChrome,
  isDesktop,
  isSafari,
  isEdge,
  isIOS,
  isAndroid,
} from "react-device-detect";

export type TInstruction = {
  text: ReactNode;
  Icon: LucideIcon;
  iconClassName?: string;
};
export type TDeviceInstructions = {
  instructions: TInstruction[];
  shown: boolean;
};

export function usePwaInstall() {
  const t = useTranslations("PwaInstall");

  const ios: TDeviceInstructions = {
    shown: isIOS,
    instructions: [
      {
        Icon: Share,
        text: t("share"),
      },
      {
        Icon: Plus,
        text: t("add"),
        iconClassName: "border-2 border-foreground rounded-sm",
      },
    ],
  };
  const android: TDeviceInstructions = {
    shown: isAndroid,
    instructions: [
      {
        Icon: EllipsisVertical,
        text: t("settings"),
      },
      {
        Icon: Smartphone,
        text: t("add"),
      },
      {
        Icon: MonitorSmartphone,
        text: t("install"),
      },
    ],
  };
  const desktopChrome: TDeviceInstructions = {
    shown: isChrome && isDesktop,
    instructions: [
      {
        Icon: EllipsisVertical,
        text: t("settings"),
      },
      {
        Icon: FileDown,
        text: t("select-chrome"),
      },
      {
        Icon: MonitorSmartphone,
        text: t("install"),
      },
    ],
  };
  const desktopSafari: TDeviceInstructions = {
    shown: isSafari && isDesktop,
    instructions: [
      {
        Icon: Share,
        text: t("share"),
      },
      {
        Icon: Dock,
        text: t("select-safari"),
      },
    ],
  };
  const desktopEdge: TDeviceInstructions = {
    shown: isEdge && isDesktop,
    instructions: [
      {
        Icon: Ellipsis,
        text: t("settings"),
      },
      {
        Icon: LayoutGrid,
        text: t("app-edge"),
      },
      {
        Icon: MonitorSmartphone,
        text: t("install-edge"),
      },
    ],
  };

  // android is chosen as fallback
  const isFallbackShown = !(
    ios.shown ||
    android.shown ||
    desktopChrome.shown ||
    desktopSafari.shown ||
    desktopEdge.shown
  );
  const fallback: TDeviceInstructions = {
    shown: isFallbackShown,
    instructions: [
      {
        Icon: EllipsisVertical,
        text: t("settings"),
      },
      {
        Icon: Smartphone,
        text: t("add"),
      },
      {
        Icon: MonitorSmartphone,
        text: t("install"),
      },
    ],
  };

  return {
    ios,
    android,
    desktopChrome,
    desktopSafari,
    desktopEdge,
    fallback,
  };
}
