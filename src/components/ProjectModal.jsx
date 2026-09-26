import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles } from 'lucide-react';

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
    <div className="cream-modal-backdrop" onClick={onClose}>
      <div 
        className="cream-modal-card shadow-y2k" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button className="cream-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="cream-modal-header">
          <span className="cream-num-stamp">
            {project.number} //
          </span>
          <div>
            <h2 className="cream-modal-title">{project.title}</h2>
            <p className="cream-modal-subtitle">{project.subtitle} • {project.category}</p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="cream-modal-body">
          {/* Showcase Image Frame */}
          <div className="cream-img-frame">
            <img src={project.image} alt={project.title} className="cream-hero-img" />
            {project.liveUrl && (
              <span className="cream-live-tag">
                <span className="live-dot-cherry" /> LIVE SITE AVAILABLE
              </span>
            )}
          </div>

          {/* Grid Layout */}
          <div className="cream-content-grid">
            {/* Left Column: Overview & Case Study */}
            <div className="cream-left-col">
              <div className="cream-section">
                <h3 className="cream-heading">Overview &amp; Case Study</h3>
                <p className="cream-text">{project.description}</p>
              </div>
            </div>

            {/* Right Column: Role, Technologies & Live CTA */}
            <div className="cream-right-col">
              {/* Role Card */}
              <div className="cream-role-card">
                <Sparkles size={16} className="text-cherry shrink-0" />
                <span>{project.metrics}</span>
              </div>

              {/* Technologies */}
              <div className="cream-section">
                <h3 className="cream-heading">Technologies Used</h3>
                <div className="cream-tags-wrap">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="cream-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {project.liveUrl && (
                <div className="cream-cta-stack">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cream-btn-primary"
                  >
                    <span>VISIT LIVE WEBSITE</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




