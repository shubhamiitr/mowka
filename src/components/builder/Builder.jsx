import { BuilderHero } from './BuilderHero';
import { Footer } from '../Footer';

export const Builder = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <BuilderHero />
            <Footer />
        </main>
    );
};
