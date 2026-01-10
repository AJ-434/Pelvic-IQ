import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-pro-linen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pro-earth to-pro-mauve/80 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pro-mauve/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pro-clay/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-pro-blush font-medium mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">About Pelvic IQ</h1>
          <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Qualified care for women who deserve better than the status quo.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-pro-clay font-medium mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-pro-earth uppercase tracking-tight mb-6">
                Women's Health Deserves Better
              </h2>
              <div className="space-y-5 text-pro-earth/70 font-light leading-relaxed">
                <p>
                  Every day, countless women struggle silently with pelvic health conditions, from incontinence and prolapse to pregnancy related discomfort and postnatal recovery challenges. These are not minor inconveniences; they profoundly impact quality of life, confidence, and wellbeing.
                </p>
                <p>
                  Yet the statistics are sobering: <span className="font-semibold text-pro-earth">the majority of these conditions go completely untreated</span>. Women are often told their symptoms are "normal" after childbirth, or simply something they need to live with. This couldn't be further from the truth.
                </p>
                <p>
                  What's more concerning is the growing number of unqualified practitioners offering pelvic health treatments. Without proper training in anatomy, physiology, and evidence-based care, these operators may provide ineffective or even harmful interventions, leaving women frustrated, out of pocket, and still suffering.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pro-mauve/10 to-pro-blush/20 rounded-3xl p-10">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pro-clay/20 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-pro-clay">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-pro-earth mb-2">Underdiagnosed</h3>
                    <p className="text-sm text-pro-earth/60">Most pelvic health conditions remain undiagnosed and untreated for years.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pro-clay/20 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-pro-clay">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-pro-earth mb-2">Normalised</h3>
                    <p className="text-sm text-pro-earth/60">Women are often told their symptoms are "just part of being a woman."</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pro-clay/20 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-pro-clay">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-pro-earth mb-2">Mistreated</h3>
                    <p className="text-sm text-pro-earth/60">Unqualified operators can cause more harm than good with improper treatments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-pro-clay font-medium mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-pro-earth uppercase tracking-tight mb-6">
              Qualified. Specialised. Evidence Based.
            </h2>
            <p className="text-lg text-pro-earth/70 font-light max-w-2xl mx-auto">
              We believe women deserve access to properly qualified practitioners who specialise in pelvic health, not generalists or unqualified operators. Our team have undergone advanced training and qualifications in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Qualification 1 */}
            <div className="bg-pro-linen rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-pro-mauve/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-pro-mauve/20 transition-colors">
                <svg className="w-8 h-8 text-pro-mauve" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-pro-earth uppercase tracking-wider mb-3">Physiotherapy</h3>
              <p className="text-pro-earth/60 text-sm font-light leading-relaxed">
                Fully qualified physiotherapists with comprehensive training in musculoskeletal health and rehabilitation.
              </p>
            </div>

            {/* Qualification 2 */}
            <div className="bg-pro-linen rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-pro-blush/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-pro-blush/30 transition-colors">
                <svg className="w-8 h-8 text-pro-mauve" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-pro-earth uppercase tracking-wider mb-3">Women's Pelvic Health</h3>
              <p className="text-pro-earth/60 text-sm font-light leading-relaxed">
                Specialised training in women's pelvic health conditions including prolapse, incontinence, and pelvic pain.
              </p>
            </div>

            {/* Qualification 3 */}
            <div className="bg-pro-linen rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-pro-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-pro-sage/30 transition-colors">
                <svg className="w-8 h-8 text-pro-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-pro-earth uppercase tracking-wider mb-3">Clinical Pilates</h3>
              <p className="text-pro-earth/60 text-sm font-light leading-relaxed">
                Certified in clinical Pilates, a therapeutic approach that supports core strength, stability, and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pro-earth to-pro-mauve/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-pro-clay/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pro-blush/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-pro-blush font-medium mb-4">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-8">
            Empowering Women Through Expert Care
          </h2>
          <p className="text-xl text-white/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            At Pelvic IQ, everything we do is designed to support women. From our evidence based programs to our commitment to accessible education. We're here to change the narrative that pelvic health issues are "just something you live with."
          </p>
          <p className="text-lg text-white/70 font-light italic max-w-2xl mx-auto">
            "You deserve qualified care from practitioners who truly understand women's pelvic health. That's what Pelvic IQ is all about."
          </p>
          <p className="text-sm text-white/60 font-medium mt-4 uppercase tracking-wider">
            Amy — Founder
        </p>
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pro-earth uppercase tracking-tight mb-6">
            Ready To Start Your Journey?
          </h2>
          <p className="text-lg text-pro-earth/70 font-light mb-8 max-w-2xl mx-auto">
            Whether you're preparing for birth, recovering postnatally, or seeking help for pelvic floor dysfunction, we're here to support you with qualified, compassionate care.
          </p>
          <Link 
              to="/contact" 
              className="px-10 py-4 text-sm font-bold uppercase tracking-wider bg-pro-earth text-white rounded-full hover:bg-pro-clay hover:shadow-xl transition-all"
            >
              Get In Touch
            </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
