import React from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { Reveal } from './Reveal';

export const Founder = () => {


    return (
        <section id="founder" className="bg-mowka-bg-primary flex flex-col relative overflow-hidden py-12 md:py-24 scroll-mt-20">
            {/* Soft Background Glow - Removed for color consistency */}

            {/* Main Content */}
            <div className="w-full flex flex-col relative z-10">
                <div className="w-full flex flex-col justify-center px-4 md:px-12">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid md:grid-cols-12 gap-6 lg:gap-20 items-center max-w-6xl mx-auto">

                            {/* IMAGE */}
                            <div className="hidden md:block md:col-span-4 order-1 shrink-0 mb-4 md:mb-0">
                                <Reveal delay={0.1}>
                                    <div className="relative aspect-[3/4] rounded-[2px] overflow-hidden shadow-2xl bg-gray-200 group w-full max-w-sm border-4 border-white ring-1 ring-gray-100">
                                        <img
                                            src="/profile.jpeg"
                                            alt="Shubham Kansal"
                                            className="object-cover w-full h-full transform transition-transform duration-[1.5s] ease-in-out group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                                        />
                                        {/* Gradient overlay removed for cleaner look */}
                                    </div>
                                </Reveal>
                            </div>

                            {/* TEXT */}
                            <div className="md:col-span-8 order-2 text-left">
                                {/* Mobile: Centered Header | Desktop: Stacked */}
                                <div className="flex flex-col md:block items-center text-center md:text-left gap-4 md:gap-0 mb-2 md:mb-0">

                                    {/* Mobile Avatar (Centered) */}
                                    <div className="md:hidden shrink-0 relative w-24 h-28 rounded-2xl overflow-hidden shadow-xl border-2 border-white ring-1 ring-gray-100 transform -rotate-1 mx-auto">
                                        <img src="/profile.jpeg" alt="Shubham Kansal" className="object-cover w-full h-full" />
                                    </div>

                                    {/* Headline Group */}
                                    <div className="flex-1 mb-4 md:mb-10">
                                        <Reveal delay={0.2}>
                                            <span className="type-label mb-2 md:mb-5 block">The Practitioner's Edge</span>
                                        </Reveal>
                                        <Reveal delay={0.3}>
                                            <h2 className="type-h2">
                                                From Prime Video to Adobe Acquisition.
                                            </h2>
                                        </Reveal>
                                    </div>
                                </div>

                                <Reveal delay={0.4}>
                                    <div className="space-y-4 md:space-y-4 type-body mb-10 md:mb-14 md:mt-6 text-left hyphens-auto max-w-2xl">
                                        <p>
                                            At <a href="https://www.primevideo.com/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1 font-medium hover:text-mowka-link-hover transition-colors">Amazon Prime Video<ExternalLink className="w-3 h-3 inline opacity-70" /></a>, I built the patent-backed copyright system for the movie catalog and the engine that selects the cover image shown for each title. At Rephrase.ai, I led the infrastructure for the <a href="https://www.youtube.com/watch?v=R3FnhpelBR0" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1 font-medium hover:text-mowka-link-hover transition-colors">SRK x Cadbury campaign<ExternalLink className="w-3 h-3 inline opacity-70" /></a> and the systems that later became part of Adobe's first AI acquisition in India. I've also worked on product and engineering teams at <a href="https://www.apollo.io/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1 font-medium hover:text-mowka-link-hover transition-colors">Apollo.io<ExternalLink className="w-3 h-3 inline opacity-70" /></a>, <a href="https://www.nirvanatech.com/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1 font-medium hover:text-mowka-link-hover transition-colors">Nirvana Insurance<ExternalLink className="w-3 h-3 inline opacity-70" /></a>, and <a href="https://theproducthighway.com/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1 font-medium hover:text-mowka-link-hover transition-colors">The Product Highway<ExternalLink className="w-3 h-3 inline opacity-70" /></a>.
                                        </p>
                                    </div>
                                </Reveal>

                                {/* Metrics Grid */}
                                <Reveal delay={0.5}>
                                    <div className="grid grid-cols-3 gap-2 md:gap-8 border-t border-mowka-border-light pt-6 md:pt-8 mb-8 md:mb-8">
                                        <div>
                                            <span className="block text-xl md:text-2xl font-serif text-mowka-link leading-none mb-2">2000+</span>
                                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-mowka-text-quaternary font-semibold block">Interviews</span>
                                        </div>
                                        <a
                                            href="https://economictimes.indiatimes.com/tech/startups/adobe-acquires-bengaluru-based-genai-startup-rephrase-ai/articleshow/105393666.cms"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block cursor-pointer"
                                        >
                                            <span className="block text-base md:text-3xl font-serif text-mowka-link leading-none mb-1.5">Adobe</span>
                                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-mowka-text-quaternary font-semibold flex items-center gap-1">
                                                Successful Exit
                                                <ExternalLink className="w-2 h-2" />
                                            </span>
                                        </a>
                                        <a
                                            href="https://patents.google.com/patent/US11645249B1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block cursor-pointer"
                                        >
                                            <span className="block text-base md:text-3xl font-serif text-mowka-link leading-none mb-1.5">US Patent</span>
                                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-mowka-text-quaternary font-semibold flex items-center gap-1">
                                                11645249B1
                                                <ExternalLink className="w-2 h-2" />
                                            </span>
                                        </a>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.6}>
                                    <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
                                        <a href="https://www.linkedin.com/in/kansalshubham/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-medium hover:bg-[#0077B5] transition-colors text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                                            <FaLinkedin className="w-4 h-4" />
                                            <span>View on LinkedIn</span>
                                        </a>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
