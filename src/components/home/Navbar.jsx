"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/content';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleScrollTo = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const targetId = href.replace('#', '');

        if (pathname !== '/') {
            router.push('/');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
        } else {
            const element = document.getElementById(targetId);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleCTA = (e) => {
        handleScrollTo(e, '#contact');
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-mowka-bg-secondary/90 backdrop-blur-md py-2 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Logo onClick={() => setMobileMenuOpen(false)} />

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-12">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className="text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide cursor-pointer"
                            >
                                {item.label}
                            </a>
                        ))}

                        <Link
                            href="/talent"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
                        >
                            For Talent
                        </Link>

                        <a
                            href="#contact"
                            onClick={handleCTA}
                            className="text-sm font-medium text-white bg-mowka-action-primary hover:bg-mowka-action-primary-hover px-5 py-2 rounded-md transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5"
                        >
                            Let&apos;s Talk
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 relative text-mowka-text-primary p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-mowka-bg-primary z-40 flex flex-col justify-start items-center pt-32 space-y-8 transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            >
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-3xl font-serif text-mowka-text-primary hover:text-mowka-link transition-colors cursor-pointer"
                        onClick={(e) => handleScrollTo(e, item.href)}
                    >
                        {item.label}
                    </a>
                ))}

                <Link
                    href="/talent"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-serif text-mowka-text-primary hover:text-mowka-link transition-colors"
                >
                    For Talent
                </Link>

                <a
                    href="#contact"
                    onClick={handleCTA}
                    className="px-10 py-4 bg-mowka-action-primary text-white text-xl font-medium rounded-full shadow-xl cursor-pointer inline-flex items-center gap-3"
                >
                    Let&apos;s Talk
                    <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </>
    );
};
