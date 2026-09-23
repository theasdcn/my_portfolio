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
      title="Click and drag to rotate 3D laptop"
    >
      <div className="laptop-drag-hint">
        <span>✨ Drag to rotate 3D Laptop</span>
      </div>

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
            {/* Live Portfolio Preview Screen */}
            <div className="screen-content-preview">
              <div className="screen-header-bar">
                <div className="screen-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="screen-url">althea.dev</span>
              </div>
              <div className="screen-hero-preview">
                <span className="mini-portfolio-title">PORTFOLIO</span>
                <span className="mini-hero-text">ALTHEA ZULEIKA</span>
                <span className="mini-subtext">WEB &amp; MOBILE DEV</span>
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
