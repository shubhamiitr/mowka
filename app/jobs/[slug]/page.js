import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '../../../src/components/home/Navbar';
import { Footer } from '../../../src/components/ui/Footer';
import { JOBS, getJob } from '../../../src/constants/jobs';
import { BRAND } from '../../../src/constants/content';

const BASE = BRAND.url;

export function generateStaticParams() {
    return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const j = getJob(slug);
    if (!j) return {};
    const closed = j.status === 'closed';
    return {
        title: `${j.title} — ${BRAND.name}`,
        description: j.summary,
        alternates: { canonical: `${BASE}/jobs/${j.slug}` },
        robots: closed ? { index: false, follow: true } : undefined,
    };
}

const Section = ({ title, children }) => (
    <section className="mt-10 first:mt-8">
        <h2 className="font-serif text-xl md:text-2xl font-medium text-mowka-text-primary mb-4">{title}</h2>
        {children}
    </section>
);

const BulletList = ({ items }) => (
    <ul className="space-y-3 list-disc pl-5 marker:text-mowka-text-quaternary">
        {items.map((it, i) => (
            <li key={i} className="type-body">{it}</li>
        ))}
    </ul>
);

export default async function JobPage({ params }) {
    const { slug } = await params;
    const j = getJob(slug);
    if (!j) notFound();
    const closed = j.status === 'closed';
    const isRemote = /remote/i.test(j.location);

    const description =
        `<p>${j.summary}</p>` +
        (j.mission ? `<p><strong>The mission</strong></p><p>${j.mission}</p>` : '') +
        (j.build?.length ? `<p><strong>What you'll build</strong></p><ul>${j.build.map((r) => `<li>${r}</li>`).join('')}</ul>` : '') +
        (j.lookingFor?.length ? `<p><strong>What we're looking for</strong></p><ul>${j.lookingFor.map((r) => `<li>${r}</li>`).join('')}</ul>` : '');

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: j.title,
        description,
        datePosted: j.postedDate,
        validThrough: j.validThrough,
        employmentType: 'FULL_TIME',
        identifier: { '@type': 'PropertyValue', name: BRAND.name, value: j.slug },
        hiringOrganization: {
            '@type': 'Organization',
            name: BRAND.name,
            sameAs: BASE,
            logo: `${BASE}/logo-full.png`,
        },
        ...(isRemote
            ? { jobLocationType: 'TELECOMMUTE', applicantLocationRequirements: { '@type': 'Country', name: 'Worldwide' } }
            : {}),
        jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'IN' } },
        industry: j.sector,
    };

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
            { '@type': 'ListItem', position: 2, name: 'Open Roles', item: `${BASE}/jobs` },
            { '@type': 'ListItem', position: 3, name: j.title, item: `${BASE}/jobs/${j.slug}` },
        ],
    };

    const compLine = j.equity ? `${j.salary} • ${j.equity}` : j.salary;
    const highlights = [
        { label: 'Location', value: j.location },
        { label: 'Industry', value: j.sector },
        { label: 'Compensation', value: compLine },
        { label: 'Stage', value: j.stage },
    ];

    return (
        <main className="layout-page">
            <Navbar />
            <section className="pt-28 md:pt-36 pb-16 md:pb-24">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

                    <Link href="/jobs" className="text-sm font-medium text-mowka-link hover:text-mowka-link-hover transition-colors">
                        ← All roles
                    </Link>

                    {closed && (
                        <div className="mt-6 rounded-xl border border-mowka-border-light bg-mowka-bg-secondary p-4 text-sm text-mowka-text-secondary">
                            This role has been filled.{' '}
                            <Link href="/jobs" className="text-mowka-link underline underline-offset-2">See current open roles →</Link>
                        </div>
                    )}

                    <header className="mt-6 md:mt-8">
                        <h1 className="font-serif text-3xl md:text-5xl font-medium text-mowka-text-primary tracking-tight leading-tight">
                            {j.title}
                        </h1>
                        <p className="mt-2 text-xl md:text-2xl font-semibold text-mowka-text-secondary tracking-tight">
                            {compLine}
                        </p>
                    </header>

                    <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
                        <article className="lg:col-span-2">
                            <p className="type-body text-base md:text-[17px]">
                                {j.summary}
                            </p>

                            {j.mission && (
                                <Section title="The mission">
                                    <p className="type-body">{j.mission}</p>
                                </Section>
                            )}

                            {j.build?.length > 0 && (
                                <Section title="What you&rsquo;ll build">
                                    <BulletList items={j.build} />
                                </Section>
                            )}

                            {j.lookingFor?.length > 0 && (
                                <Section title="What we&rsquo;re looking for">
                                    <BulletList items={j.lookingFor} />
                                </Section>
                            )}

                            {j.goodToHave?.length > 0 && (
                                <Section title="Good to have">
                                    <BulletList items={j.goodToHave} />
                                </Section>
                            )}

                            {j.whyJoin?.length > 0 && (
                                <Section title="Why join">
                                    <BulletList items={j.whyJoin} />
                                </Section>
                            )}
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="lg:sticky lg:top-32 rounded-2xl border border-mowka-border-light bg-mowka-bg-primary p-6 md:p-7">
                                <p className="text-[11px] uppercase tracking-widest text-mowka-text-quaternary mb-4">
                                    Role highlights
                                </p>
                                <dl className="space-y-4">
                                    {highlights.map((h) => (
                                        <div key={h.label}>
                                            <dt className="text-xs uppercase tracking-wide text-mowka-text-quaternary">{h.label}</dt>
                                            <dd className="mt-0.5 text-sm md:text-base text-mowka-text-primary font-medium">{h.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
