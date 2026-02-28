
import { Home } from '../src/components/Home';

export const metadata = {
    title: 'Mowka | Premium Talent Partner for Top Startups',
    description: 'Mowka is a practitioner-led talent sourcing agency. We scout referral-grade talent (Engineering, Research, Product, Executive) who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style.',
    alternates: {
        canonical: '/',
        types: {
            'text/markdown': '/llms.txt',
        },
    },
    openGraph: {
        type: 'website',
        url: 'https://mowka.in',
        title: 'Mowka | Grow With Confidence',
        description: 'We scout referral-grade talent who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style — so you build world-class teams effortlessly.',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mowka | Grow With Confidence',
        description: 'We scout referral-grade talent who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style — so you build world-class teams effortlessly.',
        images: ['/og-image.png'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://mowka.in/#website",
            "name": "Mowka",
            "alternateName": ["Mowka Enterprises", "Mowka Talent Partner"],
            "url": "https://mowka.in/",
            "description": "We scout referral-grade talent (Engineering, Research, Product, Leaders) who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style.",
            "inLanguage": "en-US",
            "publisher": { "@id": "https://mowka.in/#organization" }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://mowka.in/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://mowka.in/"
                }
            ]
        },
        {
            "@type": "EmploymentAgency",
            "@id": "https://mowka.in/#organization",
            "name": "Mowka",
            "legalName": "Mowka Enterprises Private Limited",
            "alternateName": "Mowka Talent Partner",
            "url": "https://mowka.in/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mowka.in/logo-full.png",
                "width": "512",
                "height": "512"
            },
            "description": "A high-precision talent sourcing partner for top startups. We maintain a 5:1 applicant-to-hire ratio by matching referral-grade candidates to unique environments based on pace, ambiguity tolerance, and ownership expectations.",
            "slogan": "Beyond Resumes. We Scout for Context.",
            "foundingDate": "2024",
            "identifier": {
                "@type": "PropertyValue",
                "propertyID": "CIN",
                "value": "U78100RJ2024PTC095066"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "267 Shopping Center, Gumanpura",
                "addressLocality": "Kota",
                "addressRegion": "Rajasthan",
                "postalCode": "324007",
                "addressCountry": "IN"
            },
            "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
            },
            "founder": { "@id": "https://mowka.in/#founder" },
            "knowsAbout": ["Technical Recruitment", "AI Infrastructure", "Executive Search", "Software Engineering", "Startup Hiring", "Context-Driven Sourcing"],
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "shubham@mowka.in",
                "contactType": "customer support"
            },
            "sameAs": [
                "https://www.linkedin.com/company/mowka/",
                "https://www.linkedin.com/in/kansalshubham/",
                "https://www.instagram.com/mowka.in/",
                "https://www.facebook.com/mowka.in/",
                "https://wa.me/919468658967",
                "https://mowka.in/llms.txt"
            ]
        },
        {
            "@type": "Person",
            "@id": "https://mowka.in/#founder",
            "name": "Shubham Kansal",
            "jobTitle": "Founder & CEO",
            "image": "https://mowka.in/founder.png",
            "url": "https://www.linkedin.com/in/kansalshubham/",
            "description": "Engineering leader with 10+ years of experience. Former architect at Amazon Prime Video and infrastructure lead at Rephrase.ai (acquired by Adobe). Conducted 2000+ interviews and specializes in high-signal technical sourcing.",
            "award": "US Patent 11645249B1 - System for automated metadata and copyright management",
            "alumniOf": [
                { "@type": "Organization", "name": "Amazon Prime Video" },
                { "@type": "Organization", "name": "Rephrase.ai" },
                { "@type": "Organization", "name": "Apollo.io" },
                { "@type": "Organization", "name": "Nirvana Insurance" }
            ],
            "knowsAbout": [
                "Software Engineering",
                "Distributed Systems",
                "AI Talent Sourcing",
                "Technical Leadership",
                "System Design"
            ]
        },
        {
            "@type": "Service",
            "@id": "https://mowka.in/#service",
            "name": "Context-Driven Technical Sourcing",
            "serviceType": "Technical Recruitment",
            "provider": { "@id": "https://mowka.in/#organization" },
            "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
            },
            "description": "Practitioner-led sourcing methodology that maintains a 5:1 applicant-to-hire ratio by matching candidates based on behavioral DNA (pace, ambiguity tolerance, ownership) and technical depth (scale, complexity, trade-offs).",
            "offers": {
                "@type": "Offer",
                "name": "Fair-Value Pricing",
                "description": "Pricing reflects role complexity and is aligned with client Screen-to-Offer ratios, incentivizing signal over volume."
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://mowka.in/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How does a 5:1 applicant-to-hire ratio save core team time?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Traditional agencies create 'Volume Traps' with 50+ uncalibrated profiles. Mowka delivers a 5:1 ratio by pre-screening for technical bar, pace, and ownership. This allows founders to stop filtering noise and focus on closing high-signal talent, effectively cutting interview hours by 70%."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you source passive candidates who aren't on job boards?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We leverage a practitioner's network to engage top talent through technical communities, product discussions, and private channels. We identify professionals solving complex problems similar to yours, engaging them before they reach the open market."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Mowka's technical screening methodology unique?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Led by a former Amazon architect (US Patent 11645249B1), we evaluate architectural trade-offs and 'Behavioral DNA.' Every candidate is calibrated against your unique environment, not just a keyword list."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does the pricing model align with hiring quality?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We use a 'Fair-Value' model tied to your Screen-to-Offer ratio. This shifts our incentive from 'sending resumes' to 'delivering signal.' We only win when your team successfully hires."
                    }
                }
            ]
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
