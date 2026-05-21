import ClientProvider from "./client-provider";
import LocaleProvider from "@/components/provider/locale";
import ThemeProvider from "@/components/provider/theme";
import QueryProvider from "@/components/provider/query";
import { TLayout } from "@/types/general";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function ServerProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;

  return (
    <NuqsAdapter>
      <QueryProvider>
        <LocaleProvider>
          <ThemeProvider>
            <ClientProvider>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </ClientProvider>
          </ThemeProvider>
        </LocaleProvider>
      </QueryProvider>
    </NuqsAdapter>
  );
}
