import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, Github, Lock } from 'lucide-react';

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

  // Format display domain for browser bar
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
    <div className="cream-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="cream-modal-card shadow-y2k"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button 
          className="cream-close-btn" 
          onClick={onClose} 
          aria-label="Close Case Study"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="cream-modal-header">
          <div className="cream-modal-meta-row">
            <span className="cream-num-stamp">{project.number} //</span>
            <span className="cream-category-badge">{project.category}</span>
            {project.liveUrl && (
              <span className="cream-status-pill">
                <span className="status-dot-pulse" />
                <span>Live Platform</span>
              </span>
            )}
          </div>
          
          <div className="cream-modal-title-row">
            <h2 className="cream-modal-title">{project.title}</h2>
            <p className="cream-modal-subtitle">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="cream-modal-body">
          {/* Showcase Browser Mockup Window */}
          <div className="cream-browser-window">
            <div className="cream-browser-chrome">
              <div className="browser-traffic-dots">
                <span className="dot dot-close" />
                <span className="dot dot-minimize" />
                <span className="dot dot-expand" />
              </div>
              <div className="browser-address-bar">
                <Lock size={11} className="browser-lock-icon" />
                <span className="browser-url-text">{domainName}</span>
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="browser-quick-link"
                  title="Open live site in new tab"
                >
                  <ExternalLink size={13} />
                </a>
              ) : (
                <div style={{ width: 16 }} />
              )}
            </div>

            <div className="cream-browser-viewport">
              <img 
                src={project.image} 
                alt={`${project.title} project showcase`} 
                className="cream-browser-img" 
              />
            </div>
          </div>

          {/* Structured Case Study Grid */}
          <div className="cream-content-grid">
            {/* Left Column: Overview & Role */}
            <div className="cream-left-col">
              <div className="cream-section">
                <h3 className="cream-heading">Executive Overview</h3>
                <p className="cream-text">{project.description}</p>
              </div>

              {/* Role & Leadership Card */}
              <div className="cream-role-card">
                <div className="cream-role-header">
                  <Sparkles size={15} className="cream-sparkle-icon" />
                  <span className="cream-role-tag">ROLE &amp; LEADERSHIP</span>
                </div>
                <div className="cream-role-metric">{project.metrics}</div>
                {project.roleDetails && (
                  <p className="cream-role-desc">{project.roleDetails}</p>
                )}
              </div>
            </div>

            {/* Right Column: Tech Stack & Action Links */}
            <div className="cream-right-col">
              {/* Technologies Used */}
              <div className="cream-section">
                <h3 className="cream-heading">Technologies &amp; Tools</h3>
                <div className="cream-tags-wrap">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="cream-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="cream-cta-stack">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cream-btn-primary"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cream-btn-secondary"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
