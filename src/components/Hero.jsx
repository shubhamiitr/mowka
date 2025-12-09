import { useRef } from 'react';
import { Reveal } from './Reveal';
import { MotionLogo } from './MotionLogo';
import { SITE_CONTENT } from '../constants/content';

export const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-[85vh] flex flex-col justify-center items-center bg-mowka-bg-primary overflow-hidden pt-28 pb-10 md:pt-28 md:pb-16"
    >
      {/* Cinematic Aurora Background - Removed for color consistency */}

      < div className="max-w-7xl w-full px-4 md:px-6 relative z-10 flex flex-col justify-center h-full" >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">

          <div className="mb-4 md:mb-8">
            <MotionLogo />
          </div>

          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-medium tracking-tighter md:tracking-tight text-mowka-text-primary mt-6 md:mt-12 mb-4 md:mb-6 leading-[1.05] md:leading-[1.05] font-serif">
              {SITE_CONTENT.heroHeadline.start}<br />
              <span className="text-transparent italic bg-clip-text bg-gradient-to-r from-mowka-action-primary via-mowka-teal-vibrant to-mowka-action-primary animate-shine bg-[length:200%_auto] pr-2">
                {SITE_CONTENT.heroHeadline.highlight}
              </span>
            </h1>
            <p className="text-sm md:text-xl font-light text-mowka-text-secondary max-w-2xl mx-auto mt-4 px-4 leading-relaxed opacity-90">
              {SITE_CONTENT.description}
            </p>
          </Reveal>


          <Reveal delay={0.7}>
            <div className="flex gap-12 md:gap-24 w-full justify-center items-center mt-6 md:mt-10 opacity-80">
              <div className="flex flex-col items-center gap-1 group cursor-default">
                <span className="text-xl md:text-3xl font-serif text-mowka-text-primary tracking-tight">10:1</span>
                <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-widest text-mowka-text-quaternary">Profile-to-Offer Ratio</span>
              </div>

              <div className="flex flex-col items-center gap-1 group cursor-default">
                <span className="text-xl md:text-3xl font-serif text-mowka-text-primary tracking-tight">90%</span>
                <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-widest text-mowka-text-quaternary">Offer Acceptance Rate</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div >
    </section >
  );
};
