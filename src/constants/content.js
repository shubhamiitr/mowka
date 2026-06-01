// =============================================================================
// Sources of truth for brand, legal, and content. Edit values here.
// IMPORTANT: If you change core messaging here, make sure to manually update 
// `public/llms.txt` so that AI crawlers have the most up-to-date context!
// =============================================================================

export const BRAND = {
    name: "Mowka",
    legalName: "Mowka Enterprises Private Limited",
    tagline: "Grow with confidence",
    url: "https://mowka.in",
    calLink: "hire-with-mowka/30min",
    foundingDate: "2025",
    cin: "U63990RJ2025PTC110155",
    email: "shubham@mowka.in",
    whatsappLink: "https://wa.me/919468658967",
    address: {
        streetAddress: "267 Shopping Center, Gumanpura",
        locality: "Kota",
        region: "Rajasthan",
        postalCode: "324007",
        country: "IN",
    },
    socials: {
        linkedin: "https://www.linkedin.com/company/mowka/",
        instagram: "https://www.instagram.com/mowka.in/",
        facebook: "https://www.facebook.com/mowka.in/",
        wellfound: "https://wellfound.com/company/mowka",
        producthunt: "https://www.producthunt.com/products/mowka",
        peerlist: "https://peerlist.io/company/mowka",
    },
    category: "Founder-caliber talent search",
    descriptions: {
        companyPov: {
            short: "Mowka is a talent search partner helping ambitious startups hire founder-caliber engineers, AI talent, and technical leaders through a high-judgment search process — direct outreach, trusted referrals, and deep candidate evaluation focused on ownership, execution, and startup fit.",
            long: "Mowka is a talent search partner for startups hiring founder-caliber engineers, AI engineers, and technical leaders. We work closely with founders to identify and evaluate high-ownership builders through direct outreach, trusted referrals, and deep screening. Our focus is quality over volume — a small number of strong candidates that match both technical and startup execution needs.",
        },
        servicePov: {
            short: "Mowka helps startups hire founder-caliber engineers, AI talent, and technical leaders through high-judgment, low-volume curated introductions.",
            long: "Mowka helps ambitious startups hire founder-caliber engineers, AI talent, and technical leaders through a high-judgment search process. Mowka combines direct outreach, trusted referrals, and deep candidate evaluation to deliver a small number of high-conviction introductions, helping founders close critical hires in five introductions or fewer."
        },
    },
    knowsAbout: [
        "Technical Recruitment",
        "Startup Hiring",
        "Founding Engineer Hiring",
        "AI Engineer Hiring",
        "ML Engineer Hiring",
        "Head of Engineering Search",
        "CTO Search",
        "Full Stack Engineer Hiring",
        "Backend Engineer Hiring",
        "Technical Talent Search India",
        "Early Stage Startup Recruiting",
        "Engineering Leadership Hiring",
    ],
};


export const FOUNDER = {
    name: "Shubham Kansal",
    role: "Founder, Mowka",
    jobTitle: "Founder & CEO",
    image: "/founder.jpg",
    imageAbsolute: `${BRAND.url}/founder.jpg`,
    linkedin: "https://www.linkedin.com/in/kansalshubham/",
    education: "IIT Roorkee",
    award: "US Patent 11645249B1 - System for automated metadata and copyright management",
    positions: [
        { company: "Rephrase AI", note: "Acquired by Adobe" },
        { company: "Amazon" },
        { company: "Apollo" }
    ],
    knowsAbout: [
        "Technical Hiring",
        "Talent Strategy",
        "Engineering Team Building",
        "AI Product Development",
        "Deep Tech Recruiting",
        "Founding Engineer Search",
        "System Design",
        "Distributed Systems",
        "Engineering Leadership",
    ],
};

