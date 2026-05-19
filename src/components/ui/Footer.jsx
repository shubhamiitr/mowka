import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { COMPANY_INFO } from '../../constants/content';

export const Footer = () => {
  const company = COMPANY_INFO;

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
            <span className="align-middle">Copyright © 2026 <span className="whitespace-nowrap">{company.legalName}.</span> All rights reserved.</span>
          </p>
        </div>

        {/* Center: Legal Links */}
        <div className="flex justify-center items-center gap-8 order-2 md:order-2 text-xs font-medium text-mowka-text-secondary tracking-wide w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href="/privacy" className="hover:text-mowka-text-primary transition-all hover:opacity-100 opacity-80">Privacy</Link>
          <Link href="/terms" className="hover:text-mowka-text-primary transition-all hover:opacity-100 opacity-80">Terms</Link>
        </div>

        {/* Right: Socials */}
        <div className="flex justify-center md:justify-end items-center gap-6 text-xs font-medium tracking-wide order-3 md:order-3 w-full md:w-auto">
          <a href={`mailto:${company.email}`} className="transition-transform duration-200 hover:-translate-y-1 text-mowka-action-primary" aria-label="Email">
            <MdEmail className="w-4 h-4" />
          </a>
          <a href={company.socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:-translate-y-1 text-[#0A66C2]" aria-label="LinkedIn">
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a href={company.socials.facebook} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:-translate-y-1 text-[#1877F2]" aria-label="Facebook">
            <FaFacebook className="w-4 h-4" />
          </a>
          <a href={company.socials.instagram} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:-translate-y-1 text-[#E4405F]" aria-label="Instagram">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:-translate-y-1 text-[#25D366]" aria-label="WhatsApp">
            <FaWhatsapp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
