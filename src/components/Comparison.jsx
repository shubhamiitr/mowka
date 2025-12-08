import React from 'react';
import { X, Check } from 'lucide-react';

export const Comparison = () => {
    return (
        <section id="process" className="bg-mowka-bg-primary h-[100dvh] flex flex-col relative snap-start overflow-hidden">
            {/* Main Scrollable Content */}
            <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col relative z-10 scrollable-content">
                {/* Mobile: justify-center with reduced padding, Desktop: justify-center */}
                <div className="w-full min-h-full flex flex-col justify-center pt-20 pb-2 md:py-12 px-4 md:px-12">
                    <div className="max-w-7xl mx-auto w-full">

                        <div className="text-center mb-4 md:mb-16 shrink-0">
                            <span className="text-mowka-label font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">The Strategic Shift</span>
                            <h2 className="text-3xl md:text-5xl font-medium font-serif mb-3 md:mb-4 text-mowka-text-primary">Volume vs. Signal</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-6xl mx-auto w-full">

                            {/* Standard Sourcing Agency */}
                            <div className="bg-white p-3 md:p-12 border border-mowka-border-light rounded-2xl md:rounded-3xl flex flex-col justify-center hover:border-mowka-border-medium transition-colors shadow-sm hover:shadow-md">
                                <h3 className="text-xl md:text-3xl font-medium text-mowka-text-tertiary mb-1 md:mb-2 font-serif">Standard Sourcing Agency</h3>
                                <p className="text-[9px] md:text-[10px] text-mowka-text-quaternary mb-3 md:mb-8 uppercase tracking-[0.2em] font-bold">The "Transactional" Model</p>

                                <ul className="space-y-2 md:space-y-6">
                                    <li className="flex gap-2 md:gap-4 items-start opacity-60">
                                        <div className="mt-1"><X className="w-4 h-4 text-mowka-text-quaternary" /></div>
                                        <div>
                                            <strong className="block text-mowka-text-secondary font-semibold text-sm md:text-lg">Volume & Noise</strong>
                                            <p className="text-xs md:text-sm text-mowka-text-tertiary font-light leading-relaxed mt-1">Focuses on quantity, forcing hours of filtering.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-2 md:gap-4 items-start opacity-60">
                                        <div className="mt-1"><X className="w-4 h-4 text-mowka-text-quaternary" /></div>
                                        <div>
                                            <strong className="block text-mowka-text-secondary font-semibold text-sm md:text-lg">Keyword Matching</strong>
                                            <p className="text-xs md:text-sm text-mowka-text-tertiary font-light leading-relaxed mt-1">Matches "Java" to "Java" without context.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-2 md:gap-4 items-start opacity-60">
                                        <div className="mt-1"><X className="w-4 h-4 text-mowka-text-quaternary" /></div>
                                        <div>
                                            <strong className="block text-mowka-text-secondary font-semibold text-sm md:text-lg">High Flat Fees</strong>
                                            <p className="text-xs md:text-sm text-mowka-text-tertiary font-light leading-relaxed mt-1">Charges 20-30% regardless of role.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Mowka */}
                            <div className="bg-white p-3 md:p-12 border-2 border-mowka-teal-vibrant rounded-2xl md:rounded-3xl flex flex-col justify-center shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                                {/* Subtle accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-mowka-teal-vibrant/5 rounded-full -translate-y-16 translate-x-16"></div>

                                <h3 className="text-xl md:text-3xl font-medium text-mowka-text-primary mb-1 md:mb-2 font-serif relative z-10">Mowka</h3>
                                <p className="text-[9px] md:text-[10px] text-mowka-label mb-3 md:mb-8 uppercase tracking-[0.2em] font-bold relative z-10">The "Extension" Model</p>

                                <ul className="space-y-2 md:space-y-6 relative z-10">
                                    <li className="flex gap-3 md:gap-4 items-start">
                                        <div className="p-1 bg-mowka-teal-vibrant/10 border border-mowka-teal-vibrant/30 rounded-full mt-1">
                                            <Check className="w-3 h-3 text-mowka-teal-vibrant" />
                                        </div>
                                        <div>
                                            <strong className="block text-mowka-text-primary font-semibold text-sm md:text-lg">Pre-Calibrated Signal</strong>
                                            <p className="text-xs md:text-sm text-mowka-text-secondary font-light leading-relaxed mt-1">Only viable technical matches.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 md:gap-4 items-start">
                                        <div className="p-1 bg-mowka-teal-vibrant/10 border border-mowka-teal-vibrant/30 rounded-full mt-1">
                                            <Check className="w-3 h-3 text-mowka-teal-vibrant" />
                                        </div>
                                        <div>
                                            <strong className="block text-mowka-text-primary font-semibold text-sm md:text-lg">Environment Alignment</strong>
                                            <p className="text-xs md:text-sm text-mowka-text-secondary font-light leading-relaxed mt-1">Matches pace, ambiguity, and ownership.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 md:gap-4 items-start">
                                        <div className="p-1 bg-mowka-teal-vibrant/10 border border-mowka-teal-vibrant/30 rounded-full mt-1">
                                            <Check className="w-3 h-3 text-mowka-teal-vibrant" />
                                        </div>
                                        <div>
                                            <strong className="block text-mowka-text-primary font-semibold text-sm md:text-lg">Empowering Partnership</strong>
                                            <p className="text-xs md:text-sm text-mowka-text-secondary font-light leading-relaxed mt-1">Improving your Screen-to-Offer ratio.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
