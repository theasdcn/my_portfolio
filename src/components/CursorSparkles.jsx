import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SPARKLE_CHARS = ['✦', '✧', '⋆', '★', '·'];

export function CursorSparkles() {
  const { theme } = useTheme();
  const [sparkles, setSparkles] = useState([]);

  if (theme !== 'dark') {
    return null;
  }

  useEffect(() => {
    let lastMoveTime = 0;

    const handlePointerMove = (e) => {
      const now = performance.now();
      // Throttle to every 45ms to maintain smooth 60fps
      if (now - lastMoveTime < 45) return;
      lastMoveTime = now;

      // Small 30% chance per movement so it stays elegant and tasteful, not overwhelming
      if (Math.random() > 0.45) return;

      const newSparkle = {
        id: Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 24,
        y: e.clientY + (Math.random() - 0.5) * 24,
        char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
        size: Math.random() * 8 + 10,
        color: Math.random() > 0.5 ? 'var(--sparkle-gold, #d4af37)' : 'var(--sparkle-rose, #ff7a93)',
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]);
    };

    const handleClick = (e) => {
      // On click, create a burst of 5-7 mini stars
      const burst = Array.from({ length: 6 }).map(() => ({
        id: Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY + (Math.random() - 0.5) * 40,
        char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
        size: Math.random() * 10 + 12,
        color: Math.random() > 0.4 ? '#d4af37' : '#ff4766',
      }));

      setSparkles((prev) => [...prev.slice(-15), ...burst]);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Clean up expired sparkles after 700ms
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 700);
    return () => clearTimeout(timer);
  }, [sparkles]);

  return (
    <div className="cursor-sparkles-container" aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="cursor-sparkle-particle"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            fontSize: `${s.size}px`,
            color: s.color,
          }}
        >
          {s.char}
        </span>
      ))}
    </div>
  );
}
