import React from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export const Founder = () => {


    return (
        <section id="founder" className="bg-mowka-bg-primary h-[100dvh] flex flex-col border-t border-mowka-border-light relative overflow-hidden snap-start">
            {/* Soft Background Glow - Removed for color consistency */}

            {/* Main Scrollable Content */}
            <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col relative z-10 scrollable-content">
                <div className="w-full min-h-full flex flex-col justify-start md:justify-center pt-20 px-6 pb-2 md:py-12">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid md:grid-cols-12 gap-6 lg:gap-20 items-center max-w-6xl mx-auto">

                            {/* IMAGE */}
                            {/* IMAGE - Desktop Only */}
                            <div className="hidden md:block md:col-span-4 order-1 shrink-0 mb-4 md:mb-0">
                                <div className="relative aspect-[3/4] rounded-[2px] overflow-hidden shadow-2xl bg-gray-200 group w-full max-w-sm border-4 border-white ring-1 ring-gray-100">
                                    <img
                                        src="/profile.jpeg"
                                        alt="Shubham Kansal"
                                        className="object-cover w-full h-full transform transition-transform duration-[1.5s] ease-in-out group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                                    />
                                    {/* Gradient overlay removed for cleaner look */}
                                </div>
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
                                        <span className="text-mowka-label font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-2 md:mb-5 block">The Practitioner's Edge</span>
                                        <h2 className="text-xl md:text-4xl lg:text-5xl font-serif font-medium text-mowka-text-primary leading-tight">
                                            From Prime Video to Adobe Acquisition.
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-4 text-mowka-text-secondary font-light text-xs md:text-xl leading-relaxed mb-10 md:mb-14 md:mt-6 text-left hyphens-auto">
                                    <p>
                                        At <a href="https://www.primevideo.com/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1">Amazon Prime Video<ExternalLink className="w-3 h-3 inline" /></a>, I built the patent-backed copyright system for the movie catalog and the engine that selects the cover image shown for each title. At Rephrase.ai, I led the infrastructure for the <a href="https://www.youtube.com/watch?v=R3FnhpelBR0" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1">SRK x Cadbury campaign<ExternalLink className="w-3 h-3 inline" /></a> and the systems that later became part of Adobe's first AI acquisition in India. I've also worked on product and engineering teams at <a href="https://www.apollo.io/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1">Apollo.io<ExternalLink className="w-3 h-3 inline" /></a>, <a href="https://www.nirvanatech.com/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1">Nirvana Insurance<ExternalLink className="w-3 h-3 inline" /></a>, and <a href="https://theproducthighway.com/" target="_blank" rel="noopener noreferrer" className="text-mowka-link inline-flex items-center gap-1">The Product Highway<ExternalLink className="w-3 h-3 inline" /></a>.
                                    </p>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-3 gap-2 md:gap-6 border-t border-mowka-border-light pt-6 md:pt-10 mb-8 md:mb-10">
                                    <div>
                                        <span className="block text-base md:text-3xl font-serif text-mowka-link leading-none mb-1.5">2000+</span>
                                        <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-mowka-text-quaternary font-semibold block">Interviews</span>
                                    </div>
                                    <a
                                        href="https://economictimes.indiatimes.com/tech/startups/adobe-acquires-bengaluru-based-genai-startup-rephrase-ai/articleshow/105393666.cms"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block cursor-pointer"
                                    >
                                        <span className="block text-base md:text-3xl font-serif text-mowka-link leading-none mb-1.5">Adobe</span>
                                        <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-mowka-text-quaternary font-semibold flex items-center gap-1">
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
                                        <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-mowka-text-quaternary font-semibold flex items-center gap-1">
                                            11645249B1
                                            <ExternalLink className="w-2 h-2" />
                                        </span>
                                    </a>
                                </div>

                                <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
                                    <a href="https://www.linkedin.com/in/kansalshubham/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-medium hover:bg-[#0077B5] transition-colors text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                                        <FaLinkedin className="w-4 h-4" />
                                        <span>Connect on LinkedIn</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
