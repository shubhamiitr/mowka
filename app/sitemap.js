import { SITE_CONTENT } from '../src/constants/content';

export default function sitemap() {
    const baseUrl = SITE_CONTENT.siteUrl;

    return [
        {
            url: baseUrl,
            lastModified: new Date('2026-05-01'),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2026-05-12'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date('2026-05-12'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];
}
