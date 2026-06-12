import { Navbar } from '../../src/components/ui/Navbar';
import { Footer } from '../../src/components/ui/Footer';
import { JobCardList } from '../../src/components/ui/JobCardList';
import { openJobs, JOBS_PAGE } from '../../src/constants/jobs';
import { BRAND } from '../../src/constants/content';

const BASE = BRAND.url;
const { title, description, ogDescription } = JOBS_PAGE.meta.listing;
const { heading } = JOBS_PAGE.listing;

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'For Builders', href: '/builder' },
    // { label: 'Insights', href: '/insights' },
    { label: 'For Founders', href: '/' },
];
const NAV_CTA = { type: 'builder-form', label: 'Interested' };

export const metadata = {
    title,
    description,
    alternates: { canonical: `${BASE}/jobs` },
    openGraph: {
        type: 'website',
        url: `${BASE}/jobs`,
        title,
        description: ogDescription,
        images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description: ogDescription,
        images: [`${BASE}/og-image.png`],
    },
};

export default function JobsPage() {
    return (
        <main className="layout-page">
            <Navbar links={NAV_LINKS} cta={NAV_CTA} />
            <section className="layout-section pt-28 md:pt-36 flex-grow">
                <div className="layout-container">
                    <div className="layout-section-header">
                        <h1 className="type-section-heading">{heading}</h1>
                    </div>

                    <JobCardList jobs={openJobs().sort((a, b) => a.order - b.order)} />
                </div>
            </section>
            <Footer />
        </main>
    );
}
