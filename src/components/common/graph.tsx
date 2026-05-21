"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Dot,
  DotProps,
  Label,
  Line,
  ReferenceLine,
  Scatter,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
  Brush,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { MoveHorizontal } from "lucide-react";
import { components } from "@/types/api-swagger";
import {
  ComponentProps,
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { isArray, isNil, isNumber, isString, round, toNumber } from "lodash";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useDate } from "@/hooks/use-date";
import { useTranslations } from "next-intl";
import { Badge } from "./badge";
import { calculateFullAgeMonths } from "@/utils/age";

type HoverInfo = components["schemas"]["HoverInfo"];

interface HoverDisplayItem {
  title?: string;
  label?: string;
  value?: string | number | null;
}

type TResponse = {
  graphLoading: boolean;
  plot?: components["schemas"]["PlotBase"] | null;
  className?: string;
};

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  plot?: components["schemas"]["PlotBase"] | null;
  hoverData?: { data: HoverInfo[]; x: string };
}

const CustomScatterTooltip = (props: CustomTooltipProps) => {
  const { active, payload, plot, hoverData } = props;
  const { format, dateFormat } = useDate();
  const t = useTranslations("growth-graphs");
  const tr = useTranslations("General");

  const AGE_KEY = "(month)";
  const isAge = (val: string) => {
    if (val.includes(AGE_KEY)) {
      return true;
    }

    return false;
  };

  const parsePair = (
    label?: string,
    value?: string,
  ): { label: string; value: string; corrected: boolean } => {
    if (isNil(label) || isNil(value)) {
      return {
        label: label ?? "",
        value: value ?? "",
        corrected: false,
      };
    }

    const isAged = isAge(label);
    if (isAged) {
      const numberVersion = toNumber(value);
      const age = calculateFullAgeMonths(numberVersion);
      return {
        label: label.replace(AGE_KEY, ""),
        value: tr("value-age", {
          years: age?.years,
          months: age?.months,
        }),
        corrected: true,
      };
    }

    return {
      label: label ?? "",
      value: value ?? "",
      corrected: false,
    };
  };

  const showVal = (data: unknown) => {
    if (isArray(data)) {
      return data
        .map((item) => {
          if (isNumber(item) || isNumber(toNumber(item))) {
            return round(toNumber(item), 2);
          }

          if (isString(item)) {
            return item;
          }

          return "";
        })
        .join(" - ");
    }

    if (isNumber(data) || isNumber(toNumber(data))) {
      return round(toNumber(data), 2);
    }

    if (isString(data)) {
      return data;
    }

    return "";
  };

  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    const hoverDetails = (dataPoint.hover ?? hoverData?.data) as
      | HoverInfo[]
      | undefined;

    const xPair = parsePair(
      plot?.chart_info.x_axis_name,
      hoverData?.x || dataPoint.x,
    );
    if (!hoverDetails || hoverDetails.length === 0 || !hoverData) {
      return (
        <div className="rounded-lg border bg-background p-4 shadow-md">
          <div className="flex gap-2 text-sm">
            <p className="font-medium">{xPair.label}:</p>
            <p
              dir={xPair.corrected ? "auto" : undefined}
              className={cn({ "me-auto": xPair.corrected })}
            >
              {xPair.value}
            </p>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <span className="text-sm font-medium">
              {plot?.chart_info.y_axis_name}
            </span>
            <div className="flex flex-col gap-1 ps-2 text-xs">
              {[...payload].reverse().map((item) => {
                const label = item.name;
                const value = item.dataKey
                  ? item.payload[item.dataKey]
                  : undefined;
                return (
                  <span key={item.dataKey}>
                    <span className="font-semibold">{label}:</span>{" "}
                    {showVal(value)}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    const dateItem = hoverDetails.find((item: HoverInfo) => item.is_title);
    const status = hoverDetails.find((item: HoverInfo) => item.status);
    const deltaItems = hoverDetails.filter((item: HoverInfo) => item.is_delta);
    const standardItems = hoverDetails.filter(
      (item: HoverInfo) => !item.is_title && !item.is_delta && !item.status,
    );

    const getVariant = (): ComponentProps<typeof Badge>["variant"] => {
      if (status?.status === "ok") {
        return "success";
      }
      if (status?.status === "reconsider") {
        return "warning";
      }
      if (status?.status === "refer") {
        return "error";
      }

      return "info";
    };

    return (
      <div
        className={cn(
          "custom-tooltip z-50 min-w-[200px] rounded-[16px] border-[1.5px] border-neutral-400 p-4 backdrop-blur-3xl dark:border-neutral-800",
          {
            "bg-red-100 dark:bg-red-900": status?.status === "refer",
            "bg-orange-100 dark:bg-orange-900": status?.status === "reconsider",
            "bg-green-100 dark:bg-green-900": status?.status === "ok",
            "bg-[linear-gradient(90deg,rgba(255,255,255,0.4096)_0%,rgba(255,255,255,0.64)_100%)] dark:bg-[linear-gradient(79.22deg,#212121_0.12%,rgba(33,33,33,0)_172.29%)]":
              !status,
          },
        )}
      >
        {dateItem ? (
          <span
            dir="auto"
            className="mb-2 flex w-full items-center justify-between text-[14px] font-medium leading-[20px] tracking-normal text-neutral-700 dark:text-neutral-500"
          >
            <span className="w-fit">{format(dateItem.title, dateFormat)}:</span>
            {status?.status ? (
              <Badge className={cn("w-fit")} size={"32"} variant={getVariant()}>
                {t(status?.status)}
              </Badge>
            ) : null}
          </span>
        ) : null}

        <div className="flex flex-col gap-2">
          {[
            {
              title: xPair.label,
              value: xPair.value,
              is_delta: false,
              is_title: false,
              status: null,
              corrected: xPair.corrected,
            },
            ...standardItems,
          ].map((item: HoverInfo & { corrected?: boolean }, index: number) => {
            const displayItem = item as unknown as HoverDisplayItem;
            return (
              <div key={index} className="flex justify-between gap-4">
                <span className="text-[14px] font-medium leading-[20px] tracking-normal text-neutral-700 dark:text-neutral-500">
                  {displayItem.title || displayItem.label}:
                </span>
                <span
                  dir={item.corrected ? "auto" : undefined}
                  className={cn(
                    "text-[14px] font-medium leading-[20px] tracking-normal text-neutral-900 dark:text-neutral-100",
                    {
                      "me-auto": item.corrected,
                    },
                  )}
                >
                  {isNumber(displayItem.value)
                    ? round(displayItem.value, 2)
                    : displayItem.value}
                </span>
              </div>
            );
          })}
        </div>

        {deltaItems.length > 0 ? (
          <div className="mt-2 space-y-2 border-t border-neutral-400 pt-2 dark:border-neutral-800">
            <p
              dir="auto"
              className="me-auto text-[14px] font-medium leading-[20px] tracking-normal text-neutral-800 dark:text-neutral-400"
            >
              {t("compare")}
            </p>
            {deltaItems.map((item: HoverInfo, index: number) => {
              const displayItem = item as unknown as HoverDisplayItem;
              return (
                <div
                  key={`delta-${index}`}
                  className="flex justify-between gap-4"
                >
                  <span className="text-[14px] font-medium leading-[20px] tracking-normal text-neutral-700 dark:text-neutral-500">
                    {displayItem.title}:
                  </span>
                  <span className="text-[14px] font-medium leading-[20px] tracking-normal text-neutral-900 dark:text-neutral-100">
                    {isNumber(displayItem.value)
                      ? round(displayItem.value, 2)
                      : displayItem.value}
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
  return null;
};

const RenderResponsiveLegend = ({
  legends,
}: Readonly<{ legends: components["schemas"]["Graph"][] }>) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const resolveBgColor = (color: {
    readonly light: string;
    readonly dark: string;
  }) => {
    if (isDark) {
      return color.dark;
    }

    return color.light;
  };

  if (legends.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-row flex-wrap items-start justify-end gap-x-6 gap-y-2 px-4 pt-6 sm:items-center">
      {legends.map((entry, index) => (
        <div
          key={`item-${index}`}
          className={cn("flex items-center gap-2 rtl:flex-row-reverse", {
            "md:hidden": !entry.is_main,
            hidden: !entry.label,
          })}
        >
          <span
            className="size-4 shrink-0 rounded-full"
            style={{ backgroundColor: resolveBgColor(entry.color) }}
          />
          <span
            className={cn(
              "whitespace-nowrap text-neutral-900 dark:text-neutral-100",
              "text-[12px] font-medium leading-[18px] tracking-normal",
            )}
            dir="ltr"
          >
            {entry.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const Graph = (props: Readonly<TResponse>) => {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("growth-graphs");
  const isDarkMode = resolvedTheme === "dark";
  const isMobile = useIsMobile();
  const [hoverData, setHoverData] = useState<{
    data: HoverInfo[];
    x: string;
  }>();
  const [brushRange, setBrushRange] = useState<{
    startIndex?: number;
    endIndex?: number;
  }>({});

  const { plot, graphLoading, className } = props;
  const mobile = useIsMobile();

  const graphData = useMemo(
    () =>
      plot?.coordinates.map((slice) => {
        const dataPoint: {
          x: number;
          hover?: HoverInfo[] | null;
          [key: string]: number | number[] | HoverInfo[] | null | undefined;
        } = {
          x: slice.x,
        };

        slice.y_s?.forEach((point) => {
          dataPoint[point.key] = point.y;
        });

        slice.area_y_s?.forEach((point) => {
          dataPoint[point.key] = point.y;
        });

        if (slice.hover) {
          dataPoint.hover = slice.hover;
        }

        return dataPoint;
      }),
    [plot],
  );

  const rightAxisTicks =
    plot?.curved_lines
      .map((line) => {
        const coord = plot.coordinates.findLast((coordinate) =>
          coordinate.y_s.some((point) => point.key === line.key),
        );
        if (coord) {
          const point = coord.y_s.find((point) => point.key === line.key);
          return point ? point.y : null;
        }
        return null;
      })
      .filter((value): value is number => value !== null)
      .sort((a, b) => a - b) ?? [];

  const formatRightAxisTick = (value: number) => {
    const allValues = plot?.curved_lines
      .map((line) => {
        const coord = plot.coordinates.findLast((coordinate) =>
          coordinate.y_s.some((point) => point.key === line.key),
        );
        if (coord) {
          const point = coord.y_s.find((point) => point.key === line.key);
          return point ?? null;
        }
        return null;
      })
      .filter((val) => val !== null)
      .sort((a, b) => a!.y - b!.y);

    const lineInfo = allValues?.find((point) => point?.y === value);
    const lineIndex = plot?.curved_lines.findIndex(
      (line) => line.key === lineInfo?.key,
    );

    const selectedLine =
      lineIndex === undefined || lineIndex === -1
        ? null
        : plot?.curved_lines[lineIndex];

    const shouldShowLabel = !selectedLine?.is_main;
    return shouldShowLabel ? (selectedLine?.label ?? "") : "";
  };

  const getDomain = (values?: number[]): [number, number] | undefined => {
    if (!values || values.length === 0) {
      return undefined;
    }
    const first = values.at(0);
    const last = values.at(-1);
    if (first != null && last != null) {
      return [first, last];
    }
    return undefined;
  };

  const xDomain = useMemo(() => {
    if (!graphData || graphData.length === 0) {
      return getDomain(plot?.chart_info.x_grid_values);
    }
    const start = brushRange.startIndex ?? 0;
    const end = brushRange.endIndex ?? graphData.length - 1;

    const min = graphData[start]?.x;
    const max = graphData[end]?.x;

    if (min !== undefined && max !== undefined) {
      return [min, max] as [number, number];
    }
    return getDomain(plot?.chart_info.x_grid_values);
  }, [plot, graphData, brushRange]);

  const xTicks = useMemo(() => {
    const gridValues = plot?.chart_info.x_grid_values;
    if (!gridValues) return undefined;
    if (!graphData || graphData.length === 0) return gridValues;

    const start = brushRange.startIndex ?? 0;
    const end = brushRange.endIndex ?? graphData.length - 1;

    const min = graphData[start]?.x;
    const max = graphData[end]?.x;

    if (min !== undefined && max !== undefined) {
      return gridValues.filter((val) => val >= min && val <= max);
    }
    return gridValues;
  }, [plot, graphData, brushRange]);
  const yDomain = useMemo(
    () => getDomain(plot?.chart_info.y_grid_values),
    [plot],
  );

  const legends: components["schemas"]["Graph"][] = [
    ...(plot?.area_points ?? []),
    ...(plot?.curved_lines ?? []),
    ...(plot?.straight_lines ?? []),
    ...(plot?.static_points.map((item) => ({ ...item, is_main: true })) ?? []),
  ];

  return (
    <>
      {graphLoading ? (
        <div className="flex w-full items-end justify-center gap-6">
          <Skeleton className="h-[200px] w-[40px]" />
          <Skeleton className="h-[250px] w-[40px]" />
          <Skeleton className="h-[200px] w-[40px]" />
        </div>
      ) : (
        <div>
          <ChartContainer
            config={{}}
            className={cn(
              "aspect-[4/5] dark:bg-neutral-950 md:aspect-[16/9]",
              className,
            )}
            dir="ltr"
          >
            <ComposedChart
              accessibilityLayer
              data={graphData}
              height={isMobile ? 300 : 546}
              width={isMobile ? 277 : 555}
            >
              <CartesianGrid />

              <XAxis
                dataKey="x"
                tickLine={true}
                axisLine={true}
                tickMargin={8}
                ticks={xTicks}
                domain={xDomain}
                interval={mobile ? undefined : 0}
                type="number"
                height={28}
              >
                <Label
                  value={plot?.chart_info.x_axis_name}
                  position="insideTopRight"
                  fontSize={14}
                  dy={-30}
                />
              </XAxis>

              <YAxis
                tickLine={true}
                axisLine={true}
                ticks={plot?.chart_info.y_grid_values}
                interval={mobile ? undefined : 0}
                domain={yDomain}
                type="number"
                width={28}
              >
                <Label
                  value={plot?.chart_info.y_axis_name}
                  position="insideTopRight"
                  fontSize={14}
                  angle={-90}
                  dx={15}
                />
              </YAxis>

              <YAxis
                yAxisId="right"
                orientation="right"
                hide={isMobile}
                width={isMobile ? 0 : 100}
                tickLine={true}
                axisLine={true}
                domain={yDomain}
                type="number"
                ticks={rightAxisTicks}
                tickCount={rightAxisTicks.length}
                tickMargin={3}
                tickFormatter={formatRightAxisTick}
                interval={0}
                tick={{ fontSize: 14 }}
                allowDecimals={true}
                minTickGap={0}
              />

              <Tooltip
                cursor={true}
                trigger={"hover"}
                content={
                  <CustomScatterTooltip plot={plot} hoverData={hoverData} />
                }
              />

              {plot?.area_points?.map((line) => {
                if (line.label) {
                  return (
                    <Area
                      key={line.key}
                      name={line.label}
                      dataKey={line.key}
                      fill={isDarkMode ? line.color.dark : line.color.light}
                      stroke={isDarkMode ? line.color.dark : line.color.light}
                      fillOpacity={0.7}
                      connectNulls={true}
                    />
                  );
                } else {
                  return undefined;
                }
              })}

              {plot?.curved_lines?.map((line) => {
                if (line.label) {
                  return (
                    <Line
                      yAxisId="right"
                      key={line.key}
                      name={line.label}
                      dataKey={line.key}
                      stroke={isDarkMode ? line.color.dark : line.color.light}
                      strokeWidth={2}
                      dot={false}
                      connectNulls
                    />
                  );
                } else {
                  return undefined;
                }
              })}

              {plot?.straight_lines.map((line) => {
                if (line.key) {
                  return (
                    <ReferenceLine
                      key={line.key}
                      x={line.x ?? undefined}
                      y={line.y ?? undefined}
                      segment={line.points?.map((point) => ({
                        x: point.x,
                        y: point.y,
                      }))}
                      stroke={isDarkMode ? line.color.dark : line.color.light}
                      label={line.label}
                      type="number"
                      strokeDasharray="3 3"
                    />
                  );
                } else {
                  return undefined;
                }
              })}

              {plot?.static_points?.map((line) => {
                if (line.label) {
                  return (
                    <Scatter
                      key={line.key}
                      name={line.label}
                      dataKey={line.key}
                      fill={isDarkMode ? line.color.dark : line.color.light}
                      shape={<RenderDot setHoverData={setHoverData} />}
                    />
                  );
                } else {
                  return undefined;
                }
              })}

              <Brush
                dataKey="x"
                height={15}
                stroke="hsl(var(--primary))"
                fill={"hsl(var(--background))"}
                travellerWidth={15}
                onChange={setBrushRange}
              />
            </ComposedChart>
          </ChartContainer>
          <div className="flex w-full items-center justify-center gap-1.5 pt-1 text-xs text-muted-foreground">
            <MoveHorizontal className="size-4" />
            <span dir="auto" className="text-wrap">
              {t("zoom-hint")}
            </span>
          </div>
        </div>
      )}

      <RenderResponsiveLegend legends={legends} />
    </>
  );
};

const RenderDot: FC<
  DotProps & {
    setHoverData: Dispatch<
      SetStateAction<{ data: HoverInfo[]; x: string } | undefined>
    >;
    payload?: {
      x: string | number;
      [key: string]: unknown;
    };
  }
> = (props) => {
  const { cx, cy, fill, setHoverData, payload } = props;
  return (
    <Dot
      cx={cx}
      cy={cy}
      fill={fill}
      r={6}
      onMouseEnter={() => {
        console.log("props", props);
        if ("hover" in props) {
          setHoverData({
            data: props?.hover,
            x: String(payload?.x ?? ""),
          } as {
            data: HoverInfo[];
            x: string;
          });
        }
      }}
      onMouseLeave={() => {
        setHoverData(undefined);
      }}
    />
  );
};

export default memo(Graph);
