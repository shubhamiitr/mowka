"use client";

import { Reveal } from './Reveal';
import { EyeOff, RadioTower, Clock } from 'lucide-react';
import { HOME_PAGE } from '../constants/content';

const PAIN_ICONS = [EyeOff, RadioTower, Clock];

export const Problem = () => {
    return (
        <section id="problem" className="layout-section">
            <div className="layout-container">
                <Reveal>
                    <div className="layout-header">
                        <span className="type-label mb-3 md:mb-4 block">
                            {HOME_PAGE.problem.label}
                        </span>
                        <h2 className="type-h2 text-balance">
                            {HOME_PAGE.problem.headline}
                        </h2>
                    </div>

                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
                    {HOME_PAGE.problem.pains.map((pain, index) => {
                        const Icon = PAIN_ICONS[index] ?? EyeOff;
                        return (
                            <Reveal key={index} delay={index * 0.15}>
                                <div className="type-card group">
                                    <div className="type-icon-pill">
                                        <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="type-h3 mb-3 md:mb-4">
                                        {pain.title}
                                    </h3>
                                    <p className="type-body">
                                        {pain.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
