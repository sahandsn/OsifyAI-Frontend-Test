import ClientProvider from "./client-provider";
import LocaleProvider from "@/components/provider/locale";
import ThemeProvider from "@/components/provider/theme";
import { TLayout } from "@/types/general";

export default function ServerProvider(
  props: Readonly<Pick<TLayout, "children">>,
) {
  const { children } = props;

  return (
    <LocaleProvider>
      <ThemeProvider>
        <ClientProvider>{children}</ClientProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
