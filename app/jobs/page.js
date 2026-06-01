import Link from 'next/link';
import { MapPin, Briefcase, TrendingUp, ChevronRight } from 'lucide-react';
import { Navbar } from '../../src/components/home/Navbar';
import { Footer } from '../../src/components/ui/Footer';
import { openJobs } from '../../src/constants/jobs';
import { BRAND } from '../../src/constants/content';

const BASE = BRAND.url;

export const metadata = {
    title: `Open Roles — ${BRAND.name}`,
    description: 'Founder-caliber engineering roles at exceptional startups. Reach out to learn which company is behind each role.',
    alternates: { canonical: `${BASE}/jobs` },
    openGraph: {
        type: 'website',
        url: `${BASE}/jobs`,
        title: `Open Roles — ${BRAND.name}`,
        description: 'Founder-caliber engineering roles at exceptional startups.',
    },
};

export default function JobsPage() {
    const jobs = openJobs();

    return (
        <main className="layout-page">
            <Navbar />
            <section className="layout-section pt-28 md:pt-36">
                <div className="layout-container">
                    <div className="layout-section-header">
                        <span className="type-label mb-3 block">Open roles</span>
                        <h1 className="type-section-heading">Roles we&apos;re hiring for right now</h1>
                        <p className="type-section-subhead">
                            Hand-picked roles at exceptional startups. We keep client names private until we talk — reach out and we&apos;ll share the details.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
                        {jobs.map((j) => (
                            <Link
                                key={j.slug}
                                href={`/jobs/${j.slug}`}
                                className="type-timeline-card group justify-between items-center hover:-translate-y-0.5"
                            >
                                <div>
                                    <h2 className="type-card-title">{j.title}</h2>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-mowka-text-secondary mt-2 font-light">
                                        <span className="flex items-center gap-1" title="Location">
                                            <MapPin className="w-3.5 h-3.5 text-mowka-text-quaternary shrink-0" />
                                            <span>{j.location}</span>
                                        </span>
                                        <span className="flex items-center gap-1" title="Sector">
                                            <Briefcase className="w-3.5 h-3.5 text-mowka-text-quaternary shrink-0" />
                                            <span>{j.sector}</span>
                                        </span>
                                        <span className="flex items-center gap-1" title="Stage">
                                            <TrendingUp className="w-3.5 h-3.5 text-mowka-text-quaternary shrink-0" />
                                            <span>{j.stage}</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="shrink-0 flex items-center gap-2">
                                    <ChevronRight className="w-5 h-5 text-mowka-text-quaternary group-hover:text-mowka-text-secondary group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
