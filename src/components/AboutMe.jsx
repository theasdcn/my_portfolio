import React from 'react';
import { DESIGNER_INFO } from '../constants/portfolioData';
import { playCameraShutter } from '../utils/soundEffects';

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="section-header-retro reveal-3d">
        <span className="section-num-stamp">01 //</span>
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
              <img src="/assets/user_photo_2.png" alt="Althea - Frame 1" className="film-cell-img" />
            </div>
            <div className="film-cell">
              <img src="/assets/user_photo_3.png" alt="Althea - Frame 2" className="film-cell-img" />
            </div>
            <div className="film-cell">
              <img src="/assets/user_photo_4.png" alt="Althea - Frame 3" className="film-cell-img" />
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
