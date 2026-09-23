import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-card-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ borderColor: project.accentColor }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={24} />
        </button>

        <div className="modal-header">
          <span className="modal-number" style={{ color: project.accentColor }}>
            {project.number}
          </span>
          <div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle} • {project.category}</p>
          </div>
        </div>

        <div className="modal-body-scroll">
          <div className="modal-hero-image-wrapper">
            <img src={project.image} alt={project.title} className="modal-hero-img" />
            <div 
              className="modal-image-glow" 
              style={{ background: project.accentGlow }}
            />
          </div>

          <div className="modal-details-grid">
            <div className="modal-description-section">
              <h3 className="modal-section-heading">Overview & Case Study</h3>
              <p className="modal-desc-p">{project.description}</p>
              
              <div className="modal-metrics-badge">
                <Sparkles size={18} style={{ color: project.accentColor }} />
                <span>{project.metrics}</span>
              </div>
            </div>

            <div className="modal-sidebar-section">
              <h3 className="modal-section-heading">Key Deliverables</h3>
              <ul className="modal-deliverables-list">
                {project.tags.map((tag, i) => (
                  <li key={i} className="modal-tag-pill">
                    <CheckCircle size={14} style={{ color: project.accentColor }} />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-action-btn live-site-btn mb-2"
                  style={{ background: '#10b981', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  Visit Live Website <ExternalLink size={18} />
                </a>
              )}

              <a 
                href="#contact" 
                onClick={onClose}
                className="modal-action-btn"
                style={{ background: project.accentColor }}
              >
                Discuss Similar Project <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
