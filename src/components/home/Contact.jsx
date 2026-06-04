"use client";

import { ArrowRight } from 'lucide-react';
import { CalButton } from '../ui/CalButton';
import { Footer } from '../ui/Footer';
import { HOME_PAGE, BRAND } from '../../constants/content';

const MAIL_SUBJECT = encodeURIComponent('Team building inquiry');

export const Contact = () => {
    const { headline, subhead, primaryCta, reassurance } = HOME_PAGE.contact;

    return (
        <>
            <section
                id="contact"
                className="layout-section py-20 md:py-28"
            >
                <div className="layout-container text-center max-w-6xl">
                    <h2 className="hero-headline">
                        {headline.start}{" "}
                        <span className="headline-accent">
                            {headline.highlight}
                        </span>
                    </h2>

                    <p className="hero-subhead mx-auto opacity-90 leading-relaxed text-balance">
                        {subhead}
                    </p>

                    <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <CalButton variant="primary" icon="arrow" source="home_contact">
                            {primaryCta}
                        </CalButton>
                        <a
                            href={`mailto:${BRAND.email}?subject=${MAIL_SUBJECT}`}
                            className="group btn btn-secondary"
                        >
                            <span>Email us</span>
                            <ArrowRight className="w-3.5 h-3.5 text-mowka-action-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                        </a>
                    </div>


                    <p className="text-sm font-medium tracking-widest text-mowka-text-tertiary mt-4">
                        {reassurance}
                    </p>

                </div>
            </section>
            <Footer />
        </>
    );
};
