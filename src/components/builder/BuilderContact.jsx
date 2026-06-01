"use client";

import { ArrowRight } from 'lucide-react';
import { BUILDER_PAGE } from '../../constants/content';
import { Footer } from '../ui/Footer';
import { useBuilderConnect } from './useBuilderConnect';

const { contact } = BUILDER_PAGE;

export const BuilderContact = () => {
    const { open, modal } = useBuilderConnect();

    return (
        <>
            <section id="contact" className="layout-section py-20 md:py-28">
                <div className="layout-container text-center max-w-6xl">
                    <h2 className="hero-headline">
                        {contact.headline.start}{' '}
                        <span className="headline-accent">{contact.headline.highlight}</span>
                    </h2>
                    <p className="hero-subhead mx-auto opacity-90 leading-relaxed text-balance">{contact.subhead}</p>
                    <div className="mt-8 md:mt-10 flex justify-center">
                        <button onClick={open} className="group btn btn-primary">
                            <span>{contact.cta}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
            {modal}
        </>
    );
};
