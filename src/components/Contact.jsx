"use client";

import { useState } from 'react';
import { ArrowRight, Send, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './PhoneInputStyles.css';
import { Footer } from './Footer';
import { Reveal } from './Reveal';

export const Contact = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [errorField, setErrorField] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Email validation - must be work email (not free providers)
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const freeProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];

        if (!emailRegex.test(email)) {
            return 'Please enter a valid work email address';
        }

        const domain = email.split('@')[1]?.toLowerCase();
        if (freeProviders.includes(domain)) {
            return 'Please enter your work email address';
        }

        return null;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setErrorField(null);

        // Validate inputs
        const emailError = validateEmail(email);
        if (emailError) {
            setError(emailError);
            setErrorField('email');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phone }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setEmail('');
                    setPhone('');
                }, 4000);
            } else {
                setError(data.error || 'Submission failed. Please try again.');
            }
        } catch (err) {
            setError('Submission failed. Please try again or contact us at shubham@mowka.in');
            console.error('Submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-mowka-bg-primary flex flex-col relative min-h-0 md:min-h-[100dvh] justify-between scroll-mt-20">
            <div className="w-full flex-grow flex flex-col justify-center relative z-10 py-12 md:py-0">
                <div className="w-full flex flex-col justify-center px-4 md:px-6">
                    <div className="max-w-3xl mx-auto w-full">

                        {/* Section Header - Centered like other sections */}
                        <div className="text-center mb-8 md:mb-16">
                            <Reveal>
                                <span className="text-mowka-label font-bold tracking-[0.2em] uppercase text-[10px] mb-3 md:mb-4 block">Strategic Partnership</span>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium font-serif mb-3 md:mb-4 text-mowka-text-primary leading-tight">
                                    Grow with Mowka
                                </h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="text-sm md:text-lg text-mowka-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
                                    Turn your hiring from a bottleneck into a competitive advantage.
                                </p>
                            </Reveal>
                        </div>

                        <div className="max-w-md mx-auto w-full">
                            <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl border border-mowka-border-light shadow-xl">

                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate>
                                        <div>
                                            <label htmlFor="email" className="block text-[10px] md:text-xs font-bold mb-2 md:mb-3 uppercase tracking-wide text-mowka-text-secondary">Work Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                disabled={isLoading}
                                                placeholder="name@company.com"
                                                className="w-full px-0 py-2 md:py-3 bg-transparent border-b outline-none transition-all font-medium text-base md:text-lg rounded-none focus:ring-0 disabled:opacity-50 border-mowka-border-light focus:border-mowka-teal-vibrant text-mowka-text-primary placeholder:text-mowka-text-tertiary"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    if (errorField === 'email') setErrorField(null);
                                                }}
                                            />
                                        </div>
                                        <div className="relative" data-lenis-prevent>
                                            <label htmlFor="phone" className="block text-[10px] md:text-xs font-bold mb-2 md:mb-3 uppercase tracking-wide text-mowka-text-secondary">Mobile Number</label>
                                            <PhoneInput
                                                defaultCountry="in"
                                                value={phone}
                                                onChange={(phone) => {
                                                    setPhone(phone);
                                                    if (errorField === 'phone') setErrorField(null);
                                                }}
                                                disabled={isLoading}
                                                forceDialCode={true}
                                                inputProps={{
                                                    required: true,
                                                    name: 'phone',
                                                    'data-lpignore': 'true',
                                                }}
                                                className="phone-input-custom"
                                            />
                                        </div>
                                        <div className="relative min-h-[24px]">
                                            <AnimatePresence mode="wait">
                                                {error && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        className="pt-2"
                                                    >
                                                        <div className="bg-red-50/80 backdrop-blur-sm border border-red-100 rounded-xl p-3 flex items-start gap-3">
                                                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                                            <p className="text-sm text-red-600 font-medium leading-tight pt-0.5">{error}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-3 md:py-4 bg-mowka-action-primary text-white font-semibold text-base rounded-xl hover:bg-mowka-action-primary-hover transition-all flex items-center justify-center gap-3 group shadow-lg shadow-mowka-action-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? 'Submitting...' : 'Partner with Us'}
                                            {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                        </button>
                                    </form>
                                ) : (
                                    <div className="py-12 text-center animate-fade-in">
                                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Send className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-medium mb-2 text-mowka-text-primary">Request Received!</h3>
                                        <p className="text-mowka-text-secondary font-light">We will reach out within 24 hours.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer embedded in scroll snap flow */}
            <Footer />
        </section>
    );
};
