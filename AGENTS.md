# Website maintenance

- Keep the Next.js + Tailwind + GitHub Pages static-export stack. No databases, CMS, runtime APIs, or new dependencies unless the user asks.
- The site is one home page (profile (including background) → news → publications → projects) plus project detail pages, a CV page and a user-requested News archive. Home shows only the latest five News items.
- Editable copy and records live in `content/`; do not duplicate them inside components.
- Home section order and menu labels: `content/home.ts`. Extra menu items: `content/navigation.ts`. Project registration and order: `content/projects/index.ts`. A project with `visible: false` must not have an exported page or internal links.
- Publications are a single list sorted by year; use topic tags, separate status badges and resource links; omit summaries and page ranges.
- Theme tokens in `app/theme.css`; Inter and Noto Sans KR fonts are self-hosted in `app/fonts/` so builds need no network.
- Preserve `basePath` support: Next `Link` for internal routes, `assetPath` for public assets.
- When changing content structure, update `EDITING.md` and `templates/project.ts`.
- Run `npm run build` and `npm run typecheck` after routing or content-structure changes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
