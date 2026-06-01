// Insights / blog content. Edit, add, or remove entries — pages are generated from this list.
// Each article: slug (URL), title, excerpt, date (YYYY-MM-DD), readTime, author, body[] (paragraphs).

export const INSIGHTS = [
    {
        slug: "first-engineering-hire-sets-the-ceiling",
        title: "Your first engineering hire sets the ceiling for the next ten",
        excerpt: "The earliest builders define your bar, your culture, and who you can attract next. Here's how to get the first one right.",
        date: "2026-05-22",
        readTime: "4 min read",
        author: "Shubham Kansal",
        body: [
            "Early hiring is not about filling a seat. Your first few engineers set the technical bar, the working norms, and the reputation that determines who you can recruit next. Get the first one right and the next ten get easier. Get it wrong and you spend a year unwinding it.",
            "The trap most founders fall into is optimizing for raw speed — hiring the first competent person who says yes. At seed stage you cannot afford a 'competent' hire. You need someone who can own an ambiguous problem end to end, make architectural calls that won't need to be redone in six months, and raise the bar for everyone who follows.",
            "Before you write a job description, get specific about the one or two things this hire must be exceptional at, and what you are willing to trade away. A founding engineer who is brilliant at zero-to-one but mediocre at process is usually the right call early; the reverse rarely is.",
            "Finally, treat the first hire as a recruiting multiplier, not just an IC. The strongest builders want to work with other strong builders. Your first great hire is the proof point that lets you land the next five.",
        ],
    },
    {
        slug: "why-250-applicants-is-worse-than-3-referrals",
        title: "Why 250 applicants is a worse signal than 3 referrals",
        excerpt: "Volume feels like progress. For early-stage technical hiring, it's usually noise. The math on signal vs. volume.",
        date: "2026-05-12",
        readTime: "5 min read",
        author: "Shubham Kansal",
        body: [
            "A flood of applications looks like momentum. In reality, 250 inbound resumes for an early-stage engineering role is mostly noise — and sorting it burns the one resource a founder can't get back: time.",
            "The strongest builders are rarely in the open-application pool. They're heads-down at their current company, not scanning job boards, and reachable only through trust. So the bigger your inbound pile, the more it skews toward people who are available rather than people who are exceptional.",
            "This is why we optimize for signal over volume: a handful of evaluated introductions beats hundreds of unscreened resumes. Three builders who were vetted for technical depth, ownership, and stage-fit will out-convert 250 cold applications every time.",
            "If you're drowning in resumes and none fit, the answer isn't a bigger funnel. It's a sharper one.",
        ],
    },
    {
        slug: "counter-offers-are-killing-your-pipeline",
        title: "Counter-offers are killing your engineering pipeline — here's the fix",
        excerpt: "You made the offer. They accepted. Then their current employer matched it. Closing starts long before the offer letter.",
        date: "2026-04-30",
        readTime: "4 min read",
        author: "Shubham Kansal",
        body: [
            "Few things sting like a signed offer that evaporates into a counter-offer. But a lost candidate at the offer stage is almost always a failure that started much earlier — in how the search was framed.",
            "Builders who accept counter-offers were usually never sold on the mission in the first place; they were sold on the comp. If money is the only axis you're competing on, you will lose to a better-funded employer every time.",
            "The fix is to surface motivation early and honestly. What would actually make this person move — ownership, the problem, the team, the equity upside? If you can't answer that before the final round, you're not ready to make an offer.",
            "We confirm genuine interest and role clarity before any introduction, so by the time an offer goes out, both sides already know it's a fit. That's how you close — not by winning a bidding war at the end.",
        ],
    },
    {
        slug: "scope-a-founding-engineer-role",
        title: "How to scope a founding engineer role before you write the JD",
        excerpt: "Most job descriptions describe a wishlist, not a role. Pressure-test these four questions first.",
        date: "2026-04-18",
        readTime: "6 min read",
        author: "Shubham Kansal",
        body: [
            "The job description is the last thing you should write, not the first. A JD assembled from a wishlist of skills attracts generalists and repels the specialists you actually need.",
            "Start with the work, not the title. What are the three most important things this person will ship in their first six months? If you can't name them concretely, the role isn't ready to hire for yet.",
            "Then pressure-test the level. Founders routinely over-spec ('we need a staff engineer') when they actually need someone hungry and high-ownership a level down — and can't afford the staff comp anyway. Be honest about the trade between seniority and budget.",
            "Next, decide what this hire is allowed to own versus what stays with the founders. Ambiguity here is the number-one cause of a strong hire leaving within a year.",
            "Only once those are clear should you write the JD — and at that point it nearly writes itself.",
        ],
    },
];

export const getInsight = (slug) => INSIGHTS.find((a) => a.slug === slug);
