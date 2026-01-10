import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, INSTAGRAM_LINK } from '../constants';

// Using the actual logo image file
const LOGO_URL = "/images/PelvicIQ-Logo-v7.png";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-pro-stone/30 px-6 h-20 md:h-24 overflow-visible">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src={LOGO_URL} 
            alt="Pelvic IQ - Empowering Women's Wellness" 
            className="h-40 md:h-48 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base tracking-widest uppercase transition-colors hover:text-pro-clay ${
                location.pathname === link.path ? 'text-pro-clay font-bold underline underline-offset-8 decoration-pro-blush' : 'text-pro-earth'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={INSTAGRAM_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pro-earth hover:text-pro-clay transition-colors p-1"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pro-earth focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-pro-linen border-b border-pro-stone/30 py-8 px-6 space-y-6 animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold text-pro-earth hover:text-pro-clay uppercase tracking-[0.2em]"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={INSTAGRAM_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-lg font-bold text-pro-earth hover:text-pro-clay uppercase tracking-[0.2em]"
            onClick={() => setIsOpen(false)}
          >
            Instagram
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
