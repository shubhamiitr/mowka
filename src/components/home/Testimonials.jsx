"use client";

import { Quote } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { HOME_PAGE } from '../../constants/content';

export const Testimonials = () => {
    const { headline, subhead, cases } = HOME_PAGE.testimonials;
    const items = cases.filter((c) => c.quote);

    if (items.length === 0) return null;

    return (
        <section id="testimonials" className="layout-section bg-mowka-bg-secondary">
            <div className="layout-container">
                <div className="layout-section-header">
                    <h2 className="type-section-heading">{headline}</h2>
                    {subhead && <p className="type-section-subhead">{subhead}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto w-full">
                    {items.map((item, i) => (
                        <article
                            key={i}
                            className="type-card justify-between"
                        >
                            <div>
                                <Quote
                                    aria-hidden="true"
                                    className="w-7 h-7 text-mowka-teal-vibrant mb-4 opacity-80"
                                    strokeWidth={2}
                                />
                                <p className="type-quote">
                                    {item.quote}
                                </p>
                            </div>
                            <div className="mt-6 md:mt-8 flex items-center gap-4">
                                <Avatar photo={item.photo} name={item.name} />
                                <div>
                                    <p className="font-semibold text-mowka-text-primary text-base leading-snug">{item.name}</p>
                                    <p className="text-sm text-mowka-text-primary leading-snug mt-0.5">{item.title}</p>
                                    <p className="text-sm font-semibold text-mowka-teal-vibrant mt-0.5 leading-snug">
                                        {item.company}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 md:mt-10 text-center">
                    <p className="text-sm text-body font-medium">
                        Trusted by founders backed by Y Combinator, Arkam Ventures, Groww Founder Fund, Kunal Shah, and other top global investors.
                    </p>
                </div>
            </div>
        </section>
    );
};




