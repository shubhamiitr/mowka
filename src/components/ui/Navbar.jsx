"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { FounderCta } from './FounderCta';
import { BuilderFormCta } from './BuilderFormCta';

const DESKTOP_LINK = "text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide cursor-pointer";
const MOBILE_LINK = "text-3xl font-serif text-mowka-text-primary hover:text-mowka-link transition-colors cursor-pointer";

/**
 * Unified navbar for all pages.
 *
 * links: [{ label, href }]  — hrefs starting with '#' use anchor scroll, others use Next.js Link
 * cta:   { type: 'cal' | 'builder-form', label }
 */
export const Navbar = ({ links = [], cta }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const closeMenu = () => setMenuOpen(false);

    const handleAnchorClick = (e, href) => {
        e.preventDefault();
        closeMenu();
        const id = href.slice(1);
        if (pathname !== '/') {
            router.push('/');
            setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 500);
            return;
        }
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const renderLink = (item, className) =>
        item.href.startsWith('#') ? (
            <a key={item.label} href={item.href} onClick={(e) => handleAnchorClick(e, item.href)} className={className}>
                {item.label}
            </a>
        ) : (
            <Link key={item.label} href={item.href} onClick={closeMenu} className={className}>
                {item.label}
            </Link>
        );

    const renderCta = (hamburgerMenu) => {
        if (!cta) return null;
        if (cta.type === 'cal') {
            return (
                <FounderCta variant={hamburgerMenu ? 'compactBtn' : 'primaryBtn'} onClick={closeMenu}>
                    {cta.label}
                </FounderCta>
            );
        }
        if (cta.type === 'builder-form') {
            return <BuilderFormCta label={cta.label} variant={hamburgerMenu ? 'compactBtn' : 'primaryBtn'} />;
        }
        return null;
    };

    const hasMenu = links.length > 0 || !!cta;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-mowka-bg-secondary py-2 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Logo onClick={closeMenu} />
                    <div className="hidden md:flex items-center space-x-10">
                        {links.map((item) => renderLink(item, DESKTOP_LINK))}
                        {renderCta(true)}
                    </div>
                    {hasMenu && (
                        <button
                            className="md:hidden z-50 relative text-mowka-text-primary p-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            {hasMenu && (
                <div className={`fixed inset-0 bg-mowka-bg-primary z-40 flex flex-col justify-start items-center pt-32 space-y-8 transition-all duration-500 ease-in-out md:hidden ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                    {links.map((item) => renderLink(item, MOBILE_LINK))}
                    {renderCta(false)}
                </div>
            )}
        </>
    );
};
