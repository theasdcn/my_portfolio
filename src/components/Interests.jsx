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
  const { interests, funFact } = DESIGNER_INFO;

  return (
    <section className="interests-section" id="interests">
      <div className="section-header-retro reveal-3d">
        <h2 className="section-title-serif">Beyond the Code</h2>
      </div>

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
          <span className="fun-fact-icon" aria-hidden="true">
            <Cat size={26} strokeWidth={1.7} />
          </span>
          <div className="fun-fact-text">
            <span className="fun-fact-label">{funFact.label}</span>
            <p className="fun-fact-headline">{funFact.headline}</p>
            <p className="fun-fact-sub">{funFact.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
