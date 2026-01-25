# Mowka

A modern, high-performance website for **Mowka** — a premium talent solutions firm connecting organizations with elite engineering talent. Built with **Next.js 16 (App Router)** for superior SEO, performance, and security.

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

## Indexing Jobs
To notify Google about job updates instantly:
1. Ensure `mowka-480418-2b30ea4764c7.json` is in the root directory.
2. Run:
```bash
npm run index-jobs
```
