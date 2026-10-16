import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, Globe, ArrowUpRight } from 'lucide-react';

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

  const getDomainFromUrl = (url) => {
    if (!url) return `${project.id || 'project'}.demo`;
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace(/^www\./, '');
    } catch {
      return url.replace(/^https?:\/\//, '').split('/')[0];
    }
  };

  const domainName = getDomainFromUrl(project.liveUrl);

  return (
    <div className="executive-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="executive-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Close Button */}
        <button 
          className="modal-luxury-close-btn" 
          onClick={onClose} 
          aria-label="Close Project Info"
        >
          <X size={18} />
        </button>

        {/* Modal Top Header Bar */}
        <div className="modal-luxury-header">
          <div className="modal-header-meta">
            <span className="modal-category-pill">{project.category}</span>
          </div>

          <div className="modal-title-and-actions">
            <div>
              <h2 className="modal-title-serif">{project.title}</h2>
              <p className="modal-subtitle-text">{project.subtitle}</p>
            </div>

            {/* Quick Header Action Buttons */}
            <div className="modal-header-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn-primary"
                >
                  <span>Visit Live</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="modal-luxury-body">
          {/* Browser Window Mockup Frame */}
          <div className="modal-browser-showcase">
            <div className="modal-browser-bar">
              <div className="browser-dots-group">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="browser-url-pill">
                <Globe size={11} className="text-emerald-500" />
                <span>{domainName}</span>
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="browser-open-icon"
                  title="Open live link"
                >
                  <ExternalLink size={12} />
                </a>
              ) : (
                <div style={{ width: 16 }} />
              )}
            </div>

            <div className="modal-browser-viewport">
              <img 
                src={project.image} 
                alt={`${project.title} project showcase`} 
                className="modal-showcase-image" 
                draggable={false}
              />
            </div>
          </div>

          {/* Structured Case Study Layout: Balanced Overview & Role + Bottom Tech Stack */}
          <div className="modal-case-body">
            {/* Top Row: Executive Overview & Role Side-by-Side */}
            <div className="modal-overview-role-grid">
              {/* Executive Overview */}
              <div className="modal-section-block">
                <h3 className="modal-section-title">
                  <span className="title-bar-accent" />
                  Executive Overview
                </h3>
                <p className="modal-paragraph">{project.description}</p>
              </div>

              {/* Role & Leadership */}
              <div className="modal-leadership-box">
                <div className="leadership-header">
                  <Sparkles size={15} className="text-cherry" />
                  <span className="leadership-tag">ROLE &amp; LEADERSHIP</span>
                </div>
                <h4 className="leadership-role-text">{project.metrics}</h4>
                {project.roleDetails && (
                  <p className="leadership-desc-text">{project.roleDetails}</p>
                )}
              </div>
            </div>

            {/* Bottom Row: Technologies & Tools Across Width */}
            <div className="modal-tech-section">
              <h3 className="modal-section-title">
                <span className="title-bar-accent" />
                Technologies &amp; Tools
              </h3>
              <div className="modal-tags-container">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
