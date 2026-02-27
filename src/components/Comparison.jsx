import { Check, X } from 'lucide-react';
import { Reveal } from './Reveal';

export const Comparison = () => {
    return (
        <section id="process" className="bg-mowka-bg-primary flex flex-col relative py-12 md:py-24 scroll-mt-20">
            {/* Main Content */}
            <div className="w-full flex flex-col relative z-10">
                {/* Mobile: justify-center with reduced padding, Desktop: justify-center */}
                <div className="w-full flex flex-col justify-center px-4 md:px-12">
                    <div className="max-w-7xl mx-auto w-full">

                        <div className="text-center mb-6 md:mb-12 shrink-0">
                            <Reveal>
                                <span className="text-mowka-label font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">The Signal Advantage</span>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="text-3xl md:text-5xl font-medium font-serif mb-3 md:mb-4 text-mowka-text-primary">Agency Noise vs<br className="md:hidden" /> Practitioner Precision.</h2>
                            </Reveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto w-full">

                            {/* Traditional Sourcing */}
                            <Reveal delay={0.2} className="h-full">
                                <div className="bg-white p-4 md:p-10 border border-mowka-border-light rounded-2xl md:rounded-3xl flex flex-col shadow-sm h-full">
                                    <div className="mb-4 md:mb-6">
                                        <h3 className="text-lg md:text-2xl font-medium text-mowka-text-secondary mb-1 md:mb-2 font-serif">The Volume Trap</h3>
                                        <p className="text-[9px] md:text-[10px] text-mowka-text-quaternary uppercase tracking-[0.2em] font-bold">Agencies & Job Platforms</p>
                                    </div>

                                    <div className="space-y-3 md:space-y-6 flex-1">
                                        <div className="pb-3 md:pb-6 border-b border-mowka-border-light">
                                            <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                                                <div className="p-1 bg-red-50 rounded-full mt-0.5">
                                                    <X className="w-3 h-3 text-red-800" />
                                                </div>
                                                <h4 className="text-sm md:text-base font-semibold text-mowka-text-primary">Noise Over Signal</h4>
                                            </div>
                                            <p className="text-xs md:text-sm text-mowka-text-tertiary font-light leading-relaxed pl-8 md:pl-9">
                                                50+ profiles to filter. You waste hours on candidates who don't match your bar.
                                            </p>
                                        </div>
                                        <div className="pb-3 md:pb-6 border-b border-mowka-border-light">
                                            <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                                                <div className="p-1 bg-red-50 rounded-full mt-0.5">
                                                    <X className="w-3 h-3 text-red-800" />
                                                </div>
                                                <h4 className="text-sm md:text-base font-semibold text-mowka-text-primary">Keyword Matching</h4>
                                            </div>
                                            <p className="text-xs md:text-sm text-mowka-text-tertiary font-light leading-relaxed pl-8 md:pl-9">
                                                Matches "React" to "React". Misses context: Pace, Ownership, Ambiguity.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                                                <div className="p-1 bg-red-50 rounded-full mt-0.5">
                                                    <X className="w-3 h-3 text-red-800" />
                                                </div>
                                                <h4 className="text-sm md:text-base font-semibold text-mowka-text-primary">Flat Pricing Model</h4>
                                            </div>
                                            <p className="text-xs md:text-sm text-mowka-text-tertiary font-light leading-relaxed pl-8 md:pl-9">
                                                15-20% fee regardless of role. Junior hire costs same as an Executive.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Mowka */}
                            <Reveal delay={0.3} className="h-full">
                                <div className="bg-white p-4 md:p-10 border border-mowka-teal-vibrant rounded-2xl md:rounded-3xl flex flex-col shadow-lg relative overflow-hidden h-full">
                                    {/* Subtle gradient accent */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-mowka-teal-vibrant/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>

                                    <div className="mb-4 md:mb-6 relative z-10">
                                        <h3 className="text-lg md:text-2xl font-medium text-mowka-text-primary mb-1 md:mb-2 font-serif">The Technical Partner</h3>
                                        <p className="text-[9px] md:text-[10px] text-mowka-label uppercase tracking-[0.2em] font-bold">Your Force Multiplier</p>
                                    </div>

                                    <div className="space-y-3 md:space-y-6 flex-1 relative z-10">
                                        <div className="pb-3 md:pb-6 border-b border-mowka-teal-vibrant/20">
                                            <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                                                <div className="p-1 bg-mowka-teal-vibrant/10 rounded-full mt-0.5">
                                                    <Check className="w-3 h-3 text-mowka-teal-vibrant" />
                                                </div>
                                                <h4 className="text-sm md:text-base font-semibold text-mowka-text-primary">Pre-Calibrated Signal</h4>
                                            </div>
                                            <p className="text-xs md:text-sm text-mowka-text-secondary font-light leading-relaxed pl-8 md:pl-9">
                                                Only technically viable matches. Pre-screened for YOUR specific environment.
                                            </p>
                                        </div>
                                        <div className="pb-3 md:pb-6 border-b border-mowka-teal-vibrant/20">
                                            <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                                                <div className="p-1 bg-mowka-teal-vibrant/10 rounded-full mt-0.5">
                                                    <Check className="w-3 h-3 text-mowka-teal-vibrant" />
                                                </div>
                                                <h4 className="text-sm md:text-base font-semibold text-mowka-text-primary">Context-Driven Matching</h4>
                                            </div>
                                            <p className="text-xs md:text-sm text-mowka-text-secondary font-light leading-relaxed pl-8 md:pl-9">
                                                We find passive talent aligned with your ambiguity & ownership needs.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="flex items-start gap-2 md:gap-3 mb-1 md:mb-2">
                                                <div className="p-1 bg-mowka-teal-vibrant/10 rounded-full mt-0.5">
                                                    <Check className="w-3 h-3 text-mowka-teal-vibrant" />
                                                </div>
                                                <h4 className="text-sm md:text-base font-semibold text-mowka-text-primary">Fair-Value Pricing</h4>
                                            </div>
                                            <p className="text-xs md:text-sm text-mowka-text-secondary font-light leading-relaxed pl-8 md:pl-9">
                                                Fees reflect role complexity. Incentives aligned with your Screen-to-Offer ratio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
