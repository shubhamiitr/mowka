import { Navbar } from './home/Navbar';
import { Hero } from './home/Hero';
import { Problem } from './home/Problem';
import { Process } from './home/Process';
import { WhyMowka } from './home/WhyMowka';
import { Contact } from './home/Contact';

export const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Problem />
            <Process />
            <WhyMowka />
            <Contact />
        </main>
    );
};
