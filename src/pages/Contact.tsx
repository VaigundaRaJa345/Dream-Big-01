import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Startup',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use text/plain to avoid CORS preflight issues with Google Apps Script
      await fetch('https://script.google.com/macros/s/AKfycbzhHpjrYCQ6jGNc3Ll7RPbuxjGTsAOYgGMYLSjeqf1QfSOOLYsJR5rmh3yN_-g4akA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      // Since mode is no-cors, we can't fully check the response status 200, but we assume success if no error thrown
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: 'Startup',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something <span className="text-brand-accent">Big</span></h1>
            <p className="text-slate-400 text-lg mb-10">
              Ready to elevate your business? Fill out the form, or reach out directly. We're excited to hear your vision.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-navy rounded-lg text-brand-accent border border-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email Us</h4>
                  <p className="text-slate-400">team@dbpro.digital</p>
                  <p className="text-slate-500 text-sm">Response within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-navy rounded-lg text-brand-accent border border-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Call Us</h4>
                  <p className="text-slate-400">+91 8248976853</p>
                  <p className="text-slate-500 text-sm">All day - 5Am to 10pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-navy rounded-lg text-brand-accent border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Visit Us</h4>
                  <p className="text-slate-400">Chennai</p>
                  <p className="text-slate-500 text-sm">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-navy p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
            {submitStatus === 'success' ? (
              <div className="absolute inset-0 z-20 bg-brand-navy/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-24 h-24 bg-brand-accent/20 rounded-full blur-3xl animate-blob"></div>
                  <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-brand-glow/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 mx-auto border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-[pulse_2s_infinite]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 mb-8 max-w-sm">
                  Rocket launch initiated! 🚀 <br />
                  We'll review your mission details and respond within 24 hours.
                </p>
                <Button onClick={() => setSubmitStatus('idle')} variant="outline" className="min-w-[150px]">Send Another</Button>
              </div>
            ) : null}

            <h3 className="text-2xl font-bold mb-6 text-white">Start Your Journey</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="john@company.com"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-slate-300">Business Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <option>Startup</option>
                    <option>Small Business</option>
                    <option>Enterprise</option>
                    <option>Non-Profit</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button variant="primary" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};