"use client";

import { ArrowRight } from 'lucide-react';
import { Footer } from '../Footer';
import { Reveal } from '../Reveal';
import { HOME_PAGE, SITE_CONTENT } from '../../constants/content';

export const Contact = () => {
    return (
        <section id="contact" className="bg-mowka-bg-primary flex flex-col relative scroll-mt-20">
            <div className="w-full pt-10 md:pt-14 pb-24 md:pb-36 px-4 md:px-6">
                <div className="max-w-2xl mx-auto w-full text-center">

                    <Reveal>
                        <span className="type-label mb-3 md:mb-4 block">
                            {HOME_PAGE.contact.label}
                        </span>
                        <h2 className="type-h2 text-balance mb-5 md:mb-6">
                            {HOME_PAGE.contact.headline}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body max-w-xl mx-auto mb-16 md:mb-20">
                            {HOME_PAGE.contact.subhead}
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <a
                            href={SITE_CONTENT.calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-mowka-action-primary text-white font-semibold text-base md:text-lg rounded-md hover:bg-mowka-action-primary-hover transition-all group cursor-pointer shadow-lg hover:shadow-xl"
                        >
                            {HOME_PAGE.contact.cta}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Reveal>

                </div>
            </div>

            <Footer />
        </section>
    );
};
