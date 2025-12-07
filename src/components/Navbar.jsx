import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The Method', href: '#process' },
  { label: 'Founder', href: '#founder' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-xl border-gray-200/50 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-4 md:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 z-50 relative group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            <img
              src="/logos/logo-horizontal.png"
              alt="Mowka Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight font-serif text-mowka-navy">Mowka</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-medium text-gray-600 hover:text-mowka-navy transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-mowka-teal after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="relative px-6 py-2.5 bg-mowka-navy text-white text-sm font-medium rounded-full overflow-hidden group shadow-lg shadow-mowka-navy/20 hover:shadow-mowka-navy/40 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10">Partner with Us</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 relative text-mowka-navy p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Moved out of Nav to avoid backdrop-filter clipping */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-start items-center pt-32 space-y-8 transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-3xl font-serif text-mowka-navy hover:text-mowka-teal transition-colors"
            onClick={(e) => handleScrollTo(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="px-10 py-4 bg-mowka-navy text-white text-xl font-medium rounded-full shadow-xl"
          onClick={(e) => handleScrollTo(e, '#contact')}
        >
          Partner with Us
        </a>
      </div>
    </>
  );
};
