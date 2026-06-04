"use client";

import { HOME_PAGE } from '../../constants/content';

export const RolesWeFill = () => {
    const { headline, roles, note } = HOME_PAGE.rolesWeFill;

    return (
        <section id="roles" className="layout-section bg-mowka-bg-secondary">
            <div className="layout-container">
                <div className="layout-section-header">
                    <h2 className="type-section-heading">{headline}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
                    {roles.map((r, i) => {
                        const Icon = r.icon;
                        return (
                            <div key={i} className="type-card">
                                <div className="type-icon-pill mb-4">
                                    <Icon />
                                </div>
                                <h3 className="type-card-title">{r.title}</h3>
                                <p className="type-body">{r.description}</p>
                            </div>
                        );
                    })}
                </div>
                {note && (
                    <p className="type-caption text-center mt-8 text-mowka-text-tertiary max-w-xl mx-auto">{note}</p>
                )}
            </div>
        </section>
    );
};
