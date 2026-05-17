"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Logo = ({ onClick }) => {
    const pathname = usePathname();

    return (
        <Link
            href="/"
            className="flex items-center gap-3 z-50 relative group"
            onClick={(e) => {
                if (pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                onClick?.(e);
            }}
        >
            <Image
                src="/logo-transparent-192x192.png"
                alt="Mowka Logo"
                width={40}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
                priority
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight font-serif text-mowka-text-primary">Mowka</span>
        </Link>
    );
};
