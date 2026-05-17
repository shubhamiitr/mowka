"use client";

import { useEffect } from 'react';
import { Navbar } from '../home/Navbar';
import { Footer } from '../Footer';
import { COMPANY_INFO } from '../../constants/content';

export const TermsOfService = () => {
    const company = COMPANY_INFO;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <Navbar />
        <section className="layout-doc-page">
            <div className="layout-doc-container">
                <h1 className="type-h1-doc">Terms of Service</h1>

                <div className="type-prose">
                    <p className="type-doc-meta">Last Updated: May 2026</p>

                    <p>
                        These terms govern your use of mowka.in and our hiring services. They apply to founders and hiring teams (<strong>Partners</strong>), builders we engage on roles (<strong>Builders</strong>), and visitors to the site.
                    </p>

                    <p>
                        Mowka is operated by {company.legalName}, registered at {company.registeredAddress} (CIN: {company.cin}). Using the site or our services means you accept these terms.
                    </p>

                    <h3 className="type-h3-doc">1. What Mowka does</h3>
                    <p>
                        Mowka is a practitioner-led hiring partner. We introduce one calibrated Builder at a time and sharpen the search based on Partner feedback.
                    </p>

                    <h3 className="type-h3-doc">2. Eligibility</h3>
                    <p>
                        You must be 18 or older and able to enter a contract where you live. Information you share must be accurate and yours.
                    </p>

                    <h3 className="type-h3-doc">3. Partner commitments</h3>
                    <ul className="list-doc">
                        <li>Provide accurate context about the company, role, compensation, and team.</li>
                        <li>Treat introduced Builders professionally and share feedback after each round.</li>
                        <li>If you hire a Builder we introduced — for any role at your company or an affiliate — within <strong>12 months of the introduction</strong>, the agreed Mowka fee applies.</li>
                        <li>Tell us if you hire someone we introduced, even into a different role.</li>
                    </ul>

                    <h3 className="type-h3-doc">4. Builder commitments</h3>
                    <ul className="list-doc">
                        <li>Share accurate, current professional information.</li>
                        <li>Be direct about what you want next.</li>
                        <li>Treat Partner information as confidential.</li>
                        <li>Respond to Mowka and to Partners in a reasonable timeframe.</li>
                    </ul>

                    <h3 className="type-h3-doc">5. Fees</h3>
                    <p>
                        We're paid only when a Builder we introduced joins. No retainer, no upfront fees. The exact percentage, currency, and payment terms are agreed in writing before introductions begin.
                    </p>

                    <h3 className="type-h3-doc">6. Confidentiality</h3>
                    <p>
                        Information shared between Partners, Builders, and Mowka — strategy, compensation, plans — is confidential and used only to support the engagement.
                    </p>

                    <h3 className="type-h3-doc">7. Intellectual property</h3>
                    <p>
                        The Mowka name, website, methodology, and materials are ours. Don't copy or reuse them outside our engagement without written permission.
                    </p>

                    <h3 className="type-h3-doc">8. No guarantee</h3>
                    <p>
                        We make introductions; we don't guarantee outcomes. The hiring decision and the employment relationship are between Partner and Builder.
                    </p>

                    <h3 className="type-h3-doc">9. Limitation of liability</h3>
                    <p>
                        To the maximum extent permitted by law, Mowka's total liability is capped at the fees paid to us in the 12 months before the event giving rise to the claim. We are not liable for indirect or consequential losses.
                    </p>

                    <h3 className="type-h3-doc">10. Termination</h3>
                    <p>
                        Either party may end the engagement with reasonable written notice. Mowka may suspend or end access for breach or suspicion of fraud or harm. Confidentiality, intellectual property, fees owed, the 12-month attribution period, limitation of liability, and governing law survive termination.
                    </p>

                    <h3 className="type-h3-doc">11. Changes</h3>
                    <p>
                        We may update these terms as needed. The "Last Updated" date above reflects the most recent revision.
                    </p>

                    <h3 className="type-h3-doc">12. Governing law</h3>
                    <p>
                        Indian law governs these terms. Disputes are subject to the exclusive jurisdiction of the courts in Kota, Rajasthan, India.
                    </p>

                    <h3 className="type-h3-doc">13. Contact</h3>
                    <p>
                        <a href={`mailto:${company.email}`} className="text-mowka-link hover:underline">{company.email}</a>
                    </p>

                    <div className="mb-12"></div>
                </div>
            </div>

            <Footer />
        </section>
        </>
    );
};
