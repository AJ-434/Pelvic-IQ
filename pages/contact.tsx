import React, { useState } from 'react';
import { INSTAGRAM_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-pro-linen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pro-earth to-pro-mauve/80 py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pro-mauve/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pro-clay/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-pro-blush font-medium mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Have questions about our services or ready to start your recovery journey? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-pro-earth uppercase tracking-tight mb-6">Get In Touch</h2>
              <p className="text-pro-earth/70 mb-8">
                We're here to support you on your pelvic health journey. Reach out and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pro-blush/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-pro-mauve" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-pro-earth uppercase tracking-wider mb-1">Instagram</p>
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-pro-earth/70 hover:text-pro-clay transition-colors">
                      @pelvic_iq
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-pro-earth uppercase tracking-tight mb-8">Send Us A Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-pro-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-pro-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-pro-earth mb-2">Thank You!</h3>
                    <p className="text-pro-earth/70">Your message has been sent. We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-bold text-pro-earth uppercase tracking-wider mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pro-stone/40 bg-pro-linen/30 text-pro-earth placeholder-pro-earth/40 focus:outline-none focus:border-pro-mauve focus:ring-2 focus:ring-pro-mauve/20 transition-all"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-bold text-pro-earth uppercase tracking-wider mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pro-stone/40 bg-pro-linen/30 text-pro-earth placeholder-pro-earth/40 focus:outline-none focus:border-pro-mauve focus:ring-2 focus:ring-pro-mauve/20 transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-pro-earth uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pro-stone/40 bg-pro-linen/30 text-pro-earth placeholder-pro-earth/40 focus:outline-none focus:border-pro-mauve focus:ring-2 focus:ring-pro-mauve/20 transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-pro-earth uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-pro-stone/40 bg-pro-linen/30 text-pro-earth placeholder-pro-earth/40 focus:outline-none focus:border-pro-mauve focus:ring-2 focus:ring-pro-mauve/20 transition-all"
                          placeholder="+61 400 000 000"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-pro-earth uppercase tracking-wider mb-2">
                        What Can We Help You With? *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-pro-stone/40 bg-pro-linen/30 text-pro-earth focus:outline-none focus:border-pro-mauve focus:ring-2 focus:ring-pro-mauve/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select an option...</option>
                        <option value="general">General Enquiry</option>
                        <option value="prolapse">Prolapse & Incontinence</option>
                        <option value="pregnancy">Pregnancy & Postnatal Care</option>
                        <option value="birth-prep">Birth Preparation</option>
                        <option value="pilates">Clinical Pilates</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-pro-earth uppercase tracking-wider mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-pro-stone/40 bg-pro-linen/30 text-pro-earth placeholder-pro-earth/40 focus:outline-none focus:border-pro-mauve focus:ring-2 focus:ring-pro-mauve/20 transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-12 py-4 text-sm font-bold uppercase tracking-wider bg-pro-earth text-white rounded-full hover:bg-pro-clay hover:shadow-xl transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
