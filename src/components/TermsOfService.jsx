import React, { useEffect } from 'react';
import SEO from './SEO';
import { Footer } from './Footer';

export const TermsOfService = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="bg-mowka-bg-primary min-h-screen flex flex-col pt-24 md:pt-32">
            <SEO
                title="Terms of Service"
                description="Review Mowka's Terms of Service for using our platform and talent partnership services."
            />
            <div className="max-w-4xl mx-auto px-6 flex-grow pb-12">
                <h1 className="text-3xl md:text-5xl font-serif text-mowka-text-primary mb-8">Terms of Service</h1>

                <div className="prose prose-lg text-mowka-text-secondary">
                    <p className="text-sm text-mowka-text-tertiary mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Welcome to Mowka. By accessing our platform or engaging with our talent partnership services, you agree to these Terms of Service.
                    </p>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">1. Services</h3>
                    <p>
                        Mowka provides premier technical talent solutions. We operate as a strategic partner connecting forward-thinking companies ("Partners") with elite engineering professionals ("Talent").
                    </p>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">2. Usage Expectations</h3>
                    <p>
                        We prioritize integrity and transparency. Users agree to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide accurate and authentic professional information.</li>
                        <li>Respect the confidentiality of introductions and proprietary assessment data.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">3. Intellectual Property</h3>
                    <p>
                        All content, methodologies, and brand assets on this platform are the property of Mowka and are protected by applicable intellectual property laws.
                    </p>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">4. Liability</h3>
                    <p>
                        Mowka facilitates high-intent introductions but does not guarantee specific hiring outcomes. We connect talent and opportunity; the final employment relationship is between the Partner and Talent.
                        We operate with a commitment to quality but are not liable for incidental business outcomes.
                    </p>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">5. Governing Law</h3>
                    <p>
                        These Terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in Bengaluru, India.
                    </p>

                    <h3 className="text-xl font-semibold text-mowka-text-primary mt-8 mb-4">6. Updates</h3>
                    <p>
                        We reserve the right to refine these terms to reflect our evolving services. Continued engagement constitutes acceptance of updated terms.
                    </p>

                    <div className="mb-12"></div>
                </div>
            </div>

            <Footer />
        </section>
    );
};
