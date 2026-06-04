"use client";

import Image from 'next/image';
import { Check } from 'lucide-react';
import { CalButton } from '../ui/CalButton';
import { HOME_PAGE } from '../../constants/content';

export const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <div className="flex flex-col items-center text-center max-w-7xl mx-auto w-full">

                    <div>
                        <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-5 animate-fade-in-up">
                            <span className="h-px w-6 md:w-10 bg-mowka-teal-vibrant/50" />
                            <span className="type-label">{HOME_PAGE.hero.kicker}</span>
                            <span className="h-px w-6 md:w-10 bg-mowka-teal-vibrant/50" />
                        </div>

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

                    <div className="my-16">
                            <CalButton variant="primary" icon="arrow" source="home_hero">
                                {HOME_PAGE.hero.cta}
                            </CalButton>
                        </div>
                    <div className="grid grid-cols-3 gap-x-3 sm:gap-x-8 md:gap-x-14 lg:gap-x-20 w-full max-w-4xl mx-auto">
                            {HOME_PAGE.hero.proofStrip.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:-translate-y-1.5">
                                    {item.logo && (
                                        <div className="w-full max-w-[80px] sm:max-w-[104px] md:max-w-[120px] h-7 sm:h-9 md:h-10 flex items-center justify-center mb-2">
                                            <Image
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                width={120}
                                                height={40}
                                                className="max-w-full max-h-full object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    )}
                                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-mowka-text-secondary leading-tight">
                                        {item.role}
                                    </span>
                                    <span className="type-badge mt-2.5">
                                        <Check className="w-3.5 h-3.5 text-mowka-text-secondary shrink-0 mr-1" strokeWidth={3} />
                                        <span>{item.outcome}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    );
};
