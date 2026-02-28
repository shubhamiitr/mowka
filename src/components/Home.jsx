import { Hero } from './Hero';
import { Process } from './Process';
import { Founder } from './Founder';
import { Contact } from './Contact';

export const Home = () => {
    return (
        <main>
            {/* SEO handled by Next.js Layout */}
            <Hero />
            <Process />
            <Founder />
            <Contact />
        </main>
    );
};
