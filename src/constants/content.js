// =============================================================================
// Sources of truth for brand, legal, and content. Edit values here.
// Static files (public/llms.txt, public/site.webmanifest) cannot import from
// this module; they are auto-synced by scripts/sync-static.mjs (runs pre-commit
// via .githooks/pre-commit, or manually: `npm run sync`).
// =============================================================================

export const SITE_CONTENT = {
    appName: "Mowka",
    tagline: "Hire with confidence",
    siteUrl: "https://mowka.in",
    description:
        "For founders hiring builders with a founding mindset. 5 introductions, 1 hire, pay only when they join. Practitioner-led hiring with one candidate at a time, calibrated by your feedback. 12.5–15% of CTC depending on role scarcity.",
    calendlyUrl: "https://calendar.app.google/ASa3XGmwCDTN3YhX8",
};

const ADDRESS = {
    streetAddress: "267 Shopping Center, Gumanpura",
    locality: "Kota",
    region: "Rajasthan",
    postalCode: "324007",
    country: "IN",
};

export const COMPANY_INFO = {
    legalName: "Mowka Enterprises Private Limited",
    alternateName: "Mowka Talent Partner",
    foundingDate: "2025",
    cin: "U63990RJ2025PTC110155",
    email: "shubham@mowka.in",
    whatsappNumber: "+91 94686 58967",
    whatsappLink: "https://wa.me/919468658967",
    address: ADDRESS,
    registeredAddress: `${ADDRESS.streetAddress}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}`,
    description:
        "Practitioner-led hiring for founders looking for builders with a founding mindset. Each candidate vetted on both sides, sharpened by your feedback after every meeting. We typically close in five introductions or fewer. Pay only when they join. Engineering, research, product, and design roles.",
    socials: {
        linkedin: "https://www.linkedin.com/company/mowka/",
        instagram: "https://www.instagram.com/mowka.in/",
        facebook: "https://www.facebook.com/mowka.in/",
    },
    knowsAbout: [
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
        "Startup Hiring",
    ],
};

// Pricing — single source of truth for all surfaces (JSON-LD, llms.txt, etc.).
export const PRICING = {
    range: "12.5–15%",
    summary: "12.5–15% of annual CTC, scaling with role scarcity. Pay only when they join.",
    offerName: "Pay After They Join",
    offerDescription:
        "12.5–15% of annual CTC, scaling with role scarcity, payable only after your hire starts. No retainer.",
    faqAnswer:
        "12.5–15% of annual CTC, scaling with the scarcity of the role, payable only after your hire starts. No retainer, no upfront fees. We work on one role at a time for tech and product roles.",
};

export const SERVICE = {
    name: "Practitioner-Led Technical Sourcing",
    serviceType: "Technical Recruitment",
    description:
        "Practitioner-led search for founders hiring builders with a founding mindset. One candidate at a time, calibrated through founder feedback. Roles typically close in five introductions or fewer. 12.5–15% of CTC depending on role scarcity. Pay only when they join. Engineering, research, product, design.",
};

// FAQs — used by both schema.org FAQPage and llms.txt. Single canonical list.
export const FAQS = [
    {
        q: "How is Mowka different from a recruiting agency?",
        a: "Mowka is led by a practitioner who built and hired at Amazon Prime Video and Rephrase.ai (acquired by Adobe). We send one candidate at a time, calibrated through your feedback, rather than flooding you with resumes. Most roles close in five introductions or fewer. No wasted interviews. No dropped offers.",
    },
    {
        q: "Why only one candidate at a time?",
        a: "Traditional agencies create volume traps by sending dozens of uncalibrated profiles. We value your time. We do the heavy lifting of vetting candidates ourselves and only introduce the one who actually fits your needs.",
    },
    {
        q: "How does the calibration process work?",
        a: "We deeply understand your role, company, and ideal candidate profile. We send one candidate. If they're not the fit, your feedback sharpens our understanding. Each round gets closer to the right person.",
    },
    {
        q: "How do you find builders who aren't active on job boards?",
        a: "We reach builders from a continuously refined pool of previously vetted talent, founder-led referrals, and high-signal connections. We compound our network through trusted introductions rather than relying on static databases — giving us access to a private tier of talent traditional agencies often miss.",
    },
    {
        q: "What makes your evaluation unique?",
        a: "We build a custom competency matrix and evaluation framework for every role using AI agents, domain research, and experienced engineers. The goal is to assess real depth — ownership, technical judgment, decision-making — not surface signals like resume polish or keyword fit.",
    },
    {
        q: "What does Mowka charge?",
        a: PRICING.faqAnswer,
    },
    {
        q: "What types of roles does Mowka fill?",
        a: "Tech and product roles, from founding engineers to CTOs, research leads to product directors. We work best with early-stage to growth-stage startups building in AI, SaaS, fintech, and deep tech.",
    },
];

export const FOUNDER = {
    name: "Shubham Kansal",
    role: "Founder, Mowka",
    jobTitle: "Founder & CEO",
    image: "/founder.jpg",
    imageAbsolute: `${SITE_CONTENT.siteUrl}/founder.png`,
    linkedin: "https://www.linkedin.com/in/kansalshubham/",
    bio:
        "AI innovation leader with 10+ years of experience and 7+ years leading AI innovation teams. Former architect at Amazon Prime Video and infrastructure lead at Rephrase.ai (acquired by Adobe). Conducted 2000+ interviews.",
    award: "US Patent 11645249B1 - System for automated metadata and copyright management",
    alumni: ["Amazon Prime Video", "Rephrase.ai"],
    knowsAbout: [
        "AI Innovation Leadership",
        "Founding Engineer Hiring",
        "High-Agency Builder Evaluation",
        "Software Engineering",
        "Distributed Systems",
        "AI Talent Sourcing",
        "Technical Leadership",
        "System Design",
        "Generative AI Infrastructure",
    ],
};

