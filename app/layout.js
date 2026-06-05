import { Geist, Playfair_Display } from 'next/font/google';
import './globals.css';
import ClientLayout from '../src/components/ClientLayout';
import Script from 'next/script';
import { BRAND } from '../src/constants/content';
import { RouteAnalytics } from '../src/components/analytics/RouteAnalytics';

const geist = Geist({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-geist',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair',
});

export const metadata = {
    metadataBase: new URL(BRAND.url),
    icons: {
        icon: [
            { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',

};

export const viewport = {
    themeColor: '#173054',
    width: 'device-width',
    initialScale: 1,
};


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`scroll-smooth ${geist.variable} ${playfair.variable}`}>
            <head>
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","x2b9jxs5tw");`}
                </Script>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-5VNYMY69PY" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VNYMY69PY', { send_page_view: false });
          `}
                </Script>
            </head>
            <body className="bg-mowka-bg-primary text-mowka-text-primary antialiased overflow-x-hidden">
                <RouteAnalytics />
                <ClientLayout>
                    <div className="bg-mowka-bg-primary min-h-screen">
                        {children}
                    </div>
                </ClientLayout>
            </body>
        </html >
    );
}
