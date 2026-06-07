import { Navbar } from './ui/Navbar';
import { Hero } from './home/Hero';
import { Problem } from './home/Problem';
import { HowWeWork } from './home/HowWeWork';
import { WhyPartner } from './home/WhyPartner';
import { RolesWeFill } from './home/RolesWeFill';
import { Testimonials } from './home/Testimonials';
import { Founder } from './home/Founder';
import { Faq } from './home/Faq';
import { Contact } from './home/Contact';
import { HOME_PAGE } from '../constants/content.js';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'How we work', href: '#how-we-work' },
    { label: 'Open roles', href: '/jobs' },
    // { label: 'Insights', href: '/insights' },
    { label: 'For Builders', href: '/builder' },
];

export const Home = () => (
    <main className="layout-page">
        <Navbar links={NAV_LINKS} cta={{ type: 'cal', label: HOME_PAGE.hero.cta }} />
        <Hero />
        <Problem />
        <HowWeWork />
        <Testimonials />
        <WhyPartner />
        <RolesWeFill />
        <Founder />
        <Faq />
        <Contact />
    </main>
);
