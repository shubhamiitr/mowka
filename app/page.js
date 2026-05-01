
import { Home } from '../src/components/Home';
import { METADATA } from '../src/constants/content';

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
        url: 'https://mowka.in',
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
            "@id": "https://mowka.in/#website",
            "name": "Mowka",
            "alternateName": ["Mowka Enterprises", "Mowka Talent Partner"],
            "url": "https://mowka.in/",
            "description": "For founders hiring builders with a founding mindset. 5 introductions, 1 hire, pay only when they join. Practitioner-led hiring with one candidate at a time, calibrated by your feedback. 12.5–15% of CTC depending on role scarcity.",
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
            "description": "Practitioner-led hiring for founders looking for builders with a founding mindset. Each candidate vetted on both sides, sharpened by your feedback after every meeting. We typically close in five introductions or fewer. Pay only when they join. Engineering, research, product, and design roles.",
            "slogan": "5 Introductions. 1 Hire. Pay Only When They Join.",
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
            "knowsAbout": [
                "Technical Recruitment",
                "Founding Engineer Hiring",
                "Founding Mindset Hiring",
                "High-Agency Builder Hiring",
                "Operator Hiring",
                "Product Builder Hiring",
                "0 to 1 Engineer Hiring",
                "AI Engineer Hiring",
                "Founding AI Engineer",
                "Founding Backend Engineer",
                "Founding Full Stack Engineer",
                "CTO Search",
                "Head of Engineering Search",
                "Early Stage Startup Hiring",
                "Practitioner-Led Recruiting",
                "Pay-Only-When-They-Join Recruiting",
                "Contingent Recruiting",
                "Executive Search",
                "Software Engineering",
                "AI Infrastructure",
                "Startup Hiring"
            ],
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
            "description": "AI innovation leader with 10+ years of experience and 7+ years leading AI innovation teams. Former architect at Amazon Prime Video and infrastructure lead at Rephrase.ai (acquired by Adobe). Conducted 2000+ interviews.",
            "award": "US Patent 11645249B1 - System for automated metadata and copyright management",
            "alumniOf": [
                { "@type": "Organization", "name": "Amazon Prime Video" },
                { "@type": "Organization", "name": "Rephrase.ai" }
            ],
            "knowsAbout": [
                "AI Innovation Leadership",
                "Founding Engineer Hiring",
                "High-Agency Builder Evaluation",
                "Software Engineering",
                "Distributed Systems",
                "AI Talent Sourcing",
                "Technical Leadership",
                "System Design",
                "Generative AI Infrastructure"
            ]
        },
        {
            "@type": "Service",
            "@id": "https://mowka.in/#service",
            "name": "Practitioner-Led Technical Sourcing",
            "serviceType": "Technical Recruitment",
            "provider": { "@id": "https://mowka.in/#organization" },
            "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
            },
            "description": "Practitioner-led search for founders hiring builders with a founding mindset. One candidate at a time, calibrated through founder feedback. Roles typically close in five introductions or fewer. 12.5–15% of CTC depending on role scarcity. Pay only when they join. Engineering, research, product, design.",
            "offers": {
                "@type": "Offer",
                "name": "Pay After They Join",
                "description": "12.5–15% of annual CTC, scaling with role scarcity, payable only after your hire starts. No retainer."
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://mowka.in/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How is Mowka different from a recruiting agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mowka is led by a practitioner who built and hired at Amazon Prime Video and Rephrase.ai (acquired by Adobe). We send one candidate at a time, calibrated through your feedback, rather than flooding you with resumes. Most roles close in five introductions or fewer. No wasted interviews. No dropped offers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does the calibration process work?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We deeply understand your role, company, and ideal candidate profile. We send one candidate. If they're not the fit, your feedback sharpens our understanding. Each round gets closer to the right person."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What does Mowka charge?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "12.5–15% of annual CTC, scaling with the scarcity of the role, payable only after your hire starts. No retainer, no upfront fees. We work on one role at a time for tech and product roles."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What types of roles does Mowka fill?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tech and product roles, from founding engineers to CTOs, research leads to product directors. We work best with early-stage to growth-stage startups building in AI, SaaS, fintech, and deep tech."
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
