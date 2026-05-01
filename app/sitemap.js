export default function sitemap() {
    const baseUrl = 'https://mowka.in';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date('2026-05-01'),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2025-12-01'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date('2025-12-01'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    return staticPages;
}
