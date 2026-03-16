"use client";

import { useRef } from 'react';
import { Reveal } from './Reveal';
import { MotionLogo } from './MotionLogo';
import { SITE_CONTENT } from '../constants/content';
import Image from 'next/image';

export const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-auto md:min-h-[85vh] flex flex-col justify-start md:justify-center items-center bg-mowka-bg-primary overflow-hidden pt-28 pb-10 md:pt-28 md:pb-16"
    >
      {/* Cinematic Aurora Background - Removed for color consistency */}

      < div className="max-w-7xl w-full px-4 md:px-6 relative z-10 flex flex-col justify-center h-full" >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">

          <div className="mb-2 md:mb-6">
            <MotionLogo />
          </div>

          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-medium tracking-tighter md:tracking-tight text-mowka-text-primary mt-4 md:mt-8 mb-4 md:mb-6 leading-[1.05] md:leading-[1.05] font-serif">
              {SITE_CONTENT.heroHeadline.start}<br />
              <span className="text-transparent italic bg-clip-text bg-gradient-to-r from-mowka-action-primary via-mowka-teal-vibrant to-mowka-action-primary animate-shine bg-[length:200%_auto] pr-2">
                {SITE_CONTENT.heroHeadline.highlight}
              </span>
            </h1>
            <p className="text-sm md:text-xl font-light text-mowka-text-secondary max-w-3xl mx-auto mt-4 px-4 leading-relaxed opacity-90 animate-fade-in-up">
              {SITE_CONTENT.description}
            </p>
          </div>

          <Reveal delay={0.7}>
            <div className="flex gap-12 md:gap-24 w-full justify-center items-center mt-2 md:mt-4 opacity-80">
              <div className="flex flex-col items-center gap-1 group cursor-default">
                <span className="text-xl md:text-3xl font-serif text-mowka-text-primary tracking-tight">5:1</span>
                <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-widest text-mowka-text-quaternary">Applicant-to-Hire Ratio</span>
              </div>

              <div className="flex flex-col items-center gap-1 group cursor-default">
                <span className="text-xl md:text-3xl font-serif text-mowka-text-primary tracking-tight">90%</span>
                <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-widest text-mowka-text-quaternary">Offer Acceptance Rate</span>
              </div>
            </div>
          </Reveal>

          <div className="mt-4 md:mt-6 flex justify-center animate-fade-in-up">
            <a href="https://www.producthunt.com/products/mowka?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-mowka" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1056618&theme=light&t=1767191983103"
                alt="Mowka - Hire with Confidence | Product Hunt"
                width={220}
                height={45}
                unoptimized
              />
            </a>
          </div>
        </div>
      </div >
    </section >
  );
};
