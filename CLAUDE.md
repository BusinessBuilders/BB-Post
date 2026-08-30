# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Install dependencies
pnpm install

# Run all apps in development mode (frontend, backend, orchestrator, extension)
pnpm run dev

# Run individual apps in dev mode
pnpm run dev:frontend      # Next.js on port 4200
pnpm run dev:backend       # NestJS on port 3000
pnpm run dev:orchestrator  # Temporal workflows/activities

# Build all apps
pnpm run build

# Build individual apps
pnpm run build:frontend
pnpm run build:backend
pnpm run build:orchestrator
pnpm run build:extension

# Run tests with coverage
pnpm test

# Start Docker services for local development (PostgreSQL, Redis, Temporal)
pnpm run dev:docker

# Prisma commands
pnpm run prisma-generate     # Generate Prisma client
pnpm run prisma-db-push      # Push schema changes to database
pnpm run prisma-db-pull      # Pull schema from database
pnpm run prisma-reset        # Reset database (destructive)
```

## Architecture Overview

This is a Turborepo monorepo for BB Post, Business Builders' AI social media scheduling platform.

### Apps (`apps/`)

- **frontend**: Next.js React application (port 4200) - user-facing web interface
- **backend**: NestJS API server (port 3000) - handles authentication, API endpoints, business logic
- **orchestrator**: Temporal service (NestJS) holding all background workflows and activities - this replaced the old `workers` + `cron` apps
- **extension**: Browser extension built with Vite + React + Tailwind
- **sdk**: Node.js SDK for programmatic API access
- **commands**: CLI commands for administrative tasks

### Libraries (`libraries/`)

- **nestjs-libraries**: Core NestJS modules shared by backend and orchestrator
  - `database/prisma/schema.prisma` - Database schema (PostgreSQL)
  - `integrations/` - Social media provider integrations
  - `temporal/` - Temporal client, workflow and activity helpers
  - `openai/` - AI features
  - `emails/` - Email sending via Resend
  - `upload/` - File storage (Cloudflare R2 or local)
- **react-shared-libraries**: Shared React components and hooks for frontend
- **helpers**: Utility functions shared across apps

### Data Flow

1. Frontend → Backend API (REST)
2. Backend → PostgreSQL (via Prisma ORM)
3. Backend → Redis (caching, sessions)
4. Backend → Temporal → Orchestrator workflows (async processing)
5. Orchestrator → Social media APIs (posting, analytics)

## Key Configuration

- Node.js >=22.12.0 <23.0.0
- pnpm 10.6.1 (packageManager)
- Environment variables in `.env` (copy from `.env.example`)
- Required: `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`, `FRONTEND_URL`, `NEXT_PUBLIC_BACKEND_URL`

## Logging

Use Sentry for logging with `@sentry/nextjs` or `@sentry/nestjs`:
```javascript
import * as Sentry from "@sentry/nextjs";
const { logger } = Sentry;
logger.info("Message", { key: "value" });
logger.fmt`Template with ${variable}`;
```

## Conventions

- Conventional commits: `feat:`, `fix:`, `chore:`
- Keep `.env.example` updated with new environment variables
- Shared code belongs in `libraries/`

## Backend Conventions

Requests must pass through all layers, no shortcuts:

```
DTO >> Controller >> Service >> Repository
```

or, where a manager is involved:

```
DTO >> Controller >> Manager >> Service >> Repository
```

- Most server logic belongs in the shared libraries, not in `apps/backend`. The backend app is mostly controllers plus imports from `libraries/`.
- Never write raw SQL queries - always use Prisma.
- Code must stay generic. Provider-specific logic (Facebook, Instagram, TikTok, ...) must never appear in a generic file. Add a function to the provider interface and call it generically instead - no `if (facebookProvider) { ... }` inside shared code.
- Avoid creating new files that are pure algorithm logic; that is usually the wrong shape for this codebase.
- New code should look like existing code nearby. Don't invent new patterns.

## Frontend Conventions

- UI components live in `apps/frontend/src/components/ui`
- Routing is in `apps/frontend/src/app`
- Components are in `apps/frontend/src/components`
- The project uses Tailwind 3. Before writing a component, read:
  - `apps/frontend/src/app/colors.scss`
  - `apps/frontend/src/app/global.scss`
  - `apps/frontend/tailwind.config.cjs`
- All `--color-custom*` variables are deprecated; do not use them.
- Never install frontend component packages from npm - write native components.
- Always fetch with SWR, using the `useFetch` hook from `libraries/helpers/src/utils/custom.fetch.tsx`.
- Each SWR call must live in its own hook and comply with `react-hooks/rules-of-hooks`. Never add `eslint-disable-next-line` to work around it.

Valid:

```ts
const useCommunity = () => {
  return useSWR(...);
};
```

Not valid:

```ts
const useCommunity = () => {
  return {
    communities: () => useSWR(...),
    providers: () => useSWR(...),
  };
};
```

## Temporal Workflow Rules

- A workflow file that already exists on `origin/main` can never be edited - editing it fails all of its in-flight activities. Create a new versioned workflow instead and point every caller at the new version.
- Workflow activity parameters can never be changed for the same reason. Add a new activity with the new parameters and a new workflow that calls it.

## Production Safety

- Linting runs only from the repository root.
- Use only pnpm. Never another package manager.
- This system runs in production with real users. Any change must not break existing users, and a database migration may be required.

## BB Post Fork Notes

This repository is Business Builders' fork of Postiz (upstream: `gitroomhq/postiz-app`).

- User-visible product name is **BB Post**, not Postiz. Do not reintroduce upstream marketing copy or the Postiz name into user-facing strings.
- The logo at `apps/frontend/public/logo.png` is ours - never replace it with the upstream asset.
- TikTok integration is under TikTok app review. The compliance behaviour in
  `apps/frontend/src/components/new-launch/providers/tiktok/tiktok.provider.tsx`,
  `libraries/nestjs-libraries/src/integrations/social/tiktok.provider.ts` and
  `libraries/nestjs-libraries/src/integrations/social/tiktok.business.provider.ts`
  must be preserved: no default privacy level anywhere, comment/duet/stitch
  default to off, duet/stitch hidden for photo posts, disclosure labels with
  validation, Music Usage Confirmation shown on every post, branded content
  cannot be combined with private visibility, and the processing-time notice.
- LinkedIn is split into separate personal and page providers. The page provider
  uses `LINKEDIN_PAGE_CLIENT_ID` / `LINKEDIN_PAGE_CLIENT_SECRET` and falls back
  to the personal credentials.
