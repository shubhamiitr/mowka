import { SITE_CONTENT } from '../src/constants/content';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/llms.txt'],
        },
        sitemap: [`${SITE_CONTENT.siteUrl}/sitemap.xml`],
    };
}
