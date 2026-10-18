import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  BookOpen,
  Terminal,
  Cpu
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants/portfolioData';
import { playVinylClick } from '../utils/soundEffects';
import { CertificateModal } from '../components/CertificateModal';
import { CertificateCard } from '../components/CertificateCard';

export function CertificationsScreen({ onBack }) {
  const [previewCert, setPreviewCert] = useState(null);

  const handleVerify = (cert, e) => {
    e?.stopPropagation();
    playVinylClick();
    if (cert.image) {
      setPreviewCert(cert);
    } else if (cert.verificationUrl) {
      window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer');
    }
  };

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
        </div>
      </header>

      {/* Main Page Content */}
      <main className="cert-page-main">
        {/* Hero Section */}
        <section className="cert-page-hero">
          <div className="cert-hero-badge">
            <Sparkles size={14} className="hero-sparkle-icon" />
            <span>OFFICIAL INDUSTRY REGISTRY &bull; {CERTIFICATIONS_DATA.length} VERIFIED CREDENTIALS</span>
          </div>

          <h1 className="cert-page-title">
            Certifications &amp; Professional Training
          </h1>

          <p className="cert-page-lead">
            A comprehensive catalog of accredited digital credentials and webinar certifications awarded by 
            Ethel Programming Computer Programming Services, the Cisco Networking Academy, the Project Management 
            Institute (PMI), and the Linux Professional Institute (LPI). Every credential is cryptographically verified 
            or registered with official certificate issuance metadata.
          </p>

          {/* Quick Metrics Cards */}
          <div className="cert-stats-banner">
            <div className="cert-stat-card">
              <div className="stat-icon-wrap gold">
                <Award size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-big-num">{CERTIFICATIONS_DATA.length}</span>
                <span className="stat-label">Total Credentials</span>
              </div>
            </div>

            <div className="cert-stat-card">
              <div className="stat-icon-wrap green">
                <ShieldCheck size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-big-num">4</span>
                <span className="stat-label">Webinar &amp; Hands-On</span>
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
                <span className="stat-big-num">5</span>
                <span className="stat-label">Technical Domains</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Cards Grid */}
        <motion.div layout className="cert-page-cards-grid">
          <AnimatePresence mode="popLayout">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                delay={idx * 0.05}
                reveal={false}
                onVerify={handleVerify}
              />
            ))}
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
                Every credential showcased in this repository has been issued directly by recognized academic and industry authorities—including <strong>Ethel Programming Computer Programming Services</strong>, <strong>Cisco</strong>, the <strong>Project Management Institute (PMI)</strong>, <strong>Certiport (Pearson VUE)</strong>, and the <strong>Linux Professional Institute (LPI)</strong>. Each badge features official certification records and direct Credly verification links.
              </p>
              <div className="notice-tags">
                <span className="notice-tag"><CheckCircle2 size={13} /> Official Certificate Records</span>
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

      {/* Certificate Preview Modal */}
      <CertificateModal 
        certificate={previewCert} 
        onClose={() => setPreviewCert(null)} 
      />
    </div>
  );
}
