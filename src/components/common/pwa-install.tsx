import { Button } from "../common/button";
import { MonitorSmartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import {
  usePwaInstall,
  TDeviceInstructions,
  TInstruction,
} from "@/hooks/use-pwa-install";

const Instruction = ({ Icon, text, iconClassName }: Readonly<TInstruction>) => {
  return (
    <div className="flex items-center gap-5 text-start">
      <Icon className={iconClassName} />
      <p>{text}</p>
    </div>
  );
};
export const DeviceInstructions = ({
  shown,
  instructions,
}: Readonly<TDeviceInstructions>) => {
  return (
    <section className={cn("mx-auto flex flex-col gap-4", { hidden: !shown })}>
      {instructions.map((item) => (
        <Instruction {...item} key={item.Icon.displayName} />
      ))}
    </section>
  );
};

export function PwaInstall() {
  const t = useTranslations("PwaInstall");
  const instructions = usePwaInstall();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("pwa:hidden")} size="32">
          <MonitorSmartphone size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
          <DeviceInstructions {...instructions.ios} />
          <DeviceInstructions {...instructions.android} />
          <DeviceInstructions {...instructions.desktopChrome} />
          <DeviceInstructions {...instructions.desktopSafari} />
          <DeviceInstructions {...instructions.desktopEdge} />
          <DeviceInstructions {...instructions.fallback} />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">{t("done")}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
