import { Home } from '../src/components/Home';
import { METADATA, COMPANY_INFO, SITE_CONTENT, FOUNDER, FAQS, PRICING, SERVICE } from '../src/constants/content';

const BASE = SITE_CONTENT.siteUrl;

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
            "name": SITE_CONTENT.appName,
            "alternateName": ["Mowka Enterprises", COMPANY_INFO.alternateName],
            "url": `${BASE}/`,
            "description": SITE_CONTENT.description,
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
            "@type": "EmploymentAgency",
            "@id": `${BASE}/#organization`,
            "name": SITE_CONTENT.appName,
            "legalName": COMPANY_INFO.legalName,
            "alternateName": COMPANY_INFO.alternateName,
            "url": `${BASE}/`,
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE}/logo-full.png`,
                "width": "512",
                "height": "512"
            },
            "description": COMPANY_INFO.description,
            "slogan": `${SITE_CONTENT.tagline}.`,
            "foundingDate": COMPANY_INFO.foundingDate,
            "identifier": {
                "@type": "PropertyValue",
                "propertyID": "CIN",
                "value": COMPANY_INFO.cin
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": COMPANY_INFO.address.streetAddress,
                "addressLocality": COMPANY_INFO.address.locality,
                "addressRegion": COMPANY_INFO.address.region,
                "postalCode": COMPANY_INFO.address.postalCode,
                "addressCountry": COMPANY_INFO.address.country
            },
            "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
            },
            "founder": { "@id": `${BASE}/#founder` },
            "knowsAbout": COMPANY_INFO.knowsAbout,
            "contactPoint": {
                "@type": "ContactPoint",
                "email": COMPANY_INFO.email,
                "contactType": "customer support"
            },
            "sameAs": [
                COMPANY_INFO.socials.linkedin,
                FOUNDER.linkedin,
                COMPANY_INFO.socials.instagram,
                COMPANY_INFO.socials.facebook,
                COMPANY_INFO.whatsappLink,
                `${BASE}/llms.txt`
            ]
        },
        {
            "@type": "Person",
            "@id": `${BASE}/#founder`,
            "name": FOUNDER.name,
            "jobTitle": FOUNDER.jobTitle,
            "description": `${FOUNDER.jobTitle} of ${SITE_CONTENT.appName}. ${FOUNDER.education}. Previously at ${FOUNDER.positions.map(p => p.company).join(', ')}. ${FOUNDER.award}.`,
            "image": FOUNDER.imageAbsolute,
            "url": FOUNDER.linkedin,
            "award": FOUNDER.award,
            "alumniOf": [
                { "@type": "CollegeOrUniversity", "name": FOUNDER.education },
                ...FOUNDER.positions.map((p) => ({ "@type": "Organization", "name": p.company })),
            ],
            "knowsAbout": FOUNDER.knowsAbout
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE}/#faq`,
            "mainEntity": FAQS.map(({ q, a }) => ({
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
