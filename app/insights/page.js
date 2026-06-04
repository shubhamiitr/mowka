import Link from 'next/link';
import { Navbar } from '../../src/components/ui/Navbar';
import { Footer } from '../../src/components/ui/Footer';
import { INSIGHTS } from '../../src/constants/insights';
import { BRAND, NAV_CTA } from '../../src/constants/content';

const NAV_LINKS = [{ label: 'Open Roles', href: '/jobs' }];
const NAVBAR_CTA = { type: 'cal', label: NAV_CTA };

const BASE = BRAND.url;

export const metadata = {
    title: `Insights — ${BRAND.name}`,
    description: 'Practical hiring advice for startup founders — scoping roles, evaluating builders, and closing offers.',
    alternates: { canonical: `${BASE}/insights` },
    openGraph: {
        type: 'website',
        url: `${BASE}/insights`,
        title: `Insights — ${BRAND.name}`,
        description: 'Practical hiring advice for startup founders.',
    },
};

const fmtDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function InsightsPage() {
    const sorted = [...INSIGHTS].sort((a, b) => new Date(b.date) - new Date(a.date));
    const [featured, ...rest] = sorted;

    return (
        <main className="layout-page">
            <Navbar links={NAV_LINKS} cta={NAVBAR_CTA} />
            <section className="layout-section pt-28 md:pt-36">
                <div className="layout-container">
                    <div className="layout-section-header">
                        <span className="type-label mb-3 block">Insights</span>
                        <h1 className="type-section-heading">Practical hiring advice for founders</h1>
                    </div>

                    {featured && (
                        <Link
                            href={`/insights/${featured.slug}`}
                            className="type-card group max-w-3xl mx-auto !text-center mb-12 md:mb-16"
                        >
                            <p className="type-meta mb-4">Featured · {fmtDate(featured.date)} · {featured.readTime}</p>
                            <h2 className="type-article-heading mb-4">{featured.title}</h2>
                            <p className="type-body max-w-xl mx-auto">{featured.excerpt}</p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-mowka-link mt-6 mx-auto">Read article →</span>
                        </Link>
                    )}

                    {rest.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                            {rest.map((a) => (
                                <Link key={a.slug} href={`/insights/${a.slug}`} className="type-card group">
                                    <p className="type-meta mb-3">{fmtDate(a.date)} · {a.readTime}</p>
                                    <h3 className="type-card-title mb-3">{a.title}</h3>
                                    <p className="type-body flex-1">{a.excerpt}</p>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-mowka-link mt-4">Read more →</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}
