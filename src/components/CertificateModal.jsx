import React, { useEffect } from 'react';
import { X, ExternalLink, Award, ShieldCheck, Download } from 'lucide-react';
import { playVinylClick } from '../utils/soundEffects';

export function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div 
      className="executive-modal-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
      aria-label={`Certificate preview: ${certificate.title}`}
    >
      <div 
        className="executive-modal-card cert-preview-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Close Button */}
        <button 
          className="modal-luxury-close-btn" 
          onClick={() => {
            playVinylClick();
            onClose();
          }} 
          aria-label="Close Certificate Preview"
        >
          <X size={18} />
        </button>

        {/* Modal Top Header Bar */}
        <div className="modal-luxury-header cert-preview-header">
          <div className="modal-header-meta">
            <span className="modal-category-pill" style={{ borderColor: certificate.badgeColor }}>
              <span 
                className="cert-issuer-dot" 
                style={{ backgroundColor: certificate.badgeColor, display: 'inline-block', width: 8, height: 8, borderRadius: '50%', marginRight: 6 }} 
              />
              {certificate.issuer}
            </span>
            <span className="cert-preview-date-tag">{certificate.date}</span>
          </div>

          <div className="modal-title-and-actions">
            <div>
              <h2 className="modal-title-serif cert-preview-modal-title">{certificate.title}</h2>
              <p className="modal-subtitle-text">
                Credential ID: <strong>{certificate.credentialId}</strong> &bull; Conferred to <strong>Althea Zuleika Sadicon</strong>
              </p>
            </div>

            <div className="modal-header-actions">
              <a
                href={certificate.image || certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn-primary"
                onClick={playVinylClick}
              >
                <span>Open Full Size</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Certificate Display Body */}
        <div className="modal-luxury-body cert-preview-body">
          <div className="cert-preview-frame">
            <img 
              src={certificate.image || certificate.verificationUrl} 
              alt={`Certificate of Participation: ${certificate.title} awarded to Althea Zuleika Sadicon`}
              className="cert-preview-image"
              loading="lazy"
              draggable={false}
            />
          </div>

          {certificate.description && (
            <div className="cert-preview-info-box">
              <p className="modal-paragraph">{certificate.description}</p>
              {certificate.competencies && (
                <div className="modal-tags-container" style={{ marginTop: '0.75rem' }}>
                  {certificate.competencies.map((comp, idx) => (
                    <span key={idx} className="modal-tech-chip">{comp}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
