import { Milestone, MapPin, Building2, Users } from 'lucide-react';
import { BRAND } from './content';

// Open roles. Edit, add, or remove entries — pages are generated from this list.
// status: "open" | "closed" | "draft". Draft = hidden from listing, noindexed; open when ready.

//
// Template — use this structure for every new role:
//   slug, title, stage, location, region (in-office) | remoteCountry (remote), workPolicy, type,
//   salaryMin, salaryMax (in lakhs e.g. 45, 60), equity, status, postedDate, validThrough
//   skills[] — used in JSON-LD for Google Jobs discoverability
//
//   summary          — 2–3 sharp sentences. First sentence is used as the SERP meta description hook.
//   whatYouWillBuild[] — what they'll own and ship.
//   whatYouAre[]       — 3–4 criteria max. Sharp, specific, no fluff.
//   whyTakeThis[]      — 3–4 reasons max. Ownership, market, and one hook.
//

export const JOBS = [
    {
        order: 5,
        slug: "ai-engineer-consumer-ai",
        title: "AI Engineer",
        industry: "Consumer AI",
        stage: "Bootstrapped",
        employees: "11–25",
        location: "India",
        workPolicy: "Remote",
        remoteCountry: "India",
        type: "Full-time",
        salaryMin: 45,
        salaryMax: 60,
        equity: "0.1% – 0.3%",
        status: "open",
        postedDate: "2026-06-03",
        validThrough: "2026-09-03",
        skills: ["Python", "LLMs", "RAG", "Prompt Engineering", "LangChain", "LlamaIndex", "Vector Databases", "Hugging Face", "Function Calling"],
        summary:
            "We're building an AI super-app — one interface where users compare the world's top models side by side instead of juggling five subscriptions. Now we're building the AI layer that makes it smarter, faster, and more useful than any single model alone.",
        whatYouWillBuild: [
            "Design and ship AI-powered features end-to-end — RAG pipelines, agentic workflows, tool-use systems, and structured outputs in production",
            "Build and maintain evaluation harnesses, datasets, and quality metrics — latency, cost, accuracy, and hallucination rates across every model we serve",
            "Own the full lifecycle of AI features from prototype to hardened, evaluated, production-grade system",
            "Drive technical decisions on prompt design, model selection, retrieval architecture, and AI system safety",
        ],
        whatYouAre: [
            "4+ years of engineering experience with significant recent work on LLM-powered systems in production",
            "Deep hands-on expertise in prompt engineering, RAG, function calling, and structured outputs — not just familiarity",
            "Strong in Python and the modern AI stack — Hugging Face, LangChain/LlamaIndex, vector DBs, model APIs",
            "You've shipped AI features that had no playbook — evaluated them, iterated on them, and owned the results",
        ],
        whyTakeThis: [
            "You're building the intelligence layer of a product that puts every major AI model in one place — the eval and retrieval problems here are uniquely complex",
            "Early stage, real users — your work ships to people immediately, not into a staging environment",
            "If you want to own AI architecture end-to-end rather than prompt-tune someone else's pipeline — this is that role",
        ],
    },
    {
        order: 6,
        slug: "full-stack-engineer-consumer-ai",
        title: "Full Stack Engineer",
        industry: "Consumer AI",
        stage: "Bootstrapped",
        employees: "11–25",
        location: "India",
        workPolicy: "Remote",
        remoteCountry: "India",
        type: "Full-time",
        salaryMin: 45,
        salaryMax: 60,
        equity: "0.1% – 0.3%",
        status: "open",
        postedDate: "2026-06-03",
        validThrough: "2026-09-03",
        skills: ["React", "TypeScript", "JavaScript", "CSS", "System Design", "API Integration", "Frontend Architecture", "Web Performance"],
        summary:
            "We're building an AI super-app — one interface where users compare the world's top models side by side instead of juggling five subscriptions. Now we're building the product that scales it.",
        whatYouWillBuild: [
            "Own and scale the core chat interface — performant, responsive, pixel-precise React across multiple simultaneous AI model streams",
            "Architect component libraries and design systems that scale cleanly as we add models, features, and users",
            "Build and consume APIs connecting our frontend to multiple live AI model backends — reliability and latency matter here",
            "Drive frontend standards across the codebase — code reviews, performance audits, and the bar for what ships",
        ],
        whatYouAre: [
            "5+ years of professional engineering experience with deep React expertise — hooks, state management, TypeScript, the full ecosystem",
            "Strong instincts for web performance, browser rendering, and UX correctness — you notice when something is 50ms too slow",
            "Comfortable contributing to backend services when needed, not just consuming APIs",
            "You've owned features end-to-end in a fast-moving product, not just ticket execution",
        ],
        whyTakeThis: [
            "Early stage, real product — you're shaping the architecture, not inheriting it",
            "Streaming multiple live AI models in parallel into one coherent UI is a genuinely hard frontend problem",
            "If you want to own the interface millions of people use to access AI daily — this is that seat",
        ],
    },
    {
        order: 7,
        slug: "ai-infra-engineer-consumer-ai",
        title: "AI Infra Engineer",
        industry: "Consumer AI",
        stage: "Bootstrapped",
        employees: "11–25",
        location: "India",
        workPolicy: "Remote",
        remoteCountry: "India",
        type: "Full-time",
        salaryMin: 45,
        salaryMax: 60,
        equity: "0.1% – 0.3%",
        status: "draft",
        postedDate: "2026-06-03",
        validThrough: "2026-09-03",
        skills: ["Python", "Go", "Rust", "Kubernetes", "Ray", "GPU Optimization", "Distributed Systems", "MLOps", "Infrastructure as Code"],
        summary:
            "We're building an AI super-app — one interface where users run queries across the world's top models simultaneously. The infrastructure underneath has to be fast, reliable, and cheap at scale. That's what you'll own.",
        whatYouWillBuild: [
            "Design and operate low-latency, high-throughput model serving platforms — autoscaling, observability, and cost efficiency across every model we serve",
            "Architect distributed training and fine-tuning pipelines across CPU and GPU clusters — multi-node, multi-GPU, optimized end to end",
            "Own the platform layer for orchestration, scheduling, and resource management — Kubernetes, Ray, or whatever the problem demands",
            "Identify and resolve bottlenecks in inference latency, training throughput, GPU utilization, and data pipelines before they hit users",
        ],
        whatYouAre: [
            "4+ years in infrastructure or systems engineering with significant time on ML or AI platforms in production",
            "Deep hands-on experience with distributed systems, container orchestration, and infrastructure-as-code — not just familiarity",
            "Strong in Python and at least one systems language — Go, Rust, or C++",
            "You've owned infra that broke at scale, fixed it, and built the thing that didn't break again",
        ],
        whyTakeThis: [
            "Serving multiple live AI models simultaneously at low latency is a harder infra problem than most engineers ever touch",
            "Early stage — you're designing the platform from scratch, not inheriting someone else's technical debt",
            "If you want to own the system that sits beneath a product millions of people use to access AI — this is that seat",
        ],
    },
    {
        order: 4,
        slug: "lead-software-engineer-gurugram",
        title: "Lead Software Engineer",
        industry: "Creator commerce",
        stage: "Series B",
        employees: "51–200",
        location: "Gurugram",
        region: "Haryana",
        workPolicy: "In office",
        type: "Full-time",
        salaryMin: 50,
        salaryMax: 70,
        equity: "0.0% – 0.1%",
        status: "open",
        postedDate: "2026-06-03",
        validThrough: "2026-09-03",
        skills: ["Python", "Django", "PostgreSQL", "Redis", "Kafka", "Distributed Systems", "System Design", "Engineering Leadership"],
        summary:
            "We're building the infrastructure behind creator-led shopping in India — where 30,000+ creators drive ₹300cr+ in monthly GMV. The systems underneath that scale have to be fast, reliable, and correct at every layer.",
        whatYouWillBuild: [
            "Own end-to-end delivery for your domain — requirements, system design, shipping, and iteration, with ~60% hands-on coding in Python/Django, Postgres, Redis, Kafka",
            "Lead architecture reviews and set engineering standards across a squad of 3–5 engineers, including hiring, performance, and career development",
            "Build and maintain the technical roadmap for your domain, keeping it aligned with product and business goals",
            "Own SLO targets, drive incident response, and raise the bar on CI/CD, observability, and on-call hygiene",
        ],
        whatYouAre: [
            "7+ years building production web applications, with 1–3+ years leading an engineering team",
            "Strong distributed systems instincts — backed by real design docs and post-mortems, not just opinions",
            "Product mindset — you think about user impact and business outcomes, not just technical correctness",
            "You've made hard tradeoffs under deadline pressure and shipped in a high-velocity environment",
        ],
        whyTakeThis: [
            "Creator commerce is one of the fastest-growing segments in Indian e-commerce; you're building the infrastructure beneath it",
            "If you want to own a domain end-to-end — roadmap, team, architecture, reliability — and not just execute someone else's plan, this is that role",
        ],
    },
    {
        order: 3,
        slug: "founding-ai-engineer-bengaluru",
        title: "Founding AI Engineer",
        industry: "Fintech",
        stage: "Pre-seed",
        employees: "1–10",
        location: "Bengaluru",
        region: "Karnataka",
        workPolicy: "In office",
        type: "Full-time",
        salaryMin: 45,
        salaryMax: 60,
        equity: "0.1% – 0.3%",
        status: "open",
        postedDate: "2026-05-20",
        validThrough: "2026-08-20",
        skills: ["Python", "Distributed Systems", "LLMs", "Agent Systems", "Tool Calling", "Container Orchestration", "Memory Systems"],
        summary:
            "We're building AI agents for the domain where a single wrong digit has legal consequences. Every number has to be right. Every decision has to be traceable. If that sounds like the hardest version of the problem, it is — and that's exactly why we're building here.",
        whatYouWillBuild: [
            "Model-agnostic agent harness — structured reasoning loops, tool calling, safe code execution, parallel orchestration. Deterministic. Inspectable.",
            "Distributed cloud runtime — hundreds to thousands of fully isolated concurrent agents. Container orchestration, ephemeral compute, filesystem virtualization, execution tracing.",
            "Advanced harness systems — dynamic tool search, decision-time prompting, context pruning and compression.",
            "Multi-layer memory architecture — working memory, episodic task memory, long-term semantic retrieval, compression over time",
        ],
        whatYouAre: [
            "4–8 years building distributed systems or AI/ML infrastructure",
            "Strong instincts for correctness, determinism, and debuggability",
            "You've shipped things with no playbook — 0-to-1, not feature work",
        ],
        whyTakeThis: [
            "One seat, not a headcount — you shape the architecture of everything from here",
            "$3.3T global market, zero purpose-built AI infrastructure for it",
        ],
    },
    {
        order: 2,
        slug: "senior-audio-research-engineer-ringg-ai",
        title: "Senior Audio Research Engineer",
        industry: "Voice AI",
        stage: "Seed",
        employees: "11–50",
        location: "Bengaluru",
        region: "Karnataka",
        workPolicy: "In office",
        type: "Full-time",
        salaryMin: 50,
        salaryMax: 70,
        equity: "0.1% - 0.3%",
        status: "closed",
        postedDate: "2026-01-14",
        validThrough: "2026-04-14",
        skills: ["PyTorch", "Diffusion Models", "Speech-to-Speech", "SLMs", "TensorRT", "DeepSpeed", "Model Optimization"],
        summary:
            "Building India's most powerful custom SLMs and real-time Speech-to-Speech voice agents that already handle millions of calls across banking, healthcare, and new economy brands.",
        whatYouWillBuild: [
            "Architect infrastructure for custom SLMs and real-time Speech-to-Speech voice agents",
            "Build and scale custom diffusion-based audio models",
            "Optimize inference to handle 10,000+ requests per second",
            "Deploy models using TorchScript, ONNX, TensorRT, and DeepSpeed",
        ],
        whatYouAre: [
            "Experience building or contributing to diffusion-based audio models",
            "Deep expertise in PyTorch",
            "Production deployment experience with TorchScript, ONNX, or TensorRT",
            "Experience optimizing inference at massive scale (10,000+ RPS)",
        ],
        whyTakeThis: [
            "Models that touch real people — banking, healthcare, new economy brands at millions of calls",
            "Ownership over audio infrastructure at a scale most engineers never reach",
        ],
    },
    {
        order: 1,
        slug: "founding-engineer-outflo-ai",
        title: "Founding Engineer",
        industry: "Sales AI",
        stage: "Pre-seed",
        employees: "1–10",
        location: "Bengaluru",
        region: "Karnataka",
        workPolicy: "In office",
        type: "Full-time",
        salaryMin: 12,
        salaryMax: 18,
        equity: "0.5% - 1.0%",
        status: "closed",
        postedDate: "2026-01-14",
        validThrough: "2026-04-14",
        skills: ["TypeScript", "Node.js", "React", "PostgreSQL", "AWS", "LLMs", "Agentic Frameworks", "System Architecture"],
        summary:
            "OutFlo AI is an early-stage startup building an AI-first B2B outreach platform for GTM teams in the US. Join as a Founding Engineer with strong expertise in backend and AI — this is a high-ownership role for someone who wants to build from scratch.",
        whatYouWillBuild: [
            "Lead the overall design architecture, development, and deployment of scalable solutions",
            "Build AI-native product experiences using LLMs, Agents, RAG, and vector DBs",
            "Ship code yourself while managing a small engineering team",
            "Collaborate directly with the founder and customers to shape product direction",
        ],
        whatYouAre: [
            "2+ years experience in early-stage startups (pre-seed/seed) building end-to-end products",
            "Hands-on expertise with TypeScript, Node.js, Postgres, Express, React, AWS",
            "Experience building AI-native products using LLMs and agentic frameworks",
            "Strong understanding of backend architecture — microservices, queuing, scaling",
        ],
        whyTakeThis: [
            "Front-row seat at a fast-growing AI SaaS company with a clear path to CTO",
            "Shape the product, culture, and technical roadmap from day one",
        ],
    },
];

