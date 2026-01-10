
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../Components/newsletter';

const Home: React.FC = () => {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [cheatSheetEmail, setCheatSheetEmail] = useState('');
  const [cheatSheetSubmitted, setCheatSheetSubmitted] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail) {
      setHeroSubmitted(true);
      console.log('Hero sub to community:', heroEmail);
    }
  };

  const handleCheatSheetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cheatSheetEmail) {
      setCheatSheetSubmitted(true);
      console.log('Cheat sheet download:', cheatSheetEmail);
    }
  };

  const physicalRealities = [
    "Ongoing pelvic pressure or heaviness.",
    "Leakage during exercise, coughing, or sneezing.",
    "Pelvic organ prolapse or persistent bowel dysfunction.",
    "Separation of the abdominal wall post birth."
  ];

  const lifestyleImpacts = [
    "Social withdrawal due to the fear of accidents.",
    "Loss of identity as you avoid activities you love, such as exercise and intimacy.",
    "Feeling \"broken\" or disconnected from your own body.",
    "Anxiety surrounding long term physical health."
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-pro-linen overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 h-full">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="w-full lg:w-1/2 flex items-center py-20 lg:py-32">
              <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="mb-6">
                  <span className="text-sm uppercase tracking-[0.4em] text-pro-clay font-bold">Clinical Pelvic Physiotherapy</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.1] tracking-tight uppercase text-pro-earth">
                  Stop Managing Symptoms.<br/>
                  <span className="text-pro-mauve italic font-serif normal-case whitespace-nowrap">Start Reclaiming Control.</span>
                </h1>
                <p className="text-lg text-pro-earth/70 mb-12 font-light leading-relaxed">
                  Clinically informed pelvic health programs for pelvic floor dysfunction, birth preparation and postnatal recovery — designed by <strong className="font-bold">qualified physiotherapists</strong>, so you can recover with confidence.
                </p>
                
                <div className="max-w-md">
                  {heroSubmitted ? (
                    <div className="animate-in fade-in zoom-in-95 p-6 bg-pro-sage/10 rounded-2xl text-pro-sage font-medium text-sm">
                      Thank you for joining. Welcome to the community.
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-bold uppercase tracking-widest text-pro-earth mb-4">Join the community</p>
                      <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          value={heroEmail}
                          onChange={(e) => setHeroEmail(e.target.value)}
                          placeholder="Your email address"
                          className="flex-grow px-6 py-4 bg-white border border-pro-stone focus:outline-none focus:border-pro-clay text-pro-earth font-light rounded-2xl text-sm"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-pro-earth text-pro-linen px-8 py-4 uppercase text-[10px] font-bold tracking-widest hover:bg-pro-clay transition-all duration-500 rounded-2xl shadow-lg whitespace-nowrap"
                        >
                          Subscribe
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image - Women's wellness and pelvic health */}
        <div 
          className="relative lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 order-1 lg:order-none"
          style={{ minHeight: '100%' }}
        >
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ borderBottomLeftRadius: '6rem' }}
          >
            <img 
              src="/images/pelviciq-hero.png" 
              alt="Woman relaxing on beach - pelvic health wellness" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'top center'
              }}
            />
          </div>
        </div>
      </section>

      {/* The Evidence Section */}
      <section className="bg-pro-earth text-pro-linen py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base uppercase tracking-[0.4em] text-pro-clay font-bold mb-8">The Clinical Reality</h2>
          <p className="text-3xl md:text-4xl font-light leading-snug mb-12">
            Statistics from the <span className="text-pro-blush font-normal">Australian Institute of Health and Welfare</span> indicate that one in three women will experience urinary incontinence. Over <span className="text-pro-blush font-normal">70% go untreated</span> because of the common myth that these symptoms are normal.
          </p>
          <p className="text-xl text-pro-linen/70 font-light max-w-2xl mx-auto">
            We provide an evidence-based framework that removes the guesswork and provides a core path forward that fits your lifestyle.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pro-blush/30 rounded-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" 
              alt="Woman exercising with focus" 
              className="rounded-3xl shadow-xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-pro-stone/10"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-base uppercase tracking-[0.3em] text-pro-clay font-bold mb-4">The Challenge</h2>
            <h3 className="text-4xl font-bold text-pro-earth mb-6 uppercase tracking-tight leading-snug">
              Evidence is the antidote to uncertainty.
            </h3>
            <div className="space-y-6 text-pro-earth/80 font-light leading-relaxed">
              <p>
                Pelvic health challenges often feel like a silent battle. Many women are told their symptoms are normal, but "common" does not mean "normal". Without evidence-based care, you are left guessing about your own recovery.
              </p>
              <p>
                We provide the diagnostic clarity you deserve. We avoid the "wait and see" approach and focus on clinical precision and a clear pathway forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Invisible Toll Section */}
      <section className="bg-pro-linen py-40 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-pro-mauve/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 left-[-10%] w-[30%] h-[30%] bg-pro-clay/5 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.6em] text-pro-clay font-bold mb-8">Clinical Narrative</p>
            <h2 className="text-5xl md:text-7xl font-serif text-pro-earth leading-tight italic tracking-tighter mb-10">
              Your body is telling a story.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Physical Reality Card */}
            <div className="bg-gradient-to-br from-pro-mauve/10 to-pro-blush/10 rounded-3xl p-8 md:p-10 border border-pro-mauve/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-pro-mauve/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pro-mauve" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-pro-earth uppercase tracking-tight">The Physical Reality</h4>
                  <p className="text-pro-earth/50 text-sm font-light">Identifying the clinical source</p>
                </div>
              </div>
              <div className="space-y-5">
                {physicalRealities.map((text, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-pro-mauve mt-2.5 shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-lg text-pro-earth/80 leading-relaxed group-hover:text-pro-earth transition-colors">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle Impact Card */}
            <div className="bg-gradient-to-br from-pro-clay/10 to-pro-stone/20 rounded-3xl p-8 md:p-10 border border-pro-clay/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-pro-clay/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pro-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-pro-earth uppercase tracking-tight">The Lifestyle Impact</h4>
                  <p className="text-pro-earth/50 text-sm font-light">The cost of leaving symptoms unmanaged</p>
                </div>
              </div>
              <div className="space-y-5">
                {lifestyleImpacts.map((text, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-pro-clay mt-2.5 shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-lg text-pro-earth/80 leading-relaxed group-hover:text-pro-earth transition-colors">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-pro-earth/50 font-light text-xl leading-relaxed italic">
              "When we ignore the physical, we inadvertently sacrifice our freedom. Let's address the clinical cause to restore your lifestyle."
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-pro-clay font-bold">- Amy Farcich, Founder</p>
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-6 bg-pro-earth text-pro-linen px-12 py-6 rounded-full hover:bg-pro-clay transition-all duration-700 shadow-xl group"
            >
              <span className="text-sm uppercase tracking-[0.3em] font-bold">Start Your Recovery</span>
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          </div>
      </section>

      {/* Birth Options Cheat Sheet Download - Full Width Section */}
      <section className="bg-gradient-to-br from-pro-earth via-pro-earth to-pro-mauve/80 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pro-mauve/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pro-clay/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image on left with professional 3D effect */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pro-clay to-pro-mauve rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
                <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/images/birth_options_cover_image.jpg" 
                    alt="Birth Options Cheat Sheet Preview"
                    className="w-64 md:w-80 rounded-2xl shadow-2xl border-4 border-white/20"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-pro-clay text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                    Free Guide
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content on right */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-pro-blush font-medium mb-3">Free Download</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Birth Options Cheat Sheet</h3>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Navigate your birth options with confidence — download our free guide and feel prepared for every decision.
              </p>
              
              {cheatSheetSubmitted ? (
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 inline-block">
                  <p className="text-white font-bold text-lg">✓ Check your inbox!</p>
                  <p className="text-white/70 text-sm mt-1">Your guide is on its way</p>
                </div>
              ) : (
                <form onSubmit={handleCheatSheetSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl">
                  <input
                    type="email"
                    value={cheatSheetEmail}
                    onChange={(e) => setCheatSheetEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 text-base rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-10 py-4 text-sm font-bold uppercase tracking-wider bg-white text-pro-earth rounded-full hover:bg-pro-blush hover:scale-105 transition-all shadow-xl whitespace-nowrap"
                  >
                    Download Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specialised Services Section */}
      <section className="bg-white py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-base uppercase tracking-[0.5em] text-pro-clay font-bold mb-4">Specialisations</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-pro-earth uppercase tracking-tighter leading-none mb-12">
              Our areas of expertise
            </h3>
          </div>

          <div className="space-y-32">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2">
                <div className="w-full h-[400px] md:h-[500px] rounded-3xl shadow-2xl shadow-pro-earth/20 border border-pro-stone/20 overflow-hidden hover:shadow-3xl hover:-translate-y-1 transition-all duration-500">
                  <img 
                    src="/images/Prolapse-and-incontinencev2.png"
                    alt="Prolapse & Incontinence"
                    className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.8]"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-pro-earth">Prolapse & Incontinence</h4>
                <p className="text-pro-earth/70 font-light text-lg leading-relaxed">
                  Feeling heaviness or the constant worry of leaking during daily activities is exhausting. Often, women are told this is just "part of the journey," but we know better.
                </p>
                <div className="bg-pro-linen p-8 rounded-2xl border-l-4 border-pro-clay">
                  <p className="text-base font-bold text-pro-clay uppercase tracking-widest mb-2">Our Approach</p>
                  <p className="text-pro-earth/80 font-light">
                    Using advanced clinical protocols, we provide targeted pelvic floor rehabilitation that focuses on structural support and functional return to exercise.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2">
                <div className="w-full h-[400px] md:h-[500px] rounded-3xl shadow-2xl shadow-pro-earth/20 border border-pro-stone/20 overflow-hidden hover:shadow-3xl hover:-translate-y-1 transition-all duration-500">
                  <img 
                    src="/images/Pregnancy-and-postnatal-carev2.png"
                    alt="Pregnancy & Postnatal Care"
                    className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.8]"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-pro-earth">Pregnancy & Postnatal Care</h4>
                <p className="text-pro-earth/70 font-light text-lg leading-relaxed">
                  Navigating the profound physical shifts of pregnancy and the demanding recovery of the postnatal period requires specialised support. From pelvic girdle pain to safely returning to high-impact exercise, we guide you through every trimester and beyond.
                </p>
                <div className="bg-pro-linen p-8 rounded-2xl border-l-4 border-pro-clay">
                  <p className="text-base font-bold text-pro-clay uppercase tracking-widest mb-2">Our Approach</p>
                  <p className="text-pro-earth/80 font-light">
                    We provide individualised treatment plans that address abdominal wall separation (DRAM), pelvic floor recovery, and functional strength.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2">
                <div className="w-full h-[400px] md:h-[500px] rounded-3xl shadow-2xl shadow-pro-earth/20 border border-pro-stone/20 overflow-hidden hover:shadow-3xl hover:-translate-y-1 transition-all duration-500">
                  <img 
                    src="/images/Birth-preparationv2.png"
                    alt="Birth Preparation Programs"
                    className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.8]"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-pro-earth">Birth Preparation Programs</h4>
                <p className="text-pro-earth/70 font-light text-lg leading-relaxed">
                  Labour is the most significant physical event of your life. Uncertainty leads to agitation and poor outcomes.
                </p>
                <div className="bg-pro-linen p-8 rounded-2xl border-l-4 border-pro-clay">
                  <p className="text-base font-bold text-pro-clay uppercase tracking-widest mb-2">Our Approach</p>
                  <p className="text-pro-earth/80 font-light">
                    We equip you with the biomechanical knowledge and practical tools to navigate labour with confidence and physiological efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2">
                <div className="w-full h-[400px] md:h-[500px] rounded-3xl shadow-2xl shadow-pro-earth/20 border border-pro-stone/20 overflow-hidden hover:shadow-3xl hover:-translate-y-1 transition-all duration-500">
                  <img 
                    src="/images/clinical-pilates-v3.png"
                    alt="Clinical Pilates"
                    className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-pro-earth">Clinical Pilates</h4>
                <p className="text-pro-earth/70 font-light text-lg leading-relaxed">
                  Movement is medicine, but only when it is prescribed with clinical precision. Standard fitness classes often lack the specificity required for pelvic health recovery.
                </p>
                <div className="bg-pro-linen p-8 rounded-2xl border-l-4 border-pro-clay">
                  <p className="text-base font-bold text-pro-clay uppercase tracking-widest mb-2">Our Approach</p>
                  <p className="text-pro-earth/80 font-light">
                    We offer physiotherapist-led sessions that combine core stability, functional movement, and pelvic floor awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
