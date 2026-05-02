"use client";

import Image from 'next/image';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Reveal } from './Reveal';
import { HOME_PAGE } from '../constants/content';

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
                                src="/founder.jpg"
                                alt="Shubham Kansal"
                                width={176}
                                height={208}
                                className="object-cover w-full h-full"
                                sizes="200px"
                                priority
                                unoptimized
                            />
                        </div>
                        <h3 className="type-h3 mb-1 md:mb-1.5">Shubham Kansal</h3>
                        <p className="text-sm md:text-base text-mowka-text-tertiary font-light mb-4 md:mb-5">
                            Founder, Mowka
                        </p>
                        <div className="flex gap-3 justify-center mb-8 md:mb-10">
                            <a
                                href="mailto:shubham@mowka.in"
                                aria-label="Email"
                                className="type-social-btn group hover:text-mowka-action-primary hover:border-mowka-action-primary"
                            >
                                <MdEmail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kansalshubham/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="type-social-btn group hover:text-[#0A66C2] hover:border-[#0A66C2]"
                            >
                                <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/919468658967"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="type-social-btn group hover:text-[#25D366] hover:border-[#25D366]"
                            >
                                <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
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
