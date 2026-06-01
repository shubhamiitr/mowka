import { BRAND } from '../src/constants/content';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/llms.txt'],
        },
        sitemap: [`${BRAND.url}/sitemap.xml`],
    };
}
