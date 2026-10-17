import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export function StarField() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== 'dark') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Realistic night sky: 180-220 very small pinprick stars
    const STAR_COUNT = Math.min(Math.floor((width * height) / 5500), 200);
    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      // Very small like actual stars: 0.4px to 0.9px radius
      const isBright = Math.random() > 0.85;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isBright ? Math.random() * 0.35 + 0.65 : Math.random() * 0.35 + 0.35,
        isBright,
        baseAlpha: Math.random() * 0.4 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        twinklePhase: Math.random() * Math.PI * 2,
        speedY: Math.random() * 0.05 + 0.015, // peaceful slow drift
        speedX: (Math.random() - 0.5) * 0.02,
        color: Math.random() > 0.4 ? '255, 255, 255' : '255, 235, 185',
      });
    }

    // Occasional subtle, realistic shooting star
    let shootingStar = null;
    let lastShootingStarTime = Date.now();

    const render = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, width, height);

      // Shooting star trigger
      if (!shootingStar && now - lastShootingStarTime > 8000 && Math.random() < 0.015) {
        shootingStar = {
          x: Math.random() * width * 0.7,
          y: Math.random() * height * 0.3,
          length: Math.random() * 50 + 30,
          speed: Math.random() * 6 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15,
          opacity: 0.75,
        };
        lastShootingStarTime = now;
      }

      // 1. Draw tiny realistic stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Peaceful motion
        star.y += star.speedY;
        star.x += star.speedX;
        star.twinklePhase += star.twinkleSpeed;

        if (star.y > height + 5) {
          star.y = -5;
          star.x = Math.random() * width;
        }
        if (star.x < -5) star.x = width + 5;
        if (star.x > width + 5) star.x = -5;

        // Realistic soft twinkle
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
        const alpha = Math.max(0.12, Math.min(0.95, star.baseAlpha + twinkle * 0.5));

        // Draw pinprick star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
        ctx.fill();

        // Very faint subtle glow only for the few brighter stars
        if (star.isBright && twinkle > 0.7) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${alpha * 0.25})`;
          ctx.fill();
        }
      }

      // 2. Draw shooting star if active
      if (shootingStar) {
        const s = shootingStar;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.02;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
          shootingStar = null;
        } else {
          ctx.save();
          const grad = ctx.createLinearGradient(
            s.x,
            s.y,
            s.x - Math.cos(s.angle) * s.length,
            s.y - Math.sin(s.angle) * s.length
          );
          grad.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(
            s.x - Math.cos(s.angle) * s.length,
            s.y - Math.sin(s.angle) * s.length
          );
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.0;
          ctx.lineCap = 'round';
          ctx.stroke();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  if (theme !== 'dark') {
    return null;
  }

  return <canvas ref={canvasRef} className="celestial-night-canvas" aria-hidden="true" />;
}
