"use client";

import { $api } from "@/api";
import { TPatient } from "@/types/user";
import {
  useGraphTypePreference,
  useGraphOrgPreference,
} from "@/hooks/use-graph";
import { useSession } from "@/session";
import { Button } from "../common/button";
import { isEqual } from "lodash";
import Graph from "./graph";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Dispatch, SetStateAction, useMemo, useState, useEffect } from "react";
import { CardComponent } from "./card";
import { cn } from "@/lib/utils";
import { CardHeader } from "../ui/card";
import { GraphUpLinear } from "solar-icon-set";
import { useTranslations } from "next-intl";
import { calculateFullAgeRelative } from "@/utils/age";

type TProps = {
  patient?: TPatient;
  className?: string;
};
type TOrgListProps = TProps & {
  type: "CDC" | "WHO";
  setGraph: Dispatch<SetStateAction<string | undefined>>;
  graph?: string;
};

export function GrowthGraphs(props: Readonly<TProps>) {
  const { patient, className } = props;
  const { session } = useSession();
  const t = useTranslations("growth-graphs");
  const tr = useTranslations("PageTitles");

  const [type, setType] = useGraphTypePreference();
  const [org, setOrg] = useGraphOrgPreference();

  useEffect(() => {
    const today = new Date();
    if (patient?.birth_date) {
      const age = calculateFullAgeRelative(patient?.birth_date, today);
      const isBaby = (age?.years ?? 0) * 12 + (age?.months ?? 0) < 24;
      if (isBaby) {
        setOrg("WHO");
        setType("percentile");
      } else {
        setOrg("CDC");
        setType("percentile");
      }
    } else {
      setOrg("CDC");
      setType("percentile");
    }
  }, [setOrg, setType, patient?.birth_date]);

  const [cdcGraphUuid, setCdcGraphUuid] = useState<string>();
  const [whoGraphUuid, setWhoGraphUuid] = useState<string>();

  // Logic: "If no specific graph is selected, use the first one available in the list"
  const activeCdcUuid =
    cdcGraphUuid ??
    patient?.growth_charts.find((item) => item.org === "CDC")?.uuid;

  const activeWhoUuid =
    whoGraphUuid ??
    patient?.growth_charts.find((item) => item.org === "WHO")?.uuid;

  // Determine active UUID based on the current Org tab
  const currentUuid = org === "CDC" ? activeCdcUuid : activeWhoUuid;

  const query = $api.useQuery(
    "get",
    "/growth-charts/{patient_uuid}/{type}/{uuid}/",
    {
      params: {
        path: {
          patient_uuid: patient?.uuid ?? "",
          uuid: currentUuid ?? "",
          type: type === "z_score" ? "z" : "p",
        },
        query: {
          uuid_1: "",
          uuid_2: "",
        },
      },
    },
    {
      enabled: !!session && !!patient?.uuid && !!type && !!org && !!currentUuid,
      staleTime: 30 * 1000 * 60,
    },
  );

  return (
    <CardComponent
      className={cn(
        "border-[1.5px] dark:border-neutral-800 dark:bg-neutral-950",
        className,
      )}
    >
      <CardHeader
        className={cn("mb-12 flex flex-row items-center gap-2 space-y-0 p-0")}
      >
        <GraphUpLinear size={24} />
        <p
          className={cn(
            "text-start text-[18px] font-medium leading-[28px] tracking-normal text-neutral-900 dark:text-neutral-100",
          )}
        >
          {tr("charts")}
        </p>
      </CardHeader>
      <section className="flex grid-cols-3 flex-col-reverse gap-10 p-0 lg:grid">
        <div className="flex flex-col justify-between gap-8">
          <Tabs
            className="flex flex-col justify-between gap-8"
            value={org}
            onValueChange={(value) => {
              if (value === "CDC" || value === "WHO") {
                setOrg(value);
              }
            }}
          >
            <TabsList className="flex h-14 flex-1 justify-around rounded-[12px] border-[1.2px] border-neutral-400 bg-transparent bg-white !p-2 dark:border-neutral-800 dark:bg-neutral-950">
              <TabsTrigger
                value="CDC"
                className={cn(
                  "h-full w-full rounded-[8px] bg-primary-800",
                  "!border-none bg-transparent text-center align-middle text-[16px] font-medium leading-[24px] tracking-normal !shadow-none data-[state=active]:bg-primary-800 data-[state=active]:text-white",
                )}
              >
                {t("cdc-graphs")}
              </TabsTrigger>
              <TabsTrigger
                value="WHO"
                className={cn(
                  "h-full w-full rounded-[8px] bg-primary-800",
                  "!border-none bg-transparent text-center align-middle text-[16px] font-medium leading-[24px] tracking-normal !shadow-none data-[state=active]:bg-primary-800 data-[state=active]:text-white",
                )}
              >
                {t("who-graphs")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="CDC">
              <OrgList
                type="CDC"
                patient={patient}
                graph={activeCdcUuid}
                setGraph={setCdcGraphUuid}
              />
            </TabsContent>
            <TabsContent value="WHO">
              <OrgList
                type="WHO"
                patient={patient}
                graph={activeWhoUuid}
                setGraph={setWhoGraphUuid}
              />
            </TabsContent>
          </Tabs>

          <ToggleGroup
            type="single"
            value={type}
            onValueChange={(val) => {
              if (val === "percentile" || val === "z_score") {
                setType(val);
              }
            }}
            className="flex h-14 w-full justify-between rounded-[12px] border-[1.2px] border-neutral-400 bg-transparent bg-white !p-2 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <ToggleGroupItem
              value="percentile"
              className={cn(
                "h-full w-full rounded-[8px] bg-primary-800",
                "!border-none bg-transparent text-center align-middle text-[16px] font-medium leading-[24px] tracking-normal !shadow-none data-[state=active]:bg-primary-800 data-[state=active]:text-white",
              )}
            >
              Percentile
            </ToggleGroupItem>
            <ToggleGroupItem
              value="z_score"
              className={cn(
                "h-full w-full rounded-[8px] bg-primary-800",
                "!border-none bg-transparent text-center align-middle text-[16px] font-medium leading-[24px] tracking-normal !shadow-none data-[state=active]:bg-primary-800 data-[state=active]:text-white",
              )}
            >
              Z-Score
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="col-span-2">
          {query.data?.chart ? (
            <Graph graphLoading={query.isPending} plot={query.data.chart} />
          ) : null}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="mt-12 p-0 dark:border-neutral-800"></section>
    </CardComponent>
  );
}

function OrgList(props: Readonly<TOrgListProps>) {
  const { patient, type, graph, setGraph } = props;
  const list = useMemo(
    () => patient?.growth_charts.filter((item) => item.org === type),
    [patient?.growth_charts, type],
  );

  return (
    <span className="flex flex-col gap-4">
      {list?.map((item) => (
        <Button
          key={item.title}
          onClick={() => {
            setGraph(item.uuid);
          }}
          dir="ltr"
          className={cn(
            "justify-start py-[10px]",
            { "bg-primary-800 text-white": isEqual(graph, item.uuid) },
            {
              "border-neutral-700 text-neutral-700": !isEqual(graph, item.uuid),
            },
          )}
          variant={isEqual(graph, item.uuid) ? "primary" : "secondary"}
          size="40"
        >
          <span className="mx-auto min-w-0 truncate text-center text-[14px] font-medium leading-[20px] tracking-normal">
            {item.title}
          </span>
        </Button>
      ))}
    </span>
  );
}
