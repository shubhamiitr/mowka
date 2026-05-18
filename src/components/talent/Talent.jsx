import { Navbar } from './Navbar';
import { TalentHero } from './TalentHero';
import { Footer } from '../Footer';

export const Talent = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <TalentHero />
            <Footer />
        </main>
    );
};
