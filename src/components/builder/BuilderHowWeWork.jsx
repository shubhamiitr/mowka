"use client";

import { BUILDER_PAGE } from '../../constants/content';

const { howWeWork } = BUILDER_PAGE;

export const BuilderHowWeWork = () => (
    <section className="layout-section">
        <div className="layout-container mx-auto max-w-4xl">
            <div className="layout-section-header">
                <h2 className="type-section-heading">{howWeWork.headline}</h2>
            </div>
            <div className="layout-timeline">
                <div className="layout-timeline-bar" aria-hidden="true" />
                {howWeWork.steps.map((step, i) => (
                    <div key={i} className="type-timeline-card">
                        <h3 className="type-card-title">{i + 1}. {step.title}</h3>
                        <p className="type-body">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
