import React from 'react';
import { Plane, Utensils, BookOpen, Cat } from 'lucide-react';
import { DESIGNER_INFO } from '../constants/portfolioData';
import { playCameraShutter } from '../utils/soundEffects';

// Keys used by `interests[].icon` in portfolioData.js
const INTEREST_ICONS = {
  travel: Plane,
  food: Utensils,
  books: BookOpen,
};

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="section-header-retro reveal-3d">
        <h2 className="section-title-serif">About Me</h2>
      </div>

      <div className="about-scrapbook-grid">
        {/* Left Column: Editorial Text & About Cards */}
        <div className="about-text-content reveal-3d-left">
          <h3 className="about-headline-serif">
            Turning ideas into <span>practical digital solutions.</span>
          </h3>

          <p className="about-body-text">
            I'm a Bachelor of Science in Information Technology student at FEU Institute of Technology, specializing in Web and Mobile Application Development. I'm passionate about creating digital solutions that are functional, accessible, and easy to use.
          </p>

          <p className="about-body-text">
            {DESIGNER_INFO.aboutDetailed}
          </p>

          {/* About Trait Cards */}
          <div className="about-stats-tape-grid">
            {DESIGNER_INFO.aboutCards.map((card, idx) => (
              <div key={idx} className={`stat-paper-card tilt-card-3d reveal-3d-card delay-${idx + 1}`}>
                <div className="tilt-sheen-layer" />
                <div className="card-luxury-accent" />
                <span className="stat-num-y2k">{card.label}</span>
                <p className="stat-label-y2k">{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Beyond the code: interests and a fun fact */}
          <div className="about-beyond">
            <span className="about-beyond-eyebrow">Beyond the code</span>

            <ul className="about-interests-grid">
              {DESIGNER_INFO.interests.map((item, idx) => {
                const Icon = INTEREST_ICONS[item.icon] || BookOpen;
                return (
                  <li key={item.label} className={`interest-card reveal-3d-card delay-${idx + 1}`}>
                    <span className="interest-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className="interest-text">
                      <span className="interest-label">{item.label}</span>
                      <span className="interest-sub">{item.sub}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="fun-fact-card reveal-3d-card delay-4">
              <span className="fun-fact-icon" aria-hidden="true">
                <Cat size={26} strokeWidth={1.7} />
              </span>
              <div className="fun-fact-text">
                <span className="fun-fact-label">{DESIGNER_INFO.funFact.label}</span>
                <p className="fun-fact-headline">{DESIGNER_INFO.funFact.headline}</p>
                <p className="fun-fact-sub">{DESIGNER_INFO.funFact.sub}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Y2K Photobooth Film Strip with Real User Photos */}
        <div className="photobooth-strip-container reveal-3d-right">
          <div
            className="photobooth-film-strip cursor-pointer"
            data-parallax-speed="-0.15"
            onClick={playCameraShutter}
            title="Click to trigger camera shutter!"
          >
            {/* Film Sprocket Holes */}
            <div className="film-sprocket-holes left">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="sprocket-dot" />
              ))}
            </div>
            <div className="film-sprocket-holes right">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="sprocket-dot" />
              ))}
            </div>

            {/* Film Cells with User's Real Photos */}
            <div className="film-cell">
              <img src="/assets/user_photo_6.png" alt="Althea - Frame 1" className="film-cell-img" draggable={false} />
            </div>
            <div className="film-cell">
              <img src="/assets/user_photo_3.png" alt="Althea - Frame 2" className="film-cell-img" draggable={false} />
            </div>
            <div className="film-cell">
              <img src="/assets/user_photo_4.png" alt="Althea - Frame 3" className="film-cell-img" draggable={false} />
            </div>

            <div className="film-footer-meta">
              <span>10281.JPG</span>
              <span>ALTHEA</span>
              <span>10283.JPG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
