import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
           <a href="#" className="flex items-center gap-2 mb-1">
              <img 
                src="/logos/logo-horizontal.png" 
                alt="Mowka Logo" 
                className="h-8 w-auto object-contain" 
              />
              <span className="text-xl font-bold tracking-tight text-mowka-navy font-serif">Mowka</span>
            </a>
            <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Mowka Talent. All rights reserved.
            </p>
        </div>
        <div className="flex gap-6">
            <a href="mailto:shubham@mowka.in" className="text-gray-400 hover:text-mowka-navy transition-colors" aria-label="Email Mowka">
                <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/mowka/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mowka-navy transition-colors" aria-label="Mowka on LinkedIn">
                <Linkedin className="w-5 h-5" />
            </a>
        </div>
      </div>
    </footer>
  );
};
