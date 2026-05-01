"use client";
import { Reveal } from './Reveal';
import { HOME_PAGE } from '../constants/content';

export const Process = () => {
    return (
        <section id="process" className="layout-section">
            <div className="layout-container flex flex-col items-center">

                <div className="layout-header">
                    <Reveal>
                        <span className="type-label mb-3 md:mb-4 block">
                            {HOME_PAGE.process.label}
                        </span>
                        <h2 className="type-h2 text-balance">
                            {HOME_PAGE.process.headline}
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full">
                    {HOME_PAGE.process.steps.map((step, index) => (
                        <Reveal key={index} delay={index * 0.1} className="relative w-full h-full">
                            <div className="type-card group">
                                <div className="type-icon-pill font-serif text-xl font-semibold">
                                    {step.step || String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className="type-h3 mb-3 md:mb-4">
                                    {step.title}
                                </h3>
                                <p className="type-body flex-1">
                                    {step.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
