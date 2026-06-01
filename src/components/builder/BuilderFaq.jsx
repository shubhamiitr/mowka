"use client";

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { BUILDER_PAGE } from '../../constants/content';

export const BuilderFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="layout-section bg-mowka-bg-secondary">
            <div className="layout-container">
                <div className="layout-section-header">
                    <h2 className="type-section-heading">Frequently asked questions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl mx-auto items-start">
                    {BUILDER_PAGE.faqs.map((faq, i) => {
                        const open = openIndex === i;
                        return (
                                                        <div key={i} className={`type-accordion-card ${open ? 'is-open' : ''}`}>
                                <button
                                    onClick={() => setOpenIndex(open ? null : i)}
                                    className="type-accordion-card-trigger"
                                    aria-expanded={open}
                                >
                                    <span className="type-card-title">{faq.q}</span>
                                    <span className="type-accordion-card-toggle">
                                        <Plus className="type-accordion-card-icon" />
                                    </span>
                                </button>
                                {open && (
                                    <div className="type-accordion-card-panel">
                                        <p className="type-body">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
