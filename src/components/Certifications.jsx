import React from 'react';
import { Award } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants/portfolioData';

export function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="cert-container">
        <div className="section-header-retro">
          <span className="section-num-stamp">04 //</span>
          <h2 className="section-title-serif">Certifications</h2>
        </div>

        <div className="cert-grid-retro cert-grid-four">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div key={cert.id} className="cert-card-paper">
              <div className="tape-strip top-center" />
              
              <div className="cert-top-row">
                <div className="wax-seal-icon" style={{ color: cert.badgeColor }}>
                  <Award size={24} />
                </div>
                <span className="cert-date-tag">{cert.date}</span>
              </div>

              <h3 className="cert-title-serif">{cert.title}</h3>
              <p className="cert-issuer-mono">{cert.issuer}</p>

              <p className="cert-desc-p">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
