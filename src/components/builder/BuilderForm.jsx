"use client";

import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { BUILDER_PAGE } from '../../constants/content';

const { form } = BUILDER_PAGE;

const TIME_OPTIONS = [
    { value: 'before-work', label: '☕️ Before work', color: 'bg-amber-500' },
    { value: 'lunch-break', label: '🍽️ Lunch break', color: 'bg-orange-500' },
    { value: 'after-work', label: '🌙 After work', color: 'bg-indigo-600' },
];

// PhoneInput renders its own DOM — !important overrides keep its inputs
// visually consistent with the rest of the form.
const PHONE_INPUT_CLASS = "flex-grow !bg-transparent !border-0 !border-b !border-mowka-border-light group-hover:!border-mowka-text-quaternary focus:!border-mowka-teal-vibrant !rounded-none !shadow-none !text-base !font-light !text-mowka-text-primary !px-3 !py-2 !transition-colors !duration-200 placeholder:!text-mowka-text-tertiary !outline-none";
const PHONE_BUTTON_CLASS = "!border-0 !border-b !border-mowka-border-light group-hover:!border-mowka-text-quaternary !rounded-none !bg-transparent !pl-0 !pr-2 !transition-colors !duration-200";


// Validation — we trust PhoneInput for per-country formatting, so we only
// check the user actually typed digits. Portfolio is a shape check; deeper
// reachability validation would need a server-side fetch (CORS blocks it
// in the browser).
export function validateForm({ phone, preferredTime, portfolio }) {
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 4) return form.phoneError;

    if (!preferredTime) return form.timeError;

    const link = portfolio.trim();
    if (!link || !link.includes('.')) return form.portfolioError;

    return null;
}


export function BuilderForm({
    session,
    phone, setPhone,
    preferredTime, setPreferredTime,
    portfolio, setPortfolio,
    errorMsg, onSubmit, onDismiss,
}) {
    return (
        <div className="w-full p-8 md:p-10">

            {/* Header: avatar + greeting + close button */}
            <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                    {session?.user?.image && (
                        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-lg shadow-black/5 flex-shrink-0">
                            <Image
                                src={session.user.image}
                                alt={session.user.name || 'Profile'}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    )}
                    <div>
                        <p className="font-serif text-md font-medium text-mowka-text-primary leading-tight">
                            Hi {session?.user?.name?.split(' ')[0]},
                        </p>
                        <p className="font-sans text-sm text-mowka-text-secondary mt-1 leading-snug">
                            {form.intro}
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onDismiss}
                    aria-label="Close"
                    className="p-2 rounded-full text-mowka-text-quaternary hover:text-mowka-text-tertiary hover:bg-mowka-bg-secondary transition-all flex-shrink-0 -mt-1 -mr-2"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">

                <div className="flex flex-col gap-1">
                    <label className="form-label">{form.portfolioLabel}</label>
                    <input
                        type="text"
                        placeholder={form.portfolioPlaceholder}
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        className="form-field-input py-2"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="form-label">{form.phoneLabel}</label>
                    <PhoneInput
                        defaultCountry="in"
                        value={phone}
                        onChange={setPhone}
                        className="w-full flex group"
                        inputClassName={PHONE_INPUT_CLASS}
                        countrySelectorStyleProps={{ buttonClassName: PHONE_BUTTON_CLASS }}
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label className="form-label">{form.timeLabel}</label>
                    <div className="grid grid-cols-3 gap-2">
                        {TIME_OPTIONS.map(opt => {
                            const isSelected = preferredTime === opt.value;
                            return (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => setPreferredTime(v => v === opt.value ? '' : opt.value)}
                                    className={`px-2 py-2.5 rounded-full border text-[12px] font-medium transition-all duration-300 flex items-center justify-center gap-1.5 ${isSelected
                                        ? `${opt.color} border-transparent text-white shadow-md scale-[1.02]`
                                        : 'bg-white border-mowka-border-light text-mowka-text-secondary hover:border-mowka-text-quaternary hover:text-mowka-text-primary hover:bg-mowka-bg-secondary'
                                        }`}
                                >
                                    {opt.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {errorMsg && (
                    <p className="text-sm text-red-500 -mt-6 font-medium text-center">{errorMsg}</p>
                )}

                <button type="submit" className="btn-primary w-full py-4 mt-4 group">
                    {form.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>
    );
}
