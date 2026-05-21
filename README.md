# Osify AI Frontend

A modern web application built with Next.js 15, React 19, and Tailwind CSS v3.

## 📋 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v22.x
- **pnpm**: v10.x

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd OsifyAi-Frontend
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    ```

## 📝 How to Add a Blog Post

To add a new blog post, follow these steps:

1.  **Create a Directory**:
    Navigate to `src/content/` and create a new folder. The folder name will be used as the `sharedSlug`.
    _Example_: `src/content/my-new-blog-post`

2.  **Add MDX Files**:
    Inside the new folder, create MDX files for each supported locale: `en.mdx`, `de.mdx`, and `fa.mdx`.

3.  **Frontmatter Configuration**:
    Each MDX file must start with a frontmatter block containing metadata.

    **Required Fields:**

    | Field         | Type       | Description                                                                                                     |
    | :------------ | :--------- | :-------------------------------------------------------------------------------------------------------------- |
    | `title`       | `string`   | The title of the blog post.                                                                                     |
    | `description` | `string`   | A short summary of the content.                                                                                 |
    | `keywords`    | `string[]` | SEO keywords.                                                                                                   |
    | `locale`      | `enum`     | One of: `en`, `de`, `fa`.                                                                                       |
    | `sharedSlug`  | `string`   | **Must match the folder name** in `src/content/`.                                                               |
    | `id`          | `number`   | Unique identifier for the blog post.                                                                            |
    | `slug`        | `string`   | The URL slug for this specific locale.                                                                          |
    | `image`       | `string`   | Path to the cover image (e.g., `/blogs/[sharedSlug]/cover.jpg`).                                                |
    | `author`      | `string`   | Name of the author.                                                                                             |
    | `date`        | `date`     | Publication date (YYYY-MM-DD).                                                                                  |
    | `category`    | `enum`     | Allowed: `medical`, `technology`, `life-style`, `research-and-education`, `news-and-updates`, `general-health`. |

    **Optional Fields:**

    | Field                  | Type             | Default     | Description                                               |
    | :--------------------- | :--------------- | :---------- | :-------------------------------------------------------- |
    | `tags`                 | `string[]`       | `[]`        | Relevant tags.                                            |
    | `resources`            | `{label, url}[]` | `[]`        | External links or references.                             |
    | `related`              | `string[]`       | `[]`        | Slugs of related blog posts.                              |
    | `suggested`            | `string[]`       | `[]`        | Slugs of suggested blog posts.                            |
    | `approvedBy`           | `string`         | `undefined` | Name of the reviewer/approver.                            |
    | `titleGradientIndices` | `number[]`       | `[]`        | Indices of words in the title to apply a gradient effect. |

4.  **Add Images**:
    Place images in `public/blogs/[sharedSlug]/`. Reference them in the MDX file using the absolute path (e.g., `/blogs/my-new-blog-post/image.jpg`).

### Example Frontmatter

```yaml
---
title: "Understanding React 19"
titleGradientIndices: [1, 2]
description: "A deep dive into the new features of React 19."
keywords: ["react", "frontend", "javascript"]
locale: en
id: 101
sharedSlug: understanding-react-19
slug: understanding-react-19-guide
author: Jane Doe
date: 2025-10-25
category: technology
image: /blogs/understanding-react-19/cover.jpg
tags: [react, tech]
resources:
  - { label: "React Documentation", url: "https://react.dev" }
---
```

## 📢 Banners

Banners are managed through the `useBanner` hook in `src/hooks/use-banner.tsx`. The configuration is centralized in the `BANNERS` constant within that file.

### Configuration

To add or update a banner, modify the object for the specific scope (`app` or `landing`).

**Fields:**

| Field       | Type        | Description                                                                                                                                          |
| :---------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | `string`    | Unique identifier (e.g., `{scope}-yyyy-mm-dd-v{number}`). **Changing this ID resets the banner visibility for users who have previously closed it.** |
| `content`   | `ReactNode` | The content to display. Can be a string or a React component.                                                                                        |
| `startDate` | `string`    | Start date (YYYY-MM-DD) when the banner becomes visible.                                                                                             |
| `endDate`   | `string`    | End date (YYYY-MM-DD) when the banner automatically hides.                                                                                           |

### Behavior

- **Persistence**: User preferences (closed banners) are stored in `localStorage` under the key `banner_closed_ids`.
- **Automatic Expiration**: Banners automatically hide if the current date is before `startDate` or after `endDate`.
- **Resetting Visibility**: To show a banner again to users who closed it (e.g., for a new announcement), simply update the `id`.

### Example

```typescript
const BANNERS: TBannerConfig = {
  app: {
    id: "app-2026-03-01-v1",
    content: "Maintenance scheduled for March 1st.",
    startDate: "2026-02-28",
    endDate: "2026-03-02",
  },
  // ...
};
```

## 📂 Project Structure

The project follows a standard Next.js App Router structure within the `src` directory:

```
src/
├── app/            # Next.js App Router pages, layouts, and route groups
├── components/     # Reusable React components (shadcn/ui, custom)
├── hooks/          # Custom React hooks
├── lib/            # Utility libraries and third-party integrations
├── client/         # API client and service definitions
├── types/          # TypeScript type definitions
├── utils/          # General helper functions
├── i18n/           # Internationalization setup (next-intl)
└── content/        # MDX content or static data
```

## 🛠️ Available Scripts

| Script          | Description                                                                         |
| :-------------- | :---------------------------------------------------------------------------------- |
| `pnpm dev`      | Starts the development server at `localhost.osifyai.com:3000`.                      |
| `pnpm build`    | Builds the application for production.                                              |
| `pnpm start`    | Starts the production server.                                                       |
| `pnpm lint`     | Runs ESLint to check for code quality issues.                                       |
| `pnpm lint:fix` | Runs ESLint and automatically fixes fixable issues.                                 |
| `pnpm prettier` | Formats code using Prettier.                                                        |
| `pnpm generate` | Generates API clients and schemas (runs both `generate:api` and `generate:schema`). |
| `pnpm prepare`  | Installs Husky git hooks.                                                           |

## 💻 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/docs/15/app/getting-started) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v3](https://v3.tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Linting & Formatting**: ESLint, Prettier

> [!NOTE]
> **Compatibility**: Next.js 15 and Tailwind CSS v3 were selected to ensure broad adoption for older browsers and operating systems.

## 🌐 Environment Variables

Copy `.env.example` to `.env` and fill in the required environment variables before running the application.

```bash
cp .env.example .env
```
