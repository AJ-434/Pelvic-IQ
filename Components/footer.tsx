import React from 'react';
import { Link } from 'react-router-dom';
import { INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pro-linen border-t border-pro-stone/50 py-2 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <img 
            src="/images/PelvicIQ-Logo-v7.png" 
            alt="Pelvic IQ - Empowering Women's Wellness" 
            className="h-40 w-auto"
          />
        </div>
        
        <div className="flex space-x-8">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-pro-earth hover:text-pro-clay transition-colors uppercase text-xs tracking-widest">
            Instagram
          </a>
          <Link to="/privacy" className="text-pro-earth hover:text-pro-clay transition-colors uppercase text-xs tracking-widest">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-pro-earth hover:text-pro-clay transition-colors uppercase text-xs tracking-widest">
            Terms of Use
          </Link>
        </div>
      </div>
      <div className="mt-2 text-center text-[10px] tracking-widest text-pro-earth/40 uppercase">
        © 2026 Pelvic IQ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
