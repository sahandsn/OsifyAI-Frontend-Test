import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

const apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: apiUrl.protocol.replace(":", ""),
        hostname: apiUrl.hostname,
        pathname: "/secure-media/**",
        port: apiUrl.port,
      },
    ],
    minimumCacheTTL: 1 * 60 * 60, // 1 hours
  },
  async headers() {
    return [
      {
        source: "/en/not-found",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "noindex, nofollow, max-image-preview:large, max-video-preview:large, notranslate, imageindex",
          },
        ],
      },
      {
        source: "/de/nicht-gefunden",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "noindex, nofollow, max-image-preview:large, max-video-preview:large, notranslate, imageindex",
          },
        ],
      },
      {
        source: "/یافت-نشد",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "noindex, nofollow, max-image-preview:large, max-video-preview:large, notranslate, imageindex",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-mdx-frontmatter",
      "remark-gfm",
    ],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "wrap",
          properties: {
            className: ["heading-link"],
          },
        },
      ],
    ],
  },
});

export default withNextIntl(withMDX(nextConfig));
