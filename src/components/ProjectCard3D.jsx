import React from 'react';
import { playCameraShutter, playVinylClick } from '../utils/soundEffects';

export function ProjectCard3D({ project, onSelectProject }) {
  const handleClick = () => {
    playCameraShutter();
    onSelectProject(project);
  };

  return (
    <div 
      className="project-polaroid-card group cursor-pointer"
      onClick={handleClick}
      onMouseEnter={playVinylClick}
    >
      <div className="tape-strip top-center" />

      <div className="project-img-frame">
        <img 
          src={project.image} 
          alt={project.title} 
        />
        <div className="project-view-overlay">
          <span className="view-case-study-badge">
            View Case Study ↗
          </span>
        </div>
      </div>

      <div className="project-polaroid-meta">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="project-title-serif">{project.title}</h3>
            {project.liveUrl && (
              <span className="live-site-badge-tag">LIVE 🟢</span>
            )}
          </div>
          <p className="project-subtitle-mono">{project.subtitle} • {project.category}</p>
        </div>

        <span className="project-num-stamp">{project.number}</span>
      </div>
    </div>
  );
}
