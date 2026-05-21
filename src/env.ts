import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const zLocale = z.enum(["fa", "en", "de"]);

export const env = createEnv({
  client: {
    NEXT_PUBLIC_ROOT_URL: z.url(),
    NEXT_PUBLIC_DEFAULT_LOCALE_KEY: zLocale,
  },
  runtimeEnv: {
    NEXT_PUBLIC_ROOT_URL: process.env.NEXT_PUBLIC_ROOT_URL,
    NEXT_PUBLIC_DEFAULT_LOCALE_KEY: process.env.NEXT_PUBLIC_DEFAULT_LOCALE_KEY,
  },
});
