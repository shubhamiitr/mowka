import { Hero } from './Hero';
import { Problem } from './Problem';
import { Process } from './Process';
import { WhyMowka } from './WhyMowka';
import { Contact } from './Contact';

export const Home = () => {
    return (
        <main>
            <Hero />
            <Problem />
            <Process />
            <WhyMowka />
            <Contact />
        </main>
    );
};
