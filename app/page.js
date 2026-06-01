import { Home } from '../src/components/Home';
import { METADATA, BRAND, FOUNDER, HOME_PAGE } from '../src/constants/content';

const BASE = BRAND.url;

export const metadata = {
    title: METADATA.home.title,
    description: METADATA.home.description,
    keywords: METADATA.home.keywords,
    alternates: {
        canonical: '/',
        types: {
            'text/markdown': '/llms.txt',
        },
    },
    openGraph: {
        type: 'website',
        url: BASE,
        title: METADATA.home.ogTitle,
        description: METADATA.home.ogDescription,
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: METADATA.home.ogTitle,
        description: METADATA.home.ogDescription,
        images: ['/og-image.png'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${BASE}/#website`,
            "name": BRAND.name,
            "url": `${BASE}/`,
            "description": BRAND.descriptions.servicePov.long,
            "inLanguage": "en-US",
            "publisher": { "@id": `${BASE}/#organization` }
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${BASE}/#breadcrumb`,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": `${BASE}/`
                }
            ]
        },
        {
            "@type": "Organization",
            "@id": `${BASE}/#organization`,
            "name": BRAND.name,
            "legalName": BRAND.legalName,
            "url": `${BASE}/`,
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE}/logo-full.png`,
                "width": 512,
                "height": 512
            },
            "description": BRAND.descriptions.companyPov.short,
            "slogan": BRAND.tagline,
            "foundingDate": BRAND.foundingDate,
            "identifier": {
                "@type": "PropertyValue",
                "propertyID": "CIN",
                "value": BRAND.cin
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": BRAND.address.locality,
                "addressRegion": BRAND.address.region,
                "addressCountry": BRAND.address.country
            },
            "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United States" }
            ],
            "founder": { "@id": `${BASE}/#founder` },
            "knowsAbout": BRAND.knowsAbout,
            "contactPoint": {
                "@type": "ContactPoint",
                "email": BRAND.email,
                "contactType": "customer service"
            },
            "sameAs": [
                BRAND.socials.linkedin,
                BRAND.socials.wellfound,
                BRAND.socials.producthunt,
                BRAND.socials.peerlist,
                FOUNDER.linkedin,
            ]
        },
        {
            "@type": "Person",
            "@id": `${BASE}/#founder`,
            "name": FOUNDER.name,
            "jobTitle": FOUNDER.jobTitle,
            "description": `${FOUNDER.jobTitle} of ${BRAND.name}. ${FOUNDER.education}. Previously at ${FOUNDER.positions.map(p => p.company).join(', ')}. ${FOUNDER.award}.`,
            "image": FOUNDER.imageAbsolute,
            "url": FOUNDER.linkedin,
            "award": FOUNDER.award,
            "worksFor": { "@id": `${BASE}/#organization` },
            "alumniOf": [
                { "@type": "CollegeOrUniversity", "name": FOUNDER.education },
                ...FOUNDER.positions.map((p) => ({ "@type": "Organization", "name": p.company })),
            ],
            "knowsAbout": FOUNDER.knowsAbout,
            "sameAs": [FOUNDER.linkedin]
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE}/#faq`,
            "mainEntity": HOME_PAGE.faqs.map(({ q, a }) => ({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": { "@type": "Answer", "text": a }
            }))
        }
    ]
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Home />
        </>
    );
}
