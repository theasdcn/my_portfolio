import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { playCameraShutter, playVinylClick } from '../utils/soundEffects';

export function ProjectCard3D({ project, onSelectProject }) {
  const handleClick = () => {
    playCameraShutter();
    onSelectProject(project);
  };

  const handleLiveClick = (e) => {
    e.stopPropagation();
    playCameraShutter();
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="project-polaroid-card group cursor-pointer tilt-card-3d reveal-3d-card"
      onClick={handleClick}
      onMouseEnter={playVinylClick}
    >
      <div className="tilt-sheen-layer" />
      <div className="archival-mount-tag">{project.categoryKey.replace('-', ' · ').toUpperCase()}</div>

      <div className="project-img-frame">
        <img 
          src={project.image} 
          alt={project.title} 
        />
        <div className="project-view-overlay">
          <div className="project-card-overlay-actions">
            <span className="view-case-study-badge">
              <Eye size={14} /> Case Study
            </span>
            {project.liveUrl && (
              <button 
                className="card-quick-live-btn"
                onClick={handleLiveClick}
                title="Open Live Website in New Tab"
              >
                <span>Visit Live</span> <ExternalLink size={12} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="project-polaroid-meta">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="project-title-serif">{project.title}</h3>
            {project.liveUrl && (
              <span className="live-site-badge-tag">LIVE 🟢</span>
            )}
          </div>
          <p className="project-subtitle-mono">{project.subtitle} • {project.category}</p>
          
          <div className="project-card-tags-pills">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="project-mini-tag">{tag}</span>
            ))}
          </div>
        </div>

        <span className="project-num-stamp" style={{ color: project.accentColor }}>
          {project.number}
        </span>
      </div>
    </div>
  );
}

