// Open roles. Edit, add, or remove entries — pages are generated from this list.
// Roles are intentionally anonymized (sector + stage, no client name).
// status: "open" | "closed". Closed roles stay live but are de-indexed; the index only lists open.
//
// Optional narrative fields render only when populated:
//   mission, build[], lookingFor[], goodToHave[], whyJoin[]

export const JOBS = [
    {
        slug: "founding-ai-engineer-accounting",
        title: "Founding AI Engineer",
        sector: "AI for accounting",
        stage: "Early-stage",
        location: "Bengaluru",
        type: "Full-time",
        salary: "₹45L–₹60L",
        equity: "0.1%–0.3%",
        status: "open",
        postedDate: "2026-05-20",
        validThrough: "2026-08-20",
        summary:
            "We're building AI agents that serve as the backbone for the world's businesses — starting with accounting, the hardest domain AI has ever touched. Every number has to be right. Every decision has to be traceable. Every agent has to survive legal scrutiny. We're not building demos. We're building infrastructure that sits beneath how real businesses run. We're looking for a founding engineer who wants to own the technical DNA of everything — not contribute to a roadmap, but define one.",
        mission:
            "As our founding engineer, you'll build the core primitives that make autonomous AI agents reliable, inspectable, and scalable — across a model-agnostic harness, a cloud runtime for thousands of concurrent agents, and the memory and context systems that make them intelligent over time.",
        build: [
            "A model-agnostic agent harness — structured reasoning loops, tool calling, safe code execution, parallel orchestration. Simple. Deterministic. Inspectable.",
            "A distributed cloud runtime for hundreds to thousands of fully isolated concurrent agents — container orchestration, ephemeral compute, filesystem virtualization, execution tracing.",
            "Advanced harness systems — dynamic tool search, decision-time prompting, context pruning, compression, and compaction.",
            "A multi-layer memory architecture — working memory, episodic task memory, long-term semantic retrieval, and compression over time.",
        ],
        lookingFor: [
            "Deep experience building distributed systems or AI infrastructure from scratch.",
            "Strong instincts for correctness, determinism, and debuggability in complex systems.",
            "Comfort with ambiguity — you've shipped things that had no playbook.",
            "Someone who's looked at their own work and thought \"I don't know anyone else who could have built this.\"",
        ],
        goodToHave: [
            "Experience with container orchestration, sandboxing, or ephemeral compute.",
            "Familiarity with LLM tool-use, agent frameworks, or RAG systems.",
            "Understanding of context window management, memory compression, or retrieval at scale.",
        ],
        whyJoin: [
            "This is the only seat — not a headcount, not a queue. One person shapes the architecture of everything.",
            "You're solving the hardest AI trust problem: accounting, where a single wrong digit has legal consequences.",
            "If you can build agents that survive accounting, you've built agents that can survive anything.",
            "Bengaluru-based, early stage — the kind of work you'll look back on and know you built something that lasted.",
        ],
    },
    {
        slug: "senior-backend-engineer",
        title: "Senior Backend Engineer",
        sector: "Developer tools",
        stage: "Series A",
        location: "Bengaluru / Hybrid",
        type: "Full-time",
        salary: "₹45L–₹70L",
        equity: "+ equity",
        status: "open",
        postedDate: "2026-05-10",
        validThrough: "2026-08-10",
        summary:
            "Build the core backend for a fast-growing developer-tools company scaling past its first thousand customers.",
        mission:
            "Own design, scale, and reliability for the platform's core services as the team scales from hundreds to thousands of customers.",
        build: [
            "Design and scale high-throughput backend services.",
            "Own reliability, performance, and data integrity for core systems.",
            "Mentor and raise the engineering bar across the team.",
        ],
        lookingFor: [
            "5+ years building and operating backend services at scale.",
            "Deep comfort with distributed systems and databases.",
            "Track record of ownership in a high-growth environment.",
        ],
        goodToHave: [],
        whyJoin: [],
    },
    {
        slug: "founding-full-stack-engineer",
        title: "Founding Full-Stack Engineer",
        sector: "Vertical SaaS",
        stage: "Pre-seed",
        location: "Remote (India)",
        type: "Full-time",
        salary: "₹30L–₹50L",
        equity: "Significant",
        status: "open",
        postedDate: "2026-05-05",
        validThrough: "2026-08-05",
        summary:
            "Be the first engineer at a pre-seed vertical-SaaS company — ship the product end to end alongside the founders.",
        mission:
            "Build and ship the product across the full stack, making pragmatic architectural calls and working directly with founders on direction.",
        build: [
            "Ship features across the full stack, fast.",
            "Make pragmatic architectural calls for an early product.",
            "Work directly with founders on product and direction.",
        ],
        lookingFor: [
            "Shipped real products end to end, ideally zero to one.",
            "Thrives in ambiguity and high autonomy.",
            "Strong product sense, not just engineering.",
        ],
        goodToHave: [],
        whyJoin: [],
    },
    {
        slug: "staff-infrastructure-engineer",
        title: "Staff Infrastructure Engineer",
        sector: "Fintech",
        stage: "Series B",
        location: "Remote (US)",
        type: "Full-time",
        salary: "$190k–$230k",
        equity: "+ equity",
        status: "closed",
        postedDate: "2026-02-12",
        validThrough: "2026-04-30",
        summary:
            "Lead infrastructure and platform reliability for a Series B fintech scaling its core systems.",
        mission:
            "Own cloud infrastructure, CI/CD, and platform reliability; lead architecture for scale, security, and compliance.",
        build: [
            "Own cloud infrastructure, CI/CD, and platform reliability.",
            "Lead architecture for scale, security, and compliance.",
            "Set platform standards across engineering.",
        ],
        lookingFor: [
            "8+ years in infrastructure / platform engineering.",
            "Deep AWS and IaC experience at scale.",
            "Experience in a regulated / high-availability environment.",
        ],
        goodToHave: [],
        whyJoin: [],
    },
];

export const getJob = (slug) => JOBS.find((j) => j.slug === slug);
export const openJobs = () => JOBS.filter((j) => j.status === "open");
