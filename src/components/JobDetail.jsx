"use client";

import { Reveal } from './Reveal';
import { FiMapPin, FiBriefcase, FiDollarSign, FiClock, FiGlobe, FiExternalLink, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Footer } from './Footer';

export const JobDetail = ({ job }) => {
    // Format location
    const formatLocation = () => {
        if (job.jobLocation.type === 'remote') {
            return `Remote · ${job.jobLocation.country}`;
        }
        return `${job.jobLocation.city} · Hybrid`;
    };

    return (
        <>
            <div className="min-h-screen bg-mowka-bg-primary">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20">
                    <Reveal>
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="type-h2 text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                                {job.title}
                            </h1>

                            {/* Metadata Row - Horizontal Wrap */}
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-3 text-mowka-text-secondary type-body">

                                {/* Company */}
                                <div className="flex items-center gap-2">
                                    <FiGlobe className="w-5 h-5 text-mowka-text-tertiary" />
                                    {job.companyUrl ? (
                                        <a
                                            href={job.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-mowka-text-primary hover:text-mowka-link hover:underline decoration-1 underline-offset-4 transition-all flex items-center gap-1"
                                        >
                                            {job.company}
                                            <FiExternalLink className="w-3.5 h-3.5 text-mowka-text-tertiary opacity-50" />
                                        </a>
                                    ) : (
                                        <span className="font-medium text-mowka-text-primary">
                                            {job.company}
                                        </span>
                                    )}
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2">
                                    <FiMapPin className="w-5 h-5 text-mowka-text-tertiary" />
                                    <span>
                                        {formatLocation()}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Main Content */}
                        <div>
                            {/* Unified Intro Text (Summary + About) */}
                            <div className="mb-12">
                                <h2 className="text-xl md:text-2xl font-serif font-medium text-mowka-text-primary mb-4">
                                    About the Role
                                </h2>
                                <div className="space-y-6">
                                    <p className="type-body text-mowka-text-secondary leading-relaxed">
                                        {job.description.summary}
                                    </p>
                                    {job.description.about && (
                                        <p className="type-body text-mowka-text-secondary leading-relaxed">
                                            {job.description.about}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-12">
                                {/* Responsibilities */}
                                {job.description.responsibilities && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-medium text-mowka-text-primary mb-4">
                                            What You'll Do
                                        </h2>
                                        <ul className="space-y-3">
                                            {job.description.responsibilities.map((item, idx) => (
                                                <li key={idx} className="flex gap-3">
                                                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-mowka-text-primary" />
                                                    <span className="type-body text-mowka-text-secondary leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Qualifications */}
                                {job.description.requirements && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-medium text-mowka-text-primary mb-4">
                                            What We're Looking For
                                        </h2>
                                        <ul className="space-y-3">
                                            {job.description.requirements.map((item, idx) => (
                                                <li key={idx} className="flex gap-3">
                                                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-mowka-text-primary" />
                                                    <span className="type-body text-mowka-text-secondary leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Benefits */}
                                {job.description.benefits && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-medium text-mowka-text-primary mb-4">
                                            Benefits
                                        </h2>
                                        <ul className="space-y-3">
                                            {job.description.benefits.map((item, idx) => (
                                                <li key={idx} className="flex gap-3">
                                                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-mowka-text-primary" />
                                                    <span className="type-body text-mowka-text-secondary leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Contact Section */}
                                <div>
                                    <h2 className="text-xl md:text-2xl font-serif font-medium text-mowka-text-primary mb-4">
                                        Interested?
                                    </h2>

                                    <p className="type-body text-mowka-text-secondary mb-6">
                                        Please share your resume on{' '}
                                        <a
                                            href="https://www.linkedin.com/in/kansalshubham/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-mowka-link hover:text-mowka-link-hover underline decoration-1 underline-offset-4"
                                        >
                                            LinkedIn
                                        </a>
                                        {' '}or email at{' '}
                                        <a
                                            href="mailto:shubham@mowka.in"
                                            className="text-mowka-link hover:text-mowka-link-hover underline decoration-1 underline-offset-4"
                                        >
                                            shubham@mowka.in
                                        </a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Reveal>
                </main>
            </div>

            <Footer />
        </>
    );
};
