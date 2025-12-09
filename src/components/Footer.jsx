import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full py-3 bg-mowka-bg-secondary border-t border-mowka-border-light/50 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-4 items-center">

        {/* Left: Copyright + Flag */}
        <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-start gap-3 order-1 text-xs font-medium text-mowka-text-secondary tracking-wide">
          <div className="flex items-center gap-2">
            <img src="https://flagcdn.com/in.svg" alt="India" className="w-4 h-auto rounded-sm opacity-80 hover:opacity-100 transition-opacity cursor-help" title="Proudly built in India" />
            <span className="opacity-0 w-0 overflow-hidden group-hover:w-auto group-hover:opacity-100 transition-all duration-300">India</span>
          </div>
          <span>Copyright © {new Date().getFullYear()} Mowka. All rights reserved.</span>
        </div>

        {/* Center: Legal Links */}
        <div className="col-span-1 flex justify-start md:justify-center items-center gap-6 md:gap-8 order-2 text-xs font-medium text-mowka-text-secondary tracking-wide">
          <Link to="/privacy" className="hover:text-mowka-text-primary transition-all hover:-translate-y-0.5">Privacy</Link>
          <Link to="/terms" className="hover:text-mowka-text-primary transition-all hover:-translate-y-0.5">Terms</Link>
        </div>

        {/* Right: Socials */}
        <div className="col-span-1 flex justify-end items-center gap-6 text-xs font-medium text-mowka-text-secondary tracking-wide order-3">
          <a href="mailto:shubham@mowka.in" className="transition-all hover:scale-110 hover:-translate-y-0.5 opacity-60 hover:opacity-100" aria-label="Email">
            <MdEmail className="w-4 h-4 text-mowka-text-secondary" />
          </a>
          <a href="https://www.linkedin.com/company/mowka/" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 hover:-translate-y-0.5 opacity-60 hover:opacity-100" aria-label="LinkedIn">
            <FaLinkedin className="w-4 h-4 text-mowka-text-secondary" />
          </a>
        </div>

      </div>
    </footer>
  );
};
