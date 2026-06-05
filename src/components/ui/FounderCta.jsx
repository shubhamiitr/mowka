"use client";

import { ArrowRight } from 'lucide-react';
import { BRAND } from '../../constants/content';
import { event } from '../../lib/gtag';

const VARIANTS = {
    primaryBtn: "group btn btn-primary",
    compactBtn: "group btn btn-primary btn-compact",
    plainLink:  "text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200 text-left bg-transparent border-0 p-0 cursor-pointer block",
};

export const FounderCta = ({ children, variant = 'primaryBtn', onClick }) => {
    const handleClick = () => {
        event('book_call_click');
        onClick?.();
    };

    return (
        <button
            data-cal-link={BRAND.calLink}
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={handleClick}
            className={VARIANTS[variant]}
        >
            <span>{children}</span>
            {variant !== 'plainLink' && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
        </button>
    );
};
