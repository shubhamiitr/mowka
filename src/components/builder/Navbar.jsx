"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from '../Logo';

export const Navbar = () => {
    const handleContinue = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-mowka-bg-secondary/90 backdrop-blur-md py-2 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center">
                <div className="justify-self-start">
                    <Logo />
                </div>

                <div className="hidden md:flex items-center space-x-12 justify-self-center">
                    <Link
                        href="/"
                        className="text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
                    >
                        For Founders
                    </Link>
                </div>

                <div className="justify-self-end">
                    <a
                        href="#top"
                        onClick={handleContinue}
                        className="text-sm font-medium text-white bg-mowka-action-primary hover:bg-mowka-action-primary-hover px-5 py-2 rounded-md transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5"
                    >
                        Continue
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </nav>
    );
};
