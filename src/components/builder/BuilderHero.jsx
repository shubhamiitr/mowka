"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Loader2, CheckCircle2, ArrowRight, Linkedin } from 'lucide-react';
import { Reveal } from '../Reveal';
import { BUILDER_PAGE } from '../../constants/content';
import { BuilderForm, validateForm } from './BuilderForm';

const { hero, success, loading, ui, errors } = BUILDER_PAGE;


// State machine:
//   hero → verifying → (collecting-details | already-shared)
//   collecting-details → submitting → done
export const BuilderHero = () => {
    const { data: session, status: authStatus } = useSession();
    const isLinkedIn = authStatus === 'authenticated' && !!session?.user?.linkedinId;

    const [step, setStep] = useState('hero');
    const [phone, setPhone] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Run the check logic
    const runVerification = async () => {
        if (!session?.user?.linkedinId) return;
        setStep('verifying');
        try {
            const res = await fetch(`/api/builder/check?id=${session.user.linkedinId}`);
            const data = await res.json();
            setStep(data.exists ? 'already-shared' : 'collecting-details');
        } catch {
            setStep('collecting-details');
        }
    };

    // Manual trigger from button
    const handleContinue = () => {
        if (isLinkedIn) {
            runVerification();
        } else {
            signIn('linkedin', { callbackUrl: '/builder' });
        }
    };

    // Auto-close success modal after 2 seconds (only for fresh submissions)
    useEffect(() => {
        if (step === 'done') {
            const timer = setTimeout(() => {
                setStep('hero');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const handleDismiss = () => {
        signOut({ redirect: false });
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
                    fullName: session.user.name,
                    email: session.user.email,
                    linkedinId: session.user.linkedinId,
                    avatarUrl: session.user.image,
                    phone: phone.trim(),
                    preferredTime,
                    portfolioUrl: portfolio.trim(),
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || errors.default);
            setStep(data.alreadyExists ? 'already-shared' : 'done');
        } catch (err) {
            setErrorMsg(err.message || errors.default);
            setStep('collecting-details');
        } finally {
            signOut({ redirect: false });
        }
    };

    const isDone = step === 'done' || step === 'already-shared';

    return (
        <section className="hero-section flex-grow">

            {/* Decorative teal glow — desktop only */}
            <div
                aria-hidden
                className="hidden lg:block fixed inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45,109,117,0.05) 0%, transparent 65%)' }}
            />

            {/* Hero intro — headline, subhead, LinkedIn CTA */}
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
                            onClick={handleContinue}
                            className="mt-8 md:mt-10 btn-primary group"
                        >
                            <Linkedin className="w-4 h-4" />
                            {hero.cta}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Reveal>
                </div>
            </div>

            {/* Modal — shown for every step except 'hero' */}
            {step !== 'hero' && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget && step === 'collecting-details') handleDismiss();
                    }}
                >
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-black/[0.04] max-w-md w-full max-h-[92vh] overflow-y-auto">

                        {step === 'verifying' && (
                            <div className="flex flex-col items-center py-16 gap-4 px-10">
                                <Loader2 className="w-7 h-7 animate-spin text-mowka-action-primary" />
                                <p className="text-sm text-mowka-text-tertiary">{loading.checking}</p>
                            </div>
                        )}

                        {step === 'collecting-details' && (
                            <BuilderForm
                                session={session}
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
                                <p className="text-sm text-mowka-text-tertiary">{loading.submitting}</p>
                            </div>
                        )}

                        {isDone && (
                            <div className="flex flex-col items-center text-center py-16 px-10 gap-6">
                                {session?.user?.image && (
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-xl shadow-black/10 flex-shrink-0">
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name || 'Profile'}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                        {step === 'done' && (
                                            <div className="absolute inset-0 rounded-full ring-4 ring-mowka-teal-vibrant/40 animate-pulse" />
                                        )}
                                    </div>
                                )}
                                <div className="flex flex-col gap-3">
                                    <p className="text-base text-mowka-text-tertiary text-balance leading-relaxed">
                                        {step === 'already-shared' ? success.existingProfileTitle : success.title}
                                    </p>
                                </div>
                                {step === 'already-shared' && (
                                    <button
                                        onClick={() => setStep('hero')}
                                        className="mt-4 btn-primary w-full"
                                    >
                                        {ui.closeButton}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};
