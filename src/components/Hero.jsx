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
      className="relative w-full h-[100dvh] flex flex-col justify-center items-center bg-white overflow-hidden snap-start"
    >
      {/* Cinematic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
            className="absolute top-[-20%] right-[-10%] w-[90vw] h-[90vw] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-[120px] mix-blend-multiply transition-transform duration-[3000ms] ease-out will-change-transform"
            style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
        />
        <div 
            className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-gradient-to-tr from-teal-50/30 to-transparent rounded-full blur-[120px] mix-blend-multiply transition-transform duration-[3000ms] ease-out will-change-transform"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
      </div>

      <div className="max-w-7xl w-full px-6 relative z-10 flex flex-col justify-center h-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">
          
          <div className="animate-fade-in-up">
            <span className="inline-block py-1.5 md:py-2 px-4 md:px-6 rounded-full bg-mowka-navy/[0.03] border border-mowka-navy/10 text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase text-mowka-navy">
              Strategic Talent Scouting
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-mowka-navy mt-6 md:mt-8 mb-6 md:mb-6 leading-[1.05] font-serif animate-fade-in-up delay-75">
            Connecting Right Talent<br/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-mowka-navy via-mowka-teal to-mowka-navy bg-300% animate-shimmer">
              To Right Opportunity.
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-10 md:mb-12 animate-fade-in-up delay-150 opacity-0" style={{ animationFillMode: 'forwards' }}>
             <p className="text-sm md:text-2xl text-gray-500 font-light leading-relaxed px-2">
               The <strong className="text-mowka-navy font-medium">Technical Extension</strong> of your talent team.
               We scout engineers who fit your unique environment, empowering you to close faster.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mb-10 md:mb-16 w-full sm:w-auto justify-center animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group relative inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 bg-mowka-navy text-white text-base rounded-full font-medium overflow-hidden transition-all shadow-xl shadow-mowka-navy/10 hover:shadow-mowka-navy/30 hover:-translate-y-0.5 z-20 cursor-pointer"
            >
              <span className="relative flex items-center gap-2 md:gap-3 z-10 tracking-wide">
                Start Scouting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#philosophy" 
              onClick={(e) => handleScrollTo(e, 'philosophy')}
              className="inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 bg-white/50 backdrop-blur-sm text-mowka-navy border border-gray-200 text-base rounded-full font-medium hover:bg-white hover:border-gray-300 transition-all z-20 tracking-wide cursor-pointer"
            >
              Our Approach
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-24 w-full max-w-xl md:max-w-3xl border-t border-gray-100 pt-6 md:pt-10 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
             <div className="flex flex-col items-center gap-1 md:gap-2 group cursor-default">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-mowka-teal mb-1 md:hidden" />
                <span className="text-2xl md:text-4xl font-serif text-mowka-navy tracking-tight">10:1</span>
                <span className="text-[8px] md:text-xs font-semibold uppercase tracking-widest text-gray-400">Profile-to-Offer Ratio</span>
             </div>
             
             <div className="flex flex-col items-center gap-1 md:gap-2 md:border-l md:border-gray-100 group cursor-default">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-mowka-teal mb-1 md:hidden" />
                <span className="text-2xl md:text-4xl font-serif text-mowka-navy tracking-tight">90%</span>
                <span className="text-[8px] md:text-xs font-semibold uppercase tracking-widest text-gray-400">Offer Acceptance Rate</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
