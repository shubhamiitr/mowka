import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '../src/components/Navbar';
import ClientLayout from '../src/components/ClientLayout';
import Script from 'next/script';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair',
});

export const metadata = {
    metadataBase: new URL('https://mowka.in'),
    title: 'Mowka | Grow With Confidence',
    description: 'We scout engineers who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style — so you find the right talent effortlessly.',
    openGraph: {
        type: 'website',
        url: 'https://mowka.in',
        title: 'Mowka | Grow With Confidence',
        description: 'We scout engineers who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style — so you find the right talent effortlessly.',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mowka | Grow With Confidence',
        description: 'We scout engineers who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style — so you find the right talent effortlessly.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
        ],
        apple: '/logos/apple-touch-icon.png',
    },
    manifest: '/logos/site.webmanifest',
    alternates: {
        canonical: '/',
    },
};

export const viewport = {
    themeColor: '#173054',
    width: 'device-width',
    initialScale: 1,
};

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Mowka",
        "url": "https://mowka.in/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mowka.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Mowka",
        "legalName": "Mowka Enterprises Private Limited",
        "alternateName": "Mowka",
        "url": "https://mowka.in/",
        "logo": "https://mowka.in/logos/logo-horizontal.png",
        "description": "We scout engineers who thrive in your unique environment, matching your pace, ambiguity, workload intensity, ownership expectations, and collaboration style — so you find the right talent effortlessly.",
        "slogan": "Grow With Confidence",
        "foundingDate": "2025",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "267 Shopping Center, Gumanpura",
            "addressLocality": "Kota",
            "addressRegion": "Rajasthan",
            "postalCode": "324007",
            "addressCountry": "IN"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
        },
        "knowsAbout": ["Technical Recruitment", "Executive Search", "Software Engineering", "Startup Hiring", "Scouting Talent", "Talent Partnership"],
        "identifier": {
            "@type": "PropertyValue",
            "propertyID": "CIN",
            "value": "U78100RJ2024PTC095066"
        },
        "founder": {
            "@type": "Person",
            "name": "Shubham Kansal",
            "jobTitle": "Founder & CEO",
            "image": "https://mowka.in/profile.webp",
            "url": "https://www.linkedin.com/in/kansalshubham/"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "shubham@mowka.in",
            "contactType": "customer support"
        },
        "sameAs": [
            "https://www.linkedin.com/company/mowka/",
            "https://www.linkedin.com/in/kansalshubham/",
            "https://www.instagram.com/mowka.in/"
        ]
    }
];

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-5VNYMY69PY" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VNYMY69PY');
          `}
                </Script>
            </head>
            <body className="bg-mowka-light text-mowka-navy antialiased selection:bg-mowka-teal selection:text-white overflow-x-hidden">
                <ClientLayout>
                    <div className="bg-mowka-bg-primary min-h-screen">
                        <Navbar />
                        {children}
                    </div>
                </ClientLayout>
            </body>
        </html>
    );
}
