import React, { useState } from 'react';
import { Mail, Linkedin, Github, Globe, Plus, Check, Copy, Sparkles, Send } from 'lucide-react';
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
      <div className="contact-container">

        {/* LEFT/MAIN COLUMN: Heading, Bio & Social Taped Link Cards */}
        <div className="contact-left-col">

          <div className="contact-top-status">
            <span className="live-status-pulse" />
            <span className="status-text font-mono">AVAILABLE FOR INTERNSHIP &amp; PROJECTS ⚡</span>
          </div>

          <h2 className="contact-heading-serif">
            LET'S WORK <br />
            <span className="contact-serif-italic">TOGETHER</span>
          </h2>

          <p className="contact-body-text">
            I'm currently open to internship opportunities, collaborations, and projects where I can continue developing my skills in web and mobile application development.
          </p>

          <button className="contact-cta-btn shadow-y2k" onClick={onOpenContact}>
            <span>START A PROJECT WITH ME</span>
            <Send size={16} />
          </button>

          {/* TAPED SOCIAL & EMAIL LINK CARDS */}
          <div className="contact-paper-links-grid">
            
            {/* EMAIL LINK CARD */}
            <div 
              className="paper-link-card group cursor-pointer shadow-y2k -rotate-1" 
              onClick={handleCopyEmail}
              title="Click to copy email address!"
            >
              <div className="link-card-left">
                <div className="link-icon-box bg-red-100 text-burgundy">
                  <Mail size={18} />
                </div>
                <div className="link-info-text">
                  <span className="link-label font-mono text-[10px] text-muted uppercase">DIRECT EMAIL</span>
                  <p className="link-value font-mono text-xs font-bold text-burgundy">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <button className="copy-btn-pill" aria-label="Copy Email">
                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              </button>
            </div>

            {/* LINKEDIN LINK CARD */}
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="paper-link-card group shadow-y2k rotate-1"
            >
              <div className="link-card-left">
                <div className="link-icon-box bg-blue-100 text-blue-700">
                  <Linkedin size={18} />
                </div>
                <div className="link-info-text">
                  <span className="link-label font-mono text-[10px] text-muted uppercase">CONNECT ON LINKEDIN</span>
                  <p className="link-value font-mono text-xs font-bold text-burgundy">linkedin.com/in/altheazuleikasadicon</p>
                </div>
              </div>
              <span className="link-arrow-badge">↗</span>
            </a>

            {/* GITHUB LINK CARD */}
            <a 
              href={CONTACT_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="paper-link-card group shadow-y2k -rotate-1"
            >
              <div className="link-card-left">
                <div className="link-icon-box bg-gray-100 text-gray-900">
                  <Github size={18} />
                </div>
                <div className="link-info-text">
                  <span className="link-label font-mono text-[10px] text-muted uppercase">VIEW REPOSITORIES</span>
                  <p className="link-value font-mono text-xs font-bold text-burgundy">github.com/altheazuleikasadicon</p>
                </div>
              </div>
              <span className="link-arrow-badge">↗</span>
            </a>

            {/* PORTFOLIO WEBSITE LINK CARD */}
            <a 
              href={CONTACT_INFO.portfolio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="paper-link-card group shadow-y2k rotate-2"
            >
              <div className="link-card-left">
                <div className="link-icon-box bg-amber-100 text-amber-700">
                  <Globe size={18} />
                </div>
                <div className="link-info-text">
                  <span className="link-label font-mono text-[10px] text-muted uppercase">PORTFOLIO DOMAIN</span>
                  <p className="link-value font-mono text-xs font-bold text-burgundy">althea.dev</p>
                </div>
              </div>
              <span className="link-arrow-badge">↗</span>
            </a>

          </div>

        </div>

        {/* RIGHT COLUMN: 3D INTERACTIVE LAPTOP SHOWCASE */}
        <div className="contact-right-col">
          <div className="laptop-paper-frame shadow-y2k rotate-2">
            <div className="tape-strip top-center-tape" />
            <div className="frame-header-tag font-mono">
              <Sparkles size={14} className="text-cherry inline mr-1" />
              <span>INTERACTIVE 3D MODEL</span>
            </div>

            {/* 3D Laptop Component */}
            <div className="laptop-canvas-wrapper">
              <Laptop3D />
            </div>

            <p className="laptop-caption-script font-script">
              Designed &amp; Developed with 3D Aesthetics ✨
            </p>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM COPYRIGHT BAR */}
      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} Althea Zuleika Sadicon. All Rights Reserved.</span>
        <div className="flex items-center gap-2 font-mono">
          <span>MANILA, PH 📍</span>
          <span>•</span>
          <span>3D DIGITAL DIARY v2.0</span>
        </div>
      </div>
    </footer>
  );
}

