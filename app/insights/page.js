import Link from 'next/link';
import { Navbar } from '../../src/components/home/Navbar';
import { Footer } from '../../src/components/ui/Footer';
import { INSIGHTS } from '../../src/constants/insights';
import { BRAND } from '../../src/constants/content';

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
            <Navbar />
            <section className="layout-section pt-28 md:pt-36">
                <div className="layout-container">
                    <div className="layout-section-header">
                        <span className="type-label mb-3 block">Insights</span>
                        <h1 className="type-section-heading">Practical hiring advice for founders</h1>
                    </div>

                    {featured && (
                        <Link
                            href={`/insights/${featured.slug}`}
                            className="block max-w-3xl mx-auto group mb-12 md:mb-16"
                        >
                            <div className="rounded-3xl border border-mowka-border-light bg-mowka-bg-primary p-8 md:p-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.03),0_24px_48px_-16px_rgba(23,48,84,0.10)]">
                                <p className="text-[11px] uppercase tracking-widest text-mowka-text-quaternary mb-4">
                                    Featured · {fmtDate(featured.date)} · {featured.readTime}
                                </p>
                                <h2 className="font-serif text-2xl md:text-4xl font-medium text-mowka-text-primary leading-tight mb-4 group-hover:text-mowka-link transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="type-body max-w-xl mx-auto">{featured.excerpt}</p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-mowka-link mt-6">
                                    Read article →
                                </span>
                            </div>
                        </Link>
                    )}

                    {rest.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                            {rest.map((a) => (
                                <Link key={a.slug} href={`/insights/${a.slug}`} className="type-card group">
                                    <p className="text-[11px] uppercase tracking-widest text-mowka-text-quaternary mb-3">
                                        {fmtDate(a.date)} · {a.readTime}
                                    </p>
                                    <h3 className="type-card-title mb-3 group-hover:text-mowka-link transition-colors">{a.title}</h3>
                                    <p className="type-body flex-1">{a.excerpt}</p>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-mowka-link mt-4">
                                        Read more →
                                    </span>
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
