import React, { useState } from 'react';
import { Mail, Linkedin, Github, Globe, Plus, ArrowRight, Check, Copy } from 'lucide-react';
import { CONTACT_INFO } from '../constants/portfolioData';
import { Laptop3D } from './Laptop3D';

export function ContactFooter({ onOpenContact }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="contact-footer-section" id="contact">
      <div className="contact-content-grid">
        
        {/* LEFT COLUMN: CTA TEXT */}
        <div className="contact-left-col">
          <div className="contact-title-row">
            <h2 className="contact-heading">LET'S WORK TOGETHER</h2>
            <span className="contact-plus-icon"><Plus size={32} /></span>
          </div>

          <p className="contact-desc">
            I'm currently open to internship opportunities, collaborations, and projects where I can continue developing my skills in web and mobile application development.
          </p>



        </div>

        {/* MIDDLE COLUMN: SOCIAL & EMAIL LINKS */}
        <div className="contact-middle-col">
          <div className="contact-links-list">
            
            {/* EMAIL LINK */}
            <div className="contact-link-card group" onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
              <div className="link-icon-box">
                <Mail size={20} />
              </div>
              <div className="link-text-details">
                <span className="link-url">{CONTACT_INFO.email}</span>
              </div>
              <button className="copy-action-btn" title="Copy Email">
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* LINKEDIN LINK */}
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link-card group"
            >
              <div className="link-icon-box">
                <Linkedin size={20} />
              </div>
              <div className="link-text-details">
                <span className="link-url">LinkedIn</span>
              </div>
            </a>

            {/* GITHUB LINK */}
            <a 
              href={CONTACT_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link-card group"
            >
              <div className="link-icon-box">
                <Github size={20} />
              </div>
              <div className="link-text-details">
                <span className="link-url">GitHub</span>
              </div>
            </a>

            {/* PORTFOLIO LINK */}
            <a 
              href={CONTACT_INFO.portfolio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link-card group"
            >
              <div className="link-icon-box">
                <Globe size={20} />
              </div>
              <div className="link-text-details">
                <span className="link-url">Portfolio</span>
              </div>
            </a>

          </div>
        </div>

        {/* RIGHT COLUMN: 3D INTERACTIVE LAPTOP MOCKUP */}
        <div className="contact-right-col">
          <Laptop3D />
        </div>

      </div>

      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} Althea Zuleika Sadicon. All Rights Reserved.</span>
        <span>Designed &amp; Developed with 3D Aesthetics</span>
      </div>
    </footer>
  );
}
