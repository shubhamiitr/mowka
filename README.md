# Mowka Website

A modern, responsive website for Mowka - a talent solutions company that connects organizations with perfectly aligned talent.

## Brand Guidelines

This website follows the Mowka brand guidelines:

- **Brand Colors:**
  - Primary: `#173054` (Dark Blue)
  - Accent: `#3a868f` (Teal)
  - Black: `#000000`
  - White: `#ffffff`

- **Typography:**
  - Primary Font: Montserrat (Headings)
  - Secondary Font: Open Sans (Body text)

- **Brand Slogan:** Grow with Confidence
- **Brand Tone:** Insightful, Empowering, Collaborative

## Features

- ✨ Modern, responsive design
- 🎨 Brand-aligned color scheme and typography
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎯 Clear value propositions and messaging

## Sections

1. **Header** - Navigation with logo and sticky header
2. **Hero** - Main landing section with slogan and value proposition
3. **About Us** - Brand description and value proposition
4. **Mission/Vision** - Company mission and vision statements
5. **Values** - Three core values: Alignment, Impact, Growth
6. **Footer** - Contact information and links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mowka/
├── public/
│   ├── favicon.png
│   ├── og-image.png
│   └── logos/
│       ├── logo-horizontal.svg (website header)
│       ├── logo-mark.png
│       └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutUs.jsx
│   │   ├── MissionVision.jsx
│   │   ├── Values.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## Technologies

- React 18
- Vite
- CSS3 (Custom Properties)
- Google Fonts (Montserrat & Open Sans)

## Assets Used

- **Favicon:** `/public/logos/android-chrome-192x192.png` (192x192px)
- **Logo:** `/public/logos/logo-horizontal.svg` (website header)
- **OG Image:** `/public/og-image.png` (social sharing preview)

## Notes

- All brand assets are properly referenced in the HTML and components
- Social sharing meta tags are configured in `index.html`
- Logo is used in header and footer
- Brand colors and fonts are applied throughout via CSS variables

## License

Apache 2.0

