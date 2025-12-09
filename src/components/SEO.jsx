import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        if (title) {
            document.title = `Mowka | ${title}`;
        }

        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        }

        // Reset on unmount or route change if needed? 
        // Actually, usually we want it to persist until the next page overwrites it.
        // So no cleanup needed that reverts to "default" necessarily, 
        // but the next component will overwrite it.

    }, [title, description, location]);

    return null;
};

export default SEO;
