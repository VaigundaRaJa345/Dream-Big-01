import React from 'react';
import { Section } from '../components/Section';

export const Terms: React.FC = () => {
    return (
        <div className="min-h-screen pt-20">
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms and <span className="text-brand-accent">Conditions</span></h1>
                    <p className="text-slate-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-8 text-slate-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the website of DREAM BIG Digital Solutions ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                            <p>
                                We provide digital services including but not limited to web development, app development, branding, and digital marketing. All services are subject to a separate service agreement signed by both parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and code, is the property of DREAM BIG Digital Solutions and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                            <p>
                                In no event shall DREAM BIG Digital Solutions be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at <a href="mailto:vaigundaraja13off@gmail.com" className="text-brand-accent hover:underline">vaigundaraja13off@gmail.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    );
};
