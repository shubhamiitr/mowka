"use client";

import { ArrowRight, Calendar } from 'lucide-react';
import { BRAND } from '../../constants/content';
import { event } from '../../lib/gtag';

const ICONS = {
    arrow:    { Component: ArrowRight, position: 'right', size: 'w-3.5 h-3.5' },
    calendar: { Component: Calendar,   position: 'left',  size: 'w-4 h-4'     },
    none: null,
};

export const CalButton = ({
    children,
    variant = 'primary',
    size = 'md',
    icon = 'arrow',
    className = '',
    onClick,
    source = 'unknown',
}) => {
    const iconCfg = ICONS[icon];

    const handleClick = () => {
        event('book_call_click', { source });
        onClick?.();
    };

    return (
        <button
            data-cal-link={BRAND.calLink}
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={handleClick}
            className={`group btn btn-${variant}${size === 'compact' ? ' btn-compact' : ''} ${className}`}
        >
            {iconCfg?.position === 'left' && (
                <iconCfg.Component className={iconCfg.size} />
            )}
            <span>{children}</span>
            {iconCfg?.position === 'right' && (
                <iconCfg.Component className={`${iconCfg.size} group-hover:translate-x-1 transition-transform`} />
            )}
        </button>
    );
};
