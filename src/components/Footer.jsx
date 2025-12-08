import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className="w-full py-2 bg-mowka-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="flex items-center gap-2 mb-1">
            <img
              src="/logos/logo-horizontal.png"
              alt="Mowka Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-mowka-text-primary font-serif">Mowka</span>
          </a>
          <p className="text-xs text-mowka-text-tertiary">
            © {new Date().getFullYear()} Mowka Talent. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="mailto:shubham@mowka.in" className="transition-all hover:scale-105" aria-label="Email Mowka">
            <MdEmail className="w-6 h-6 text-[#EA4335]" />
          </a>
          <a href="https://www.linkedin.com/company/mowka/" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-105" aria-label="Mowka on LinkedIn">
            <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
