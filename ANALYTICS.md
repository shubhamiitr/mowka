# Analytics

GA4 property: **G-5VNYMY69PY** (mowka.in)
Search Console: linked as Domain property since Dec 2025 — covers all pages automatically.

---

## What We Want to Answer

**Founders**
- What % of all site visitors book a call?
- Which pages do they visit before booking?
- Which traffic source brings converting founders?
- Which Google search queries lead to a booking?

**Builders**
- What % of all site visitors open and submit the connect form?
- Which pages do they go through before submitting?
- Which traffic source brings converting builders?
- Which job listings get the most interest?

---

## Event Inventory

| Event | Parameters | Who | What it means |
|---|---|---|---|
| `page_view` | `page_path`, `page_location`, `page_title` | Both | Route change — fired by `RouteAnalytics.jsx` |
| `book_call_click` | — | Founder | Clicked any "Book a call" CTA |
| `cal_popup_opened` | — | Founder | Cal.com calendar popup loaded and was seen |
| `booking_confirmed` | — | Founder | Founder completed booking on Cal.com |
| `cal_load_failed` | — | Founder | Cal.com failed to load — technical drop-off |
| `builder_form_open` | — | Builder | Opened the connect modal |
| `builder_form_submit` | — | Builder | Successfully submitted connect form |

Note: job card clicks are not tracked as custom events — individual job page views (`/jobs/[slug]`) are captured automatically via `page_view` and visible in path explorations.

**Known gap:** "Email us" link in Contact section has no GA event — untracked founder intent signal.

---

## Setup Steps

### ✅ Step 1: Key Events

Admin → Data display → Events → "Recent events" tab

Click the **star (☆)** next to:
- `booking_confirmed` — real founder conversion (completed booking on Cal.com)
- `builder_form_submit` — builder conversion

Do not star: `book_call_click`, `cal_popup_opened`, `cal_load_failed`, `builder_form_open`, `page_view`.

---

### ✅ Step 2: Custom Dimensions

No custom dimensions needed — all useful data is captured via built-in GA4 dimensions (page path, session source, device category etc.).

---

### ✅ Step 3: Search Console Link

Admin → Property settings → Product Links → Search Console links

Already linked: `mowka.in` as Domain property since Dec 2025. No action needed.

---

### ✅ Step 4: Enhanced Measurement

Admin → Data collection and modification → Data streams → mowka.in → Enhanced measurement → gear icon ⚙

| Setting | Set to | Why |
|---|---|---|
| Scrolls | ON | Free scroll depth signal |
| Outbound clicks | ON | Tracks external link clicks |
| Site search | ON | Useful if search is ever added |
| Form interactions | **OFF** | Conflicts with `builder_form_open` / `builder_form_submit` — double counts |
| Page changes based on browser history | **OFF** | `RouteAnalytics.jsx` handles `page_view` for Next.js — GA auto-detection causes duplicates |

Click Save.

---

### ✅ Step 5: Founder Exploration + Builder Exploration

Two explorations, each with two tabs — a funnel tab and a path tab.

**Founder Exploration**

Left sidebar → Explore → Funnel exploration → Blank. Name the exploration "Founder Exploration".

**Tab 1 — Funnel** (rename tab to "Funnel")

Steps — click pencil ✏ next to STEPS:

| Step name | Condition |
|---|---|
| Started Session | `session_start` |
| Opened Calendar | `cal_popup_opened` |
| Confirmed Booking | `booking_confirmed` |

Variables panel (left):

Segments — click +, add:
- `Direct traffic` — word of mouth / people who already know you
- `Mobile traffic` — mobile converts worse, important to track separately
- `Organic traffic` — Google search, most important for SEO
- `Web traffic` — desktop (GA's confusing name for device = desktop)

Skip: US, Paid traffic, Tablet traffic, Email/SMS.

Dimensions — click +, add:
- `Event name` — slice any report by which event fired
- `Country` — geographic breakdown
- `Device category` — desktop vs mobile
- `First user medium` — how they found Mowka the very first time ever
- `Session source` — where this session came from (google, instagram, direct)
- `Session medium` — organic / referral / cpc for this session

Settings panel (right):
- Visualisation: `Standard funnel`
- Make open funnel: `OFF`
- Segment comparisons: leave empty
- Breakdown: `Device category`
- Show elapsed time: `OFF`

**Tab 2 — Path** (click + next to tab → Path exploration → rename tab to "Path")

- Click **"Start again"** (top right of chart)
- Click **"Ending point"**
- Select node type: `Event name`
- Search and select: `book_call_click`

This shows which pages founders visited before clicking "Book a call" — the decision moment.

Note: when you click "Ending point" the modal title still says "Starting point" — GA4 UI bug. It is correctly set as ending point once you confirm.

Settings panel:
- View unique nodes only: `ON`
- Breakdown: drag `Device category` in
- Values: `Event count`

---

**Builder Exploration**

In the Explorations list, find "Founder Exploration" → click three dots (⋮) → Duplicate. Rename to "Builder Exploration". Only change two things:

**Tab 1 — Funnel** — replace steps with:

| Step name | Condition |
|---|---|
| Started Session | `session_start` |
| Opened Form | `builder_form_open` |
| Submitted Form | `builder_form_submit` |

**Tab 2 — Path** — replace ending point `book_call_click` with `builder_form_open`

This shows which pages builders visited before opening the form — including individual job pages like `/jobs/full-stack-engineer-consumer-ai`.

---

**Founder funnel:** `book_call_click` → `cal_popup_opened` → `booking_confirmed`
`cal_load_failed` tracked separately — if count is close to `book_call_click`, drop-off is technical failure not disinterest.

---

### Step 6: Jobs Path Exploration

To see which job listings get the most interest and what builders do after:

Left sidebar → Explore → Path exploration → Blank. Name it "Jobs Exploration".

- Click **"Start again"**
- Click **"Starting point"**
- Select node type: `Page path and screen class`
- Select: `/jobs`

This shows the forward path from the jobs listing page — which individual job pages builders navigate to, and what they do after (open the builder form, leave, go back).

No custom events needed — `page_view` captures all job page navigation automatically.

---

### Step 7: Search Query Report

Reports → Search Console → Queries

Shows exact Google search terms, landing page, clicks, impressions, CTR, position. Google organic only — no equivalent exists for direct, referral, or social sources.

- Founder queries: filter landing page = `/`
- Builder queries: filter landing page = `/builder` or `/jobs`

---

## What GA4 Cannot Tell You

GA4 shows drop-off numbers but not reasons. To understand WHY someone opened the form but didn't submit, you need session recordings.

**Install Microsoft Clarity** (free) — records actual user sessions as videos. You'll see exactly where users scroll, what they click, and where they get stuck. One script tag install, same as GA.
