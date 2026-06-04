import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Navbar } from '../../../src/components/ui/Navbar';
import { Footer } from '../../../src/components/ui/Footer';
import { JobMetaStrip } from '../../../src/components/ui/JobMetaStrip';
import { JOBS, JOBS_PAGE, getJob, getJobMetaTitle, getJobMetaDescription } from '../../../src/constants/jobs';
import { BuilderFormCta } from '../../../src/components/ui/BuilderFormCta';
import { BRAND } from '../../../src/constants/content';

const NAV_LINKS = [
    { label: 'For Founders', href: '/' },
    { label: 'For Builders', href: '/builder' },
    // { label: 'Insights', href: '/insights' },
    { label: 'Open Roles', href: '/jobs' },
];
const NAV_CTA = { type: 'builder-form', label: 'Interested' };

const BASE = BRAND.url;

export function generateStaticParams() {
    return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const j = getJob(slug);
    if (!j) return {};
    return {
        title: getJobMetaTitle(j),
        description: getJobMetaDescription(j),
        alternates: { canonical: `${BASE}/jobs/${j.slug}` },
        robots: j.status === 'closed' ? { index: false, follow: true }
            : j.status === 'draft' ? { index: false, follow: false }
                : undefined,
        openGraph: {
            type: 'website',
            url: `${BASE}/jobs/${j.slug}`,
            title: getJobMetaTitle(j),
            description: getJobMetaDescription(j),
            images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: getJobMetaTitle(j),
            description: getJobMetaDescription(j),
            images: [`${BASE}/og-image.png`],
        },
    };
}

const Section = ({ title, children }) => (
    <div>
        <h2 className="type-article-section-title">{title}</h2>
        {children}
    </div>
);

const BulletList = ({ items }) => (
    <ul className="type-article-list">
        {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
);

export default async function JobPage({ params }) {
    const { slug } = await params;
    const j = getJob(slug);
    if (!j) redirect('/jobs');
    const closed = j.status === 'closed';
    const isRemote = j.workPolicy === 'Remote';

    const description =
        `<p>${j.summary}</p>` +
        `<p><strong>What you'll build</strong></p><ul>${j.whatYouWillBuild.map((r) => `<li>${r}</li>`).join('')}</ul>` +
        `<p><strong>Who you are</strong></p><ul>${j.whatYouAre.map((r) => `<li>${r}</li>`).join('')}</ul>` +
        `<p><strong>Why this</strong></p><ul>${j.whyTakeThis.map((r) => `<li>${r}</li>`).join('')}</ul>`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: j.title,
        description,
        url: `${BASE}/jobs/${j.slug}`,
        datePosted: j.postedDate,
        validThrough: j.validThrough,
        employmentType: 'FULL_TIME',
        directApply: false,
        baseSalary: {
            '@type': 'MonetaryAmount',
            currency: 'INR',
            value: {
                '@type': 'QuantitativeValue',
                minValue: j.salaryMin * 100000,
                maxValue: j.salaryMax * 100000,
                unitText: 'YEAR',
            },
        },
        identifier: { '@type': 'PropertyValue', name: BRAND.name, value: j.slug },
        hiringOrganization: {
            '@type': 'Organization',
            name: BRAND.name,
            sameAs: BASE,
            logo: { '@type': 'ImageObject', url: `${BASE}/logo-full.png` },
        },
        ...(isRemote ? {
            jobLocationType: 'TELECOMMUTE',
            applicantLocationRequirements: { '@type': 'Country', name: j.remoteCountry },
        } : {}),
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                ...(isRemote ? {} : { addressLocality: j.location, addressRegion: j.region }),
                addressCountry: 'IN',
            },
        },
        industry: j.industry,
        skills: j.skills.join(', '),
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

    const compLine = `₹${j.salaryMin}L – ₹${j.salaryMax}L · ${j.equity} equity`;

    return (
        <main className="layout-page">
            <Navbar links={NAV_LINKS} cta={NAV_CTA} />
            <section className="pt-28 md:pt-36 pb-20 md:pb-28">
                <div className="max-w-3xl mx-auto px-6 md:px-8">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

                    <Link href="/jobs" className="type-back-link">← {JOBS_PAGE.detail.backLink}</Link>

                    <header className="mt-8 md:mt-10">
                        {closed && (
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full mb-3 bg-red-500/10 text-red-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                Closed
                            </span>
                        )}
                        <h1 className="type-article-heading">{j.title}</h1>
                        <p className="type-article-subheading">{compLine}</p>
                        <JobMetaStrip job={j} className="mt-1" />
                    </header>

                    <article className="type-article-body mt-7">
                        <Section title={JOBS_PAGE.detail.sections.overview}>
                            <p>{j.summary}</p>
                        </Section>

                        <Section title={JOBS_PAGE.detail.sections.whatYouWillBuild}>
                            <BulletList items={j.whatYouWillBuild} />
                        </Section>

                        <Section title={JOBS_PAGE.detail.sections.whoYouAre}>
                            <BulletList items={j.whatYouAre} />
                        </Section>

                        <Section title={JOBS_PAGE.detail.sections.whyTakeThis}>
                            <BulletList items={j.whyTakeThis} />
                        </Section>

                        {!closed && (
                            <div className="mt-8">
                                <BuilderFormCta label="Interested" compact={false} />
                            </div>
                        )}
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    );
}
