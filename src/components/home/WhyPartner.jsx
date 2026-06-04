"use client";

import { HOME_PAGE } from '../../constants/content';

export const WhyPartner = () => (
    <section id="why-mowka" className="layout-section">
        <div className="layout-container">
            <div className="layout-section-header">
                <h2 className="type-section-heading">{HOME_PAGE.whyPartner.headline}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                {HOME_PAGE.whyPartner.reasons.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                        <div key={index} className="type-card">
                            <div className="type-icon-pill">
                                <Icon />
                            </div>
                            <h3 className="type-card-title">{reason.title}</h3>
                            <p className="type-body">{reason.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);
