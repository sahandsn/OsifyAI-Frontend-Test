import "dotenv/config";
import { defineConfig } from "@hey-api/openapi-ts";
import { env } from "./src/env";

export default defineConfig({
  input: new URL("/schema/", env.NEXT_PUBLIC_API_URL).href,
  output: "src/client",
  plugins: [
    {
      name: "zod",
    },
  ],
});
