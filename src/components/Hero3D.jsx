import React from 'react';
import { MapPin, Volume2, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../constants/portfolioData';
import { playCameraShutter, playVinylClick } from '../utils/soundEffects';

export function Hero3D() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-texture" />

      {/* Floating Ambient Starlight Accents */}
      <div className="hero-stars-aura" aria-hidden="true">
        <span className="floating-hero-star f-star-1">✦</span>
        <span className="floating-hero-star f-star-2">✧</span>
        <span className="floating-hero-star f-star-3">⋆</span>
        <span className="floating-hero-star f-star-4">✦</span>
        <span className="floating-hero-star f-star-5">✧</span>
        <span className="floating-hero-star f-star-6">✦</span>
        <span className="floating-hero-star f-star-7">★</span>
        <span className="floating-hero-star f-star-8">⋆</span>
        <span className="floating-hero-star f-star-9">✧</span>
        <span className="floating-hero-star f-star-10">✦</span>
        <span className="floating-hero-star f-star-11">⋆</span>
        <span className="floating-hero-star f-star-12">✧</span>
      </div>

      <div className="hero-container">
        {/* LEFT COLUMN: Editorial Titles & Bio */}
        <div className="hero-left reveal-3d-left">
          <div className="hero-script-badge-wrapper">
            <span className="hero-script-tag">
              <Sparkles size={14} className="hero-sparkle-icon" /> Hey, I'm
            </span>
            <span className="hero-micro-star-tag"><span className="dark-only-star">✦ </span>PORTFOLIO '26</span>
          </div>

          <h1 className="hero-title-main">
            ALTHEA ZULEIKA <br />
            <span className="hero-title-italic">SADICON</span>
          </h1>

          <p className="hero-role-tag">
            <span className="role-star-bullet">✦</span> BSIT Student <span className="role-separator">|</span> Web &amp; Mobile Application Developer
          </p>

          <div className="hero-meta-row">
            <div className="hero-location-tag">
              <MapPin size={15} />
              <span>{DESIGNER_INFO.location}</span>
            </div>
            <div className="hero-status-pill">
              <span className="hero-pulse-dot" />
              <span><span className="dark-only-star">✦ </span>AVAILABLE FOR OPPORTUNITIES</span>
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

        {/* CENTER COLUMN: Editorial Archival Photo Collage with User's Real Photos & Star Accents */}
        <div className="hero-center-collage reveal-3d-right">
          {/* Decorative Collage Floating Stars */}
          <span className="collage-star-pin pin-top-right">✦</span>
          <span className="collage-star-pin pin-bottom-left">✧</span>
          <span className="collage-star-pin pin-center-glow">⋆</span>

          {/* Main Portrait Frame */}
          <div
            className="polaroid-card main-portrait-polaroid group cursor-pointer tilt-card-3d"
            data-parallax-speed="-0.1"
            onClick={playCameraShutter}
            onMouseEnter={playVinylClick}
            title="Click to snap camera shutter!"
          >
            <div className="tilt-sheen-layer" />
            <div className="archival-mount-tag"><span className="dark-only-star">✦ </span>PORTFOLIO EDITORIAL<span className="dark-only-star"> ✦</span></div>
            <div className="polaroid-img-box">
              <img
                src="/assets/user_photo_1.png"
                alt="Althea Zuleika Sadicon"
                draggable={false}
              />
            </div>
            <div className="polaroid-caption-row">
              <p className="polaroid-caption">Althea — 2026<span className="dark-only-star"> ✦</span></p>
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
            <div className="archival-mount-tag"><span className="dark-only-star">✦ </span>DEV · ARCHIVE</div>
            <div className="polaroid-img-box">
              <img
                src="/assets/user_photo_2.png"
                alt="Althea — Developer"
                draggable={false}
              />
            </div>
            <p className="polaroid-caption">Web &amp; Mobile Dev<span className="dark-only-star"> ✧</span></p>
          </div>
        </div>

      </div>
    </section>
  );
}