export const HOME_PAGE = {
    hero: {
        kicker: BRAND.category,
        headline: {
            start: "First talent partner",
            highlight: "for ambitious startups"
        },
        subhead:
            "Bring in the right builder in five introductions or fewer.",
        cta: "Book a Call",
        proofStrip: [
            { company: "Ringg.ai", role: "Senior Audio Research Engineer", outcome: "Hired in 3 intros", logo: "/logos/ringg.svg" },
            { company: "Aqqrue.com", role: "Founding AI Engineer", outcome: "Hired in 2 intros", logo: "/logos/aqqrue.png" },
            { company: "OutFlo.io", role: "Founding Backend Engineer", outcome: "Hired in 5 intros", logo: "/logos/outflo.png" },
        ],
    },
    problem: {
        headline: "Sound familiar?",
        pains: [
            {
                title: "You ask for referrals. Dry well.",
                description: "You end up relying on the same small network of past batchmates and colleagues, and it rarely surfaces new, high-caliber builders."
            },
            {
                title: "You post the role. Floodgates open.",
                description: "1000+ applications on LinkedIn - almost none who've actually built in high ownership and fast moving environments."
            },
            {
                title: "You interview them. Nothing clicks.",
                description: "AI-written resumes and tools like Cheatly let candidates game early rounds, until you interview them deep enough to see the gap."
            },
            {
                title: "You make an offer. They disappear.",
                description: "Competing with FAANG-level compensation on a startup budget feels impossible."
            },
            {
                title: "You bring someone in. It doesn’t work.",
                description: "A few weeks in, you realize they need structure and handholding just to get work done."
            }
        ],
        resolution: {
            cta: "Let us show you how we fix this",
        },
    },
    process: {
        headline: "How we work",
        steps: [
            {
                title: "Role alignment",
                description:
                    "We understand your product, team, and the kind of builder who will succeed in the role."
            },
            {
                title: "Target sourcing",
                description:
                    "We tap into our curated network and run targeted outreach — builders who have built and shipped in fast-moving teams."
            },
            {
                title: "Curated shortlist",
                description:
                    "We evaluate technical depth, ownership, and intent before introducing anyone — usually 3 to 5 strong matches."
            },
            {
                title: "Offer closure",
                description:
                    "We stay involved through interviews, feedback, negotiation, and onboarding until they join."
            }
        ]
    },
    whyPartner: {
        headline: "Why Founders partner with us",
        reasons: [
            {
                title: "Built for founders",
                description: "We’ve built and hired for fast-moving teams ourselves — we understand these challenges firsthand."
            },
            {
                title: "Only fit, no fluff",
                description: "We aim to get you the right candidate within 3–5 introductions — no resume dumps or weekly shortlists.",
            },
            {
                title: "Founder-caliber evaluation",
                description: "We focus on what actually matters — context, ownership, and execution in fast-moving teams.",
            },
            {
                title: "Hires who stick around",
                description: "We only introduce builders who own problems end-to-end and act as force multipliers for your team.",
            },
            {
                title: "No offer ghosting",
                description: "We align intent, expectations, and compensation upfront so candidates stay committed through the process.",
            },
            {
                title: "Honest always",
                description: "We don’t oversell candidates or hide trade-offs — just honest conversations about what’s actually right for the role.",
            },

        ],
    },
    rolesWeFill: {
        headline: "Roles we help you hire for",
        roles: [
            { icon: "Layers", title: "Founding Engineer", description: "Owns entire product and makes architectural decisions that last." },
            { icon: "BrainCircuit", title: "AI Engineer", description: "Builds agentic workflows, LLM integrations, and AI-powered production systems." },
            { icon: "Server", title: "Backend & Infrastructure", description: "Builds scalable, resilient systems and owns the infrastructure behind them." },
            { icon: "Code2", title: "Full-Stack Engineer", description: "Builds across the stack and owns product outcomes, not just tickets." },
            { icon: "AudioWaveform", title: "AI Research Engineer", description: "Specialist in AI domain (audio, CV, NLP etc) — owns it from research to production." },
            { icon: "Crown", title: "Head of Engineering", description: "Scales the team, owns architecture, and keeps engineering velocity high." },
        ],
    },
    testimonials: {
        headline: "What founders say about working with us",
        cases: [
            {
                company: "Aqqrue",
                website: "https://aqqrue.com",
                logo: "/logos/aqqrue.png",
                role: "Founding AI Engineer",
                intros: "2",
                name: "Surya Suresh",
                title: "Co-founder",
                photo: "/surya-suresh-aqqrue.jpeg",
                quote: "We had a wonderful experience working with Shubham and the Mowka team. Shubham was personally involved right from the start and spent a lot of time deeply understanding our requirements. He is very thoughtful and passionate about finding the right fit for every startup. With Mowka, you can rest assured that you won't need to sift through 100 profiles and sit through 20 interviews before finding the right candidate. We loved the first engineer Shubham introduced to us and rolled out an offer in less than a week. We continue to work very closely with Shubham and couldn't speak more highly of him and the team.",
            },
            {
                company: "OutFlo",
                website: "https://outflo.io",
                logo: "/logos/outflo.png",
                role: "Founding Backend Engineer",
                intros: "5",
                name: "Tushar Singla",
                title: "Founder & CEO",
                photo: "/tushar-singla-outflo.jpeg",
                quote: "Bringing Shubham on board for our hiring was one of the best moves we made. There's a real relief in working with someone who's a great engineer himself and has hired great people before. He actually understands what you need and shortlists candidates that are genuinely relevant to the role. What sets him apart is the trust factor — he personally interviews everyone before recommending them, both on culture fit and technical depth. So by the time a candidate reaches you, the bar has already been set. Our experience at OutFlo working with Shubham and Mowka has been excellent. Highly recommended for any founder looking to make critical early hires.",
            },
        ],
    },
    faqs: [
        {
            q: "How do you charge?",
            a: "We agree on a flat fee based on the scope of the search. You only pay after the builder starts. No retainers, no upfront fees, and no financial risk."
        },
        {
            q: "How long does a typical search take?",
            a: "From alignment to offer, most Founding Engineer, AI Engineer, and Full-Stack Engineer roles take 4–8 weeks."
        },
        {
            q: "How do you source candidates?",
            a: "We combine a curated network, direct outreach, and trusted referrals to find builders who have already shipped in high-ownership environments."
        },
        {
            q: "How do you evaluate candidates?",
            a: "We assess technical depth, ability to operate independently, problem-solving ability, and intent. We focus on role fit and whether they can thrive in your environment before introducing them."
        },
        {
            q: "What kind of startups do you work with?",
            a: "We primarily work with startups from pre-seed to Series B, including many bootstrapped companies. Stage and funding matter less to us than the caliber of the team being built."
        },
        {
            q: "What if we’re not actively hiring yet?",
            a: "That’s often the best time to connect. We help founders design the role, calibrate the technical bar, and structure their engineering team before launching the search."
        },
        {
            q: "What geographies do you cover?",
            a: "We primarily work with startups in India and the US and connect them with builders based in India."
        }
    ],
    founder: {
        opening: "Over 11+ years in engineering, I’ve realized the best teams all operate the same way: every role is high-stakes, and each person owns their outcomes with genuine trust and autonomy.",
        quote: "The best builders don’t just execute — they raise the confidence and ambition of everyone around them.",
        body: [
            "But builders like that are usually deep in the trenches somewhere else, so they rarely come through recruiters, agencies, or inbound. Over 7+ years building and leading teams across AI and deep tech domains, I’ve learned that finding them takes real time, focus, and judgment — going direct, working trusted referrals, and looking past the résumé to someone’s journey, product thinking, and intent.",
            "After talking to 50+ founders and technical leaders, it was clear everyone faces the same challenge — that’s why I started Mowka, the first partner founders turn to for critical hires, so quality never has to slip as they scale.",
            "Whether it’s your first hire or your tenth, I want to be the person you call when getting it right matters most."
        ]
    },
    contact: {
        headline: { start: "Bring in your", highlight: "next game changer" },
        subhead: "Try us with your toughest role.",
        primaryCta: "Book a Call",
        reassurance: "· No upfront fees · Pay only after they join",
    },
};

