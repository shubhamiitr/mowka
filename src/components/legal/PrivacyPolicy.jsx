"use client";

import { useEffect } from 'react';
import { Navbar } from '../home/Navbar';
import { Footer } from '../Footer';
import { COMPANY_INFO } from '../../constants/content';

export const PrivacyPolicy = () => {
    const company = COMPANY_INFO;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <section className="layout-doc-page">
                <div className="layout-doc-container">
                    <h1 className="type-h1-doc">Privacy Policy</h1>

                    <div className="type-prose">
                        <p className="type-doc-meta">Last Updated: May 2026</p>

                        <p>
                            This explains what Mowka collects, why, who we share it with, and what control you have. It applies to founders and hiring teams (<strong>Partners</strong>), builders we engage on roles (<strong>Builders</strong>), and visitors to mowka.in.
                        </p>

                        <p>
                            Mowka is operated by {company.legalName}, registered at {company.registeredAddress} (CIN: {company.cin}). Information may be processed in India and in countries where our service providers operate. Using the site or our services means you accept this policy.
                        </p>

                        <h3 className="type-h3-doc">1. What we collect</h3>
                        <p>
                            <strong>From Companies:</strong> company details, role specifics (scope, compensation, success criteria), team contacts, and feedback after each round.
                        </p>
                        <p>
                            <strong>From Talent:</strong> name, contact details, location, professional history, resume, work samples, what you want next, and notes from our conversations.
                        </p>
                        <p>
                            <strong>From visitors:</strong> standard analytics (IP address, device, browser, pages visited) and anything you submit through a form.
                        </p>

                        <h3 className="type-h3-doc">2. How we use it</h3>
                        <p>
                            Only to do the work you've engaged us for — understand roles, identify and evaluate Talent, coordinate interviews, capture feedback, keep our network current, and comply with law. We do not sell personal information.
                        </p>

                        <h3 className="type-h3-doc">3. Who we share it with</h3>
                        <ul className="list-doc">
                            <li><strong>Companies:</strong> a Talent's profile, after the Talent has agreed to the introduction.</li>
                            <li><strong>Talent:</strong> role and Company context, so they can decide whether to engage.</li>
                            <li><strong>Service providers:</strong> tools we use to operate Mowka (email, scheduling, CRM, cloud storage, analytics), bound by confidentiality.</li>
                            <li><strong>Legal:</strong> when required by law or to protect Mowka, our community, or the public.</li>
                        </ul>

                        <h3 className="type-h3-doc">4. Retention</h3>
                        <p>
                            We keep information for as long as it's useful to working with you, or as required by law. Builders can ask to be removed from active consideration at any time.
                        </p>

                        <h3 className="type-h3-doc">5. Security</h3>
                        <p>
                            Encrypted storage, access controls, and limited internal access. No system is fully secure, but we work to keep risk low.
                        </p>

                        <h3 className="type-h3-doc">6. Your rights</h3>
                        <p>
                            You can ask us to show, correct, delete, or stop using your information, or withdraw consent. Email <a href={`mailto:${company.email}`} className="text-mowka-link hover:underline">{company.email}</a>. We may verify your identity before acting.
                        </p>

                        <h3 className="type-h3-doc">7. Cookies</h3>
                        <p>
                            We use cookies and analytics to understand how the site is used. You can disable cookies in your browser; some features may not work as well.
                        </p>

                        <h3 className="type-h3-doc">8. Age</h3>
                        <p>
                            Mowka is for working professionals and hiring teams. We do not knowingly collect information from anyone under 18.
                        </p>

                        <h3 className="type-h3-doc">9. Changes</h3>
                        <p>
                            We'll update this policy as needed. The "Last Updated" date above reflects the most recent revision.
                        </p>

                        <h3 className="type-h3-doc">10. Contact</h3>
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
