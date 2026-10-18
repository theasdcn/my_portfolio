import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants/portfolioData';
import { playVinylClick } from '../utils/soundEffects';
import { CertificateModal } from './CertificateModal';
import { CertificateCard } from './CertificateCard';

const INITIAL_VISIBLE_COUNT = 4;
const FEATURED_IDS = [1, 10, 12, 2];


export function Certifications({ onViewAll }) {
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

  const handleGoToPage = () => {
    playVinylClick();
    if (onViewAll) {
      onViewAll();
    } else {
      window.location.hash = '#/certifications';
    }
  };

  const featuredCerts = FEATURED_IDS.map(id => CERTIFICATIONS_DATA.find(c => c.id === id)).filter(Boolean);

  return (
    <section className="certifications-section" id="certifications">
      <div className="cert-container">
        {/* Section Header */}
        <div className="section-header-retro reveal-3d">
          <h2 className="section-title-serif">Certifications &amp; Accreditations</h2>
        </div>

        {/* 2-Column Responsive Card Grid showing 4 Featured Cards */}
        <div className="cert-cards-grid">
          {featuredCerts.map((cert, idx) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              delay={idx >= INITIAL_VISIBLE_COUNT ? (idx - INITIAL_VISIBLE_COUNT) * 0.08 : 0}
              onVerify={handleVerify}
            />
          ))}
        </div>

        {/* Eye-Catching Navigation Button to Dedicated Page */}
        <div className="cert-view-all-wrap reveal-3d">
          <motion.button
            type="button"
            className="cert-view-all-btn"
            onClick={handleGoToPage}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View all certifications and training registry on dedicated page"
          >
            {/* Shimmer sweep effect layer */}
            <span className="cert-btn-shimmer" aria-hidden="true" />

            <span className="cert-btn-content">
              <span className="cert-btn-text">
                View All Certifications &amp; Training
              </span>

              <span className="cert-btn-icon-wrap">
                <ExternalLink size={15} />
              </span>
            </span>
          </motion.button>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <CertificateModal 
        certificate={previewCert} 
        onClose={() => setPreviewCert(null)} 
      />
    </section>
  );
}
