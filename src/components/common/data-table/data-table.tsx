"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  OnChangeFn,
  PaginationState,
  SortingState,
  Table as RTTable,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocale, useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { TLink } from "@/types/general";
import {
  ArrowLeftLinear,
  ArrowRightLinear,
  HistoryLinear,
  UserLinear,
} from "solar-icon-set";
import { DataTablePagination } from "./data-table-pagination";

const ICONS = {
  history: HistoryLinear,
  user: UserLinear,
};

export interface DataTableToolbarProps<TData> {
  table: RTTable<TData>;
  loading: boolean;
}

export type IconKey = keyof typeof ICONS;

export interface DataTableHeaderProps {
  title: string;
  linkText?: string;
  linkHref?: TLink;
  iconKey: IconKey;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading: boolean;
  count: number;
  pagination: {
    state: PaginationState;
    setState: OnChangeFn<PaginationState>;
  };
  sorting: {
    setState: OnChangeFn<SortingState>;
    state: SortingState;
  };
  columnFilters: {
    setState: OnChangeFn<ColumnFiltersState>;
    state: ColumnFiltersState;
  };
  DataTableToolbar?: (props: DataTableToolbarProps<TData>) => React.ReactNode;
  DataTableMainAction?: (
    props: DataTableToolbarProps<TData>,
  ) => React.ReactNode;
  header?: DataTableHeaderProps;
  renderMobileRow?: (props: { row: TData; index: number }) => React.ReactNode;
  emptyMessage: React.ReactNode;
  onRowClick?: (data: TData) => void;
  showPagination: boolean;
  horizontalScroll?: boolean;
}

