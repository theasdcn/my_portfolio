import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DESIGNER_INFO, NAV_LINKS } from '../constants/portfolioData';

// Split nav links: first half left, second half right of the center logo
const leftLinks = NAV_LINKS.slice(0, 3); // Hero, About Me, Education
const rightLinks = NAV_LINKS.slice(3, 7); // Skills, Certifications, Projects, Contact

export function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container navbar-centered-layout">

        {/* LEFT NAV LINKS */}
        <nav className="nav-links-left">
          {leftLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link-btn"
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CENTER BRAND — script logo style */}
        <a
          href="#hero"
          className="navbar-brand-center"
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
        >
          <span className="brand-script-name">{DESIGNER_INFO.name.split(' ').slice(0, 2).join(' ')}</span>
          <span className="brand-subtitle-center">{DESIGNER_INFO.title}</span>
        </a>

        {/* RIGHT NAV LINKS */}
        <nav className="nav-links-right">
          {rightLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link-btn"
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="mobile-nav-item"
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
