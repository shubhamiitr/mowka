export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/llms.txt'],
        },
        sitemap: ['https://mowka.in/sitemap.xml'],
    };
}
