import { Talent } from '../../src/components/talent/Talent';
import { METADATA, SITE_CONTENT } from '../../src/constants/content';

const BASE = SITE_CONTENT.siteUrl;

export const metadata = {
    title: METADATA.talent.title,
    description: METADATA.talent.description,
    keywords: METADATA.talent.keywords,
    alternates: { canonical: `${BASE}/talent` },
    openGraph: {
        type: 'website',
        url: `${BASE}/talent`,
        title: METADATA.talent.ogTitle,
        description: METADATA.talent.ogDescription,
        images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: METADATA.talent.ogTitle,
        description: METADATA.talent.ogDescription,
    },
};

export default function TalentPage() {
    return <Talent />;
}
