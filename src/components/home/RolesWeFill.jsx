"use client";

import Link from 'next/link';
import { HOME_PAGE } from '../../constants/content';
import { Layers, BrainCircuit, Server, Code2, Crown, AudioWaveform, ArrowRight } from 'lucide-react';

const ICON_MAP = { Layers, BrainCircuit, Server, Code2, Crown, AudioWaveform };

export const RolesWeFill = () => {
    const { headline, subhead, cta, roles } = HOME_PAGE.rolesWeFill;

    return (
        <section id="roles" className="layout-section bg-mowka-bg-secondary">
            <div className="layout-container">
                <div className="layout-section-header">
                        <h2 className="type-section-heading">{headline}</h2>
                    </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
                    {roles.map((r, i) => {
                        const Icon = ICON_MAP[r.icon] ?? Layers;
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
            </div>
        </section>
    );
};
