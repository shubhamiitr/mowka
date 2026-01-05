import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full py-5 md:py-6 bg-mowka-bg-secondary/90 backdrop-blur-md border-t border-mowka-border-light/50 font-sans relative">
      <div className="w-full px-4 md:px-12 flex flex-col md:flex-row justify-between gap-y-3 md:gap-4 items-center">

        {/* Left: Copyright + Flag */}
        <div className="order-1 md:order-1 w-full md:w-auto text-center md:text-left">
          <p className="text-xs font-medium text-mowka-text-secondary tracking-wide opacity-80 leading-relaxed md:leading-normal">
            <Image
              src="https://flagcdn.com/in.svg"
              alt="India"
              width={14}
              height={10}
              className="inline-block w-3.5 h-auto rounded-[1px] mr-2 -mt-0.5 align-middle"
              title="Proudly built in India"
              unoptimized
            />
            <span className="align-middle">Copyright © 2026 <span className="whitespace-nowrap">Mowka Enterprises Private Limited.</span> All rights reserved.</span>
          </p>
        </div>

        {/* Center: Legal Links */}
        <div className="flex justify-center items-center gap-8 order-2 md:order-2 text-xs font-medium text-mowka-text-secondary tracking-wide w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href="/privacy" className="hover:text-mowka-text-primary transition-all hover:opacity-100 opacity-80">Privacy</Link>
          <Link href="/terms" className="hover:text-mowka-text-primary transition-all hover:opacity-100 opacity-80">Terms</Link>
        </div>

        {/* Right: Socials */}
        <div className="flex justify-center md:justify-end items-center gap-6 text-xs font-medium text-mowka-text-secondary tracking-wide order-3 md:order-3 w-full md:w-auto">
          <a href="mailto:shubham@mowka.in" className="transition-all hover:scale-110 opacity-80 hover:opacity-100" aria-label="Email">
            <MdEmail className="w-4 h-4 text-mowka-text-secondary" />
          </a>
          <a href="https://www.linkedin.com/company/mowka/" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 opacity-80 hover:opacity-100" aria-label="LinkedIn">
            <FaLinkedin className="w-4 h-4 text-mowka-text-secondary" />
          </a>
          <a href="https://www.facebook.com/mowka.in" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 opacity-80 hover:opacity-100" aria-label="Facebook">
            <FaFacebook className="w-4 h-4 text-mowka-text-secondary" />
          </a>
          <a href="https://www.instagram.com/mowka.in" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 opacity-80 hover:opacity-100" aria-label="Instagram">
            <FaInstagram className="w-4 h-4 text-mowka-text-secondary" />
          </a>
          <a href="https://wa.me/919468658967" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-110 opacity-80 hover:opacity-100" aria-label="WhatsApp">
            <FaWhatsapp className="w-4 h-4 text-mowka-text-secondary" />
          </a>
        </div>

      </div>
    </footer>
  );
};
