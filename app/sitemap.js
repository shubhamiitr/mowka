import { BRAND } from '../src/constants/content';
// import { INSIGHTS } from '../src/constants/insights';
// import { openJobs } from '../src/constants/jobs';

export default function sitemap() {
    const baseUrl = BRAND.url;

    // const insightPages = INSIGHTS.map((a) => ({
    //     url: `${baseUrl}/insights/${a.slug}`,
    //     lastModified: new Date(a.date),
    //     changeFrequency: 'yearly',
    //     priority: 0.6,
    // }));

    // const jobPages = openJobs().map((j) => ({
    //     url: `${baseUrl}/jobs/${j.slug}`,
    //     lastModified: new Date(j.postedDate),
    //     changeFrequency: 'weekly',
    //     priority: 0.7,
    // }));

    return [
        {
            url: baseUrl,
            lastModified: new Date('2026-05-01'),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // {
        //     url: `${baseUrl}/jobs`,
        //     lastModified: new Date('2026-05-18'),
        //     changeFrequency: 'weekly',
        //     priority: 0.8,
        // },
        // {
        //     url: `${baseUrl}/insights`,
        //     lastModified: new Date('2026-05-22'),
        //     changeFrequency: 'weekly',
        //     priority: 0.7,
        // },
        // ...jobPages,
        // ...insightPages,
        {
            url: `${baseUrl}/builder`,
            lastModified: new Date('2026-05-16'),
            changeFrequency: 'monthly',
            priority: 0.9,
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
