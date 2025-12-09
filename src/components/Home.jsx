import SEO from './SEO';
import { Hero } from './Hero';
import { ValueProp } from './ValueProp';
import { Comparison } from './Comparison';
import { Founder } from './Founder';
import { Contact } from './Contact';
import { SITE_CONTENT } from '../constants/content';

export const Home = () => {
    return (
        <>
            <SEO
                title={SITE_CONTENT.tagline}
                description={SITE_CONTENT.description}
            />
            <Hero />
            <ValueProp />
            <Comparison />
            <Founder />
            <Contact />
        </>
    );
};
