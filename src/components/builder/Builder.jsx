"use client";

import { Navbar } from '../ui/Navbar';
import { BuilderHero } from './BuilderHero';
import { BuilderWhoItsFor } from './BuilderWhoItsFor';
import { BuilderHowWeWork } from './BuilderHowWeWork';
import { BuilderContact } from './BuilderContact';
import { BUILDER_PAGE } from '../../constants/content';

const NAV_LINKS = [
    { label: 'Open Roles', href: '/jobs' },
    // { label: 'Insights', href: '/insights' },
    { label: 'For Founders', href: '/' },
];

const NAV_CTA = { type: 'builder-form', label: BUILDER_PAGE.hero.cta };

export const Builder = () => (
    <main className="layout-page">
        <Navbar links={NAV_LINKS} cta={NAV_CTA} />
        <BuilderHero />
        <BuilderWhoItsFor />
        <BuilderHowWeWork />
        <BuilderContact />
    </main>
);
