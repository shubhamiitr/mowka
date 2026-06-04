"use client";

import { BUILDER_PAGE } from '../../constants/content';

const { whoItsFor } = BUILDER_PAGE;

export const BuilderWhoItsFor = () => (
    <section className="layout-section bg-mowka-bg-secondary">
        <div className="layout-container max-w-6xl">
            <div className="layout-section-header">
                <h2 className="type-section-heading">{whoItsFor.headline}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                {whoItsFor.profiles.map((p, i) => {
                    const Icon = p.icon;
                    return (
                        <div key={i} className="type-card">
                            <div className="type-icon-pill">
                                <Icon />
                            </div>
                            <h3 className="type-card-title">{p.highlight}</h3>
                            <p className="type-body">{p.body}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);
