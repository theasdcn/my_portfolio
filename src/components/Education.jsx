import React from 'react';
import { EDUCATION_DATA } from '../constants/portfolioData';

export function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-header-retro reveal-3d">
          <span className="section-num-stamp">02 //<span className="dark-only-star"> ✦</span></span>
          <h2 className="section-title-serif">Education &amp; Background <span className="title-star-flair">✦</span></h2>
        </div>

        <div className="education-grid-retro">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={edu.id} className={`edu-paper-card tilt-card-3d reveal-3d-card delay-${idx + 1}`}>
              <div className="tilt-sheen-layer" />
              <div className="edu-card-accent" />

              {/* Level badge */}
              <span className="edu-level-label">{edu.level}</span>

              {/* Year stamp */}
              <span className="edu-stamp-tag">{edu.years}</span>

              <h3 className="edu-degree-serif">{edu.degree}</h3>

              <p className="edu-institution-mono">
                {edu.institution} • {edu.location}
              </p>

              {edu.detail && (
                <p className="edu-body-p">
                  {edu.detail.includes('With High Honors') ? (
                    <span className="edu-honors-badge">
                      <span className="edu-honors-star">★</span> {edu.detail}
                    </span>
                  ) : (
                    edu.detail
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
