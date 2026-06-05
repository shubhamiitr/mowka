'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { getCalApi } from '@calcom/embed-react';
import { usePathname } from 'next/navigation';
import { event } from '../lib/gtag';

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        (async () => {
            const cal = await getCalApi({ namespace: '30min' });
            cal('ui', {
                cssVarsPerTheme: {
                    light: { 'cal-brand': '#173054' },
                    dark: { 'cal-brand': '#173054' },
                },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
            cal('on', { action: 'bookerViewed',        callback: () => event('cal_popup_opened') });
            cal('on', { action: 'bookingSuccessfulV2', callback: () => event('booking_confirmed') });
            cal('on', { action: 'linkFailed',          callback: () => event('cal_load_failed') });
        })();
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
