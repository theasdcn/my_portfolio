import React from 'react';
import { MapPin, Sparkles, Volume2 } from 'lucide-react';
import { DESIGNER_INFO } from '../constants/portfolioData';
import { playCameraShutter, playVinylClick } from '../utils/soundEffects';

export function Hero3D() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-texture" />

      <div className="hero-container">
        {/* LEFT COLUMN: Editorial Titles & Bio */}
        <div className="hero-left">
          <div className="hero-top-badge">
            <Sparkles size={16} className="text-cherry" />
            <span className="font-mono text-xs text-cream uppercase">3D Interactive Digital Portfolio</span>
          </div>

          <span className="hero-script-tag">Hey, I'm</span>

          <h1 className="hero-title-main">
            ALTHEA ZULEIKA <br />
            <span className="hero-title-italic">SADICON</span>
          </h1>

          <p className="hero-role-tag">BSIT Student | Web &amp; Mobile Application Developer</p>

          <p className="hero-bio">
            {DESIGNER_INFO.bio}
          </p>

          <div className="hero-location-tag">
            <MapPin size={16} />
            <span>{DESIGNER_INFO.location}</span>
          </div>
        </div>

        {/* CENTER COLUMN: Y2K Photobook Polaroid Collage with User's Real Photos */}
        <div className="hero-center-collage">
          {/* Main Polaroid Photo */}
          <div
            className="polaroid-card main-portrait-polaroid group cursor-pointer"
            onClick={playCameraShutter}
            onMouseEnter={playVinylClick}
            title="Click to snap camera shutter sound!"
          >
            <div className="tape-strip top-center" />
            <div className="polaroid-img-box">
              <img
                src="/assets/user_photo_5.png"
                alt="Althea Zuleika Sadicon"
              />
            </div>
            <div className="polaroid-caption-row">
              <p className="polaroid-caption">Althea — 2026</p>
              <Volume2 size={16} className="audio-hint-icon opacity-50 group-hover:opacity-100" />
            </div>
          </div>

          {/* Secondary Tilted Polaroid */}
          <div
            className="polaroid-card secondary-polaroid-tilted group cursor-pointer"
            onClick={playCameraShutter}
            onMouseEnter={playVinylClick}
          >
            <div className="tape-strip top-right" />
            <div className="polaroid-img-box">
              <img
                src="/assets/user_photo_1.png"
                alt="Althea — Developer"
              />
            </div>
            <p className="polaroid-caption">Web &amp; Mobile Dev</p>
          </div>
        </div>

      </div>
    </section>
  );
}
