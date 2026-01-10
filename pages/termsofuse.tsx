import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-pro-linen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-pro-earth uppercase tracking-tight mb-8 text-center">Terms of Use</h1>
        <div className="prose prose-lg text-pro-earth/70 font-light">
          <p>By using our services, you agree to these terms and conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
