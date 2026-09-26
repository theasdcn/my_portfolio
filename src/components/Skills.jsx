import React from 'react';
import { SKILLS_CATEGORIES } from '../constants/portfolioData';
import { playPopSound } from '../utils/soundEffects';

export function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header-retro">
        <span className="section-num-stamp">03 //</span>
        <h2 className="section-title-serif">Skills Matrix</h2>
      </div>

      <div className="skills-grid-retro">
        {SKILLS_CATEGORIES.map((catGroup, idx) => (
          <div key={idx} className="skill-box-paper">
            <h3 className="skill-box-header">{catGroup.category}</h3>

            <div className="skill-pills-stack">
              {catGroup.skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-item-tag cursor-pointer"
                  onMouseEnter={playPopSound}
                >
                  <span className="skill-star-icon">✳</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
