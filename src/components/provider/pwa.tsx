"use client";

import { TLayout } from "@/types/general";
import Placeholder from "../common/placeholder";
import { Button } from "../common/button";
import { useTranslations } from "next-intl";
import { useLocalStorage } from "@mantine/hooks";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { DeviceInstructions } from "../common/pwa-install";
import { cn } from "@/lib/utils";

export default function PwaProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;
  const tx = useTranslations("PwaInstall");
  const [shown, setShown] = useLocalStorage<boolean | undefined>({
    key: "installPwaShown",
    defaultValue: undefined,
  });
  const instructions = usePwaInstall();

  return (
    <>
      <Placeholder
        loading={false}
        className={cn("fixed z-[999999] hidden bg-background", {
          "max-md:flex max-md:pwa:hidden": shown === false,
        })}
        message={
          <>
            <DeviceInstructions {...instructions.ios} />
            <DeviceInstructions {...instructions.android} />
            <DeviceInstructions {...instructions.desktopChrome} />
            <DeviceInstructions {...instructions.desktopSafari} />
            <DeviceInstructions {...instructions.desktopEdge} />
            <DeviceInstructions {...instructions.fallback} />
          </>
        }
      >
        <Button
          onClick={() => {
            setShown(true);
          }}
        >
          {tx("done")}
        </Button>
      </Placeholder>
      {children}
    </>
  );
}
