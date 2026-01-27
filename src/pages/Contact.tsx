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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to DREAM BIG. We will contact you shortly.');
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
                  <p className="text-slate-400">vaigundaraja13off@gmail.com</p>
                  <p className="text-slate-500 text-sm">Response within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-navy rounded-lg text-brand-accent border border-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Call Us</h4>
                  <p className="text-slate-400">+91 8248974853</p>
                  <p className="text-slate-500 text-sm">All day - 5Am to 10pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-navy rounded-lg text-brand-accent border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>

              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-navy p-8 rounded-2xl border border-white/5 shadow-2xl">
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
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="john@company.com"
                    onChange={handleChange}
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
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-slate-300">Business Type</label>
                  <select
                    id="type"
                    name="type"
                    className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors"
                    onChange={handleChange}
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
                  className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:border-brand-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <Button variant="primary" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};