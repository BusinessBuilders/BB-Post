# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Install dependencies
pnpm install

# Run all apps in development mode (frontend, backend, workers, cron, extension)
pnpm run dev

# Run individual apps in dev mode
pnpm run dev:frontend    # Next.js on port 4200
pnpm run dev:backend     # NestJS on port 3000
pnpm run dev:workers
pnpm run dev:cron

# Build all apps
pnpm run build

# Build individual apps
pnpm run build:frontend
pnpm run build:backend
pnpm run build:workers
pnpm run build:cron

# Run tests with coverage
pnpm test

# Start Docker services for local development (PostgreSQL, Redis)
pnpm run dev:docker

# Prisma commands
pnpm run prisma-generate     # Generate Prisma client
pnpm run prisma-db-push      # Push schema changes to database
pnpm run prisma-db-pull      # Pull schema from database
pnpm run prisma-reset        # Reset database (destructive)
```

## Architecture Overview

This is an NX monorepo for Postiz, an AI social media scheduling tool.

### Apps (`apps/`)

- **frontend**: Next.js React application (port 4200) - user-facing web interface
- **backend**: NestJS API server (port 3000) - handles authentication, API endpoints, business logic
- **workers**: BullMQ background job processors for async tasks (social media posting, notifications)
- **cron**: Scheduled jobs service
- **extension**: Browser extension built with Vite + React + Tailwind
- **sdk**: Node.js SDK for programmatic API access
- **commands**: CLI commands for administrative tasks

### Libraries (`libraries/`)

- **nestjs-libraries**: Core NestJS modules shared by backend services
  - `database/prisma/schema.prisma` - Database schema (PostgreSQL)
  - `integrations/` - Social media provider integrations
  - `bull-mq-transport-new/` - Queue system integration
  - `openai/` - AI features
  - `emails/` - Email sending via Resend
  - `upload/` - File storage (Cloudflare R2 or local)
- **react-shared-libraries**: Shared React components and hooks for frontend
- **helpers**: Utility functions shared across apps

### Data Flow

1. Frontend → Backend API (REST)
2. Backend → PostgreSQL (via Prisma ORM)
3. Backend → Redis (caching, sessions)
4. Backend → BullMQ queues → Workers (async processing)
5. Workers → Social media APIs (posting, analytics)

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