export const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "How we work", href: "#process" },
    // { label: "Insights", href: "/insights", page: true },
    { label: "For Builders", href: "/builder", page: true },
];

export const NAV_CTA = "Book a Call";

export const BUILDER_PAGE = {
    hero: {
        kicker: "For builders",
        headline: {
            start: "If you thrive on moving fast, owning problems, and working with sharp people -",
            highlight: "we'd love to get to know you",
        },
        subhead: "Get introduced to opportunities you'd move for and connect directly with founders and high-context leaders.",
        cta: "Let's talk",
    },
    situations: {
        headline: "Do any of these scenarios sound familiar?",
        items: [
            {
                "title": "AI is moving too fast for mature tech.",
                "body": "The fundamental core architectural breakthroughs unlocked by AI are happening at fast-moving, nimble teams. You refuse to wait for slow enterprise adoption."
            },
            {
                "title": "The company grew. The building stopped.",
                "body": "You stayed through scaling, but maturity changed the nature of the work. Your days shifted from load-bearing engineering to endless alignment syncs and middle-management process."
            },
            {
                "title": "You’ve built early. A cog won’t do.",
                "body": "You’ve been a founder or early engineer before. Following an acquisition or shutdown, you miss rapid execution and refuse to be a small component in a slow system."
            },
            {
                "title": "Future founder. Missing the playbook.",
                "body": "You plan to launch your own company in a few years. You want to skip corporate ladders now and work alongside strong founders to learn how to scale a business."
            },
            {
                "title": "Load-bearing impact. Fractional upside.",
                "body": "You are architecting the mission-critical infrastructure driving massive enterprise value. Your equity package doesn't match that leverage, and you want true ownership."
            },
            {
                "title": "Elite expectations. Chaotic execution.",
                "body": "You joined a team expecting hard technical problems and an elite engineering bar. Instead, you found constant product pivots, loose architecture, and short-term patches."
            },
            {
                "title": "The best teams don't use job boards.",
                "body": "The high-caliber, high-growth teams you actually want to join rarely list key roles on public career pages. Their core engineering hires happen strictly through quiet founder networks."
            },
            {
                "title": "The hiring theater rejects builders.",
                "body": "You're done navigating generic automated keyword filters and rigid recruiter screens. You want to bypass the loops and talk system design directly with founders."
            }
        ],
    },
    howWeWork: {
        headline: "How we work with you",
        steps: [
            { title: "We get to know you deeply", description: "We learn your journey and what your ideal next looks like — then calibrate you on technical depth, behaviour, and everything that matters. Every match starts there." },
            { title: "We reach out only when it's real", description: "No weekly updates, no just-checking-in. When we call, it's because something worth your time exists." },
            { title: "You talk straight to the founders", description: "No HR layer, no recruiter screen — the founders and technical leaders you'd actually work with." },
        ],
    },
    faqs: [
        { q: "Do I have to be actively looking?", a: "No. Most people in our circle aren't. We reach out only when something worth your time comes up — looking or not." },
        { q: "Does it cost anything?", a: "Nothing. We're paid by the startups we work with, never by builders." },
        { q: "What kind of roles do you work on?", a: "Founding and early engineering, AI, and technical leadership at startups worth moving for — not volume listings." },
        { q: "What happens after I share my details?", a: "We learn what you actually want, then stay quiet until there's a real match. No spam, no weekly check-ins." },
        { q: "Will my current employer find out?", a: "No. Everything you share is confidential, and we never circulate your profile without your say-so." },
    ],
    contact: {
        headline: { start: "Get on our", highlight: "radar." },
        subhead: "Tell us what you want next. We'll reach out when the right opportunity shows up — and not before.",
        cta: "Let's talk",
    },
    success: {
        title: "You are on our radar. We'll reach out only when the right opportunity matches what you actually want next.",
    },
    loading: {
        submitting: "Saving your info…",
    },
    form: {
        intro: "Tell us about you",
        portfolioLabel: "Where can we find your background",
        portfolioPlaceholder: "Resume link, personal website, or LinkedIn URL",
        phoneLabel: "Mobile number",
        timeLabel: "Best time to reach out",
        cta: "Confirm",
        phoneError: "Please enter a valid phone number.",
        timeError: "Please select a time that works for you.",
        portfolioError: "Please enter a valid resume link, personal website or LinkedIn URL",
    },
    ui: { closeButton: "Close" },
    errors: { default: `Something went wrong on our end. Please try again in a moment or contact ${BRAND.email}.` },
};

