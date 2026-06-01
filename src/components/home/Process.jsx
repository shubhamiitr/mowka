"use client";
import { HOME_PAGE } from '../../constants/content';

export const Process = () => {
    const { headline, steps } = HOME_PAGE.process;

    return (
        <section id="process" className="layout-section">
            <div className="layout-container">
                <div className="layout-section-header">
                    <h2 className="type-section-heading">
                        {headline}
                    </h2>
                </div>
                <div className="layout-timeline">
                    <div className="layout-timeline-bar" aria-hidden="true" />

                    {steps.map((step, index) => (
                        <div key={index} className="type-timeline-card">
                            <h3 className="type-card-title">{index + 1}. {step.title}</h3>
                            <p className="type-body">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
