// =============================================================================
// Sources of truth for brand, legal, and content. Edit values here.
// IMPORTANT: If you change core messaging here, make sure to manually update 
// `public/llms.txt` so that AI crawlers have the most up-to-date context!
// =============================================================================

export const SITE_CONTENT = {
    appName: "Mowka",
    tagline: "Grow with confidence",
    siteUrl: "https://mowka.in",
    description:
        "For founders hiring builders with a founding mindset. Practitioner-led hiring with one calibrated introduction at a time. Most roles close in five introductions or fewer. Pay only when they join.",
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
    foundingDate: "2025",
    cin: "U63990RJ2025PTC110155",
    email: "shubham@mowka.in",
    whatsappLink: "https://wa.me/919468658967",
    address: ADDRESS,
    description: SITE_CONTENT.description,
    socials: {
        linkedin: "https://www.linkedin.com/company/mowka/",
        instagram: "https://www.instagram.com/mowka.in/",
        facebook: "https://www.facebook.com/mowka.in/",
    },
    knowsAbout: [
        "Technical Recruitment",
        "Founding Engineer Hiring",
        "Founding Mindset Hiring",
        "Operator Hiring",
        "Product Builder Hiring",
        "0 to 1 Engineer Hiring",
        "AI Engineer Hiring",
        "Founding AI Engineer",
        "Founding Backend Engineer",
        "Founding Full Stack Engineer",
        "CTO Search",
        "Head of Engineering Search",
        "Lean Team Hiring",
        "Talent Density",
        "Builder Hiring",
        "Conviction-Driven Hiring",
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
    offerName: "Pay After They Join",
    offerDescription:
        "12.5–15% of annual CTC, scaling with role scarcity, payable only after your hire starts. No retainer.",
    faqAnswer:
        "12.5–15% of annual CTC, scaling with the scarcity of the role, payable only after your hire starts. No retainer, no upfront fees. We work on one role at a time for tech and product roles.",
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
        a: "Tech and product roles, from founding engineers to CTOs, research leads to product directors. We work best with founder-led and lean teams where hiring quality matters more than hiring volume — especially in AI-powered SaaS products or services.",
    },
];

export const FOUNDER = {
    name: "Shubham Kansal",
    role: "Founder, Mowka",
    jobTitle: "Founder & CEO",
    image: "/founder.jpg",
    imageAbsolute: `${SITE_CONTENT.siteUrl}/founder.jpg`,
    linkedin: "https://www.linkedin.com/in/kansalshubham/",
    education: "IIT Roorkee",
    award: "US Patent 11645249B1 - System for automated metadata and copyright management",
    positions: [
        { company: "Rephrase.ai", note: "Acquired by Adobe" },
        { company: "Amazon Prime Video" },
        { company: "Apollo.io" }
    ],
    knowsAbout: [
        "AI Innovation Leadership",
        "Founding Engineer Hiring",
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
            "Stop wasting time on sourcing and interview noise. We help you find the right builder in five introductions or fewer.",
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
                    "Strong builders are typically busy building, not actively applying to jobs. Reaching them requires trust, relevance, and high-context conversations.",
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
            "The best companies stay lean because they consistently hire people with strong ownership, judgment, and a founding mindset. That only works when hiring doesn't become a bottleneck — which is why trusted networks, calibrated introductions, and deep evaluation outperform volume-driven recruiting systems. After 2,000+ interviews, this is still what I believe — and what I’ve built Mowka around.",
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

export const BUILDER_PAGE = {
    hero: {
        headline: {
            start: "If you care deeply about what you build, who you build with, and how fast you can grow",
            highlight: "we'd love to get to know you",
        },
        subhead: "Get introduced to opportunities you'd move for and connect directly with founders and high-context leaders.",
        cta: "Continue",
    },
    success: {
        title: "Thanks for sharing your info. We'll reach out soon to get to know you better.",
        existingProfileTitle: "We already have received your info. We'll reach out soon to get to know you better.",
    },
    loading: {
        checking: "Checking your profile…",
        submitting: "Saving your info…",
    },
    form: {
        intro: "Tell us a few things about you",
        portfolioLabel: "Where can we find your background",
        portfolioPlaceholder: "Resume link, personal website, or LinkedIn URL",
        phoneLabel: "Mobile number",
        timeLabel: "Best time to reach out",
        cta: "Confirm",
        phoneError: "Please enter a valid phone number.",
        timeError: "Please select a time that works for you.",
        portfolioError: "Please enter a valid resume link, personal website or LinkedIn URL",
    },
    ui: {
        closeButton: "Close",
    },
    errors: {
        authFailed: `We couldn't verify your LinkedIn profile right now. Please try again in some time or email us directly at ${COMPANY_INFO.email}`,
        default: `Something went wrong on our end. Please try again in a moment or contact ${COMPANY_INFO.email}.`,
    },
};

// SEO keyword lists — defined here so METADATA can spread them alongside COMPANY_INFO.knowsAbout.
const HOME_SEO_KEYWORDS = [
    "practitioner-led recruiting",
    "pay only when they join",
    "no retainer recruiting",
    "success based recruiting",
    "contingent recruiting startup",
    "hire builders",
    "hire founding engineers",
    "startup talent partner",
    "founder hiring",
    "founding team hiring",
];

const BUILDER_SEO_KEYWORDS = [
    "founding engineer jobs",
    "founding AI engineer jobs",
    "founding backend engineer jobs",
    "founding full stack engineer",
    "full stack engineer startup",
    "AI engineer startup jobs",
    "software engineer startup jobs",
    "top startup jobs",
    "startup jobs for engineers",
    "YC startup jobs",
    "first engineer startup",
    "founding engineer head of engineering",
    "high-agency engineer jobs",
    "startup engineer opportunities",
];

export const METADATA = {
    home: {
        title: `Hire with confidence | ${SITE_CONTENT.appName}`,
        description: HOME_PAGE.hero.subhead,
        ogTitle: `${HOME_PAGE.hero.headline.start} ${HOME_PAGE.hero.headline.highlight}`,
        ogDescription: HOME_PAGE.hero.subhead,
        keywords: [...COMPANY_INFO.knowsAbout, ...HOME_SEO_KEYWORDS],
    },
    builder: {
        title: `Join with confidence | ${SITE_CONTENT.appName}`,
        description: BUILDER_PAGE.hero.subhead,
        ogTitle: `${BUILDER_PAGE.hero.headline.start} ${BUILDER_PAGE.hero.headline.highlight}`,
        ogDescription: BUILDER_PAGE.hero.subhead,
        keywords: [...COMPANY_INFO.knowsAbout, ...BUILDER_SEO_KEYWORDS],
    },
    privacy: {
        title: "Privacy Policy | ${SITE_CONTENT.appName}",
        description:
            "How Mowka collects, uses, shares, and protects information about Partners, Builders, and website visitors.",
    },
    terms: {
        title: "Terms of Service | ${SITE_CONTENT.appName}",
        description:
            "Terms governing the use of Mowka’s website and talent partnership services.",
    },
    notFound: {
        title: "Page Not Found | ${SITE_CONTENT.appName}",
        description: "The page you are looking for does not exist.",
    },
};
