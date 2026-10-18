import React from 'react';
import { MapPin, Volume2 } from 'lucide-react';
import { DESIGNER_INFO } from '../constants/portfolioData';
import { playCameraShutter, playVinylClick } from '../utils/soundEffects';

export function Hero3D() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-texture" />

      <div className="hero-container">
        {/* LEFT COLUMN: Editorial Titles & Bio */}
        <div className="hero-left reveal-3d-left">
          <span className="hero-script-tag">Hey, I'm</span>

          <h1 className="hero-title-main">
            ALTHEA ZULEIKA <br />
            <span className="hero-title-italic">SADICON</span>
          </h1>

          <p className="hero-role-tag">BSIT Student | Web &amp; Mobile Application Developer</p>

          <div className="hero-meta-row">
            <div className="hero-location-tag">
              <MapPin size={15} />
              <span>{DESIGNER_INFO.location}</span>
            </div>
            <div className="hero-status-pill">
              <span className="hero-pulse-dot" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          {/* Hero Elegant Action Buttons */}
          <div className="hero-actions-row">
            <a
              href="#projects"
              className="hero-btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Explore Projects</span>
              <span className="hero-btn-arrow">↓</span>
            </a>
            <a
              href="#contact"
              className="hero-btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Get in Touch</span>
              <span className="hero-btn-arrow">→</span>
            </a>
          </div>
        </div>

        {/* CENTER COLUMN: Editorial Archival Photo Collage with User's Real Photos */}
        <div className="hero-center-collage reveal-3d-right">
          {/* Main Portrait Frame */}
          <div
            className="polaroid-card main-portrait-polaroid group cursor-pointer tilt-card-3d"
            data-parallax-speed="-0.1"
            onClick={playCameraShutter}
            onMouseEnter={playVinylClick}
            title="Click to snap camera shutter!"
          >
            <div className="tilt-sheen-layer" />
            <div className="archival-mount-tag"></div>
            <div className="polaroid-img-box">
              <img
                src="/assets/user_photo_1.png"
                alt="Althea Zuleika Sadicon"
                draggable={false}
              />
            </div>
            <div className="polaroid-caption-row">
              <p className="polaroid-caption">Althea — 2026</p>
              <Volume2 size={16} className="audio-hint-icon opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Secondary Tilted Frame */}
          <div
            className="polaroid-card secondary-polaroid-tilted group cursor-pointer tilt-card-3d"
            data-parallax-speed="-0.2"
            onClick={playCameraShutter}
            onMouseEnter={playVinylClick}
            title="Click to snap camera shutter!"
          >
            <div className="tilt-sheen-layer" />
            <div className="archival-mount-tag">DEV · ARCHIVE</div>
            <div className="polaroid-img-box">
              <img
                src="/assets/user_photo_2.png"
                alt="Althea — Developer"
                draggable={false}
              />
            </div>
            <p className="polaroid-caption">Web &amp; Mobile Dev</p>
          </div>
        </div>

      </div>
    </section>
  );
}