export const HOME_PAGE = {
    hero: {
        headline: {
            start: "For founders hiring builders",
            highlight: "with a founding mindset"
        },
        subhead:
            "Stop wasting time on hiring noise. Get the right builder in 5 curated introductions.",
        cta: "Let's Talk",
        proofStrip: [
            { company: "Ringg.ai", role: "Senior Audio Research Engineer", outcome: "Hired in 3 intros", logo: "/logos/ringg.svg" },
            { company: "Aqqrue.com", role: "Founding AI Engineer", outcome: "Hired in 2 intros", logo: "/logos/aqqrue.png" },
            { company: "OutFlo.io", role: "Founding Backend Engineer", outcome: "Hired in 5 intros", logo: "/logos/outflo.png" },
        ],
    },
    problem: {
        label: "The problem",
        headline: "Why hiring top builders keeps breaking",
        pains: [
            {
                title: "The best builders aren't applying",
                description:
                    "The strongest builders are usually building, not applying. To hire them, you have to reach them directly.",
            },
            {
                title: "Early hiring signals are noisy",
                description:
                    "AI-written resumes, keyword optimization, and shallow screening interviews make it harder to identify real signal early. As a result, the wrong candidates often reach deeper technical or founder-led interviews.",
            },
            {
                title: "Preference misalignment shows up late",
                description:
                    "Candidates often explore multiple opportunities before committing to preferences like domain, team size, or people they want to work with. Misalignment only becomes visible before joining when these preferences aren’t fully satisfied.",
            }
        ],
    },
    process: {
        label: "How it works",
        headline: "The hiring system",
        steps: [
            {
                step: "01",
                title: "Align on success",
                description:
                    "We understand your business, challenges, the role, and what a right match looks like, and translate it into a clear evaluation lens.",
            },
            {
                step: "02",
                title: "Scout through a compounding network",
                description:
                    "We engage with builders through targeted outreach and referrals from Mowka’s builder network, assessing their technical depth, ownership mindset and motivations until a small set of strong builders emerges.",
            },
            {
                step: "03",
                title: "Converge on role fit",
                description:
                    "We share the opportunity with shortlisted builders to understand their genuine interest and alignment. We proceed only when their response signals strong mutual conviction.",
            },
            {
                step: "04",
                title: "Introduce, then calibrate",
                description:
                    "We introduce the builder we believe is the strongest match. If they are not selected, feedback helps us refine our understanding of what right match looks like.",
            }
        ],
    },
    trust: {
        label: "Why Mowka",
        headline: "From hiring at Amazon, Rephrase.ai & Apollo.io",
        body:
            "The best companies are built when founders consistently hire the right people with a founding mindset and keep their teams lean and high-agency. That only works when hiring doesn't become a bottleneck — which is why trusted networks and referrals have always been the most reliable way to identify the right builders. After 2,000+ interviews, this is what I still believe — and what I’ve built Mowka around.",
    },
    contact: {
        label: "Let's Talk",
        headline: "Bring us your toughest role",
        subhead:
            "No upfront cost. No retainer. Pay only when the builder joins.",
        cta: "Discuss your role",
    },
};

export const NAV_ITEMS = [
    { label: "The problem", href: "#problem" },
    { label: "How it works", href: "#process" },
    { label: "Why Mowka", href: "#trust" },
];

export const METADATA = {
    home: {
        title: "Mowka | Hire with confidence",
        description:
            "Stop wasting time on hiring noise. Mowka helps founders hire the right builder through 5 curated introductions.",
        ogTitle:
            "For founders hiring builders with a founding mindset",
        ogDescription:
            "Stop wasting time on hiring noise. Mowka helps founders hire the right builder through 5 curated introductions.",
        keywords: [
            "founding engineer",
            "founding engineer hiring",
            "founding mindset",
            "high agency engineer",
            "high-agency builder",
            "high-agency operator",
            "operators",
            "product builder",
            "product engineer",
            "0 to 1 engineer",
            "early stage hiring",
            "startup hiring",
            "founder hiring",
            "founding team hiring",
            "technical recruitment",
            "AI engineer hiring",
            "founding AI engineer",
            "founding backend engineer",
            "founding full stack engineer",
            "CTO hiring",
            "head of engineering hiring",
            "practitioner-led recruiting",
            "pay only when they join",
            "no retainer recruiting",
            "success based recruiting",
            "contingent recruiting startup",
            "hire builders",
            "hire with confidence",
            "hire founding engineers",
            "startup talent partner",
            "Mowka",
        ],
    },
    privacy: {
        title: "Privacy Policy | Mowka",
        description:
            "How Mowka collects, uses, shares, and protects information about Partners, Builders, and website visitors.",
        heading: "Privacy Policy",
        lastUpdated: "May 2026",
    },
    terms: {
        title: "Terms of Service | Mowka",
        description:
            "Terms governing the use of Mowka's website and talent partnership services.",
        heading: "Terms of Service",
        lastUpdated: "May 2026",
    },
    notFound: {
        title: "Page Not Found | Mowka",
        description: "The page you are looking for does not exist.",
    },
};
