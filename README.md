# Mowka

A modern, high-performance website for **Mowka** — practitioner-led hiring for founders looking for builders with a founding mindset. **Hire with confidence.** 5 introductions, 1 hire, pay only when they join. No wasted interviews, no dropped offers. Each candidate vetted on both sides, sharpened by founder feedback after every meeting. 12.5–15% of CTC, scaling with role scarcity.

Built with **Next.js 16 (App Router)** for superior SEO, performance, and security.

## 🚀 Technologies

-   **Framework:** Next.js 16 (App Router)
-   **Styling:** Tailwind CSS + Custom CSS Variables
-   **Animations:** Framer Motion + Lenis (Smooth Scroll)
-   **Icons:** Lucide React
-   **Deployment:** Vercel (Recommended)

## ✨ Features

-   **Server-Side Rendering (SSR):** Fully optimized for search engines with dynamic metadata.
-   **Advanced SEO:** JSON-LD Structured Data (`WebSite`, `Corporation`) and semantic HTML tags.
-   **Performance:** Code splitting, image optimization, and `next/script` for third-party scripts.
-   **Security:** HSTS, Clickjacking protection, and XSS headers via `next.config.js`.
-   **Premium UI:** Custom "Mowka Navy" design system with fluid animations.

## 🛠️ Getting Started

### Prerequisites

-   Node.js 18+
-   npm

### Installation

```bash
npm install
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📂 Project Structure

```bash
mowka/
├── app/                    # Next.js App Router
│   ├── layout.js           # Root Layout (Metadata, Fonts, Security)
│   ├── page.js             # Home Page
│   ├── globals.css         # Global Styles & Tailwind Directives
│   ├── not-found.js        # 404 Page
│   ├── privacy/            # Privacy Policy Route
│   └── terms/              # Terms of Service Route
├── src/
│   ├── components/         # React Components (Hero, Navbar, etc.)
│   └── constants/          # Site content & configuration
├── public/                 # Static Assets (Images, Icons)
├── next.config.js          # Next.js Configuration (Security Headers)
├── tailwind.config.js      # Tailwind Configuration
└── package.json            # Dependencies & Scripts
```

## 🎨 Brand Guidelines

-   **Primary Color:** `#173054` (Mowka Navy)
-   **Accent Color:** `#3a868f` (Mowka Teal)
-   **Typography:** Inter (Sans), Playfair Display (Serif)

## 🔒 Security

This project includes a `next.config.js` with strict security headers:
-   `Strict-Transport-Security` (HSTS)
-   `X-Frame-Options: SAMEORIGIN` (Clickjacking protection)
-   `X-Content-Type-Options: nosniff`
-   `Referrer-Policy: origin-when-cross-origin`

## 📄 License

Proprietary Software. All rights reserved by Mowka Enterprises Private Limited.

## Page Structure (Founder Home)

The home page (`app/page.js`) is the founder-facing flow. Five sections:

1. **Hero** — "For founders hiring builders with a founding mindset" with proof strip (Ringg.ai / Aqqrue.com / OutFlo.io with `Hired in N introductions` outcomes)
2. **Problem** — three pains: best builders aren't applying, noisy early signals, late-stage preference misalignment
3. **How It Works** — four-step system (align on success → scout through a compounding network → converge on role fit → sharpen each conversation)
4. **Why Mowka** — Shubham's hiring credibility (Amazon Prime Video, Rephrase.ai → Adobe, US Patent, 2000+ interviews)
5. **Contact** — "Bring us your toughest role" — pay only when they join, 12.5–15% scaling with role scarcity

## Pricing

12.5–15% of annual CTC, scaling with the scarcity of the role. Payable only after the hire's start date. No retainer, no upfront fees. One role at a time, tech and product roles, founding engineer to CTO.
