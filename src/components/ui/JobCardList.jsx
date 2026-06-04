"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JobMetaStrip } from './JobMetaStrip';
import { event } from '../../lib/gtag';

export const JobCardList = ({ jobs }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl mx-auto">
        {jobs.map((j) => (
            <Link
                key={j.slug}
                href={`/jobs/${j.slug}`}
                className="type-timeline-card group !flex-row items-center justify-between"
                onClick={() => event('job_card_click', { job_title: j.title, job_slug: j.slug })}
            >
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="type-card-title">{j.title}</h2>
                    </div>
                    <p className="type-caption font-normal">₹{j.salaryMin}L – ₹{j.salaryMax}L · {j.equity} equity</p>
                    <JobMetaStrip job={j} variant="listing" className="mt-2" />
                </div>
                <ArrowRight className="shrink-0 w-5 h-5 text-mowka-text-quaternary group-hover:text-mowka-text-secondary group-hover:translate-x-1 transition-all duration-300" />
            </Link>
        ))}
    </div>
);
