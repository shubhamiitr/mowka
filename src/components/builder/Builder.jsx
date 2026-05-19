import { Navbar } from './Navbar';
import { BuilderHero } from './BuilderHero';
import { Footer } from '../ui/Footer';

export const Builder = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <BuilderHero />
            <Footer />
        </main>
    );
};
