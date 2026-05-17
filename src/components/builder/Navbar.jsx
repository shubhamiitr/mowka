"use client";

import Link from 'next/link';
import { Logo } from '../Logo';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-mowka-bg-secondary/90 backdrop-blur-md py-2 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Logo />

                <Link
                    href="/"
                    className="text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide inline-flex items-center gap-1.5"
                >
                    For Founders
                </Link>
            </div>
        </nav>
    );
};
