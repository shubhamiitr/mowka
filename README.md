# Mowka

Practitioner-led hiring for founders. Built with Next.js 16 (App Router).

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
src/
  components/
    home/             # Home page sections (Hero, Problem, Process, WhyMowka, Contact)
    builder/          # Builder intro page (Builder)
    legal/            # PrivacyPolicy, TermsOfService
    *.jsx             # Shared: Navbar, Footer, ClientLayout, Reveal, MotionLogo, NotFound
  constants/
    content.js        # Single source of truth for UI content
  lib/
    auth.js           # NextAuth config (LinkedIn OAuth)
    supabase-server.js
supabase/
  migrations/        # Builder submissions table
```

## Auth & Database

- **Auth**: LinkedIn OAuth via NextAuth v4. Builders authenticate on `/builder` using LinkedIn's OpenID Connect provider.
- **Database**: Supabase stores builder submissions (`builder_submissions` table).