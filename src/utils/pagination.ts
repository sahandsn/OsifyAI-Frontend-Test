/**
 * Generates pagination numbers with ellipsis
 * @param current - Current page number (1-indexed)
 * @param total - Total number of pages
 * @returns Array of page numbers and "ellipsis" strings
 */
export const generatePagination = (
  current: number,
  total: number,
): (number | "ellipsis")[] => {
  // 1. Use a Set to automatically handle duplicates/overlaps
  const pagesSet = new Set<number>();

  // Rule 1: 2 items from start (1, 2)
  pagesSet.add(1);
  if (total >= 2) pagesSet.add(2);

  // Rule 1: 2 items from end (total-1, total)
  if (total > 1) pagesSet.add(total);
  if (total > 2) pagesSet.add(total - 1);

  // Rule 2: 2 items before and after current
  for (let i = current - 2; i <= current + 2; i++) {
    if (i > 0 && i <= total) {
      pagesSet.add(i);
    }
  }

  // 2. Convert to array and sort
  const sortedPages = Array.from(pagesSet).sort((a, b) => a - b);

  // 3. Insert ellipses where there are gaps
  const result: (number | "ellipsis")[] = [];
  let previous = 0;

  for (const p of sortedPages) {
    // If there is a gap strictly larger than 1, insert ellipsis
    if (previous > 0 && p - previous > 1) {
      result.push("ellipsis");
    }
    result.push(p);
    previous = p;
  }

  return result;
};
