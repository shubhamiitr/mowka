import { Builder } from '../../src/components/builder/Builder';
import { METADATA, BRAND } from '../../src/constants/content';

const BASE = BRAND.url;

export const metadata = {
    title: METADATA.builder.title,
    description: METADATA.builder.description,
    keywords: METADATA.builder.keywords,
    alternates: { canonical: `${BASE}/builder` },
    openGraph: {
        type: 'website',
        url: `${BASE}/builder`,
        title: METADATA.builder.ogTitle,
        description: METADATA.builder.ogDescription,
        images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: METADATA.builder.ogTitle,
        description: METADATA.builder.ogDescription,
    },
};

export default function BuilderPage() {
    return <Builder />;
}
