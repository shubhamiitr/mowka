"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { BUILDER_PAGE } from '../../constants/content';
import { BuilderForm, validateForm } from './BuilderForm';

const { hero, success, loading, errors } = BUILDER_PAGE;

export const BuilderHero = () => {
    const [step, setStep] = useState('hero'); // hero | form | submitting | done
    const [phone, setPhone] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (step === 'done') {
            const timer = setTimeout(() => setStep('hero'), 2000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const handleDismiss = () => {
        setStep('hero');
        setPhone('');
        setPreferredTime('');
        setPortfolio('');
        setErrorMsg('');
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
                body: JSON.stringify({
                    phone: phone.trim(),
                    preferredTime,
                    portfolioUrl: portfolio.trim(),
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || errors.default);
            setStep('done');
        } catch (err) {
            setErrorMsg(err.message || errors.default);
            setStep('form');
        }
    };

    return (
        <section className="hero-section flex-grow">

            {/* Decorative teal glow — desktop only */}
            <div
                aria-hidden
                className="hidden lg:block fixed inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45,109,117,0.05) 0%, transparent 65%)' }}
            />

            <div className="hero-container">
                <div className="flex flex-col items-center text-center max-w-8xl mx-auto w-full">
                    <div>
                        <h1 className="hero-headline animate-fade-in-up">
                            {hero.headline.start}
                            <br />
                            <span className="headline-accent">{hero.headline.highlight}</span>
                        </h1>
                        <p className="hero-subhead mx-auto opacity-90 animate-fade-in-up">
                            {hero.subhead}
                        </p>
                    </div>
                    <Reveal delay={0.35}>
                        <button
                            onClick={() => setStep('form')}
                            className="mt-8 md:mt-10 btn-primary group"
                        >
                            {hero.cta}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Reveal>
                </div>
            </div>

            {step !== 'hero' && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget && step === 'form') {
                            handleDismiss();
                        }
                    }}
                >
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-black/[0.04] w-full max-h-[92vh] overflow-y-auto max-w-md">
                        {step === 'form' && (
                            <BuilderForm
                                phone={phone} setPhone={setPhone}
                                preferredTime={preferredTime} setPreferredTime={setPreferredTime}
                                portfolio={portfolio} setPortfolio={setPortfolio}
                                errorMsg={errorMsg}
                                onSubmit={handleSubmit}
                                onDismiss={handleDismiss}
                            />
                        )}

                        {step === 'submitting' && (
                            <div className="flex flex-col items-center py-16 gap-4 px-10">
                                <Loader2 className="w-7 h-7 animate-spin text-mowka-action-primary" />
                                {loading.submitting && <p className="text-sm text-mowka-text-tertiary">{loading.submitting}</p>}
                            </div>
                        )}

                        {step === 'done' && (
                            <div className="flex flex-col items-center text-center py-16 px-10 gap-6">
                                <p className="text-base text-mowka-text-tertiary text-balance leading-relaxed">
                                    {success.title}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};
