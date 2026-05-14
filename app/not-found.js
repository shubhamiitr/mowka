import { NotFound } from '../src/components/NotFound';
import { METADATA } from '../src/constants/content';

export const metadata = {
    title: METADATA.notFound.title,
    description: METADATA.notFound.description,
};

export default function NotFoundPage() {
    return <NotFound />;
}
