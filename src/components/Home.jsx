import { Navbar } from './home/Navbar';
import { Hero } from './home/Hero';
import { Problem } from './home/Problem';
import { Process } from './home/Process';
import { WhyPartner } from './home/WhyPartner';
import { RolesWeFill } from './home/RolesWeFill';
import { Testimonials } from './home/Testimonials';
import { Founder } from './home/Founder';
import { Faq } from './home/Faq';
import { Contact } from './home/Contact';

export const Home = () => {
    return (
        <main className="layout-page">
            <Navbar />
            <Hero />
            <Problem />
            <Process />
            <Testimonials />
            <WhyPartner />
            <RolesWeFill />
            <Founder />
            <Faq />
            <Contact />
        </main>
    );
};
