"use client";

import { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom'; // REMOVED
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Our Approach', href: '#process' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact', mobileOnly: true }, // Added for unified handling if needed
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Replaces useLocation
  const router = useRouter();     // Replaces useNavigate

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');

    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Increased timeout slightly for Next.js transition
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-mowka-bg-secondary/90 backdrop-blur-md py-2 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 z-50 relative group"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setMobileMenuOpen(false);
            }}
          >
            <Image
              src="/logos/logo-horizontal.png"
              alt="Mowka Logo"
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight font-serif text-mowka-text-primary">Mowka</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="text-sm font-medium text-mowka-text-secondary hover:text-mowka-text-primary transition-all duration-300 hover:-translate-y-0.5 tracking-wide cursor-pointer"
            >
              Partner with Us
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

      {/* Mobile Menu - Moved out of Nav to avoid backdrop-filter clipping */}
      <div
        className={`fixed inset-0 bg-mowka-bg-primary z-40 flex flex-col justify-start items-center pt-32 space-y-8 transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-3xl font-serif text-mowka-text-primary hover:text-mowka-link transition-colors cursor-pointer"
            onClick={(e) => handleScrollTo(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="px-10 py-4 bg-mowka-action-primary text-white text-xl font-medium rounded-full shadow-xl cursor-pointer"
          onClick={(e) => handleScrollTo(e, '#contact')}
        >
          Partner with Us
        </a>
      </div>
    </>
  );
};
