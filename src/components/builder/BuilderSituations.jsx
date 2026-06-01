"use client";

import { BUILDER_PAGE } from '../../constants/content';

const { situations } = BUILDER_PAGE;

export const BuilderSituations = () => (
    <section className="layout-section bg-mowka-bg-secondary">
        <div className="layout-container max-w-7xl">
            <div className="layout-section-header">
                <h2 className="type-section-heading">{situations.headline}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                {situations.items.map((s, i) => (
                    <div key={i} className="type-card">
                        <h3 className="type-card-title">{s.title}</h3>
                        <p className="type-body">{s.body}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
