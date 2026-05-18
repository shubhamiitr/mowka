"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Reveal } from '../Reveal';
import { MotionLogo } from '../MotionLogo';
import { HOME_PAGE } from '../../constants/content';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    const containerRef = useRef(null);

    const handleCTA = (e) => {
        e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="hero-section"
        >
            <div className="hero-container">
                <div className="flex flex-col items-center text-center max-w-7xl mx-auto w-full">

                    <div className="mb-4 md:mb-6">
                        <MotionLogo className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56" />
                    </div>

                    <div>
                        <h1 className="hero-headline">
                            {HOME_PAGE.hero.headline.start} <br />
                            <span className="headline-accent">
                                {HOME_PAGE.hero.headline.highlight}
                            </span>
                        </h1>
                        <p className="hero-subhead mx-auto opacity-90 animate-fade-in-up">
                            {HOME_PAGE.hero.subhead}
                        </p>
                    </div>

                    <Reveal delay={0.4}>
                        <a
                            href="#contact"
                            onClick={handleCTA}
                            className="mt-8 md:mt-10 btn-primary"
                        >
                            {HOME_PAGE.hero.cta}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Reveal>

                    <Reveal delay={0.55}>
                        <div className="grid grid-cols-3 gap-x-2 sm:gap-x-6 md:gap-x-12 lg:gap-x-16 w-full max-w-4xl mx-auto mt-8 md:mt-10">
                            {HOME_PAGE.hero.proofStrip.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:-translate-y-1.5">
                                    {item.logo && (
                                        <div className="w-full max-w-[72px] sm:max-w-[96px] md:max-w-[112px] h-6 sm:h-8 md:h-10 flex items-center justify-center">
                                            <Image
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                width={112}
                                                height={40}
                                                className="max-w-full max-h-full object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    )}
                                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-mowka-text-secondary leading-tight">
                                        {item.role}
                                    </span>
                                    <span className="type-badge mt-1.5">
                                        {item.outcome}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
