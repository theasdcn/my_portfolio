import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  Layers, 
  BookOpen,
  Terminal,
  Cpu,
  RotateCcw
} from 'lucide-react';
import { CERTIFICATIONS_DATA, DESIGNER_INFO, CONTACT_INFO } from '../constants/portfolioData';
import { playVinylClick } from '../utils/soundEffects';

const CATEGORIES = [
  'All Credentials',
  'Cisco Networking',
  'Automation & Cloud',
  'Programming & OS',
  'Project Management'
];

function getCategoryForCert(cert) {
  if (cert.title.includes('DevNet') || cert.title.includes('Automation')) {
    return 'Automation & Cloud';
  }
  if (cert.title.includes('Enterprise') || cert.title.includes('Switching') || cert.title.includes('Networks')) {
    return 'Cisco Networking';
  }
  if (cert.title.includes('Linux') || cert.title.includes('Python') || cert.title.includes('Cybersecurity')) {
    return 'Programming & OS';
  }
  if (cert.title.includes('Project Management')) {
    return 'Project Management';
  }
  return 'Cisco Networking';
}

function PageCertCard({ cert, idx, onVerify }) {
  const cardRef = useRef(null);
  const [sheenStyle, setSheenStyle] = useState({
    opacity: 0,
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  });

  const isBronze = cert.sealType === 'bronze';
  const category = getCategoryForCert(cert);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setSheenStyle({
      opacity: 1,
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`,
      background: `radial-gradient(circle 240px at ${percentX.toFixed(1)}% ${percentY.toFixed(1)}%, rgba(255, 235, 180, 0.4) 0%, rgba(255, 255, 255, 0.12) 40%, transparent 70%)`
    });
  };

  const handleMouseLeave = () => {
    setSheenStyle({
      opacity: 0,
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      className="cert-page-card"
      style={{ transform: sheenStyle.transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => onVerify(cert, e)}
      role="button"
      tabIndex={0}
      aria-label={`Verify credential: ${cert.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onVerify(cert, e);
      }}
    >
      {/* Dynamic Specular Sheen Layer that tracks mouse */}
      <div 
        className="tilt-sheen-layer"
        style={{
          opacity: sheenStyle.opacity,
          background: sheenStyle.background || undefined,
          transition: sheenStyle.opacity === 0 ? 'opacity 0.4s ease, transform 0.4s ease' : 'none'
        }}
      />

      {/* Decorative Brand Glow */}
      <div 
        className="cert-card-glow-bg" 
        style={{ '--glow-color': cert.badgeColor || '#049FD9' }}
      />

      {/* Inner Parchment Frame */}
      <div className="cert-page-parchment">
        {/* Corner Brackets */}
        <div className="cert-corner-bracket top-left" aria-hidden="true" />
        <div className="cert-corner-bracket top-right" aria-hidden="true" />
        <div className="cert-corner-bracket bottom-left" aria-hidden="true" />
        <div className="cert-corner-bracket bottom-right" aria-hidden="true" />

        {/* Top Header */}
        <div className="cert-card-header">
          <div className="cert-issuer-badge">
            <span
              className="cert-issuer-dot"
              style={{ backgroundColor: cert.badgeColor }}
              aria-hidden="true"
            />
            <span className="cert-issuer-name">{cert.issuer}</span>
          </div>

          <div className="cert-category-badge">
            <span>{category}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="cert-content-body">
          <div className="cert-eyebrow-row">
            <span className="cert-eyebrow-label">
              <Sparkles size={11} className="eyebrow-sparkle" />
              DIGITAL ACCREDITATION
            </span>
            <span className="cert-year-tag">{cert.date}</span>
          </div>

          <h3 className="cert-title-serif">{cert.title}</h3>
          
          <p className="cert-description-text">{cert.description}</p>

          {/* Competency Chips */}
          {cert.competencies && cert.competencies.length > 0 && (
            <div className="cert-competencies-wrap">
              {cert.competencies.map((skill, sIdx) => (
                <span key={sIdx} className="cert-skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="cert-card-footer">
          <div className="cert-meta-group">
            <span className="cert-meta-label">CREDENTIAL ID</span>
            <span className="cert-meta-value">{cert.credentialId}</span>
          </div>

          <div className="cert-seal-assembly" title={`${isBronze ? 'Bronze' : 'Gold'} Certified Seal`}>
            <div className="cert-ribbon-tail" aria-hidden="true" />
            <div className={`cert-embossed-seal ${isBronze ? 'seal-bronze' : 'seal-gold'}`}>
              <Award size={15} className="seal-icon" />
              <span className="seal-sub-text">{isBronze ? 'BRONZE' : 'GOLD'}</span>
            </div>
          </div>

          <div className="cert-action-col">
            <button
              type="button"
              className="cert-verify-btn"
              onClick={(e) => onVerify(cert, e)}
              aria-label={`Verify ${cert.title} on official registry`}
            >
              <span>Verify on Credly</span>
              <ExternalLink size={11} className="verify-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificationsScreen({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('All Credentials');
  const [searchQuery, setSearchQuery] = useState('');

  const handleVerify = (cert, e) => {
    e?.stopPropagation();
    playVinylClick();
    if (cert.verificationUrl) {
      window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS_DATA.filter((cert) => {
      const category = getCategoryForCert(cert);
      const matchesCategory = 
        selectedCategory === 'All Credentials' || category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.credentialId.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        (cert.competencies && cert.competencies.some(c => c.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="cert-page-root">
      {/* Top Sticky Header */}
      <header className="cert-page-navbar">
        <div className="cert-page-nav-inner">
          <button 
            type="button" 
            className="cert-back-btn"
            onClick={() => {
              playVinylClick();
              onBack();
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </button>

          <div className="cert-nav-brand">
            <span className="brand-script-name">{DESIGNER_INFO.name}</span>
            <span className="cert-nav-tag">Certification &amp; Training Registry</span>
          </div>

          <div className="cert-nav-actions">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="cert-contact-quick-btn"
              onClick={playVinylClick}
            >
              <span>Contact Candidate</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="cert-page-main">
        {/* Hero Section */}
        <section className="cert-page-hero">
          <div className="cert-hero-badge">
            <Sparkles size={14} className="hero-sparkle-icon" />
            <span>OFFICIAL INDUSTRY REGISTRY &bull; 9 VERIFIED CREDENTIALS</span>
          </div>

          <h1 className="cert-page-title">
            Certifications &amp; Professional Training
          </h1>

          <p className="cert-page-lead">
            A comprehensive catalog of accredited digital credentials awarded by the Cisco Networking Academy, 
            the Project Management Institute (PMI), and the Linux Professional Institute (LPI). Every credential 
            is cryptographically verified and recorded on official digital registries.
          </p>

          {/* Quick Metrics Cards */}
          <div className="cert-stats-banner">
            <div className="cert-stat-card">
              <div className="stat-icon-wrap gold">
                <Award size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-big-num">9</span>
                <span className="stat-label">Accredited Credentials</span>
              </div>
            </div>

            <div className="cert-stat-card">
              <div className="stat-icon-wrap green">
                <ShieldCheck size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-big-num">100%</span>
                <span className="stat-label">Credly Verified</span>
              </div>
            </div>

            <div className="cert-stat-card">
              <div className="stat-icon-wrap blue">
                <Cpu size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-big-num">6</span>
                <span className="stat-label">Cisco Systems Badges</span>
              </div>
            </div>

            <div className="cert-stat-card">
              <div className="stat-icon-wrap orange">
                <BookOpen size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-big-num">4</span>
                <span className="stat-label">Technical Domains</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="cert-controls-section">
          {/* Category Filter Pills */}
          <div className="cert-category-pills">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All Credentials' 
                ? CERTIFICATIONS_DATA.length 
                : CERTIFICATIONS_DATA.filter(c => getCategoryForCert(c) === cat).length;

              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  className={`cert-cat-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => {
                    playVinylClick();
                    setSelectedCategory(cat);
                  }}
                >
                  <span>{cat}</span>
                  <span className="pill-count-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="cert-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="cert-search-input"
              placeholder="Search by title, issuer, credential ID, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button"
                className="search-clear-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
        </section>

        {/* Active Results Counter */}
        <div className="cert-results-header">
          <span className="results-label">
            Showing <strong>{filteredCerts.length}</strong> of <strong>{CERTIFICATIONS_DATA.length}</strong> accredited credentials
          </span>
          {selectedCategory !== 'All Credentials' && (
            <span className="active-filter-badge">
              Filtered by: {selectedCategory}
            </span>
          )}
        </div>

        {/* Certification Cards Grid */}
        <motion.div layout className="cert-page-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredCerts.length > 0 ? (
              filteredCerts.map((cert, idx) => (
                <PageCertCard
                  key={cert.id}
                  cert={cert}
                  idx={idx}
                  onVerify={handleVerify}
                />
              ))
            ) : (
              <motion.div 
                className="cert-empty-state"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Award size={36} className="empty-icon" />
                <h3 className="empty-title">No credentials found</h3>
                <p className="empty-desc">
                  No certifications matched "{searchQuery}". Try searching with a different term or clear your filter.
                </p>
                <button 
                  type="button" 
                  className="empty-reset-btn"
                  onClick={() => {
                    setSelectedCategory('All Credentials');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Official Registry Accreditation Notice */}
        <section className="cert-accreditation-notice">
          <div className="notice-inner">
            <div className="notice-icon-col">
              <div className="notice-emblem">
                <ShieldCheck size={28} />
              </div>
            </div>
            <div className="notice-content-col">
              <h3 className="notice-title">Authenticity &amp; Digital Registry Verification</h3>
              <p className="notice-text">
                Every credential showcased in this repository has been issued directly by recognized academic and industry authorities—including <strong>Cisco Networking Academy</strong>, the <strong>Project Management Institute (PMI)</strong>, and the <strong>Linux Professional Institute (LPI)</strong>. Each badge features tamper-proof cryptographic metadata hosted on Pearson Credly and official issuer registries.
              </p>
              <div className="notice-tags">
                <span className="notice-tag"><CheckCircle2 size={13} /> 256-Bit Cryptographic Signatures</span>
                <span className="notice-tag"><CheckCircle2 size={13} /> Official Credly Metadata</span>
                <span className="notice-tag"><CheckCircle2 size={13} /> Permanent Registry Records</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation Strip */}
        <div className="cert-page-bottom-actions">
          <button
            type="button"
            className="cert-bottom-back-btn"
            onClick={() => {
              playVinylClick();
              onBack();
            }}
          >
            <ArrowLeft size={16} />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </main>
    </div>
  );
}
