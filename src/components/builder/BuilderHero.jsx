"use client";

import { ArrowRight } from 'lucide-react';
import { BUILDER_PAGE } from '../../constants/content';
import { useBuilderConnect } from './useBuilderConnect';

const { hero } = BUILDER_PAGE;

export const BuilderHero = () => {
    const { open, modal } = useBuilderConnect();

    return (
        <section className="layout-section pt-36 md:pt-44 pb-20 md:pb-28">
            <div className="layout-container flex flex-col items-center text-center max-w-7xl">
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-5 animate-fade-in-up">
                    <span className="h-px w-6 md:w-10 bg-mowka-teal-vibrant/50" />
                    <span className="type-label">{BUILDER_PAGE.hero.kicker}</span>
                    <span className="h-px w-6 md:w-10 bg-mowka-teal-vibrant/50" />
                </div>
                <h1 className="hero-headline">
                    {hero.headline.start}{' '}
                    <span className="headline-accent">{hero.headline.highlight}</span>
                </h1>
                <p className="hero-subhead mx-auto text-balance">{hero.subhead}</p>
                <button onClick={open} className="group btn btn-primary mt-8 md:mt-10">
                    <span>{hero.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            {modal}
        </section>
    );
};
