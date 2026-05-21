"use client";

import { useLocalStorage } from "@mantine/hooks";
import { isAfter, isBefore } from "date-fns";
import { Telescope, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { TLink } from "@/types/general";
import { cn } from "@/lib/utils";

export type BannerScope = "patient" | "doctor" | "landing";

export interface Banner {
  id: string; // "v{number}"
  content: ReactNode;
  endDateExclusive: string; // "yyyy-mm-dd"
  startDateExclusive: string; // "yyyy-mm-dd"
}

const DefaultBanner = ({
  closeBanner,
  id,
  link,
  message,
}: Readonly<{
  message: ReactNode;
  link?: {
    href: TLink;
    label: ReactNode;
  };
  id: string;
  closeBanner: (id: string) => void;
}>) => {
  return (
    <section className="flex w-full items-center justify-between gap-4 bg-primary px-6 py-2.5 text-sm text-primary-foreground">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <span>{message}</span>
        {link ? (
          <Link
            href={link.href}
            onClick={() => {
              closeBanner(id);
            }}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap font-semibold underline decoration-primary-foreground/50 underline-offset-4 hover:decoration-primary-foreground",
            )}
          >
            {link.label}
            <Telescope className="size-4 shrink-0" />
          </Link>
        ) : null}
      </div>
      <button
        onClick={() => {
          closeBanner(id);
        }}
        className="shrink-0 text-primary-foreground/80 hover:text-primary-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </section>
  );
};

type TBannerConfig = Partial<Record<BannerScope, Banner>>;
type TClosedMap = Partial<Record<BannerScope, string[]>>;

export const useBanner = (scope: BannerScope) => {
  const t = useTranslations("Banner");
  const [hydrated, setHydrated] = useState(false);
  const [closed, setClosed] = useLocalStorage<TClosedMap>({
    key: "banner_closed_ids",
    defaultValue: {},
  });

  const doctorId = "v11";
  const patientId = "v0";
  const landingId = "v2";

  const closeBanner = (id: string) => {
    setClosed((prev) => {
      const prevIds = prev?.[scope] ?? [];
      if (prevIds.includes(id)) return prev;
      return { ...prev, [scope]: [...prevIds, id] };
    });
  };

  const BANNERS: TBannerConfig = {
    doctor: {
      id: doctorId,
      content: (
        <DefaultBanner
          message={t("Doctor.message")}
          // link={{
          //   href: "/app/doctor/appointments",
          //   label: t("Doctor.action"),
          // }}
          closeBanner={closeBanner}
          id={doctorId}
        />
      ),
      startDateExclusive: "2026-05-19",
      endDateExclusive: "2026-05-24",
    },
    patient: {
      id: patientId,
      content: (
        <DefaultBanner
          message={t("Patient.message")}
          // link={{
          //   href: "/app/doctor/reception",
          //   label: t("App.action"),
          // }}
          closeBanner={closeBanner}
          id={patientId}
        />
      ),
      startDateExclusive: "2025-03-12",
      endDateExclusive: "2025-03-16",
    },
    landing: {
      id: landingId,
      content: (
        <DefaultBanner
          link={{
            href: "/blogs",
            label: t("Landing.action"),
          }}
          message={t("Landing.message")}
          closeBanner={closeBanner}
          id={landingId}
        />
      ),
      startDateExclusive: "2026-02-19",
      endDateExclusive: "2026-04-21",
    },
  };

  const banner = BANNERS[scope];

  const visible = useMemo(() => {
    const today = new Date();

    if (!hydrated) {
      return false;
    }

    if (!banner) {
      return false;
    }

    if (isAfter(today, banner.endDateExclusive)) {
      return false;
    }

    if (isBefore(today, banner.startDateExclusive)) {
      return false;
    }

    return !(closed[scope] ?? []).includes(banner.id);
  }, [hydrated, banner, closed, scope]);

  useEffect(() => {
    const hydration = () => {
      setHydrated(true);
    };
    hydration();
  }, []);

  return {
    banner: visible ? banner : null,
    closeBanner,
  };
};
