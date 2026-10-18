import React from 'react';
import { Plane, Utensils, BookOpen, Cat, Sparkles, Shirt } from 'lucide-react';
import { DESIGNER_INFO } from '../constants/portfolioData';

// Keys used by `interests[].icon` in portfolioData.js
const INTEREST_ICONS = {
  travel: Plane,
  fashion: Shirt,
  food: Utensils,
  books: BookOpen,
};

export function Interests() {
  const { interests, interestsIntro, funFact } = DESIGNER_INFO;

  return (
    <section className="interests-section" id="interests">
      <div className="interests-container">
        <div className="section-header-retro">
          <h2 className="section-title-serif">Beyond the Code</h2>
        </div>

        {interestsIntro && <p className="interests-intro">{interestsIntro}</p>}

        <div className="beyond-code-layout">
          {/* Left Column: Featured Fun Fact Showcase Card */}
          <div className="fun-fact-card">
            <div className="fun-fact-header">
              <span className="fun-fact-pill-tag">
                <Sparkles size={13} className="fun-fact-sparkle-icon" />
                <span>FUN FACT</span>
              </span>
            </div>

            <div className="fun-fact-text">
              <h3 className="fun-fact-headline">{funFact.headline}</h3>
              <p className="fun-fact-sub">{funFact.sub}</p>
            </div>

            {/* Interactive 11 Cats Cluster */}
            <div className="fun-fact-cats-container">
              <span className="fun-fact-cats-label">Meet the 11 furballs</span>
              <div className="fun-fact-cats" aria-label="11 cats">
                {Array.from({ length: funFact.count || 11 }).map((_, i) => (
                  <Cat
                    key={i}
                    size={22}
                    strokeWidth={1.8}
                    className="fun-fact-cat"
                    title={`Cat #${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Interest Cards Grid */}
          <div className="interests-cards-grid">
            {interests.map((item) => {
              const Icon = INTEREST_ICONS[item.icon] || BookOpen;
              return (
                <div key={item.label} className="interest-card">
                  <span className="interest-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div className="interest-text">
                    <span className="interest-label">{item.label}</span>
                    <span className="interest-sub">{item.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
