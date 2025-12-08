import React, { useState } from 'react';
import { Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneInputStyles.css';
import { Footer } from './Footer';

export const Contact = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Email validation - must be work email (not free providers)
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const freeProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];

        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }

        const domain = email.split('@')[1]?.toLowerCase();
        if (freeProviders.includes(domain)) {
            return 'Please use your work email address';
        }

        return null;
    };

    // Phone validation - check if phone number is valid
    const validatePhone = (phone) => {
        // Remove all non-digit characters except +
        const digits = phone.replace(/[^\d+]/g, '');

        if (digits.length < 10) {
            return 'Please enter a valid phone number';
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate inputs
        const emailError = validateEmail(email);
        if (emailError) {
            setError(emailError);
            return;
        }

        const phoneError = validatePhone(phone);
        if (phoneError) {
            setError(phoneError);
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
        <section id="contact" className="bg-mowka-bg-primary h-[100dvh] flex flex-col justify-between overflow-hidden snap-start">
            <div className="flex-grow flex flex-col justify-center relative w-full overflow-hidden">

                {/* Background ambient light - Removed for color consistency */}

                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 flex flex-col justify-center pt-24 pb-4 md:py-16">

                    {/* Section Header - Centered like other sections */}
                    <div className="text-center mb-8 md:mb-16">
                        <span className="text-mowka-label font-bold tracking-[0.2em] uppercase text-[10px] mb-3 md:mb-4 block">Strategic Partnership</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium font-serif mb-3 md:mb-4 text-mowka-text-primary leading-tight">
                            Empower Your Team.
                        </h2>
                        <p className="text-sm md:text-lg text-mowka-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
                            Turn your engineering hiring from a bottleneck into a competitive advantage.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto w-full">
                        <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl border border-mowka-border-light shadow-xl">

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-[10px] md:text-xs font-bold mb-2 md:mb-3 uppercase tracking-wide text-mowka-text-quaternary">Work Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            disabled={isLoading}
                                            placeholder="name@company.com"
                                            className="w-full px-0 py-2 md:py-3 bg-transparent border-b border-mowka-border-light focus:border-mowka-teal-vibrant outline-none transition-all font-medium text-base md:text-lg text-mowka-text-primary placeholder:text-mowka-text-tertiary rounded-none focus:ring-0 disabled:opacity-50"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-[10px] md:text-xs font-bold mb-2 md:mb-3 uppercase tracking-wide text-mowka-text-quaternary">Mobile Number</label>
                                        <PhoneInput
                                            country={'in'}
                                            value={phone}
                                            onChange={setPhone}
                                            disabled={isLoading}
                                            placeholder="+91 98765 43210"
                                            inputProps={{
                                                required: true,
                                                id: 'phone',
                                            }}
                                            containerClass="w-full"
                                            inputClass="w-full"
                                            buttonClass="border-mowka-border-light"
                                            containerStyle={{
                                                width: '100%',
                                            }}
                                            inputStyle={{
                                                width: '100%',
                                                height: 'auto',
                                                padding: '10px 14px 10px 58px',
                                                fontSize: '1.125rem',
                                                fontWeight: '500',
                                                border: 'none',
                                                borderBottom: '1px solid #d2d2d7',
                                                borderRadius: '0',
                                                backgroundColor: 'transparent',
                                                outline: 'none',
                                                color: '#1d1d1f',
                                            }}
                                            buttonStyle={{
                                                border: 'none',
                                                borderBottom: '1px solid #d2d2d7',
                                                borderRadius: '0',
                                                backgroundColor: 'transparent',
                                            }}
                                            dropdownStyle={{
                                                borderRadius: '8px',
                                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                            }}
                                        />
                                    </div>
                                    {error && (
                                        <p className="text-red-500 text-sm text-center">{error}</p>
                                    )}
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

            {/* Footer embedded in scroll snap flow */}
            <Footer />
        </section>
    );
};

