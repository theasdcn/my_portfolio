import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { DESIGNER_INFO, NAV_LINKS } from '../constants/portfolioData';

import { ThemeToggle } from './ThemeToggle';

// Split nav links: first half left, second half right of the center logo
const leftLinks = NAV_LINKS.slice(0, 3); // Hero, About Me, Education
const rightLinks = NAV_LINKS.slice(3, 7); // Skills, Certifications, Projects, Contact

export function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(NAV_LINKS[0].id);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Soft shadow once the page has scrolled, so the bar separates from content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link for the section crossing the middle of the viewport.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkProps = (link, baseClass) => ({
    className: `${baseClass}${activeId === link.id ? ' is-active' : ''}`,
    'aria-current': activeId === link.id ? 'true' : undefined,
    onClick: () => handleNavClick(link.id),
  });

  return (
    <header className={`navbar-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-container navbar-centered-layout">

        {/* LEFT NAV LINKS */}
        <nav className="nav-links-left" aria-label="Primary">
          {leftLinks.map((link) => (
            <button key={link.id} type="button" {...linkProps(link, 'nav-link-btn')}>
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

        {/* RIGHT NAV LINKS + THEME TOGGLE */}
        <div className="navbar-right-group">
          <nav className="nav-links-right" aria-label="Sections">
            {rightLinks.map((link) => (
              <button key={link.id} type="button" {...linkProps(link, 'nav-link-btn')}>
                {link.label}
              </button>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile actions & toggle */}
        <div className="navbar-mobile-actions">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          {NAV_LINKS.map((link) => (
            <button key={link.id} type="button" {...linkProps(link, 'mobile-nav-item')}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
