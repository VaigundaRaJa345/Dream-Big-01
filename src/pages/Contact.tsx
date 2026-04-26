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
      await fetch('https://script.google.com/macros/s/AKfycbzxtJg-LX77BTeMnLkS0RFNtusHsbK9kJW0mxRqblJwL6FD8thxSbh_DtGJgn1oXRkK/exec', {
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
    <div className="min-h-screen pt-48 bg-white">
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* Contact Info */}
          <div className="space-y-12">
            <h1 className="text-5xl md:text-8xl font-black text-brand-text mb-8 uppercase italic tracking-tighter leading-none">
              Start Your <br />
              <span className="text-brand-accent">Legacy.</span>
            </h1>
            <p className="text-brand-muted text-xl md:text-2xl font-medium leading-relaxed max-w-lg">
              Ready to redefine your brand's future? We're ready to make it happen. Reach out to start the conversation.
            </p>

            <div className="space-y-10 pt-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-brand-text text-sm uppercase tracking-widest mb-2">Write to us</h4>
                  <p className="text-2xl font-bold text-brand-text">hello@dreambig.agency</p>
                  <p className="text-brand-muted font-medium italic mt-1">Our inbox is always open.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-brand-text text-sm uppercase tracking-widest mb-2">Speak to us</h4>
                  <p className="text-2xl font-bold text-brand-text">+91 8248976853</p>
                  <p className="text-brand-muted font-medium italic mt-1">Mon - Sat | 9AM - 8PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-brand-text text-sm uppercase tracking-widest mb-2">Visit us</h4>
                  <p className="text-2xl font-bold text-brand-text">Chennai, India</p>
                  <p className="text-brand-muted font-medium italic mt-1">Global operations, local heartbeat.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-navy p-12 md:p-16 rounded-[4rem] border border-black/5 shadow-2xl relative overflow-hidden">
            {submitStatus === 'success' ? (
              <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-12 animate-fade-in-up">
                <div className="w-24 h-24 bg-brand-accent text-white rounded-full flex items-center justify-center mb-10 shadow-2xl shadow-brand-accent/40 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-4xl font-black text-brand-text mb-6 uppercase italic tracking-tighter">Transmission Received.</h3>
                <p className="text-brand-muted text-xl mb-12 max-w-sm font-medium">
                  The transformation has begun. Our team will reach out within 12 hours.
                </p>
                <Button onClick={() => setSubmitStatus('idle')} variant="secondary" className="scale-110">Another Mission</Button>
              </div>
            ) : null}

            <h3 className="text-3xl font-black mb-10 text-brand-text uppercase italic tracking-tighter">Mission <span className="text-brand-accent">Inquiry</span></h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black text-brand-text uppercase tracking-widest">Your Identity</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white border-2 border-black/5 rounded-2xl p-5 text-brand-text font-bold focus:border-brand-accent focus:outline-none transition-all placeholder:text-brand-muted/50"
                    placeholder="e.g. Satoshi Nakamoto"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black text-brand-text uppercase tracking-widest">Digital Channel</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white border-2 border-black/5 rounded-2xl p-5 text-brand-text font-bold focus:border-brand-accent focus:outline-none transition-all placeholder:text-brand-muted/50"
                    placeholder="e.g. satoshi@bitcoin.org"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-xs font-black text-brand-text uppercase tracking-widest">Secure Line</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    className="w-full bg-white border-2 border-black/5 rounded-2xl p-5 text-brand-text font-bold focus:border-brand-accent focus:outline-none transition-all placeholder:text-brand-muted/50"
                    placeholder="+91 00000 00000"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="type" className="text-xs font-black text-brand-text uppercase tracking-widest">Venture Stage</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    className="w-full bg-white border-2 border-black/5 rounded-2xl p-5 text-brand-text font-bold focus:border-brand-accent focus:outline-none transition-all appearance-none"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <option>Pre-Seed / Startup</option>
                    <option>Scale-Up / Growth</option>
                    <option>Enterprise / Established</option>
                    <option>Rebranding Project</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black text-brand-text uppercase tracking-widest">Mission Objective</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  className="w-full bg-white border-2 border-black/5 rounded-2xl p-5 text-brand-text font-bold focus:border-brand-accent focus:outline-none transition-all resize-none placeholder:text-brand-muted/50"
                  placeholder="Tell us about the empire you want to build..."
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500 text-white rounded-2xl font-bold text-sm text-center">
                  Mission failure. Please try again or reach out directly.
                </div>
              )}

              <Button variant="primary" className="w-full py-6 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-4">
                    <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Encrypting...
                  </span>
                ) : 'Initiate Transformation'}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};