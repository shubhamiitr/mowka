"use client";

import { useEffect } from "react";
import { Navbar } from "../home/Navbar";
import { Footer } from "../ui/Footer";
import { BRAND } from "../../constants/content";

export const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />

            <section className="layout-page-doc">
                <div className="layout-container-doc">
                    <h1 className="type-doc-heading">Terms of Service</h1>

                    <div className="type-prose">
                        <p className="type-doc-meta">Last Updated: May 2026</p>

                        <p>
                            These Terms govern your use of Mowka’s website and hiring services.
                            They apply to founders and hiring teams (“Founders”), professionals and engineers (“Builders”), and website visitors.
                        </p>

                        <h3 className="type-doc-section-title">1. Service overview</h3>
                        <p>
                            Mowka provides curated introductions of pre-evaluated Builders for technical and leadership roles.
                            We focus on high-confidence, low-volume hiring rather than large-scale recruitment pipelines.
                        </p>

                        <h3 className="type-doc-section-title">2. Eligibility</h3>
                        <p>
                            You must be at least 18 years old and legally able to enter into agreements. All information provided must be accurate.
                        </p>

                        <h3 className="type-doc-section-title">3. Founder obligations</h3>
                        <ul className="list-doc">
                            <li>Provide accurate hiring requirements, compensation, and role details.</li>
                            <li>Engage professionally with introduced Builders.</li>
                            <li>Share timely feedback during the hiring process.</li>
                        </ul>

                        <h3 className="type-doc-section-title">4. Builder obligations</h3>
                        <ul className="list-doc">
                            <li>Provide accurate professional information.</li>
                            <li>Maintain confidentiality of company and role details.</li>
                            <li>Engage professionally throughout the process.</li>
                        </ul>

                        <h3 className="type-doc-section-title">5. Fees and attribution</h3>
                        <p>
                            Mowka operates on a success-based model — fees apply only when a Builder introduced by Mowka joins your organization, and terms are agreed in writing before engagement begins. If a Builder is hired within 12 months of introduction — including into any role within your company or its affiliates — the agreed fee remains applicable.
                        </p>

                        <h3 className="type-doc-section-title">6. Confidentiality</h3>
                        <p>
                            All non-public information shared during the hiring process must be treated as confidential and used only for evaluation purposes.
                        </p>

                        <h3 className="type-doc-section-title">7. No guarantee</h3>
                        <p>
                            We provide introductions and evaluation support but do not guarantee hiring outcomes or performance.
                            Final hiring decisions are made solely by the Founder.
                        </p>

                        <h3 className="type-doc-section-title">8. Limitation of liability</h3>
                        <p>
                            Liability is limited to fees paid in the 12 months preceding any claim.
                            We are not liable for indirect or consequential damages.
                        </p>

                        <h3 className="type-doc-section-title">9. Termination</h3>
                        <p>
                            Either party may terminate engagement with reasonable notice.
                            Certain obligations, including fees, confidentiality, attribution, and liability, survive termination.
                        </p>

                        <h3 className="type-doc-section-title">10. Changes</h3>
                        <p>
                            We may update these Terms from time to time. Continued use implies acceptance of updates.
                        </p>

                        <h3 className="type-doc-section-title">11. Contact</h3>
                        <p>
                            <a href={`mailto:${BRAND.email}`} className="text-mowka-link hover:underline">
                                {BRAND.email}
                            </a>
                        </p>

                        <div className="mb-12"></div>
                    </div>
                </div>

                <Footer />
            </section>
        </>
    );
};