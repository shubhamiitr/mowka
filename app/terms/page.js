import { TermsOfService } from '../../src/components/TermsOfService';
import { METADATA } from '../../src/constants/content';

export const metadata = {
    title: METADATA.terms.title,
    description: METADATA.terms.description,
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return <TermsOfService />;
}
