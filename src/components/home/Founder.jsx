"use client";

import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { HOME_PAGE, FOUNDER } from '../../constants/content';

export const Founder = () => {
    const { opening, quote, body } = HOME_PAGE.founder;

    return (
        <section id="about" className="layout-section overflow-visible">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

                    {/* Left Column: Photo & Connect */}
                    <div className="w-full max-w-[380px] mx-auto lg:mx-0 flex flex-col gap-5">
                            <div className="bg-white rounded-2xl md:rounded-3xl p-3.5 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.14)] ring-1 ring-mowka-border-light">
                                <div className="rounded-xl md:rounded-2xl overflow-hidden ring-[2.5px] ring-mowka-teal-vibrant">
                                    <Image
                                        src={FOUNDER.image}
                                        alt={FOUNDER.name}
                                        width={380}
                                        height={460}
                                        className="w-full h-auto object-cover object-top block"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            </div>


                        </div>
                    <div className="flex flex-col lg:pt-1">
                            <h2 className="type-section-heading text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight">
                                {FOUNDER.name}
                            </h2>

                            <span className="type-label text-xs mt-3">{FOUNDER.jobTitle}, Mowka</span>

                            <p className="type-caption mt-2">
                                {FOUNDER.education} · {FOUNDER.positions
                                    .map((p) => {
                                        const noteText = p.note ? ` (${p.note})` : "";
                                        return `ex-${p.company}${noteText}`;
                                    })
                                    .join(' · ')}
                            </p>

                            <p className="type-body text-mowka-text-primary mt-8">{opening}</p>

                            <blockquote className="my-6 border-l-2 border-mowka-teal-vibrant pl-5">
                                <p className="font-serif text-base md:text-lg leading-snug tracking-tight text-mowka-text-primary">
                                    {quote}
                                </p>
                            </blockquote>

                            <div className="space-y-5">
                                {body.map((p, i) => (
                                    <p key={i} className="type-body text-mowka-text-primary">{p}</p>
                                ))}
                            </div>

                            <a
                                href={FOUNDER.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-compact self-start mt-8"
                            >
                                <FaLinkedin className="w-4 h-4" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    );
};