export const JOB_META_FIELDS = [
    { key: 'stage', icon: Milestone, listing: true },
    { key: 'industry', icon: Building2, listing: false },
    { key: 'employees', icon: Users, listing: true },
    { key: 'location', icon: MapPin, listing: true, format: (j) => j.workPolicy === 'Remote' ? `Remote, ${j.location}` : j.location },
];

export const getJob = (slug) => JOBS.find((j) => j.slug === slug);
export const openJobs = () => JOBS.filter((j) => j.status === 'open');

export const getJobMetaTitle = (job) => {
    const location = job.workPolicy === 'Remote' ? `Remote ${job.location}` : job.location;
    return `${job.title} – ${location} | ${job.industry} | ${BRAND.name}`;
};

export const getJobMetaDescription = (job) => {
    const location = job.workPolicy === 'Remote' ? `Remote ${job.location}` : job.location;
    const firstSentence = job.summary.split(/(?<=\.)\s/)[0];
    return `${job.title} — ${location}. ${firstSentence} ₹${job.salaryMin}–${job.salaryMax}L + ${job.equity}.`;
};

export const JOBS_PAGE = {
    meta: {
        listing: {
            title: `Top Startup Engineering Jobs in India — ${BRAND.name}`,
            description: 'Engineering roles at early and growth-stage startups in India — founding engineers, AI engineers, and senior technical leaders.',
            ogDescription: 'Engineering roles at top startups in India.',
        },
    },
    listing: {
        heading: "Open roles",
    },
    detail: {
        backLink: "Open roles",
        sections: {
            overview: "Overview",
            whatYouWillBuild: "What you'll build",
            whoYouAre: "Who you are",
            whyTakeThis: "Why this",
        },
    },
};
