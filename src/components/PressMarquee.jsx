import React from 'react';

const ITEMS = [
  'VOGUE', '✳', 'BAZAAR', '✳', 'FORBES', '✳', 'ELLE', '✳', 'THE NEW YORK TIMES', '✳',
];

export function PressMarquee() {
  // Duplicate items so the loop is seamless
  const track = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="press-marquee-bar">
      <div className="press-marquee-overflow">
        <div className="press-marquee-track">
          {track.map((item, idx) => (
            <span key={idx} className="press-brand-item">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
