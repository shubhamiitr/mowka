"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND } from '../../constants/content';

export const Logo = ({ onClick }) => {
    const pathname = usePathname();

    return (
        <Link
            href="/"
            className="flex items-center gap-2.5 z-50 relative group bg-mowka-bg-secondary px-3 py-2"
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
                className="h-10 w-auto object-contain"
                priority
            />
            <div className="flex flex-col items-start justify-center">
                <span className="font-serif text-2xl font-bold leading-none text-mowka-text-primary">
                    {BRAND.name}
                </span>
                <span className={`type-label text-[10px] leading-none mt-1 uppercase teal-vibrant`}>
                    {BRAND.tagline}
                </span>
            </div>
        </Link>
    );
};
