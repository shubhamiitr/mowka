"use client";

import { ArrowRight, Calendar } from 'lucide-react';
import { BRAND } from '../../constants/content';

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
}) => {
    const iconCfg = ICONS[icon];

    return (
        <button
            data-cal-link={BRAND.calLink}
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={onClick}
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
