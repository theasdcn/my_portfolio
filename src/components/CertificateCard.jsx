import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Sparkles, ShieldCheck } from 'lucide-react';

/**
 * The certificate card used on both the home page and the "View all" page,
 * so the two always look and behave the same. Change it here, not in either screen.
 *
 * delay:  entrance animation delay in seconds.
 * reveal: adds the scroll-reveal class used on the home page. Pages that don't
 *         run the scroll-reveal hook (the View all page) pass reveal={false}.
 */
export function CertificateCard({ cert, delay = 0, reveal = true, onVerify }) {
  const cardRef = useRef(null);
  const [sheenStyle, setSheenStyle] = useState({
    opacity: 0,
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  });

  const isBronze = cert.sealType === 'bronze';

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6.5;
    const rotateY = ((x - centerX) / centerX) * 6.5;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setSheenStyle({
      opacity: 1,
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`,
      background: `radial-gradient(circle 220px at ${percentX.toFixed(1)}% ${percentY.toFixed(1)}%, rgba(255, 235, 180, 0.38) 0%, rgba(255, 255, 255, 0.12) 40%, transparent 70%)`
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
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 25, scale: 0.95 }}
      transition={{ 
        duration: 0.45, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      ref={cardRef}
      className={`cert-luxury-card${reveal ? ' reveal-3d-card' : ''}`}
      style={{ transform: sheenStyle.transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => onVerify(cert, e)}
      role="button"
      tabIndex={0}
      aria-label={`Verify official credential: ${cert.title}`}
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

      {/* Decorative Gold Ambient Aura */}
      <div 
        className="cert-card-glow-bg" 
        style={{ '--glow-color': cert.badgeColor || '#049FD9' }}
      />

      {/* Inner Guilloche Certificate Parchment Frame */}
      <div className="cert-parchment-frame">
        {/* Four Corner Vintage Filigree Brackets */}
        <div className="cert-corner-bracket top-left" aria-hidden="true" />
        <div className="cert-corner-bracket top-right" aria-hidden="true" />
        <div className="cert-corner-bracket bottom-left" aria-hidden="true" />
        <div className="cert-corner-bracket bottom-right" aria-hidden="true" />

        {/* Card Header: Issuer & Accreditation Status */}
        <div className="cert-card-header">
          <div className="cert-issuer-badge">
            <span
              className="cert-issuer-dot"
              style={{ backgroundColor: cert.badgeColor }}
              aria-hidden="true"
            />
            <span className="cert-issuer-name">{cert.issuer}</span>
          </div>

          <div className="cert-accredited-tag">
            <span className="cert-pulse-dot" />
            <ShieldCheck size={12} className="cert-verified-icon" />
            <span>{cert.issuerCode === 'EPCPS' ? 'VERIFIED WEBINAR' : 'CREDLY ACCREDITED'}</span>
          </div>
        </div>

        {/* Document Category & Conferred Title */}
        <div className="cert-content-body">
          <div className="cert-eyebrow-row">
            <span className="cert-eyebrow-label">
              <Sparkles size={11} className="eyebrow-sparkle" />
              OFFICIAL CREDENTIAL
            </span>
            <span className="cert-year-tag">{cert.date}</span>
          </div>

          <h3 className="cert-title-serif">{cert.title}</h3>
          
          <p className="cert-description-text">{cert.description}</p>

          {/* Competency & Skill Chips */}
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

        {/* Card Footer: Credential ID, Embossed Seal & Verification CTA */}
        <div className="cert-card-footer">
          {/* Credential ID metadata */}
          <div className="cert-meta-group">
            <span className="cert-meta-label">CREDENTIAL ID</span>
            <span className="cert-meta-value">{cert.credentialId}</span>
          </div>

          {/* Embossed Metallic Seal */}
          <div className="cert-seal-assembly" title={`${isBronze ? 'Bronze' : 'Gold'} Certified Seal`}>
            <div className="cert-ribbon-tail" aria-hidden="true" />
            <div className={`cert-embossed-seal ${isBronze ? 'seal-bronze' : 'seal-gold'}`}>
              <Award size={15} className="seal-icon" />
              <span className="seal-sub-text">{isBronze ? 'BRONZE' : 'GOLD'}</span>
            </div>
          </div>

          {/* Interactive "Verify on Credly" Action */}
          <div className="cert-action-col">
            <button
              type="button"
              className="cert-verify-btn"
              onClick={(e) => onVerify(cert, e)}
              aria-label={`Verify ${cert.title} on official registry`}
            >
              <span>{cert.image ? 'View Certificate' : (cert.verificationUrl?.includes('credly') ? 'Verify on Credly' : 'Verify Credential')}</span>
              <ExternalLink size={11} className="verify-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
