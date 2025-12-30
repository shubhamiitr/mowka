
import { NotFound } from '../src/components/NotFound';

export const metadata = {
    title: 'Page Not Found | Mowka',
    description: 'The page you are looking for does not exist.',
};

export default function NotFoundPage() {
    return <NotFound />;
}
