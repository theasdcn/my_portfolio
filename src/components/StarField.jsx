import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export function StarField() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  // ONLY render starfield in dark mode
  if (theme !== 'dark') {
    return null;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    };

    // Very small, realistic starry night sky: 200-240 tiny pinprick stars
    const STAR_COUNT = Math.min(Math.floor((width * height) / 5000), 220);
    const stars = [];

    // Helper to generate a realistic tiny star
    const createStar = (initial = false) => {
      // Very small like actual stars: mostly 0.4px to 0.85px, rare bright stars up to 1.1px
      const isBrightStar = Math.random() > 0.88;
      const radius = isBrightStar ? Math.random() * 0.4 + 0.8 : Math.random() * 0.45 + 0.4;

      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -10,
        radius,
        isBrightStar,
        baseAlpha: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 0.035 + 0.015,
        twinklePhase: Math.random() * Math.PI * 2,
        speedY: Math.random() * 0.08 + 0.02, // very slow peaceful drift
        speedX: (Math.random() - 0.5) * 0.03,
        // Realistic starlight: Diamond white, gentle warm champagne, soft silver
        color: Math.random() > 0.35 ? '255, 255, 255' : (Math.random() > 0.5 ? '255, 240, 200' : '230, 240, 255'),
      };
    };

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar(true));
    }

    // Occasional subtle, realistic shooting star
    const shootingStars = [];
    let lastShootingStarTime = Date.now();

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.35,
        length: Math.random() * 60 + 35,
        speed: Math.random() * 7 + 7,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        opacity: 0.85,
        fadeSpeed: 0.02,
      });
    };

    // Render loop
    const render = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Rare shooting star
      if (now - lastShootingStarTime > 7000 && Math.random() < 0.015) {
        spawnShootingStar();
        lastShootingStarTime = now;
      }

      // 1. Draw tiny realistic stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move gently
        star.y += star.speedY;
        star.x += star.speedX;
        star.twinklePhase += star.twinkleSpeed;

        // Screen wrap
        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        }
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        // Realistic starlight twinkle: sinusoidal oscillation with soft exponential glint
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5; // 0 to 1
        const alpha = Math.max(0.15, Math.min(1.0, star.baseAlpha * 0.5 + twinkle * 0.65));

        // Draw pinprick star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
        ctx.fill();

        // For bright stars, add a very delicate, micro-shimmer glow (only 1.5-2.5px aura)
        if (star.isBrightStar && twinkle > 0.6) {
          const glowAlpha = alpha * 0.35;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${glowAlpha})`;
          ctx.fill();

          // Delicate micro-glint cross (at most 2-3px)
          const flare = star.radius * 2.8;
          ctx.strokeStyle = `rgba(255, 255, 255, ${glowAlpha * 0.8})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(star.x - flare, star.y);
          ctx.lineTo(star.x + flare, star.y);
          ctx.moveTo(star.x, star.y - flare);
          ctx.lineTo(star.x, star.y + flare);
          ctx.stroke();
        }
      }

      // 2. Draw shooting stars (thin, realistic, delicate)
      for (let j = shootingStars.length - 1; j >= 0; j--) {
        const s = shootingStars[j];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= s.fadeSpeed;

        if (s.opacity <= 0 || s.x > width + 50 || s.y > height + 50) {
          shootingStars.splice(j, 1);
          continue;
        }

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

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="celestial-starfield-canvas" />;
}
