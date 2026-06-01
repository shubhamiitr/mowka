"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, NAV_CTA } from '../../constants/content';
import { Logo } from '../ui/Logo';
import { CalButton } from '../ui/CalButton';

const DESKTOP_ITEM_CLASS =
    "text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide cursor-pointer";
const MOBILE_ITEM_CLASS =
    "text-3xl font-serif text-mowka-text-primary hover:text-mowka-link transition-colors cursor-pointer";

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const closeMobile = () => setMobileMenuOpen(false);

    const handleAnchorClick = (e, href) => {
        e.preventDefault();
        closeMobile();
        const targetId = href.replace('#', '');

        if (pathname !== '/') {
            router.push('/');
            setTimeout(() => {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
            return;
        }
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const renderItem = (item, className) =>
        item.page ? (
            <Link key={item.label} href={item.href} onClick={closeMobile} className={className}>
                {item.label}
            </Link>
        ) : (
            <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={className}
            >
                {item.label}
            </a>
        );

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-mowka-bg-secondary/90 backdrop-blur-md py-2 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Logo onClick={closeMobile} />

                    <div className="hidden md:flex items-center space-x-10">
                        {NAV_ITEMS.map((item) => renderItem(item, DESKTOP_ITEM_CLASS))}
                        <CalButton variant="primary" size="compact" icon="arrow" onClick={closeMobile}>
                            {NAV_CTA}
                        </CalButton>
                    </div>

                    <button
                        className="md:hidden z-50 relative text-mowka-text-primary p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 bg-mowka-bg-primary z-40 flex flex-col justify-start items-center pt-32 space-y-8 transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            >
                {NAV_ITEMS.map((item) => renderItem(item, MOBILE_ITEM_CLASS))}
                <CalButton variant="primary" icon="arrow" onClick={closeMobile}>
                    {NAV_CTA}
                </CalButton>
            </div>
        </>
    );
};
