# Mowka

Founder-caliber talent search for startups. Helps ambitious startups hire engineers, AI talent, and technical leaders through direct outreach, trusted referrals, and deep candidate evaluation.

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
| `/` | Home — for founders hiring builders |
| `/builder` | Builder intake — for engineers joining the network |
| `/jobs` | Open roles listing |
| `/jobs/[slug]` | Individual job detail page |
| `/insights` | Articles (noindexed — temporarily hidden) |
| `/insights/[slug]` | Individual insight page (noindexed) |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Where things live

| What | Where | Notes |
|---|---|---|
| Page routes | `app/` | Each folder is a route |
| API routes | `app/api/` | Server-side only |
| Home + builder copy, CTAs, metadata | `src/constants/content.js` | Start here for most copy changes |
| Job listings | `src/constants/jobs.js` | `status: "open"` to publish, `"closed"` to noindex, `"draft"` to hide |
| Insight articles | `src/constants/insights.js` | |
| Page-level components | `src/components/home/`, `src/components/builder/` | |
| Shared UI components | `src/components/ui/` | |
| Global styles + design tokens | `app/globals.css` | |
| Supabase admin client | `src/lib/supabase-server.js` | |
| Cal.com booking link | `src/constants/content.js` → `SITE_CONTENT.calLink` | |
| AI crawler content | `public/llms.txt` | Update manually after positioning changes |

---

## Monitoring & analytics

| Tool | What it covers | Where |
|---|---|---|
| Vercel Observability | API errors, function error rate, 4XX/5XX by route | vercel.com → mowka → Observability |
| Google Analytics (GA4) | Page views, form submissions, booking conversions | analytics.google.com — property G-5VNYMY69PY |
| Microsoft Clarity | Session recordings, heatmaps, drop-off behaviour | clarity.microsoft.com — project x2b9jxs5tw (linked to GA4) |
| Google Search Console | Search queries, impressions, clicks, indexation | search.google.com/search-console |

See [ANALYTICS.md](./ANALYTICS.md) for event inventory, GA4 exploration setup, and known gaps.

---

## Database

RLS enabled — only server-side API routes can write (service_role key bypasses RLS).

| Table | Stores |
|---|---|
| `builder_submissions` | Builder intake: phone, portfolio URL, preferred contact time |
