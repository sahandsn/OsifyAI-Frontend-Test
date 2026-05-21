// DataTableRangeFilter.tsx

import * as React from "react";
import { Column } from "@tanstack/react-table";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/common/button";
import {
  Select,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { isRangeFilter, RangeFilter } from "@/utils/table-filter"; // Import the helper
import { useTranslations } from "next-intl";
import { SelectContent, SelectItem, SelectTrigger } from "../select";

interface DataTableRangeFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  optionsFrom: {
    label: string;
    value: number;
  }[];
  optionsTo: {
    label: string;
    value: number;
  }[];
}

export function DataTableRangeFilter<TData, TValue>({
  column,
  title,
  optionsFrom,
  optionsTo,
}: Readonly<DataTableRangeFilterProps<TData, TValue>>) {
  const t = useTranslations("General.table");
  const tx = useTranslations();
  const selectedValues = column?.getFilterValue() as RangeFilter;

  const from = React.useMemo(
    () =>
      optionsFrom.find((item) => {
        return item.value.toString() === selectedValues?.from?.toString();
      }),
    [optionsFrom, selectedValues?.from],
  );
  const to = React.useMemo(
    () =>
      optionsFrom.find((item) => {
        return item.value.toString() === selectedValues?.to?.toString();
      }),
    [optionsFrom, selectedValues?.to],
  );

  // Handler to update the 'from' value
  const handleFromChange = (val: string) => {
    const newFilter = { ...selectedValues, from: val };

    if (isRangeFilter(newFilter) && newFilter.from) {
      column?.setFilterValue(newFilter);
    } else {
      // Handle invalid filter, e.g., show an error message or reset
      console.warn("Invalid filter applied:", newFilter);
    }
  };

  // Handler to update the 'to' value
  const handleToChange = (val: string) => {
    const newFilter = { ...selectedValues, to: val };

    if (isRangeFilter(newFilter)) {
      column?.setFilterValue(newFilter);
    } else {
      // Handle invalid filter, e.g., show an error message or reset
      console.warn("Invalid filter applied:", newFilter);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="32" className="h-8 border-dashed">
          <Filter size={16} className="me-2" />
          {title}
          {selectedValues?.from || selectedValues?.to ? (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <div className="md:hidden">
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal"
                >
                  {from && to ? "2" : from || to ? "1" : "0"}
                </Badge>
              </div>
              <div className="hidden flex-wrap gap-x-1 md:flex">
                {selectedValues?.from ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {t("filter-from-value", {
                      value: from?.label ?? "",
                    })}
                  </Badge>
                ) : null}
                {selectedValues?.to ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {t("filter-to-value", {
                      value: to?.label ?? "",
                    })}
                  </Badge>
                ) : null}
              </div>
            </>
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="flex w-fit grid-cols-2 flex-col gap-6 p-4 sm:grid"
        align="start"
      >
        <Select
          onValueChange={handleFromChange}
          defaultValue={selectedValues?.from?.toString()}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue
              placeholder={tx("PatientReport.filter-birthDate-start")}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t("filter-from")}</SelectLabel>
              {optionsFrom.map((item) => (
                <SelectItem
                  value={item.value.toString()}
                  key={item.value}
                  disabled={item.value > Number(selectedValues?.to)}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={handleToChange}
          defaultValue={selectedValues?.to?.toString()}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue
              placeholder={tx("PatientReport.filter-birthDate-end")}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t("filter-to")}</SelectLabel>
              {optionsTo.map((item) => (
                <SelectItem
                  value={item.value.toString()}
                  key={item.value}
                  disabled={item.value < Number(selectedValues?.from)}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  );
}
