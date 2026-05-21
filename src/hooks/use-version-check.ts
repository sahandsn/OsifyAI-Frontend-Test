"use client";

import { useLocalStorage } from "@mantine/hooks";
import { VERSION } from "@/constants/assets";
import { useRouter } from "@/i18n/navigation";

const shouldUpdate = (localVersion: string): boolean => {
  try {
    const [currentMajor, currentMinor, currentPatch] =
      VERSION.split(".").map(Number);
    const [localMajor, localMinor, localPatch] = localVersion
      .split(".")
      .map(Number);

    // Compare major version
    if (currentMajor > localMajor) return true;
    if (currentMajor < localMajor) return false;

    // Compare minor version
    if (currentMinor > localMinor) return true;
    if (currentMinor < localMinor) return false;

    // Compare patch version
    if (currentPatch > localPatch) return true;
    return false;
  } catch (e) {
    console.log("version error", e);
    return true;
  }
};

export const useVersionCheck = () => {
  const router = useRouter();
  const [localVersion, setLocalVersion] = useLocalStorage({
    key: "version",
    defaultValue: VERSION,
  });

  const update = () => {
    setLocalVersion(VERSION);
    router.refresh();
  };

  if (shouldUpdate(localVersion)) {
    return { updated: true, update };
  } else {
    return { updated: false, update };
  }
};
