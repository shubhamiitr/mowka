"use client";

import { createPortal } from 'react-dom';
import { ArrowRight } from 'lucide-react';
import { useBuilderConnect } from '../../hooks/useBuilderConnect';

const VARIANTS = {
    compactBtn: "text-sm font-medium text-white bg-mowka-action-primary hover:bg-mowka-action-primary-hover px-5 py-2 rounded-md transition-all duration-300 inline-flex items-center gap-1.5 group cursor-pointer",
    primaryBtn: "group btn btn-primary",
    plainLink: "text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200 text-left bg-transparent border-0 p-0 cursor-pointer block",
};

export const BuilderFormCta = ({ label, variant = 'primaryBtn' }) => {
    const { open, modal } = useBuilderConnect();
    return (
        <>
            <button onClick={open} className={VARIANTS[variant]}>
                <span>{label}</span>
                {variant !== 'plainLink' && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
            </button>
            {modal && typeof document !== 'undefined' && createPortal(modal, document.body)}
        </>
    );
};
