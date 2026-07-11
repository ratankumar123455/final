# UdhaarLog

A billing / credit (udhaar) tracker for small shops, with WhatsApp payment reminders.

Standalone Next.js app — lives in this `billing-app/` folder, separate from anything
else in this repository.

## Features

- Shop signup/login (phone + password)
- Add customers, record cash sales, give credit, record payments
- Daily summary: today's sales, credit given, payments received, total outstanding
- Per-customer transaction history and running balance
- One-click WhatsApp payment reminder (mocked to the console until you configure a
  real WhatsApp Business API provider)

## Getting started

Requires a Postgres database (local, or a free one from Neon/Supabase).

```bash
npm install
cp .env.example .env
# edit .env: set DATABASE_URL and SESSION_SECRET (openssl rand -hex 32)
npx prisma db push   # creates the tables
npm run dev
```

Open http://localhost:3000, sign up a shop, and start adding customers.

## Going live with WhatsApp

By default, reminders are just logged to the server console (`[WhatsApp:MOCK] ...`)
so you can use the whole app without a WhatsApp account. To actually send messages:

1. Sign up with a WhatsApp Business API provider (e.g. Gupshup, Twilio, WATI).
2. Set `WHATSAPP_API_URL` and `WHATSAPP_API_KEY` in `.env`.
3. Adjust the request body in `src/lib/whatsapp.ts` to match your provider's expected
   payload shape (the current code sends a generic `{ to, message }` JSON body —
   most providers want a different shape).

## Deploying to Vercel

1. Import this repo into a new Vercel project, with **Root Directory** set to
   `billing-app`.
2. Add a Postgres database via Vercel's **Storage** tab (Neon-backed) and connect it
   to the project — this auto-populates `DATABASE_URL`.
3. Add a `SESSION_SECRET` environment variable (generate with `openssl rand -hex 32`).
4. Deploy. Then run `npx prisma db push` once (with `DATABASE_URL` pointed at the
   production database) to create the tables — either from your machine with
   `vercel env pull` first, or via Vercel's own Postgres SQL console.
