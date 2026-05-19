# Mowka

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                   # http://localhost:3000
```

## Key commands

```bash
npm run dev        # dev server (Turbopack)
npm run build      # production build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project → Settings → API |
| `SUPABASE_SECRET_KEY` | Supabase project → Settings → API → service_role key |
| `DATABASE_URL` | Supabase project → Settings → Database → Connection string |

## Production deployment

`.env.local` is not used in production. Set these environment variables directly in your hosting platform (Vercel → Project Settings → Environment Variables):

| Variable | Production value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SECRET_KEY` | service_role key |
| `DATABASE_URL` | Direct connection string |

## Content

Most site copy lives in `src/constants/content.js`.
**Important:** `public/llms.txt` is manually maintained. If you change core positioning in `content.js`, remember to update `llms.txt` so AI crawlers have the latest context.

## Structure

```
app/                  # Next.js App Router pages and API routes
  api/
    talent/           # Talent intake API (connect)
    company/          # Company lead capture API (connect)
  talent/             # /talent page
  privacy/            # /privacy page
  terms/              # /terms page
src/
  components/
    ui/               # Shared primitives: FlowModal, ModalSpinner, Footer, Logo, MotionLogo, Reveal
    home/             # Home page sections: Hero, Problem, Process, WhyMowka, Contact
    talent/           # Talent page: Talent, TalentHero, TalentForm
    legal/            # PrivacyPolicy, TermsOfService
    ClientLayout.jsx  # App-level smooth scroll wrapper
    Home.jsx          # Home page composition
    NotFound.jsx      # 404 page
  constants/
    content.js        # Single source of truth for all UI content and metadata
  lib/
    supabase-server.js
```

## Audiences

- **Companies** — hiring teams using Mowka to find technical talent (`/`)
- **Talent** — engineers joining the Mowka network (`/talent`)

## Database

Supabase (no auth required — forms submit directly):

- `talent_submissions` — talent intake: portfolio URL, phone, preferred contact time
- `company_leads` — company leads: website and role/JD link

## Cal.com

Booking widget on the home page uses Cal.com.

- Event type setup: https://app.cal.com/event-types/5740517?tabName=setup
- Embed link: `hire-with-mowka/30min` (set in `src/constants/content.js` → `SITE_CONTENT.calLink`)
