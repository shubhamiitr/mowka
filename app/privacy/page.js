import { PrivacyPolicy } from '../../src/components/PrivacyPolicy';
import { METADATA } from '../../src/constants/content';

export const metadata = {
    title: METADATA.privacy.title,
    description: METADATA.privacy.description,
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPage() {
    return <PrivacyPolicy />;
}
