import React from 'react';
import { Plus, Quote } from 'lucide-react';

export function QuoteBanner({ onOpenContact }) {
  return (
    <div 
      className="quote-banner-card group tilt-card-3d reveal-3d-right"
      data-parallax-speed="-0.08"
    >
      <div className="tilt-sheen-layer" />
      <div className="quote-bg-glow" />
      
      <div className="quote-icon-container">
        <Quote className="quote-svg-icon" size={48} />
      </div>

      <blockquote className="quote-text">
        "I enjoy turning ideas into digital solutions that are useful, functional, and easy to understand."
      </blockquote>

      <div className="quote-signature-row">
        <span className="quote-signature">Althea Zuleika Sadicon</span>
      </div>

      <div className="quote-cta-wrapper" onClick={onOpenContact}>
        <h4 className="quote-cta-text">
          LET'S BUILD SOMETHING GREAT TOGETHER.
        </h4>
        <span className="quote-plus-btn">
          <Plus size={20} />
        </span>
      </div>
    </div>
  );
}
