# Analytics

## Overview

| Tool | What it covers | Property / ID |
|---|---|---|
| Google Analytics 4 | Events, funnels, traffic sources, conversions | G-5VNYMY69PY |
| Microsoft Clarity | Session recordings, heatmaps, drop-off behaviour | x2b9jxs5tw (linked to GA4) |
| Google Search Console | Search queries, impressions, clicks, indexation | mowka.in |

Both GA4 and Clarity scripts are installed in `app/layout.js`.

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

## Google Analytics 4

### Event Inventory

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

---

### Setup

#### ✅ Key Events

Admin → Data display → Events → "Recent events" tab

Star (☆):
- `booking_confirmed` — real founder conversion
- `builder_form_submit` — builder conversion

Do not star: `book_call_click`, `cal_popup_opened`, `cal_load_failed`, `builder_form_open`, `page_view`.

---

#### ✅ Enhanced Measurement

Admin → Data collection and modification → Data streams → mowka.in → Enhanced measurement → ⚙

| Setting | Set to | Why |
|---|---|---|
| Scrolls | ON | Free scroll depth signal |
| Outbound clicks | ON | Tracks external link clicks |
| Site search | ON | Useful if search is ever added |
| Form interactions | **OFF** | Conflicts with custom form events — double counts |
| Page changes based on browser history | **OFF** | `RouteAnalytics.jsx` handles `page_view` — auto-detection causes duplicates |

---

#### ✅ Cross-Domain & Auto-Detected Domains

Admin → Data collection and modification → Data Streams → mowka.in → Configure tag settings → Show all → Configure your domains:

- Remove any `vercel.app` suggestions — keep only `mowka.in`
- Scroll to "Auto-detected domains" → turn OFF "Monitor auto-detected domains for diagnostics" — prevents GA4 from auto-adding every Vercel preview deployment URL

---

#### ✅ Internal Traffic Filter

The code in `app/layout.js` sets `traffic_type: 'internal'` automatically when `hostname === 'localhost'` — works on any network, no IP management needed.

To activate the filter in GA4:

Admin → Data collection and modification → Data filters → Internal Traffic → set state to **Active**.

Warning: once Active, excluded data is permanently gone. Takes 24-36 hours to apply.

---

#### ✅ Search Console Link

Admin → Property settings → Product Links → Search Console links → Add → select `mowka.in` as Domain property.

---

### Explorations

#### ✅ Founder Exploration

Left sidebar → Explore → Funnel exploration → Blank. Name it "Founder Exploration".

**Tab 1 — Funnel**

| Step name | Condition |
|---|---|
| Started Session | `session_start` |
| Clicked Book a Call | `book_call_click` |
| Opened Calendar | `cal_popup_opened` |
| Confirmed Booking | `booking_confirmed` |

Segments to add: `Direct traffic`, `Mobile traffic`, `Organic traffic`, `Web traffic` (desktop).

Dimensions to add: `Event name`, `Country`, `Device category`, `First user medium`, `Session source`, `Session medium`.

Settings: Visualisation = Standard funnel, Breakdown = Device category, Make open funnel = OFF.

**Tab 2 — Path**

Click + next to tab → Path exploration. Click "Start again" → "Ending point" → Event name → `book_call_click`.

Shows which pages founders visited before clicking "Book a call". Note: the modal title says "Starting point" when setting ending point — GA4 UI bug, it works correctly.

Settings: View unique nodes only = ON, Breakdown = Device category, Values = Event count.

---

#### ✅ Builder Exploration

Duplicate "Founder Exploration" → rename to "Builder Exploration". Change only:

**Tab 1 — Funnel** steps:

| Step name | Condition |
|---|---|
| Started Session | `session_start` |
| Opened Form | `builder_form_open` |
| Submitted Form | `builder_form_submit` |

**Tab 2 — Path** — replace ending point with `builder_form_open`.

---

#### Jobs Exploration

Left sidebar → Explore → Path exploration → Blank. Name it "Jobs Exploration".

Click "Start again" → "Starting point" → Page path → `/jobs`.

Shows which job pages builders navigate to from the listing and what they do after.

---

### Search Query Report

Reports → Search Console → Queries

Shows exact Google search terms, landing page, clicks, impressions, CTR, position.

- Founder queries: filter landing page = `/`
- Builder queries: filter landing page = `/builder` or `/jobs`

---

## Microsoft Clarity

Project ID: **x2b9jxs5tw** — linked to GA4 property G-5VNYMY69PY.

### Setup

#### ✅ Step 1: Create Project

clarity.microsoft.com → New project → Name: Mowka, URL: mowka.in, Industry: B2B Services.

#### ✅ Step 2: Install Script

Script is already installed in `app/layout.js` — no action needed.

#### ✅ Step 3: Link GA4

Settings → Setup → Google Analytics integration → Get Started → connect property G-5VNYMY69PY.

Enables "View in GA4" from any recording and "View recording" links inside GA4 sessions.

#### Step 4: Verify on Production

After deploying, visit mowka.in yourself → check Clarity → Recordings. Your session should appear within a few minutes. Settings → Setup shows a green checkmark once the script is detected.

---

**What it answers that GA4 can't:**
- Did the Cal.com popup load or fail silently after a click?
- Where do founders scroll and stop on the home page?
- Did the builder form confuse anyone before they dropped off?

**How to use:**
- Recordings — watch real sessions, filter by page or device
- Heatmaps — click and scroll patterns per page
- Inside any recording, "View in GA4" jumps to that user's session in GA4
- Inside GA4, sessions with recordings show a "View recording" link

Dashboard: clarity.microsoft.com

---

## Known Gaps

- "Email us" link in Contact section has no GA event — untracked founder intent signal
- `cal_load_failed` is the signal for technical drop-off — if its count is close to `book_call_click`, the Cal popup is failing, not founders losing interest
