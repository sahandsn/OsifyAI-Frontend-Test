import { Button } from "@/components/common/button";
import { useNumber } from "@/hooks/use-number";
import { generatePagination } from "@/utils/pagination";
import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: Readonly<DataTablePaginationProps<TData>>) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();
  const pageNumbers = generatePagination(currentPage, pageCount);
  const { formatNumber } = useNumber();

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-center py-6">
      <div className="flex items-center gap-2">
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-neutral-950 dark:text-neutral-50"
              >
                ...
              </span>
            );
          }

          const isCurrent = page === currentPage;
          return (
            <Button
              key={page}
              variant={isCurrent ? "primary" : "text"}
              onClick={() => table.setPageIndex(Number(page) - 1)}
            >
              {formatNumber(page)}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
