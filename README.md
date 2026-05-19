# Mowka

High-trust hiring partner for teams that move fast and care deeply about who they build with.

---

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev                   # http://localhost:3000
```

## Environment variables

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `SUPABASE_SECRET_KEY` | Supabase → Settings → API → service_role key |

## Common commands

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — for companies hiring builders |
| `/builder` | Builder intake — for engineers joining the network |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Changing content

Almost all copy lives in `src/constants/content.js` — headlines, subheads, FAQs, CTAs, metadata.

After changing core positioning, update `public/llms.txt` manually so AI crawlers stay current.

## Changing the booking widget

Cal.com event type: https://app.cal.com/event-types/5740517?tabName=setup

The embed link is set in `content.js` → `SITE_CONTENT.calLink`.

---

## Database

Managed via Supabase UI or Claude Code. RLS enabled on both tables — only server-side API routes can write (service_role key bypasses RLS).

| Table | Stores |
|---|---|
| `builder_submissions` | Builder intake: phone, portfolio URL, preferred contact time |
| `company_leads` | Company leads: website, role/JD link |

---

## Project structure

```
app/
  api/
    builder/connect     Builder intake API
    company/connect     Company lead capture API
  builder/              /builder page
  privacy/              /privacy page
  terms/                /terms page

src/
  components/
    home/               Hero, Problem, Process, WhyMowka, Contact
    builder/            Builder, BuilderHero, BuilderForm
    ui/                 Shared: Footer, Logo, Reveal, MotionLogo
    legal/              PrivacyPolicy, TermsOfService
    Home.jsx            Home page composition
    ClientLayout.jsx    Smooth scroll wrapper

  constants/
    content.js          All copy, metadata, and config

  lib/
    supabase-server.js  Supabase admin client
```
