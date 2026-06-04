"use client";

import { useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { BUILDER_PAGE } from '../constants/content';
import { BuilderForm, validateForm } from '../components/builder/BuilderForm';
import { event } from '../lib/gtag';

const { success, loading, errors } = BUILDER_PAGE;

export function useBuilderConnect(source = 'unknown') {
    const [step, setStep] = useState('idle');
    const [phone, setPhone] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const open = () => {
        event('builder_form_open', { source });
        setStep('form');
    };

    const dismiss = () => {
        setStep('idle');
        setPhone(''); setPreferredTime(''); setPortfolio(''); setErrorMsg('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        const error = validateForm({ phone, preferredTime, portfolio });
        if (error) { setErrorMsg(error); return; }
        setStep('submitting');
        try {
            const res = await fetch('/api/builder/connect', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: phone.trim(), preferredTime, portfolioUrl: portfolio.trim() }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || errors.default);
            event('builder_form_submit', { source });
            setStep('done');
            setTimeout(dismiss, 4000);
        } catch (err) {
            setErrorMsg(err.message || errors.default);
            setStep('form');
        }
    };

    const modal = step === 'idle' ? null : (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
        >
            <div className="bg-white rounded-[2rem] shadow-2xl border border-black/[0.04] w-full max-h-[92vh] overflow-y-auto max-w-md">
                {step === 'form' && (
                    <BuilderForm
                        phone={phone} setPhone={setPhone}
                        preferredTime={preferredTime} setPreferredTime={setPreferredTime}
                        portfolio={portfolio} setPortfolio={setPortfolio}
                        errorMsg={errorMsg}
                        onSubmit={handleSubmit}
                        onDismiss={dismiss}
                    />
                )}
                {step === 'submitting' && (
                    <div className="flex flex-col items-center py-16 gap-4 px-10">
                        <Loader2 className="w-7 h-7 animate-spin text-mowka-action-primary" />
                        {loading.submitting && <p className="text-sm text-mowka-text-tertiary">{loading.submitting}</p>}
                    </div>
                )}
                {step === 'done' && (
                    <div className="w-full p-8 md:p-10">
                        <div className="flex justify-end mb-4">
                            <button onClick={dismiss} aria-label="Close" className="p-1.5 rounded-full text-mowka-text-quaternary hover:text-mowka-text-tertiary hover:bg-mowka-bg-secondary transition-all">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4 pb-6">
                            <p className="font-serif text-xl font-medium text-mowka-text-primary leading-tight">{success.title}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return { open, modal };
}
