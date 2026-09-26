import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';
import { playPopSound } from '../utils/soundEffects';

const CATEGORIES = [
  { key: 'all', label: 'ALL PROJECTS' },
  { key: 'web-mobile', label: 'WEB & MOBILE' },
  { key: 'systems', label: 'SYSTEMS INTEGRATION' },
  { key: 'academic', label: 'ACADEMIC & SECURITY' }
];

export function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categoryKey === activeCategory);

  const getCategoryCount = (key) => {
    if (key === 'all') return PROJECTS_DATA.length;
    return PROJECTS_DATA.filter((p) => p.categoryKey === key).length;
  };

  const handleCategoryChange = (key) => {
    playPopSound();
    setActiveCategory(key);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header-retro">
        <span className="section-num-stamp">05 //</span>
        <h2 className="section-title-serif">Selected Projects</h2>
      </div>

      {/* FILTER TABS */}
      <div className="projects-filter-bar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          const count = getCategoryCount(cat.key);
          return (
            <button
              key={cat.key}
              className={`project-filter-pill ${isActive ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.key)}
            >
              <span>{cat.label}</span>
              <span className="filter-count-badge">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="projects-grid-polaroid">
        {filteredProjects.map((project) => (
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

