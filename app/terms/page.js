
import { TermsOfService } from '../../src/components/TermsOfService';

export const metadata = {
    title: 'Terms of Service | Mowka',
    description: 'Read our Terms of Service to understand the rules and guidelines for using Mowka\'s services.',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return <TermsOfService />;
}
