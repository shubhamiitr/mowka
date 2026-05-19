"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { BUILDER_PAGE } from '../../constants/content';

export const Navbar = () => {
    const handleContinue = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-mowka-bg-secondary/90 backdrop-blur-md py-2 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Logo />

                <div className="hidden md:flex items-center space-x-12">
                    <Link
                        href="/"
                        className="text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide inline-flex items-center gap-1.5"
                    >
                        For Companies
                    </Link>

                    <a
                        href="#top"
                        onClick={handleContinue}
                        className="text-sm font-medium text-white bg-mowka-action-primary hover:bg-mowka-action-primary-hover px-5 py-2 rounded-md transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5 group"
                    >
                        {BUILDER_PAGE.hero.cta}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </nav>
    );
};