const HOME_SEO_KEYWORDS = [
    "hire founding engineer India",
    "hire AI engineer startup India",
    "technical hiring partner startups",
    "startup recruiting firm India",
    "founding engineer hiring",
    "hire ML engineer startup",
    "head of engineering search India",
    "CTO search early stage startup",
    "engineering recruitment startup India",
    "technical recruiter for startups India",
    "hire backend engineer startup",
    "early stage startup hiring India",
    "startup talent search India",
    "AI talent search India",
];

const BUILDER_SEO_KEYWORDS = [
    "founding engineer jobs India",
    "AI engineer jobs startups India",
    "early stage startup jobs India",
    "founding full stack engineer jobs",
    "founding backend engineer jobs",
    "AI research engineer jobs India",
    "head of engineering jobs startup",
    "startup engineering jobs India",
    "high growth startup jobs India",
    "YC startup jobs India",
    "seed stage startup jobs India",
    "ML engineer startup jobs India",
];

export const METADATA = {
    home: {
        title: `${BRAND.name} | ${BRAND.category} for startups`,
        description: BRAND.descriptions.servicePov.short,
        ogTitle: `${HOME_PAGE.hero.headline.start} ${HOME_PAGE.hero.headline.highlight}`,
        ogDescription: HOME_PAGE.hero.subhead,
        keywords: [...BRAND.knowsAbout, ...HOME_SEO_KEYWORDS],
    },
    builder: {
        title: `Join with confidence | ${BRAND.name}`,
        description: BUILDER_PAGE.hero.subhead,
        ogTitle: `${BUILDER_PAGE.hero.headline.start} ${BUILDER_PAGE.hero.headline.highlight}`,
        ogDescription: BUILDER_PAGE.hero.subhead,
        keywords: [...BRAND.knowsAbout, ...BUILDER_SEO_KEYWORDS],
    },
    privacy: {
        title: `Privacy Policy | ${BRAND.name}`,
        description:
            "Privacy Policy for Mowka explaining how we collect, use, and protect personal information for founders, candidates, and website visitors.",
    },
    terms: {
        title: `Terms of Service | ${BRAND.name}`,
        description:
            "Terms governing use of Mowka’s hiring services, including curated candidate introductions, success-based fees, confidentiality, and service conditions.",
    },
    notFound: {
        title: `Page Not Found | ${BRAND.name}`,
        description: "The page you are looking for does not exist.",
    },
};
