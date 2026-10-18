import React from 'react';
import { Plane, Utensils, BookOpen, Cat } from 'lucide-react';
import { DESIGNER_INFO } from '../constants/portfolioData';

// Keys used by `interests[].icon` in portfolioData.js
const INTEREST_ICONS = {
  travel: Plane,
  food: Utensils,
  books: BookOpen,
};

export function Interests() {
  const { interests, interestsIntro, funFact } = DESIGNER_INFO;

  return (
    <section className="interests-section" id="interests">
      <div className="section-header-retro reveal-3d">
        <h2 className="section-title-serif">Beyond the Code</h2>
      </div>

      {interestsIntro && <p className="interests-intro">{interestsIntro}</p>}

      <div className="interests-grid">
        {interests.map((item, idx) => {
          const Icon = INTEREST_ICONS[item.icon] || BookOpen;
          return (
            <div key={item.label} className={`interest-card reveal-3d-card delay-${idx + 1}`}>
              <span className="interest-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <span className="interest-text">
                <span className="interest-label">{item.label}</span>
                <span className="interest-sub">{item.sub}</span>
              </span>
            </div>
          );
        })}

        <div className={`fun-fact-card reveal-3d-card delay-${interests.length + 1}`}>
          <div className="fun-fact-count" aria-hidden="true">
            <span className="fun-fact-number">{funFact.count}</span>
            <span className="fun-fact-label">{funFact.label}</span>
          </div>

          <div className="fun-fact-text">
            <p className="fun-fact-headline">{funFact.headline}</p>
            <p className="fun-fact-sub">{funFact.sub}</p>
          </div>

          {/* One little cat per cat; they pop in one after another on scroll */}
          <div className="fun-fact-cats" aria-hidden="true">
            {Array.from({ length: funFact.count }).map((_, i) => (
              <Cat key={i} size={22} strokeWidth={1.7} className="fun-fact-cat" style={{ '--i': i }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
