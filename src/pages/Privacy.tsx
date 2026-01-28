import React from 'react';
import { Section } from '../components/Section';

export const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen pt-20">
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy <span className="text-brand-accent">Policy</span></h1>
                    <p className="text-slate-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-8 text-slate-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us, such as when you fill out our contact form. This may include your name, email address, phone number, and project details. We also collect anonymous usage data via Google Analytics (cookies) to improve our website experience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to:
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Respond to your inquiries and provide customer service.</li>
                                    <li>Send you technical notices, updates, and administrative messages.</li>
                                    <li>Monitor and analyze trends, usage, and activities in connection with our website.</li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                            <p>
                                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
                            <p>
                                We use third-party services such as Google Analytics and Google Sheets to process data. These parties have their own privacy policies which we encourage you to review.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:vaigundaraja13off@gmail.com" className="text-brand-accent hover:underline">vaigundaraja13off@gmail.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    );
};
