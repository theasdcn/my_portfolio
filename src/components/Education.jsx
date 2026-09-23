import React from 'react';
import { Award } from 'lucide-react';
import { EDUCATION_DATA } from '../constants/portfolioData';

export function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-header-retro" style={{ borderColor: '#ffffff' }}>
          <span className="section-num-stamp" style={{ color: '#fecdd3' }}>02 //</span>
          <h2 className="section-title-serif" style={{ color: '#ffffff' }}>Where I studied.
          </h2>
        </div>

        <div className="education-grid-retro">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="edu-paper-card">
              <div className="tape-strip top-left" />

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
                  {edu.achievements.length > 0 ? (
                    <>
                      Specialization track: {edu.detail === 'With High Honors'
                        ? (
                          <span className="edu-honors-badge">
                            <Award size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                            {edu.detail}
                          </span>
                        )
                        : edu.detail
                      }
                    </>
                  ) : (
                    edu.detail
                  )}
                </p>
              )}

              {edu.achievements.includes('With High Honors') && (
                <div className="edu-honor-row">
                  <Award size={16} />
                  <span>With High Honors</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
