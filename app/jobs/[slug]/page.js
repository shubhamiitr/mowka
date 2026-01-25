import { notFound } from 'next/navigation';
import { JobDetail } from '../../../src/components/JobDetail';
import jobsData from '../../../src/data/jobs.json';

// Generate static params for all jobs
export async function generateStaticParams() {
    return jobsData.map((job) => ({
        slug: job.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const job = jobsData.find((j) => j.slug === slug);

    if (!job) {
        return {
            title: 'Job Not Found | Mowka',
        };
    }

    const title = `${job.title} | Mowka`;
    const description = job.description.summary.substring(0, 150) + '...';

    // Add keywords for better search visibility
    const keywords = [
        job.title,
        'Mowka jobs',
        'jobs',
        ...job.skills.slice(0, 5),
        job.jobLocation.type === 'remote' ? 'remote' : job.jobLocation.city
    ].join(', ');

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `/jobs/${job.slug}`,
        },
        openGraph: {
            type: 'website',
            url: `https://mowka.in/jobs/${job.slug}`,
            title: `${job.title} - ${formatSalary(job.salary)}`,
            description,
            images: [{ url: '/og-image.png', width: 1200, height: 630 }],
            siteName: 'Mowka',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/og-image.png'],
        },
    };
}

// Helper function for salary formatting
function formatSalary(salary) {
    const min = (salary.min / 100000).toFixed(0);
    const max = (salary.max / 100000).toFixed(0);
    return `₹${min}-${max}L${salary.equity ? ' + ESOPs' : ''}`;
}

export default async function JobPage({ params }) {
    const { slug } = await params;
    const job = jobsData.find((j) => j.slug === slug);

    if (!job) {
        notFound();
    }

    // Construct full HTML description
    const fullDescription = `
        <p>${job.description.summary}</p>
        <p>${job.description.about}</p>
        <h3>Responsibilities</h3>
        <ul>
            ${job.description.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <h3>Requirements</h3>
        <ul>
            ${job.description.requirements.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <h3>Benefits</h3>
        <ul>
            ${job.description.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
    `;

    // Generate JSON-LD schema for JobPosting
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "@id": `https://mowka.in/jobs/${job.slug}#jobposting`,
        "title": job.title,
        "description": fullDescription,
        "identifier": {
            "@type": "PropertyValue",
            "name": job.company,
            "value": job.id.split('-').pop().toUpperCase() + '-' + Math.floor(Math.random() * 1000) // Simple unique ID generation or use ID
        },
        "datePosted": job.datePosted,
        "validThrough": job.validThrough,
        "employmentType": job.employmentType,
        "hiringOrganization": {
            "@type": "Organization",
            "name": job.company,
            "sameAs": job.companyUrl,
            "logo": "https://mowka.in/favicon.png" // Fallback or needs to be dynamic if possible
        },
        "jobLocation": job.jobLocation.type === 'remote' ? {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": job.jobLocation.country,
            }
        } : {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": job.jobLocation.streetAddress,
                "addressLocality": job.jobLocation.city,
                "addressRegion": job.jobLocation.addressRegion,
                "postalCode": job.jobLocation.postalCode,
                "addressCountry": job.jobLocation.country,
            }
        },
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": job.jobLocation.country,
        },
        "jobLocationType": job.jobLocation.type === 'remote' ? "TELECOMMUTE" : null,
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": job.salary.currency,
            "value": {
                "@type": "QuantitativeValue",
                "minValue": job.salary.min,
                "maxValue": job.salary.max,
                "unitText": "YEAR", // Explicitly set as standard
            }
        },
        "jobBenefits": job.description.benefits ? job.description.benefits.join(', ') : undefined,
        "skills": job.skills ? job.skills.join(', ') : undefined,
        "experienceRequirements": {
            "@type": "OccupationalExperienceRequirements",
            "monthsOfExperience": job.experienceLevel === 'Executive' ? 96 : job.experienceLevel === 'Senior' ? 48 : 24,
        },
        "applicationContact": {
            "@type": "ContactPoint",
            "contactType": "Recruiter",
            "name": "Shubham Kansal",
            "email": "shubham@mowka.in",
        },
        "directApply": true,
        "url": "https://mowka.in/jobs/" + job.slug,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <JobDetail job={job} />
        </>
    );
}
