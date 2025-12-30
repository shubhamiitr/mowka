import { Hero } from './Hero';
import { ValueProp } from './ValueProp';
import { Comparison } from './Comparison';
import { Founder } from './Founder';
import { Contact } from './Contact';

export const Home = () => {
    return (
        <main>
            {/* SEO handled by Next.js Layout */}
            <Hero />
            <ValueProp />
            <Comparison />
            <Founder />
            <Contact />
        </main>
    );
};
