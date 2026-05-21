import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import stripMarkdown from "strip-markdown";
import { visit } from "unist-util-visit";
import yaml from "js-yaml";
import type { Literal, Heading } from "mdast";
import { ZodError } from "zod";
import { toString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import {
  zBlogFrontmatterSchema,
  type Blog,
  type TocItem,
} from "../src/schema/blog";

const contentDir = path.join(process.cwd(), "src", "content");
const cacheFile = path.join(process.cwd(), "src", "lib", "cached-blogs.ts");

function getAllMdxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath));
    } else if (entry.isFile() && path.extname(entry.name) === ".mdx") {
      files.push(fullPath);
    }
  }

  return files;
}

console.log("Caching blogs...");

try {
  const files = getAllMdxFiles(contentDir);

  const allBlogs: Blog[] = [];
  const slugger = new GithubSlugger();

  const seenIds = new Map<number, string>();

  for (const filePath of files) {
    const relativePath = path.relative(contentDir, filePath);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // 1. Parse frontmatter and content with remark
    let data: unknown = {};
    let rawMdxContent = fileContent;

    const processor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkFrontmatter, ["yaml"]);

    const tree = processor.parse(fileContent);

    visit(tree, "yaml", (node: Literal) => {
      try {
        data = yaml.load(node.value) || {};
        const endOffset = node.position?.end?.offset;

        if (endOffset !== undefined) {
          rawMdxContent = fileContent.substring(endOffset).trim();
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(
            `[Blog Cache Error] Invalid YAML frontmatter in ${relativePath}:`,
            e.message,
          );
        } else {
          console.error(
            `[Blog Cache Error] Invalid YAML frontmatter in ${relativePath}:`,
            "An unknown parsing error occurred",
          );
        }
        process.exit(1);
      }
    });

    // 2. Build TOC from headings in the *content* (not frontmatter)
    const contentAst = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .parse(rawMdxContent);

    const toc: TocItem[] = [];
    slugger.reset();

    visit(contentAst, "heading", (node: Heading) => {
      // Match your remark-toc config: maxDepth: 2
      if (node.depth > 2) return;

      const text = toString(node).trim();
      if (!text) return;

      const id = slugger.slug(text);

      toc.push({
        depth: node.depth,
        value: text,
        id,
      });
    });

    // 3. Calculate word count and reading time from stripped content
    const plainContentVFile = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkFrontmatter, ["yaml"])
      .use(stripMarkdown)
      .use(remarkStringify)
      .processSync(rawMdxContent);

    const plainContentForWordCount = plainContentVFile.toString().trim();

    const unicodeWords = plainContentForWordCount.match(/\p{L}+/gu);
    const wordCount = unicodeWords ? unicodeWords.length : 0;

    // 4. Validate ONLY the frontmatter with Zod
    try {
      const metadata = zBlogFrontmatterSchema.parse(data);

      // --- START NEW LOGIC ---

      // Check if this ID has already been seen
      if (seenIds.has(metadata.id)) {
        const existingFile = seenIds.get(metadata.id);
        console.error(
          `\n❌ [Blog Cache Error] Duplicate ID detected: ${metadata.id}`,
        );
        console.error(`   - File A: ${existingFile}`);
        console.error(`   - File B: ${relativePath}`);
        console.error(`   IDs must be unique across all blogs.\n`);
        process.exit(1);
      }

      // If unique, add it to the map for future checks
      seenIds.set(metadata.id, relativePath);

      // --- END NEW LOGIC ---

      allBlogs.push({
        metadata: {
          ...metadata,
          date: metadata.date.toISOString(),
        },
        wordCount,
        toc,
      });
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        console.error(
          `[Blog Cache Error] Invalid frontmatter in ${relativePath}:`,
        );
        console.error(JSON.stringify(e.message, null, 2));
      } else if (e instanceof Error) {
        console.error(
          `[Blog Cache Error] Unexpected error in ${relativePath}:`,
          e.message,
        );
      } else {
        console.error(
          `[Blog Cache Error] Unexpected error in ${relativePath}:`,
          "An unknown error occurred",
        );
      }
      process.exit(1);
    }
  }

  // 5. Write the cache file
  const fileContent = `/* eslint-disable */
// This file is auto-generated by scripts/cache-blogs.ts
// Do not edit this file directly.

import type { Blog } from "@/schema/blog";

export const allBlogs: Blog[] = ${JSON.stringify(allBlogs, null, 2)};
`;

  fs.writeFileSync(cacheFile, fileContent);
  console.log(`Successfully cached ${allBlogs.length} blogs.`);
} catch (e: unknown) {
  if (e instanceof Error) {
    console.error("Failed to cache blogs:", e.message);
  } else {
    console.error("Failed to cache blogs:", "An unknown error occurred");
  }
  process.exit(1);
}
