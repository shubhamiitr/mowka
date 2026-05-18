# Mowka

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
```

Copy `.env.example` to `.env.local` and fill in the required values before running.

## Key commands

```bash
npm run dev        # dev server (Turbopack)
npm run build      # production build
```

## Content

Most site copy lives in `src/constants/content.js`.
**Important:** `public/llms.txt` is manually maintained. If you change core positioning in `content.js`, remember to update `llms.txt` so AI crawlers have the latest context.

## Structure

```
app/                  # Next.js App Router pages and API routes
  api/
    talent/           # Talent intake API (check + connect)
    auth/             # NextAuth LinkedIn OAuth
  talent/             # /talent page
  faq/                # /faq page
  privacy/            # /privacy page
  terms/              # /terms page
src/
  components/
    home/             # Home page sections (Hero, Problem, Process, WhyMowka, Contact)
    talent/           # Talent intro page (Talent, TalentHero, TalentForm)
    legal/            # PrivacyPolicy, TermsOfService
    *.jsx             # Shared: Footer, ClientLayout, Reveal, MotionLogo, Logo, NotFound
  constants/
    content.js        # Single source of truth for all UI content and metadata
  lib/
    auth.js           # NextAuth config (LinkedIn OAuth)
    supabase-server.js
supabase/
  migrations/         # Talent submissions table
```

## Audiences

- **Companies** — hiring teams and leaders using Mowka to find technical talent (`/`)
- **Talent** — engineers and technical professionals joining the Mowka network (`/talent`)

## Auth & Database

- **Auth**: LinkedIn OAuth via NextAuth v4. Talent authenticate on `/talent` using LinkedIn's OpenID Connect provider.
- **Database**: Supabase stores talent submissions (`talent_submissions` table).
