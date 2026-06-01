import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '../../../src/components/home/Navbar';
import { Footer } from '../../../src/components/ui/Footer';
import { INSIGHTS, getInsight } from '../../../src/constants/insights';
import { BRAND } from '../../../src/constants/content';

const BASE = BRAND.url;

export function generateStaticParams() {
    return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const a = getInsight(slug);
    if (!a) return {};
    return {
        title: `${a.title} — ${BRAND.name}`,
        description: a.excerpt,
        alternates: { canonical: `${BASE}/insights/${a.slug}` },
        openGraph: {
            type: 'article',
            url: `${BASE}/insights/${a.slug}`,
            title: a.title,
            description: a.excerpt,
        },
    };
}

const fmtDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default async function InsightPage({ params }) {
    const { slug } = await params;
    const a = getInsight(slug);
    if (!a) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.title,
        description: a.excerpt,
        datePublished: a.date,
        dateModified: a.date,
        author: { '@type': 'Person', name: a.author },
        publisher: {
            '@type': 'Organization',
            name: BRAND.name,
            logo: { '@type': 'ImageObject', url: `${BASE}/logo-full.png` },
        },
        mainEntityOfPage: `${BASE}/insights/${a.slug}`,
    };

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
            { '@type': 'ListItem', position: 2, name: 'Insights', item: `${BASE}/insights` },
            { '@type': 'ListItem', position: 3, name: a.title, item: `${BASE}/insights/${a.slug}` },
        ],
    };

    return (
        <main className="layout-page">
            <Navbar />
            <article className="layout-container-doc pt-28 md:pt-36">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

                <Link href="/insights" className="text-sm font-medium text-mowka-link hover:text-mowka-link-hover transition-colors">
                    ← All insights
                </Link>

                <p className="type-doc-meta mt-6">{fmtDate(a.date)} · {a.readTime} · {a.author}</p>
                <h1 className="type-doc-heading">{a.title}</h1>

                <div className="type-prose">
                    {a.body.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-mowka-border-light">
                    <Link href="/#contact" className="btn-primary">Hiring for a role like this? Let&apos;s talk</Link>
                </div>
            </article>
            <Footer />
        </main>
    );
}
