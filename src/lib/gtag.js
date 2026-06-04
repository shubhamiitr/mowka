export const GA_ID = 'G-5VNYMY69PY';

export const pageview = (path) => {
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('event', 'page_view', {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
    });
};

export const event = (action, params = {}) => {
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('event', action, params);
};
