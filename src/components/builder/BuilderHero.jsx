"use client";

import { ArrowRight } from 'lucide-react';
import { BUILDER_PAGE } from '../../constants/content';
import { useBuilderConnect } from '../../hooks/useBuilderConnect';

const { hero } = BUILDER_PAGE;

export const BuilderHero = () => {
    const { open, modal } = useBuilderConnect();

    return (
        <section className="hero-section !min-h-0 !pb-16 md:!pb-20">
            <div className="hero-container max-w-5xl mx-auto">
                <h1 className="hero-headline">
                    {hero.headline.start}<br />
                    <span className="headline-accent">{hero.headline.highlight}</span>
                </h1>
                <p className="hero-subhead">{hero.subhead}</p>
                <button onClick={open} className="group btn btn-primary mt-8 md:mt-10">
                    <span>{hero.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            {modal}
        </section>
    );
};
