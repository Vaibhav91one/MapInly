# Phase 0 Setup - Next Steps

Phase 0 is partially complete. Complete the following to finish setup:

## 1. Configure Environment Variables

Edit `.env` and fill in:

### Required for database (Prisma + Supabase)

1. Create a Supabase project at [database.new](https://database.new) or [Supabase Dashboard](https://supabase.com/dashboard)
2. In Supabase: **Project Settings → Connect → ORMs → Prisma**
3. Copy the connection strings into `.env`:
   - `DATABASE_URL` — pooled connection (for Prisma Client)
   - `DIRECT_URL` — direct connection (for migrations)

### Required for Supabase Auth

- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — your Supabase anon/public key

### Required for Lingo.dev (i18n)

- `LINGODOTDEV_API_KEY` — get from [lingo.dev](https://lingo.dev) or run `npx lingo.dev@latest login`

### Optional (for full features)

- `RESEND_API_KEY` + `RESEND_FROM_EMAIL` — for transactional emails
- `SUPABASE_SERVICE_ROLE_KEY` — for Realtime (Phase 4 chat) or admin operations

## 2. Run Migrations

After setting `DATABASE_URL` and `DIRECT_URL`:

```bash
pnpm exec prisma migrate dev --name init
```

## 3. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)
