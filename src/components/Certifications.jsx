import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants/portfolioData';
import { playVinylClick } from '../utils/soundEffects';

export function Certifications() {
  const handleVerify = (cert) => {
    playVinylClick();
    if (cert.verificationUrl) {
      window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="certifications-section" id="certifications">
      <div className="cert-container">
        {/* Section Header */}
        <div className="section-header-retro">
          <span className="section-num-stamp">04 //</span>
          <h2 className="section-title-serif">Certifications & Accreditations</h2>
        </div>

        <p className="cert-section-subtitle">
          Official digital credentials and licenses accredited by industry leaders. Click any certificate to verify authenticity on the official registry.
        </p>

        {/* 2-Column Responsive Grid of Elegant Professional Certificates */}
        <div className="cert-diploma-grid">
          {CERTIFICATIONS_DATA.map((cert) => {
            const isBronze = cert.sealType === 'bronze';
            
            return (
              <div 
                key={cert.id} 
                className="diploma-cert-card group"
                onClick={() => handleVerify(cert)}
                onMouseEnter={playVinylClick}
                role="button"
                tabIndex={0}
                aria-label={`Verify official certificate: ${cert.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter') handleVerify(cert); }}
              >
                {/* Certificate Parchment Document */}
                <div className="diploma-parchment">
                  {/* Outer & Inner Guilloche Double Certificate Border */}
                  <div className="diploma-outer-border">
                    <div className="diploma-inner-border">
                      {/* Four Corner Vintage Flourish Ornaments */}
                      <div className="corner-ornament top-left" aria-hidden="true">❖</div>
                      <div className="corner-ornament top-right" aria-hidden="true">❖</div>
                      <div className="corner-ornament bottom-left" aria-hidden="true">❖</div>
                      <div className="corner-ornament bottom-right" aria-hidden="true">❖</div>

                      {/* Certificate Header */}
                      <div className="diploma-header">
                        <div className="diploma-issuer-badge">
                          <span className="diploma-issuer-icon" style={{ color: cert.badgeColor }}>
                            <ShieldCheck size={18} />
                          </span>
                          <span className="diploma-issuer-name">{cert.issuer}</span>
                        </div>

                        <div className="diploma-verified-tag">
                          <CheckCircle size={12} className="tag-check-icon" />
                          <span>ACCREDITED</span>
                        </div>
                      </div>

                      {/* Certificate Main Title */}
                      <div className="diploma-title-block">
                        <span className="diploma-heading-sub">CERTIFICATE OF COMPLETION & EXCELLENCE</span>
                        <p className="diploma-preamble">THIS IS OFFICIALLY PRESENTED TO</p>
                        <h3 className="diploma-recipient-name">Althea Zuleika Sadicon</h3>
                        <div className="diploma-divider-flourish">
                          <span className="flourish-line" />
                          <span className="flourish-diamond">✦</span>
                          <span className="flourish-line" />
                        </div>
                      </div>

                      {/* Course / Program Title & Description */}
                      <div className="diploma-course-block">
                        <p className="diploma-award-text">FOR DEMONSTRATING TECHNICAL MASTERY & PASSING ALL RIGOROUS CRITERIA IN</p>
                        <h4 className="diploma-course-title">{cert.title}</h4>
                        <p className="diploma-course-desc">{cert.description}</p>
                      </div>

                      {/* Certificate Footer: Signatures, ID Code, Official Metallic Seal */}
                      <div className="diploma-footer">
                        {/* Signature Block */}
                        <div className="diploma-sig-col">
                          <div className="diploma-signature-script">Althea Sadicon / Director</div>
                          <div className="diploma-sig-rule" />
                          <span className="diploma-sig-label">AUTHORIZED CERTIFYING OFFICER</span>
                        </div>

                        {/* Credential ID Block */}
                        <div className="diploma-id-col">
                          <span className="diploma-id-number">CREDENTIAL ID: <strong>{cert.credentialId}</strong></span>
                          <span className="diploma-id-date">ISSUED & VALIDATED • {cert.date}</span>
                        </div>

                        {/* Official Embossed Metallic Seal Medal with Ribbon */}
                        <div className="diploma-seal-col">
                          <div className="diploma-seal-ribbon-tails" aria-hidden="true" />
                          <div className={`diploma-seal-disc ${isBronze ? 'seal-bronze' : 'seal-gold'}`}>
                            <Award size={18} className="seal-center-icon" />
                            <span className="seal-text-arch">{isBronze ? 'BRONZE' : 'GOLD'} SEAL</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay: Clean "Verify on Credly ↗" prompt */}
                      <div className="diploma-hover-prompt">
                        <span className="diploma-verify-btn-tag">
                          <span>Verify Credential on Official Registry</span>
                          <ExternalLink size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
