#!/usr/bin/env node
// Sync static files (public/site.webmanifest, public/llms.txt) from
// src/constants/content.js so brand/legal/content data never drifts.
//
// Run: `npm run sync`
// Also runs automatically pre-commit (.githooks/pre-commit).

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import {
    SITE_CONTENT,
    COMPANY_INFO,
    FOUNDER,
    HOME_PAGE,
    FAQS,
    PRICING,
    METADATA,
} from '../src/constants/content.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const path = (p) => resolve(ROOT, p);

let changed = false;

// ---------- public/site.webmanifest ----------
const manifest = {
    name: `${SITE_CONTENT.appName} | ${capitalize(SITE_CONTENT.tagline)}`,
    short_name: SITE_CONTENT.appName,
    description: SITE_CONTENT.description,
    icons: [
        { src: 'android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#173054',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    scope: '/',
};

writeIfChanged('public/site.webmanifest', JSON.stringify(manifest, null, 2) + '\n');

// ---------- public/llms.txt ----------
const llmsPath = path('public/llms.txt');
const before = readFileSync(llmsPath, 'utf8');

let after = before;

// 1) Line-level patches for volatile fields scattered through the file.
after = after
    .replace(
        /^- \[Privacy Policy\]\([^)]*\): .*/m,
        `- [Privacy Policy](${SITE_CONTENT.siteUrl}/privacy): Data collection and usage policies (${METADATA.privacy.lastUpdated}).`
    )
    .replace(
        /^- \[Terms of Service\]\([^)]*\): .*/m,
        `- [Terms of Service](${SITE_CONTENT.siteUrl}/terms): Service terms and conditions (${METADATA.terms.lastUpdated}).`
    )
    .replace(/^- \[LinkedIn\]\([^)]*\):/m, `- [LinkedIn](${COMPANY_INFO.socials.linkedin}):`)
    .replace(/^- \[Instagram\]\([^)]*\):/m, `- [Instagram](${COMPANY_INFO.socials.instagram}):`)
    .replace(/^- \[Facebook\]\([^)]*\):/m, `- [Facebook](${COMPANY_INFO.socials.facebook}):`)
    .replace(/^- \[WhatsApp\]\([^)]*\):/m, `- [WhatsApp](${COMPANY_INFO.whatsappLink}):`)
    .replace(/^- Email: .*/m, `- Email: ${COMPANY_INFO.email}`)
    .replace(/^- Legal Name: .*/m, `- Legal Name: ${COMPANY_INFO.legalName}`)
    .replace(/^- CIN: .*/m, `- CIN: ${COMPANY_INFO.cin}`)
    .replace(
        /^- Headquarters: .*/m,
        `- Headquarters: ${COMPANY_INFO.address.streetAddress}, ${COMPANY_INFO.address.locality}, ${COMPANY_INFO.address.region}, ${COMPANY_INFO.address.postalCode}, India.`
    )
    // Pricing bullet in Summary
    .replace(/^- \*\*The Pricing:\*\* .*/m, `- **The Pricing:** ${PRICING.summary}`)
    // Founder header line: "Name (Title)"
    .replace(
        /^[^\n]+ \(Founder[^)]*\)\s*$/m,
        `${FOUNDER.name} (${FOUNDER.jobTitle})`
    );

// 2) Section-level regeneration for sections that mirror constants exactly.
after = replaceSection(after, 'The Problem We Solve', () =>
    HOME_PAGE.problem.pains.map((p) => `- ${p.title}. ${p.description}`).join('\n')
);

after = replaceSection(after, 'How It Works', () => {
    const intro = 'A four-step system designed to get the right builder in front of you, fast.';
    const steps = HOME_PAGE.process.steps
        .map((s) => `- ${s.title}: ${s.description}`)
        .join('\n');
    return `${intro}\n${steps}`;
});

after = replaceSection(after, 'FAQs', () =>
    FAQS.map(({ q, a }) => `Q: ${q}\n${a}`).join('\n\n')
);

if (after !== before) {
    writeFileSync(llmsPath, after);
    changed = true;
    console.log('  ✓ public/llms.txt — synced');
} else {
    console.log('  · public/llms.txt — already in sync');
}

console.log(changed ? '\nSync complete (files changed).' : '\nSync complete (no changes).');

// ---------- helpers ----------

// Replace everything between "## SectionName\n" and the next "## " heading
// (or end of file) with the output of `bodyFn()`. Single blank line padding
// is preserved.
function replaceSection(source, sectionName, bodyFn) {
    const pattern = new RegExp(
        `(^## ${escapeRegex(sectionName)}\\n)([\\s\\S]*?)(?=^## |\\Z)`,
        'm'
    );
    return source.replace(pattern, (_, header) => `${header}${bodyFn()}\n\n`);
}

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function writeIfChanged(relPath, content) {
    const p = path(relPath);
    let current = '';
    try { current = readFileSync(p, 'utf8'); } catch { /* file doesn't exist yet */ }
    if (current !== content) {
        writeFileSync(p, content);
        changed = true;
        console.log(`  ✓ ${relPath} — regenerated`);
    } else {
        console.log(`  · ${relPath} — already in sync`);
    }
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
