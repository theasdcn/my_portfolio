import React from 'react';
import { PROJECTS_DATA } from '../constants/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';

export function ProjectsSection({ onSelectProject }) {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header-retro">
        <h2 className="section-title-serif">Selected Projects</h2>
      </div>

      <div className="projects-grid-polaroid">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard3D 
            key={project.id} 
            project={project} 
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}

