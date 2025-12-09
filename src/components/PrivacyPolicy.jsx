import React, { useEffect } from 'react';
import SEO from './SEO';
import { Footer } from './Footer';

export const PrivacyPolicy = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="bg-mowka-bg-primary min-h-screen flex flex-col pt-24 md:pt-32">
            <SEO
                title="Privacy Policy"
                description="Read Mowka's Privacy Policy to understand how we collect, use, and protect your information."
            />
            <div className="max-w-4xl mx-auto px-6 flex-grow pb-12">
                <h1 className="text-3xl md:text-5xl font-serif text-mowka-text-primary mb-8">Privacy Policy</h1>

                <div className="prose prose-lg text-mowka-text-secondary">
                    <p className="text-sm text-mowka-text-tertiary mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Mowka ("we," "us," or "our") is committed to protecting the privacy of our partners and talent network.
                        This policy outlines how we handle information as your trusted talent partner.
                    </p>

                    <p>
                        We operate as a global-first organization with roots in India, connecting world-class engineering teams.
                    </p>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">1. Information We Collect</h3>
                    <p>
                        We collect only what is necessary to build successful partnerships:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>For Partners:</strong> Company context, technical requirements, and team structure details to ensure precise matching.</li>
                        <li><strong>For Talent:</strong> Professional history, technical portfolios, and assessment data to highlight your expertise.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">2. How We Use Information</h3>
                    <p>
                        Your data is used exclusively to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Curate and match exceptional engineering talent with strategic opportunities.</li>
                        <li>Facilitate seamless interview and onboarding processes.</li>
                        <li>Refine our matching methodology and platform experience.</li>
                        <li>Comply with applicable regulations in India and operating jurisdictions.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">3. Data Sharing</h3>
                    <p>
                        We never sell personal data. Information is shared strictly for partnership success:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>With Partners:</strong> Curated talent profiles are shared with hiring teams for evaluation.</li>
                        <li><strong>With Infrastructure:</strong> Trusted third-party tools (ATS, CRM) that support our operations under strict confidentiality.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">4. Security</h3>
                    <p>
                        We employ industry-standard security practices to safeguard all data. While no digital transmission is absolute, we utilize secure, compliant cloud infrastructure to maximize protection.
                    </p>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">5. Contact</h3>
                    <p>
                        For privacy inquiries, please reach out to us at: <a href="mailto:shubham@mowka.in" className="text-mowka-link hover:underline">shubham@mowka.in</a>.
                    </p>

                    <div className="mb-12"></div>
                </div>
            </div>

            <Footer />
        </section>
    );
};
