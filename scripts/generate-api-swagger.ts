import { env } from "@/env";
import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";
import ts from "typescript";

const types_address = "src/types/api-swagger.d.ts";

(async () => {
  const schemaUrl = new URL("/schema/", env.NEXT_PUBLIC_API_URL).href;

  const ast = await openapiTS(schemaUrl, {
    transform(schemaObject) {
      const FILE = ts.factory.createTypeReferenceNode(
        ts.factory.createIdentifier("File"),
      );
      const NULL = ts.factory.createLiteralTypeNode(ts.factory.createNull());

      const t = schemaObject?.type;

      // Normalize OpenAPI "type" into a plain string array to avoid TS union/tuple narrowing issues
      const typeList: readonly string[] =
        t == null ? [] : Array.isArray(t) ? (t as readonly string[]) : [t];

      const isBinaryString =
        schemaObject?.format === "binary" && typeList.includes("string");

      if (!isBinaryString) return;

      // OAS 3.0: nullable: true
      // OAS 3.1: type: ["string", "null"]
      const isNullable =
        schemaObject?.nullable === true || typeList.includes("null");

      return isNullable ? ts.factory.createUnionTypeNode([FILE, NULL]) : FILE;
    },
  });

  const out = astToString(ast);
  fs.writeFileSync(types_address, out);
  console.log(`Generated ${types_address}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
