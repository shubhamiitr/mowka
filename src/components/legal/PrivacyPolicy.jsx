"use client";

import { useEffect } from "react";
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";
import { BRAND } from "../../constants/content";

const NAV_LINKS = [
    { label: 'For Founders', href: '/' },
    { label: 'For Builders', href: '/builder' },
];

export const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar links={NAV_LINKS} />

            <section className="layout-page-article">
                <div className="layout-container-article">
                    <h1 className="type-article-heading">Privacy Policy</h1>

                    <div className="type-article-body">
                        <p className="type-article-meta">Last Updated: May 2026</p>

                        <p>
                            This Privacy Policy explains how Mowka collects, uses, and protects personal information when you use our website and hiring services.
                            It applies to founders and hiring leaders ("Founders"), professionals and engineers ("Builders"), and website visitors.
                        </p>

                        <h3 className="type-article-section-title">1. Information we collect</h3>

                        <p><strong>From Founders:</strong> Company details, hiring requirements, role information, communication history, and feedback.</p>

                        <p><strong>From Builders:</strong> Name, contact details, resume, professional background, preferences, and interview-related notes.</p>

                        <p><strong>From visitors:</strong> Device information, IP address, browser type, pages visited, and analytics data.</p>

                        <p><strong>From communications:</strong> Information shared via forms, email, scheduling tools, or direct conversations.</p>

                        <h3 className="type-article-section-title">2. How we use information</h3>

                        <p>
                            We use information to operate our hiring services, evaluate and introduce Builders, facilitate communication between Founders and Builders,
                            improve our services, and comply with legal obligations. We do not sell personal data.
                        </p>

                        <h3 className="type-article-section-title">3. Information sharing</h3>

                        <ul className="type-article-section-list">
                            <li><strong>Between parties:</strong> A Builder's profile is shared with Founders only after the Builder agrees to the introduction.</li>
                            <li><strong>Service providers:</strong> We use third-party tools for communication, scheduling, CRM, and analytics under confidentiality agreements.</li>
                            <li><strong>Legal:</strong> We may disclose information when required by law or to protect rights, safety, or compliance obligations.</li>
                        </ul>

                        <h3 className="type-article-section-title">4. Data retention</h3>
                        <p>
                            We retain data only as long as necessary to provide services or meet legal obligations.
                            Builders may request removal from our active database at any time.
                        </p>

                        <h3 className="type-article-section-title">5. Security</h3>
                        <p>
                            We use reasonable technical and organizational safeguards to protect data. No system is completely secure.
                        </p>

                        <h3 className="type-article-section-title">6. Your rights</h3>
                        <p>
                            You may request access, correction, or deletion of your data by contacting{" "}
                            <a href={`mailto:${BRAND.email}`} className="text-mowka-link hover:underline">
                                {BRAND.email}
                            </a>.
                        </p>

                        <h3 className="type-article-section-title">7. Cookies</h3>
                        <p>
                            We use cookies and analytics tools to understand usage and improve performance.
                            You may disable cookies in your browser settings.
                        </p>

                        <h3 className="type-article-section-title">8. Changes</h3>
                        <p>
                            We may update this Privacy Policy from time to time. Updates will be reflected by the "Last Updated" date.
                        </p>

                        <h3 className="type-article-section-title">9. Contact</h3>
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
