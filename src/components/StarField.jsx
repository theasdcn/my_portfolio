import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export function StarField() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax & interactive starlight
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140
    };

    // Star configurations
    const STAR_COUNT = Math.min(Math.floor((width * height) / 8000), 160);
    const stars = [];

    // Helper to generate star
    const createStar = (initial = false) => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const isFourPoint = Math.random() > 0.82; // ~18% are 4-point sparkle stars
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -10,
        size: isFourPoint ? Math.random() * 2.5 + 2.0 : Math.random() * 1.5 + 0.6,
        isFourPoint,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        baseAlpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        speedY: Math.random() * 0.15 + 0.05,
        speedX: (Math.random() - 0.5) * 0.06,
        color: getRandomColor(isDark),
      };
    };

    function getRandomColor(isDark) {
      if (isDark) {
        // Deep obsidian background: Gold, diamond white, soft rose, champagne
        const colors = [
          'rgba(255, 255, 255, ',
          'rgba(245, 222, 179, ',
          'rgba(212, 175, 55, ',
          'rgba(255, 182, 193, ',
          'rgba(255, 215, 0, ',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      } else {
        // Light cream parchment: Warm honey, rose amber, antique gold, wine sparkle
        const colors = [
          'rgba(184, 134, 11, ',
          'rgba(196, 75, 105, ',
          'rgba(140, 40, 70, ',
          'rgba(166, 124, 0, ',
          'rgba(120, 30, 50, ',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    }

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar(true));
    }

    // Shooting stars system
    const shootingStars = [];
    let lastShootingStarTime = Date.now();

    const spawnShootingStar = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 7,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        opacity: 1,
        fadeSpeed: 0.015,
        color: isDark ? '255, 235, 180' : '196, 75, 105',
      });
    };

    // Draw 4-point star burst (✦)
    const drawFourPointStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, rotation, alpha, colorPrefix) => {
      let rot = (Math.PI / 2) * 3 + rotation;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);

      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();

      ctx.fillStyle = `${colorPrefix}${alpha})`;
      ctx.shadowBlur = outerRadius * 3;
      ctx.shadowColor = `${colorPrefix}${alpha * 0.8})`;
      ctx.fill();
      ctx.restore();
    };

    // Render loop
    let lastTime = Date.now();

    const render = () => {
      const now = Date.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Random shooting star chance every 5-8 seconds
      if (now - lastShootingStarTime > 6000 && Math.random() < 0.015) {
        spawnShootingStar();
        lastShootingStarTime = now;
      }

      // 1. Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move gently
        star.y += star.speedY;
        star.x += star.speedX;
        star.rotation += star.rotSpeed;
        star.twinklePhase += star.twinkleSpeed;

        // Wrap around
        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        }
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        // Calculate twinkle opacity
        const twinkle = Math.sin(star.twinklePhase) * 0.35 + 0.65;
        let alpha = star.baseAlpha * twinkle;

        // Mouse proximity interaction (stars glow brighter near cursor)
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const proximity = 1 - dist / mouse.radius;
          alpha = Math.min(alpha + proximity * 0.6, 1.0);
        }

        // Adjust alpha for light mode so it remains tasteful & readable
        const finalAlpha = isDark ? alpha : alpha * 0.55;

        if (star.isFourPoint) {
          drawFourPointStar(
            ctx,
            star.x,
            star.y,
            4,
            star.size * 2.2,
            star.size * 0.5,
            star.rotation,
            finalAlpha,
            star.color
          );
        } else {
          // Standard glowing dot star
          ctx.save();
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${finalAlpha})`;
          if (isDark && star.size > 1.2) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = `${star.color}${finalAlpha * 0.6})`;
          }
          ctx.fill();
          ctx.restore();
        }
      }

      // 2. Draw shooting stars
      for (let j = shootingStars.length - 1; j >= 0; j--) {
        const s = shootingStars[j];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= s.fadeSpeed;

        if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
          shootingStars.splice(j, 1);
          continue;
        }

        ctx.save();
        const gradient = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        gradient.addColorStop(0, `rgba(${s.color}, ${s.opacity})`);
        gradient.addColorStop(1, `rgba(${s.color}, 0)`);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing head of shooting star
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${s.color}, ${s.opacity})`;
        ctx.fill();
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

    // Mouse movement listener
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="celestial-starfield-canvas" />;
}
