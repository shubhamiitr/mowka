
import { PrivacyPolicy } from '../../src/components/PrivacyPolicy';

export const metadata = {
    title: 'Privacy Policy | Mowka',
    description: 'Read our Privacy Policy to understand how Mowka collects, uses, and protects your personal information.',
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPage() {
    return <PrivacyPolicy />;
}
