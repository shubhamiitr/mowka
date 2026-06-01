"use client";

import { Inbox, Users, Sparkles, UserX, RotateCcw, ArrowRight } from 'lucide-react';
import { HOME_PAGE } from '../../constants/content';

const PAIN_ICONS = [Inbox, Users, Sparkles, UserX, RotateCcw];

export const Problem = () => {
    const scrollToProcess = (e) => {
        e.preventDefault();
        const el = document.getElementById('process');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="problem" className="layout-section bg-mowka-bg-secondary">
            <div className="layout-container max-w-7xl">
                <div className="layout-section-header">
                    <h2 className="type-section-heading">
                        {HOME_PAGE.problem.headline}
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-6 w-full">
                    {HOME_PAGE.problem.pains.map((pain, index) => {
                        const Icon = PAIN_ICONS[index] ?? Inbox;
                        return (
                            <div
                                key={index}
                                className="type-card w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div className="type-icon-pill">
                                    <Icon />
                                </div>
                                <h3 className="type-card-title">
                                    {pain.title}
                                </h3>
                                <p className="type-body">
                                    {pain.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 md:mt-12 flex justify-center">
                    <a
                        href="#process"
                        onClick={scrollToProcess}
                        className="group btn btn-primary"
                    >
                        {HOME_PAGE.problem.resolution.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};
