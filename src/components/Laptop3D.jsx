import React, { useRef, useState, useEffect } from 'react';

export function Laptop3D() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 12, y: -18 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;

    setRotation((prev) => ({
      x: Math.max(-30, Math.min(35, prev.x - deltaY * 0.4)),
      y: Math.max(-60, Math.min(60, prev.y + deltaX * 0.4))
    }));

    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div 
      className="laptop-3d-scene" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="laptop-3d-model"
        style={{
          transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {/* LAPTOP SCREEN LID */}
        <div className="laptop-screen-frame">
          <div className="laptop-camera-dot" />
          <div className="laptop-screen-display">
            {/* Clean Screen Preview */}
            <div className="screen-content-preview">
              <div className="screen-header-bar">
                <div className="screen-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="screen-address-bar">
                  <span>altheasadicon.portfolio</span>
                </div>
              </div>
              <div className="screen-hero-preview">
                <div className="mini-hero-badge">✦ WEB &amp; MOBILE DEV</div>
                <div className="mini-hero-title">ALTHEA ZULEIKA</div>
                <div className="mini-hero-subtitle">FEU TECH • BSIT 2026</div>
                <div className="mini-projects-row">
                  <div className="mini-project-chip">SAVR App</div>
                  <div className="mini-project-chip">Fairall</div>
                  <div className="mini-project-chip">Vitaly Tea</div>
                </div>
              </div>
            </div>
          </div>
          <div className="laptop-bevel-bottom" />
        </div>

        {/* LAPTOP HINGE */}
        <div className="laptop-hinge" />

        {/* LAPTOP BASE / KEYBOARD */}
        <div className="laptop-base-body">
          <div className="laptop-keyboard">
            <div className="keyboard-key-grid">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="mini-key" />
              ))}
            </div>
            <div className="mini-trackpad" />
          </div>
          <div className="laptop-front-lip" />
        </div>

        {/* 3D DROP SHADOW */}
        <div className="laptop-shadow-plane" />
      </div>
    </div>
  );
}
