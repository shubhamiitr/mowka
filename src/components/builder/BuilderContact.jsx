"use client";

import { ArrowRight } from 'lucide-react';
import { BUILDER_PAGE } from '../../constants/content';
import { Footer } from '../ui/Footer';
import { useBuilderConnect } from '../../hooks/useBuilderConnect';

const { contact } = BUILDER_PAGE;

export const BuilderContact = () => {
    const { open, modal } = useBuilderConnect('builder_contact');

    return (
        <>
            <section id="contact" className="layout-section bg-mowka-bg-secondary py-20 md:py-28">
                <div className="layout-container text-center">
                    <h2 className="hero-headline">
                        {contact.headline.start}{' '}
                        <span className="headline-accent">{contact.headline.highlight}</span>
                    </h2>
                    <p className="hero-subhead">{contact.subhead}</p>
                    <div className="mt-10 md:mt-12 flex justify-center">
                        <button onClick={open} className="group btn btn-primary">
                            <span>{contact.cta}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <p className="text-sm font-medium tracking-widest text-mowka-text-tertiary mt-4">
                        {contact.assurance}
                    </p>
                </div>
            </section>
            <Footer />
            {modal}
        </>
    );
};
