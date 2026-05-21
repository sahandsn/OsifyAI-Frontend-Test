import {
  isServer,
  QueryClient,
  defaultShouldDehydrateQuery,
  MutationCache,
  Query,
  partialMatchKey,
} from "@tanstack/react-query";

export const nonStaticQueries = (query: Query) => {
  const queryClient = getQueryClient();
  const defaultStaleTime =
    queryClient.getQueryDefaults(query.queryKey).staleTime ?? 0;
  const staleTimes = query.observers
    .map((observer) => observer.options.staleTime)
    .filter((staleTime) => staleTime !== undefined);

  const staleTime =
    query.getObserversCount() > 0
      ? // @ts-expect-error from docs https://tkdodo.eu/blog/automatic-query-invalidation-after-mutations#exclude-queries-depending-on-staletime
        Math.min(...staleTimes)
      : defaultStaleTime;

  return staleTime !== Number.POSITIVE_INFINITY;
};

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 1 * 60 * 1000, // 1 min,
      },
      mutations: {
        retry: false,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
    mutationCache: new MutationCache({
      onSuccess: async (_data, _variables, _context, mutation) => {
        const queryClient = getQueryClient();
        const awaitsKeys = mutation.meta?.awaits ?? [];
        const skippedKeys = mutation.meta?.skips ?? [];

        // Async invalidation (awaited)
        if (awaitsKeys.length > 0) {
          await queryClient.invalidateQueries({
            predicate: (query) => {
              const target = awaitsKeys.some((key) =>
                partialMatchKey(query.queryKey, key),
              );
              return target;
            },
          });
        }

        const restricted = [...awaitsKeys, ...skippedKeys];

        if (!mutation.meta?.skipInvalidation) {
          if (mutation.meta?.invalidateAll) {
            queryClient.invalidateQueries({
              predicate: (query) =>
                !restricted.some((key) => partialMatchKey(query.queryKey, key)),
            });
          } else {
            // Immediate invalidation (non-blocking)
            queryClient.invalidateQueries({
              predicate: (query) =>
                nonStaticQueries(query) &&
                !restricted.some((key) => partialMatchKey(query.queryKey, key)),
            });
          }
        }
      },
    }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    browserQueryClient ??= makeQueryClient();
    return browserQueryClient;
  }
}
