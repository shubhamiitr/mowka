"use client";

import { createPortal } from 'react-dom';
import { ArrowRight } from 'lucide-react';
import { useBuilderConnect } from '../../hooks/useBuilderConnect';

export const BuilderFormCta = ({ label, compact = true, source = 'job_detail' }) => {
    const { open, modal } = useBuilderConnect(source);
    const cls = compact
        ? "text-sm font-medium text-white bg-mowka-action-primary hover:bg-mowka-action-primary-hover px-5 py-2 rounded-md transition-all duration-300 inline-flex items-center gap-1.5 group cursor-pointer"
        : "group btn btn-primary";
    return (
        <>
            <button onClick={open} className={cls}>
                <span>{label}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            {modal && typeof document !== 'undefined' && createPortal(modal, document.body)}
        </>
    );
};
