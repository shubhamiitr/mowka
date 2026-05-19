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
        "Mowka is a high-trust hiring partner for teams that only want to spend time on technical candidates worth serious consideration, especially where each hire meaningfully impacts product and execution.",
    calLink: "hire-with-mowka/30min",
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
        "AI Engineer Hiring",
        "Product Builder Hiring",
        "Founding AI Engineer",
        "Founding Backend Engineer",
        "Founding Full Stack Engineer",
        "CTO Search",
        "Head of Engineering Search",
        "Startup Hiring",
    ],
};

export const FAQS = [
    {
        q: "How is Mowka different from recruiting agencies?",
        a: "Most agencies optimize for volume and send large batches of unvetted candidates. Mowka focuses on signal. We understand the role deeply, evaluate technical talent before introduction, and share only the strongest matches so team leaders spend time only on high-quality conversations.",
    },
    {
        q: "Why do you send only a few candidates?",
        a: "High-quality hiring is not a volume problem. It is a signal problem. We prioritize depth of evaluation over breadth of outreach, which means fewer introductions but significantly higher relevance.",
    },
    {
        q: "How do you find talent not visible on job boards?",
        a: "We build and continuously refine a high-signal network of engineers through prior evaluations, trusted connections, and targeted outreach. This allows access to strong technical talent who are not actively applying but are open to the right opportunities.",
    },
    {
        q: "What makes your evaluation different?",
        a: "We do role-specific evaluation focused on real-world signals like technical judgment, problem ownership, and execution depth. The goal is to understand capability in context, not just match keywords or titles.",
    },
    {
        q: "What types of roles do you work on?",
        a: "We focus on high-stakes technical and product roles where hiring quality matters more than volume, including founding engineers, senior engineers, tech leads, and engineering leadership roles.",
    },
    {
        q: "What does Mowka charge?",
        a: "12.5–15% of annual CTC, scaling with the scarcity of the role, payable only after your hire starts. No retainer, no upfront fees. We work on one role at a time for tech and product roles.",
    }
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
        "Hiring",
        "Talent Strategy",
        "Top-Talent Scouting",
        "Building AI-powered products",
        "Distributed Systems",
        "System Design",
        "Leading teams and products"
    ],
};

export const HOME_PAGE = {
    hero: {
        headline: {
            start: "For leaders hiring technical talent",
            highlight: "they can trust to own important problems"
        },
        subhead:
            "Stop wasting time on sourcing and interview noise. We help you find the right talent in five introductions or fewer.",
        cta: "Let's Talk",
        proofStrip: [
            { company: "Ringg.ai", role: "Senior Audio Research Engineer", outcome: "Hired in 3 intros", logo: "/logos/ringg.svg" },
            { company: "Aqqrue.com", role: "Founding AI Engineer", outcome: "Hired in 2 intros", logo: "/logos/aqqrue.png" },
            { company: "OutFlo.io", role: "Founding Backend Engineer", outcome: "Hired in 5 intros", logo: "/logos/outflo.png" },
        ],
    },
    problem: {
        label: "The problem",
        headline: "Why hiring strong technical talent keeps breaking",
        pains: [
            {
                title: "Strong engineers are not visible through standard hiring signals",
                description:
                    "Most strong engineers do not signal availability publicly and are rarely reachable through open applications or keyword-based inbound channels.",
            },
            {
                title: "Early signals are broken",
                description:
                    "AI tools and keyword-optimized resumes make early screening unreliable, causing strong engineers to be missed and weak signals to pass through.",
            },
            {
                title: "Referrals don’t scale enough",
                description:
                    "Referrals remain the highest-quality channel, but their capacity is limited and not enough to meet consistent hiring needs.",
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
                    "We understand your team, goals, and the technical skills, ownership, and context required for the role."
            },
            {
                step: "02",
                title: "Scout through a compounding network",
                description:
                    "We reach technical talent through targeted outreach and referrals in our compounding network, evaluating technical depth, ownership, judgment, and motivation.",
            },
            {
                step: "03",
                title: "Check alignment before introduction",
                description:
                    "We confirm genuine interest, role clarity, and mutual fit before making any introduction to ensure signal stays high.",
            },
            {
                step: "04",
                title: "Introduce, then calibrate",
                description:
                    "We introduce only technical talent we believe is the strongest fit If they are not selected, your feedback sharpens our understanding of the role."
            }
        ],
    },
    trust: {
        label: "Why Mowka",
        headline: "From hiring at Amazon, Rephrase.ai & Apollo.io",
        body:
            "Every successful company I have worked with shares the same foundation — they hired the best people available and kept raising the bar. Building the right team is one of the hardest responsibilities for team leaders and I have seen that consistently across companies. I built Mowka so hiring does not become a bottleneck in that process.",
    },
    contact: {
        label: "Let's Talk",
        headline: "Bring us your toughest role",
        subhead: "No upfront cost. No retainer. 12.5–15% of CTC, paid only when they join.",
        cta: "Discuss your role",
        form: {
            websiteLabel: "Company website",
            websitePlaceholder: "acme.com",
            roleLabel: "Role / JD link",
            rolePlaceholder: "Link to job description or Notion doc",
            cta: "Save details",
            successNote: "Details saved — now pick a time on the right.",
            websiteError: "Please enter your company website.",
            roleError: "Please add a link to the role.",
        },
        errors: {
            default: `Something went wrong. Please try again or email ${COMPANY_INFO.email}.`,
        },
    },
};

