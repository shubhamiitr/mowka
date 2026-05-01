import { Geist, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '../src/components/Navbar';
import ClientLayout from '../src/components/ClientLayout';
import Script from 'next/script';

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
    metadataBase: new URL('https://mowka.in'),
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
                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-5VNYMY69PY" strategy="lazyOnload" />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VNYMY69PY');
          `}
                </Script>
            </head >
            <body className="bg-mowka-bg-primary text-mowka-text-primary antialiased overflow-x-hidden">
                <ClientLayout>
                    <div className="bg-mowka-bg-primary min-h-screen">
                        <Navbar />
                        {children}
                    </div>
                </ClientLayout>
            </body>
        </html >
    );
}
