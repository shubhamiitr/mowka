"use client";

import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { Reveal } from './Reveal';
import { HOME_PAGE, FOUNDER } from '../constants/content';

export const WhyMowka = () => {
    return (
        <section id="trust" className="layout-section">
            <div className="layout-container">

                <Reveal>
                    <div className="layout-header">
                        <span className="type-label mb-2 md:mb-5 block">{HOME_PAGE.trust.label}</span>
                        <h2 className="type-h2 text-balance">
                            {HOME_PAGE.trust.headline}
                        </h2>
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
                        <div className="relative w-32 h-36 sm:w-36 sm:h-40 md:w-44 md:h-52 rounded-2xl overflow-hidden shadow-lg ring-1 ring-mowka-border-light mb-5 md:mb-6">
                            <Image
                                src={FOUNDER.image}
                                alt={FOUNDER.name}
                                width={176}
                                height={208}
                                className="object-cover w-full h-full"
                                sizes="200px"
                                priority
                                unoptimized
                            />
                        </div>
                        <h3 className="type-h3 mb-1 md:mb-1.5">{FOUNDER.name}</h3>
                        <p className="text-sm md:text-base text-mowka-text-tertiary font-light mb-3">
                            {FOUNDER.role}
                        </p>
                        <a
                            href={FOUNDER.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs md:text-sm text-mowka-text-tertiary hover:text-[#0A66C2] transition-colors mb-8 md:mb-10"
                        >
                            <FaLinkedin className="w-3.5 h-3.5" />
                            <span>Connect on LinkedIn</span>
                        </a>
                        <blockquote className="max-w-xl mx-auto">
                            <p className="font-serif italic text-base md:text-lg leading-relaxed text-mowka-text-secondary">
                                {HOME_PAGE.trust.body}
                            </p>
                        </blockquote>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
