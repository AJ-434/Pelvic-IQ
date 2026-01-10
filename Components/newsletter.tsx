import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log('Sending to database:', email);
    }
  };

  return (
    <section className="bg-pro-stone/20 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-serif text-pro-earth mb-4 italic">join the community</h3>
        <p className="text-pro-earth/70 mb-8 font-light max-w-lg mx-auto">
          Evidence-based guidance on pelvic health, intentional movement, and clinical recovery. Sent to your inbox with care.
        </p>
        
        {submitted ? (
          <div className="animate-in fade-in zoom-in-95 p-8 bg-pro-sage/10 rounded-2xl text-pro-sage font-medium">
            Welcome to the community. Check your inbox for your clinical starter guide.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-6 py-4 bg-white border border-pro-stone focus:outline-none focus:border-pro-clay text-pro-earth font-light rounded-2xl"
            />
            <button
              type="submit"
              className="bg-pro-earth text-pro-linen px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-pro-clay transition-colors duration-500 whitespace-nowrap rounded-2xl shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
