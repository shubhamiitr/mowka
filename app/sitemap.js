import jobsData from '../src/data/jobs.json';

export default function sitemap() {
    const baseUrl = 'https://mowka.in';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    // Job pages
    const jobPages = jobsData.map(job => ({
        url: `${baseUrl}/jobs/${job.slug}`,
        lastModified: new Date(job.datePosted),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...staticPages, ...jobPages];
}
