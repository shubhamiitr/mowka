import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { BRAND, HOME_PAGE } from '../../constants/content';

const COLUMNS = [
    {
        heading: 'Company',
        links: [
            { label: 'About', href: '/#about' },
            { label: 'Our Process', href: '/#process' },
            // { label: 'Insights', href: '/insights' },
        ],
    },
    {
        heading: 'For founders',
        links: [
            { label: 'Partner with Us', href: '/#why-mowka' },
            { label: 'Schedule a call', isCal: true },
            { label: 'FAQ', href: '/#faq' },
        ],
    },
    {
        heading: 'For builders',
        links: [
            { label: 'Let\'s Talk', href: '/builder' },
        ],
    },
];

export const Footer = () => {
    const company = BRAND;

    return (
        <footer className="w-full bg-mowka-action-primary text-white font-sans border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-8">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start max-w-sm shrink-0">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="font-serif text-2xl text-white font-bold hover:opacity-90 transition-opacity">
                                {BRAND.name}
                            </Link>
                            <a
                                href={company.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex ml-1 items-center justify-center w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white hover:text-white transition-all duration-200 mt-0.5"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-3.5 h-3.5 shrink-0" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-white/80 leading-relaxed font-normal">
                            {HOME_PAGE.hero.headline.start} {HOME_PAGE.hero.headline.highlight}. <br /> {HOME_PAGE.hero.subhead}
                        </p>
                    </div>

                    {/* Links Sub-grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
                        {COLUMNS.map((col) => (
                            <div key={col.heading} className="min-w-[120px]">
                                <p className="text-[13px] font-semibold uppercase tracking-wider text-white mb-5">
                                    {col.heading}
                                </p>
                                <ul className="space-y-3.5">
                                    {col.links.map((link) => {
                                        if (link.isCal) {
                                            return (
                                                <li key={link.label}>
                                                    <button
                                                        data-cal-link={BRAND.calLink}
                                                        data-cal-namespace="30min"
                                                        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                                        className="text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200 text-left bg-transparent border-0 p-0 cursor-pointer block"
                                                    >
                                                        {link.label}
                                                    </button>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={link.label + link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-xs font-normal text-white/80 tracking-wide order-2 sm:order-1 flex items-center">
                        <Image
                            src="https://flagcdn.com/in.svg"
                            alt="India"
                            width={14}
                            height={10}
                            className="inline-block w-3.5 h-auto rounded-[1px] mr-2 align-middle"
                            title="Proudly built in India"
                            unoptimized
                        />
                        <span className="align-middle">
                            © 2026 <span className="whitespace-nowrap">{company.legalName}.</span> All rights reserved.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 order-1 sm:order-2">
                        <Link href="/privacy" className="text-xs font-medium text-white/80 hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-xs font-medium text-white/80 hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