export const NAV_ITEMS = [
    { label: "The problem", href: "#problem" },
    { label: "How it works", href: "#process" },
    { label: "Why Mowka", href: "#trust" },
];

export const TALENT_PAGE = {
    hero: {
        headline: {
            start: "If you thrive on moving fast, owning problems, and working with sharp people - ",
            highlight: "we'd love to get to know you",
        },
        subhead: "Get introduced to opportunities you'd move for and connect directly with founders and high-context leaders.",
        cta: "Let's Talk",
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
        default: `Something went wrong on our end. Please try again in a moment or contact ${COMPANY_INFO.email}.`,
    },
};

// SEO keyword lists — defined here so METADATA can spread them alongside COMPANY_INFO.knowsAbout.
const HOME_SEO_KEYWORDS = [
    "startup technical hiring",
    "founding engineer hiring",
    "hire AI engineers startup",
    "hire ML engineers startup",
    "startup recruiter engineers",
    "technical hiring partner",
    "hire product engineers",
    "engineering recruitment startup",
    "startup hiring agency alternative"
];

const TALENT_SEO_KEYWORDS = [
    "founding engineer jobs",
    "full stack engineer startup jobs",
    "early stage startup jobs",
    "tech lead startup jobs",
    "high growth startup jobs",
    "AI engineer startup jobs",
    "CTO jobs",
    "product engineer startup jobs",
    "top startup jobs",
    "YC startup jobs",
];

export const METADATA = {
    home: {
        title: `Hire with confidence | ${SITE_CONTENT.appName}`,
        description: HOME_PAGE.hero.subhead,
        ogTitle: `${HOME_PAGE.hero.headline.start} ${HOME_PAGE.hero.headline.highlight}`,
        ogDescription: HOME_PAGE.hero.subhead,
        keywords: [...COMPANY_INFO.knowsAbout, ...HOME_SEO_KEYWORDS],
    },
    talent: {
        title: `Join with confidence | ${SITE_CONTENT.appName}`,
        description: TALENT_PAGE.hero.subhead,
        ogTitle: `${TALENT_PAGE.hero.headline.start} ${TALENT_PAGE.hero.headline.highlight}`,
        ogDescription: TALENT_PAGE.hero.subhead,
        keywords: [...COMPANY_INFO.knowsAbout, ...TALENT_SEO_KEYWORDS],
    },
    privacy: {
        title: `Privacy Policy | ${SITE_CONTENT.appName}`,
        description:
            "How Mowka collects, uses, shares, and protects information about Companies, Talent, and website visitors.",
    },
    terms: {
        title: `Terms of Service | ${SITE_CONTENT.appName}`,
        description:
            "Terms governing the use of Mowka’s website and talent partnership services.",
    },
    notFound: {
        title: `Page Not Found | ${SITE_CONTENT.appName}`,
        description: "The page you are looking for does not exist.",
    },
};
