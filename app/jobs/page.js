import Link from 'next/link';
import { Reveal } from '../../src/components/Reveal';
import jobsData from '../../src/data/jobs.json';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import { Footer } from '../../src/components/Footer';

export const metadata = {
    title: 'Open Positions | Mowka',
    description: 'Explore curated roles at great startups with exceptional opportunities. All positions are pre-screened for technical bar, pace, and ownership expectations.',
    keywords: 'Mowka jobs, startup jobs, ML jobs, backend jobs, engineering jobs, remote jobs',
    alternates: {
        canonical: '/jobs',
    },
    openGraph: {
        type: 'website',
        url: 'https://mowka.in/jobs',
        title: 'Open Positions | Mowka',
        description: 'Explore curated roles at great startups with exceptional opportunities.',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
        siteName: 'Mowka',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Open Positions | Mowka',
        description: 'Explore curated roles at great startups with exceptional opportunities.',
        images: ['/og-image.png'],
    },
};

// Helper function to format location
function formatLocation(jobLocation) {
    if (jobLocation.type === 'remote') {
        return `Remote · ${jobLocation.country}`;
    }
    return `${jobLocation.city} · Hybrid`;
}

export default function JobsPage() {
    return (
        <>
            <div className="min-h-screen bg-mowka-bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40">
                    <Reveal>
                        <h1 className="type-h2 text-4xl md:text-6xl mb-12 text-mowka-text-primary">
                            Open Positions
                        </h1>
                    </Reveal>

                    <div className="space-y-4">
                        {jobsData.map((job, index) => (
                            <Reveal key={job.id} delay={0.1 * index}>
                                <Link
                                    href={`/jobs/${job.slug}`}
                                    className="block group"
                                >
                                    <div className="p-6 border border-mowka-border-light rounded-2xl hover:border-mowka-action-primary transition-all duration-300 bg-white hover:shadow-lg">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div>
                                                <h2 className="text-xl md:text-2xl font-serif font-medium text-mowka-text-primary mb-2 group-hover:text-mowka-action-primary transition-colors">
                                                    {job.title}
                                                </h2>

                                                <div className="flex flex-wrap items-center gap-4 text-sm text-mowka-text-secondary">
                                                    <span className="font-medium">{job.company}</span>
                                                    <span className="text-mowka-text-tertiary hidden xs:inline">•</span>
                                                    <div className="flex items-center gap-1">
                                                        <FiMapPin className="w-3.5 h-3.5" />
                                                        <span>{formatLocation(job.jobLocation)}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-mowka-action-primary group-hover:gap-3 transition-all">
                                                <span className="text-sm font-medium">View Details</span>
                                                <FiArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
