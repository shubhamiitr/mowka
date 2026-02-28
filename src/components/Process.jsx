"use client";

import { Reveal } from './Reveal';
import { Target, Search, RefreshCw } from 'lucide-react';

const steps = [
    {
        title: 'Deep Context',
        description: "We don't just read a job description. We study your company and the role until we can represent your vision as clearly as you do.",
        brandColor: '#173054', // Dark Navy
        glowColor: 'rgba(23, 48, 84, 0.15)',
        icon: Target
    },
    {
        title: 'Expert Scouting',
        description: "We find candidates by compounding a deep network of industry practitioners and former colleagues. This multiplier effect allows us to identify and interview referral-grade talent based on their actual track record and craft, rather than their visibility on job boards.",
        brandColor: '#225777', // Medium Blue
        glowColor: 'rgba(34, 87, 119, 0.15)',
        icon: Search
    },
    {
        title: 'Feedback & Sharpening',
        description: "If the first candidate is the one, we're done. If not, we listen. We take your feedback, refine our search, and sharpen our understanding. Each introduction gets us closer to the person you need — typically within 1 to 5 candidates.",
        brandColor: '#3a868f', // Light Teal
        glowColor: 'rgba(58, 134, 143, 0.15)',
        icon: RefreshCw
    }
];

export const Process = () => {
    return (
        <section id="process" className="bg-mowka-bg-primary flex flex-col relative py-20 md:py-32 scroll-mt-20 overflow-hidden">
            <div className="w-full relative z-10 px-4 md:px-8 max-w-7xl mx-auto flex flex-col h-full items-center">

                <div className="text-center mb-16 md:mb-24 z-20 relative px-4">
                    <Reveal>
                        <span className="text-mowka-label font-bold tracking-[0.2em] uppercase text-[10px] mb-3 md:mb-4 block">Our Process</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium font-serif mb-3 md:mb-4 text-mowka-text-primary leading-tight">
                            The Precision Path
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-sm md:text-lg text-mowka-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
                            Our straightforward approach to scouting and vetting referral-grade talent
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full relative">

                    {steps.map((step, index) => (
                        <Reveal key={index} delay={index * 0.2} className="relative z-10 w-full h-full">
                            <div
                                className="group h-full min-h-[380px] rounded-3xl flex flex-col items-start text-left p-8 lg:p-10 bg-mowka-bg-tertiary border border-mowka-border-light transition-all duration-500 hover:-translate-y-2 relative"
                                style={{
                                    boxShadow: `0 20px 40px -5px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)`
                                }}
                            >
                                <div className="relative z-20 flex flex-col items-start h-full w-full">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm"
                                        style={{ backgroundColor: `${step.brandColor}10`, color: step.brandColor }}
                                    >
                                        <step.icon className="w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl lg:text-[28px] font-serif leading-tight mb-4 text-mowka-text-primary transition-colors duration-500">
                                        {step.title}
                                    </h3>
                                    <p className="text-[13px] lg:text-[14px] leading-relaxed font-light text-mowka-text-secondary">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Subtle inner accent ring on hover */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ border: `1px solid ${step.brandColor}`, boxShadow: `0 20px 40px -10px ${step.glowColor}` }}
                                ></div>
                            </div>
                        </Reveal>
                    ))}

                </div>
            </div>
        </section>
    );
};
