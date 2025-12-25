# Mowka Logo Files

## Available Logo Files

### Website Logo (Header/Navigation)
- `logo-horizontal.svg` - Vector format (best for website header)
- `logo-horizontal.png` - Raster format (backup if SVG doesn't work)

### Logo Mark/Symbol (Icon Only)
- `logo-mark.png` - The Mowka symbol/icon (1889x1889px)
- **Use for:** Favicon generation, app icons, standalone icon usage

### Additional Logo Variants
- `logo-horizontal-alt.svg` - Alternative logo format (if different from main)

---

## Brand Assets (In `/public/` root)

### Favicon (Browser Tab Icon)
- `/public/logos/android-chrome-192x192.png` - 192x192px (New browsers)
- `/public/logos/android-chrome-512x512.png` - 512x512px (New browsers)
- `/public/favicon.ico` - ICO format for older browsers

### Open Graph Image (Social Sharing)
- `/public/og-image.png` - Social sharing preview (currently 4000x3448px, needs resize to 1200x630px)
- `/public/og-image.svg` - SVG version of social sharing image

**Note:** og-image.png needs to be resized to 1200x630px for optimal social sharing (WhatsApp, Facebook, LinkedIn, Twitter)

---

## Usage Guidelines

### Website Header Logo
Use `logo-horizontal.svg` in your website header:
```html
<img src="/logos/logo-horizontal.svg" alt="Mowka" width="150" height="auto">
```

### Social Sharing Preview
The og-image files are used for social sharing meta tags in `<head>`:
```html
<meta property="og:image" content="/og-image.png">
```

### Favicon
Favicon is automatically loaded by browsers from `/public/favicon.png` or via:
```html
<link rel="icon" type="image/png" href="/favicon.png">
```

---

## File Organization

```
/public/
├── favicon.ico
├── og-image.png (needs resize to 1200x630)
├── og-image.svg
└── logos/
    ├── logo-horizontal.svg (website header)
    ├── logo-horizontal.png
    ├── logo-mark.png (symbol for favicon generation)
    └── logo-horizontal-alt.svg
```

---

## To-Do

- [ ] Resize og-image.png from 4000x3448 to 1200x630px for optimal social sharing
