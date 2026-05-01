"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Reveal } from './Reveal';
import { MotionLogo } from './MotionLogo';
import { HOME_PAGE } from '../constants/content';
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
            className="relative w-full h-auto md:min-h-[90vh] flex flex-col justify-start md:justify-center items-center bg-mowka-bg-primary overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16"
        >
            <div className="max-w-6xl w-full px-4 md:px-8 relative z-10 flex flex-col justify-center h-full">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">

                    <div className="mb-4 md:mb-6">
                        <MotionLogo className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56" />
                    </div>

                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-2 md:mt-4 mb-4 md:mb-6 leading-[1.1] tracking-tight font-serif font-medium text-mowka-text-primary max-w-max mx-auto lg:whitespace-nowrap selection:bg-mowka-action-primary selection:text-white">
                            {HOME_PAGE.hero.headline.start} <br />
                            <span className="text-transparent italic bg-clip-text bg-gradient-to-r from-mowka-action-primary via-mowka-teal-vibrant to-mowka-action-primary animate-shine bg-[length:200%_auto] [&::selection]:text-white [&::selection]:bg-mowka-action-primary pr-4">
                                {HOME_PAGE.hero.headline.highlight}
                            </span>
                        </h1>
                        <p className="type-body-lead max-w-3xl mx-auto mt-6 md:mt-8 opacity-90 animate-fade-in-up">
                            {HOME_PAGE.hero.subhead}
                        </p>
                    </div>

                    <Reveal delay={0.4}>
                        <a
                            href="#contact"
                            onClick={handleCTA}
                            className="mt-8 md:mt-10 inline-flex items-center gap-3 px-8 py-4 bg-mowka-action-primary text-white font-medium text-base rounded-md hover:bg-mowka-action-primary-hover transition-all group cursor-pointer"
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
