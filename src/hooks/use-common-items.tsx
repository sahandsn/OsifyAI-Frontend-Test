import { useMemo, useCallback, useState, useEffect } from "react";
import { $api } from "@/api";
import { useSession } from "@/session";
import type { components } from "@/types/api-swagger";
import { isNil } from "lodash";

type TFav = components["schemas"]["FavoriteStrings"];

export type TPathItem = {
  uuid: string;
  name: string;
  tag: TFav["tag"];
  node: TFav;
};

function buildIndexes(roots: TFav[] | undefined) {
  const parentByUuid = new Map<string, string | null>();
  const nodeByUuid = new Map<string, TFav>();

  const stack: Array<{ node: TFav; parentUuid: string | null }> = [];
  for (const r of roots ?? []) stack.push({ node: r, parentUuid: null });

  while (stack.length) {
    const { node, parentUuid } = stack.pop()!;
    nodeByUuid.set(node.uuid, node);
    parentByUuid.set(node.uuid, parentUuid);

    for (const child of node.children ?? []) {
      stack.push({ node: child, parentUuid: node.uuid });
    }
  }

  return { parentByUuid, nodeByUuid };
}

export const useCommonItems = (tag?: TFav["tag"]) => {
  const { session } = useSession();

  // store only the selected uuid (or null)
  const [activeUuid, setActiveUuid] = useState<string | null | undefined>(null);

  const query = $api.useQuery(
    "get",
    "/organizations/favorite-strings/",
    { params: { query: { page_size: 1_000_000_000 } } },
    { enabled: session.isLoggedIn },
  );

  const completeTree = query.data?.results.find((item) => item.tag === tag);

  const { parentByUuid, nodeByUuid } = useMemo(
    () => buildIndexes(query.data?.results),
    [query.data?.results],
  );

  const getPathByUuid = useCallback(
    (uuid: string): TPathItem[] => {
      if (!nodeByUuid.has(uuid)) return [];
      const path: TPathItem[] = [];
      let cur: string | null = uuid;
      const seen = new Set<string>();

      while (cur !== null) {
        if (seen.has(cur)) return [];
        seen.add(cur);

        const node = nodeByUuid.get(cur);
        if (!node) return [];

        path.push({ uuid: node.uuid, name: node.name, tag: node.tag, node });

        const parent = parentByUuid.get(cur);
        if (parent === undefined) return [];
        cur = parent;
      }

      path.reverse();
      return path;
    },
    [nodeByUuid, parentByUuid],
  );

  // derived state: always recomputed from latest query data
  const activePath = useMemo(
    () => (activeUuid ? getPathByUuid(activeUuid) : []),
    [activeUuid, getPathByUuid],
  );

  const activeNode = activePath.at(-1);

  // Reset activeUuid whenever tag changes
  useEffect(() => {
    const setDefault = () => {
      setActiveUuid(null);
    };

    setDefault();
  }, [tag]);

  // If refetch/invalidation changes the tree and the active uuid disappears, reset.
  useEffect(() => {
    const reset = () => {
      if (activeUuid && !nodeByUuid.has(activeUuid)) {
        setActiveUuid(null);
      }
    };

    reset();
  }, [activeUuid, nodeByUuid]);

  // Default selection
  useEffect(() => {
    const setDefault = () => {
      if (isNil(activeUuid) && completeTree) {
        setActiveUuid(completeTree.uuid);
      }
    };
    setDefault();
  }, [activeUuid, completeTree]);

  return {
    completeTree,
    isPending: query.isPending,
    activePath,
    activeNode,
    setActivePath(uuid?: string) {
      setActiveUuid(uuid);
    },
    getPathByUuid,
  };
};