export function DataTable<TData, TValue>(
  props: Readonly<DataTableProps<TData, TValue>>,
) {
  const {
    columns,
    data,
    loading,
    count,
    columnFilters,
    pagination,
    sorting,
    DataTableToolbar,
    DataTableMainAction,
    header,
    renderMobileRow,
    emptyMessage,
    onRowClick,
    showPagination,
    horizontalScroll = false,
  } = props;

  const t = useTranslations("General.table");

  const pageCount = Math.ceil(count / pagination.state.pageSize);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: sorting.state,
      columnFilters: columnFilters.state,
      pagination: pagination.state,
    },
    enableRowSelection: false,

    manualFiltering: true,
    onColumnFiltersChange: columnFilters.setState,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),

    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount,
    onPaginationChange: pagination.setState,

    manualSorting: true,
    onSortingChange: sorting.setState,
    defaultColumn: {
      size: 236,
    },
  });

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const checkScroll = React.useCallback(() => {
    // The shadcn Table component renders a div.overflow-auto around the actual table element.
    // We'll track the scroll position of that specific div.
    const scrollContainer =
      containerRef.current?.querySelector(".overflow-auto");
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const isRtl =
        window.getComputedStyle(scrollContainer).direction === "rtl";

      if (isRtl) {
        const absScrollLeft = Math.abs(scrollLeft);
        setCanScrollRight(absScrollLeft > 0);
        setCanScrollLeft(absScrollLeft < scrollWidth - clientWidth - 1);
      } else {
        setCanScrollLeft(Math.ceil(scrollLeft) > 0);
        setCanScrollRight(
          Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1,
        );
      }
    }
  }, []);

  React.useEffect(() => {
    const scrollContainer =
      containerRef.current?.querySelector(".overflow-auto");
    if (!scrollContainer) return;

    checkScroll();
    scrollContainer.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  React.useEffect(() => {
    const scrollContainer =
      containerRef.current?.querySelector(".overflow-auto");
    if (!scrollContainer) return;
    const observer = new ResizeObserver(checkScroll);
    observer.observe(scrollContainer);
    if (scrollContainer.firstElementChild) {
      observer.observe(scrollContainer.firstElementChild);
    }
    return () => observer.disconnect();
  }, [checkScroll]);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn("flex flex-wrap items-end justify-between gap-4", {
          hidden: !DataTableToolbar && !DataTableMainAction,
          "justify-end": !DataTableToolbar && DataTableMainAction,
        })}
      >
        {DataTableToolbar?.({
          table,
          loading,
        })}

        {DataTableMainAction?.({
          table,
          loading,
        })}
      </div>
      <div className="overflow-hidden rounded-md border-[1.5px] border-neutral-400 bg-white p-[24px] dark:border-neutral-800 dark:bg-neutral-950">
        {header ? <DataTableHeader {...header} /> : null}
        <div
          className={cn(
            "relative hidden lg:block",
            !horizontalScroll && "[&>div]:!overflow-hidden",
          )}
          ref={containerRef}
        >
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-b-2 border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950"
                >
                  {headerGroup.headers.map((header) => {
                    const meta = header.column.columnDef.meta as
                      | { className?: string }
                      | undefined;
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{
                          width: `${header.getSize()}px`,
                          minWidth: horizontalScroll
                            ? `${header.getSize()}px`
                            : undefined,
                        }}
                        className={cn(
                          "text-center text-neutral-700 dark:text-neutral-500",
                          meta?.className,
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {loading ? (
                // Render skeleton rows while loading
                Array.from({ length: pagination.state.pageSize }).map(
                  (_, index) => (
                    <TableRow key={index}>
                      {/* Use a TableCell to span across all columns if desired */}
                      <TableCell colSpan={columns.length}>
                        <Skeleton className="h-7 w-full rounded-md" />
                      </TableCell>
                    </TableRow>
                  ),
                )
              ) : table.getRowModel().rows?.length ? (
                // Render actual table rows when data is available
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className={cn("group dark:bg-neutral-950", {
                      "hover:cursor-pointer": onRowClick,
                    })}
                    onClick={() => {
                      const task = row.original;
                      onRowClick?.(task);
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      const meta = cell.column.columnDef.meta as
                        | { className?: string }
                        | undefined;

                      return (
                        <TableCell
                          key={cell.id}
                          className={cn(
                            "p-2 text-center align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                            meta?.className,
                          )}
                          style={{
                            width: `${cell.column.getSize()}px`,
                            minWidth: horizontalScroll
                              ? `${cell.column.getSize()}px`
                              : undefined,
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                // Show empty state if no rows
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    {emptyMessage ?? t("empty")}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {horizontalScroll && (
            <>
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 left-0 top-0 w-8 bg-gradient-to-r from-black/10 to-transparent opacity-0 transition-opacity dark:from-white/10",
                  canScrollLeft && "opacity-100",
                )}
              />
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l from-black/10 to-transparent opacity-0 transition-opacity dark:from-white/10",
                  canScrollRight && "opacity-100",
                )}
              />
            </>
          )}
        </div>

        {/** table for mobile screens */}
        <div className="block lg:hidden">
          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: pagination.state.pageSize }).map(
                (_, index) => (
                  <Skeleton key={index} className="h-32 w-full rounded-lg" />
                ),
              )}
            </div>
          ) : table.getRowModel().rows.length ? (
            <div className="space-y-4">
              {table.getRowModel().rows.map((row, index) => (
                <React.Fragment key={row.id}>
                  {renderMobileRow?.({
                    row: row.original,
                    index,
                  })}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-neutral-700 dark:text-neutral-500">
              {emptyMessage ?? t("empty")}
            </div>
          )}
        </div>
      </div>
      {showPagination ? <DataTablePagination table={table} /> : null}
    </div>
  );
}

function DataTableHeader({
  title,
  linkText,
  linkHref,
  iconKey,
}: Readonly<DataTableHeaderProps>) {
  const Icon = ICONS[iconKey];
  const isRtl = useLocale() === "fa";

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center justify-between gap-2">
        <Icon className="h-[24px] w-[24px]" />
        <h2 className="text-[18px] font-semibold leading-[24px] text-neutral-950 dark:text-neutral-100">
          {title}
        </h2>
      </div>
      {linkText && linkHref ? (
        <Link
          href={linkHref}
          className="text-sm font-medium text-primary-500 transition-colors hover:text-primary-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="hidden lg:block">{linkText}</span>
            {isRtl ? (
              <ArrowLeftLinear className="h-[20px] w-[20px] !text-primary-500" />
            ) : (
              <ArrowRightLinear className="h-[20px] w-[20px] !text-primary-500" />
            )}
          </div>
        </Link>
      ) : null}
    </div>
  );
}
