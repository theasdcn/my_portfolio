import React from 'react';
import { CONTACT_INFO } from '../constants/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="simple-site-footer">
      <div className="simple-footer-container">
        
        {/* Left: Branding & Copyright */}
        <div className="simple-footer-left">
          <span className="simple-footer-name">ALTHEA ZULEIKA SADICON</span>
          <span className="simple-footer-copy">
            © {new Date().getFullYear()} • Manila, Philippines
          </span>
        </div>

        {/* Center: Clean Text Links */}
        <div className="simple-footer-links">
          <a 
            href={CONTACT_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="simple-footer-link"
          >
            LinkedIn
          </a>
          <span className="simple-footer-bullet">•</span>
          <a 
            href={CONTACT_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="simple-footer-link"
          >
            GitHub
          </a>
          <span className="simple-footer-bullet">•</span>
          <a 
            href={CONTACT_INFO.briefcase} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="simple-footer-link"
          >
            Briefcase
          </a>
          <span className="simple-footer-bullet">•</span>
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="simple-footer-link"
          >
            Email
          </a>
        </div>

        {/* Right: Back to top */}
        <div className="simple-footer-right">
          <button 
            type="button" 
            onClick={scrollToTop} 
            className="simple-footer-back-top"
          >
            <span>Back to top</span>
            <span className="back-arrow">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
