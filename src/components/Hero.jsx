import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Target, Users, Bot, Cpu, Terminal } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 60;
      const y = (e.clientY - innerHeight / 2) / 60;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-[85vh] flex flex-col justify-center items-center bg-mowka-bg-primary overflow-hidden pt-32 pb-2 md:pt-0"
    >
      {/* Cinematic Aurora Background - Removed for color consistency */}

      <div className="max-w-7xl w-full px-4 md:px-6 relative z-10 flex flex-col justify-center h-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-medium tracking-tighter md:tracking-tight text-mowka-text-primary mt-3 md:mt-8 mb-4 md:mb-6 leading-[1.05] md:leading-[1.05] font-serif animate-fade-in-up delay-75">
            Connecting The Right Talent<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-mowka-action-primary via-mowka-teal-vibrant to-mowka-action-primary bg-300% animate-shimmer">
              To The Right Team.
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-6 md:mb-10 animate-fade-in-up delay-150 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <p className="text-xs md:text-xl text-mowka-text-secondary font-light leading-relaxed px-4">
              The <strong className="text-mowka-text-primary font-medium">Force Multiplier</strong> for your talent team.
              We scout engineers who fit your unique environment, helping you find the right talent effortlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mb-10 md:mb-16 w-full sm:w-auto justify-center animate-fade-in-up delay-200 opacity-0 px-8 md:px-0" style={{ animationFillMode: 'forwards' }}>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-mowka-action-primary text-white text-sm md:text-base rounded-full font-medium overflow-hidden transition-all shadow-xl shadow-mowka-action-primary/10 hover:shadow-mowka-action-primary/30 hover:-translate-y-0.5 z-20 cursor-pointer w-full sm:w-auto"
            >
              <span className="relative flex items-center gap-2 md:gap-3 z-10 tracking-wide">
                Partner with Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#philosophy"
              onClick={(e) => handleScrollTo(e, 'philosophy')}
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-mowka-bg-secondary backdrop-blur-sm text-mowka-text-primary border border-mowka-border-light text-sm md:text-base rounded-full font-medium hover:bg-mowka-bg-tertiary hover:border-mowka-border-medium transition-all z-20 tracking-wide cursor-pointer w-full sm:w-auto"
            >
              Our Approach
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-24 w-full max-w-xl md:max-w-3xl border-t border-mowka-border-light pt-4 md:pt-10 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center gap-1 md:gap-2 group cursor-default">
              <Target className="w-4 h-4 md:w-5 md:h-5 text-mowka-link mb-1 md:hidden" />
              <span className="text-2xl md:text-4xl font-serif text-mowka-text-primary tracking-tight">10:1</span>
              <span className="text-[8px] md:text-xs font-semibold uppercase tracking-widest text-mowka-text-quaternary">Profile-to-Offer Ratio</span>
            </div>

            <div className="flex flex-col items-center gap-1 md:gap-2 md:border-l md:border-mowka-border-light group cursor-default">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-mowka-link mb-1 md:hidden" />
              <span className="text-2xl md:text-4xl font-serif text-mowka-text-primary tracking-tight">90%</span>
              <span className="text-[8px] md:text-xs font-semibold uppercase tracking-widest text-mowka-text-quaternary">Offer Acceptance Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
