# Fitline

Gym management system.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (`base-nova` style, Base UI primitives, Lucide icons)
- [Prisma 7](https://www.prisma.io) with the `@prisma/adapter-pg` driver adapter
- PostgreSQL

## Getting started

1. Install dependencies (this also generates the Prisma client):

   ```bash
   npm install
   ```

2. Create your env file and point `DATABASE_URL` at a PostgreSQL database:

   ```bash
   cp .env.example .env
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000). `GET /api/health` reports whether the database is reachable.

## Scripts

| Script                | Description                                  |
| --------------------- | -------------------------------------------- |
| `npm run dev`         | Start the dev server                         |
| `npm run build`       | Production build                             |
| `npm run start`       | Serve the production build                   |
| `npm run lint`        | Run ESLint                                   |
| `npm run typecheck`   | Generate route types and run `tsc`           |
| `npm run db:generate` | Regenerate the Prisma client                 |
| `npm run db:migrate`  | Create and apply a migration (`migrate dev`) |
| `npm run db:push`     | Push the schema without a migration          |
| `npm run db:studio`   | Open Prisma Studio                           |

## Project layout

```
prisma/schema.prisma      Database schema
prisma7.config.ts         Prisma CLI config (loads .env)
src/app/                  Routes, layouts, global styles
src/components/ui/        shadcn/ui components (add more with `npx shadcn@latest add <name>`)
src/lib/prisma.ts         Shared Prisma client (server-only)
src/generated/prisma/     Generated Prisma client (git-ignored)
```

## Theme

The app is dark by default (`<html class="dark">`) with a black + red palette defined as CSS variables in `src/app/globals.css`. Fonts: Geist (body), Geist Mono, and Barlow Condensed for headings (`font-heading`).
