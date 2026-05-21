import { useLocalStorage } from "@mantine/hooks";

export function useGraphTypePreference() {
  const val = useLocalStorage<"z_score" | "percentile">({
    key: "graph-type-preference",
    defaultValue: "percentile",
  });
  return val;
}

export function useGraphOrgPreference() {
  const val = useLocalStorage<"CDC" | "WHO">({
    key: "graph-org-preference",
    defaultValue: "CDC",
  });
  return val;
}
