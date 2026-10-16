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

    // Mouse tracking for subtle parallax & interactive starlight
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160
    };

    // Star configurations - 160-200 shining stars
    const STAR_COUNT = Math.min(Math.floor((width * height) / 6500), 190);
    const stars = [];

    // Helper to generate star
    const createStar = (initial = false) => {
      // 30% are larger signature 4-point stars, 70% are shining little diamond stars
      const isFourPoint = Math.random() > 0.68;
      const isFastTwinkle = Math.random() > 0.5;

      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -15,
        size: isFourPoint ? Math.random() * 2.2 + 2.0 : Math.random() * 1.6 + 1.2,
        isFourPoint,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.025,
        baseAlpha: Math.random() * 0.35 + 0.35,
        // High quality sharp twinkle oscillation
        twinkleSpeed: isFastTwinkle ? Math.random() * 0.045 + 0.03 : Math.random() * 0.02 + 0.012,
        twinklePhase: Math.random() * Math.PI * 2,
        twinklePower: isFastTwinkle ? 8 : 4,
        speedY: Math.random() * 0.12 + 0.04,
        speedX: (Math.random() - 0.5) * 0.05,
        color: getRandomStarColor(),
      };
    };

    function getRandomStarColor() {
      // Radiant palette for dark obsidian background: Diamond White, Champagne, Gold, Soft Rosy Starlight
      const colors = [
        'rgba(255, 255, 255, ',
        'rgba(255, 248, 220, ', // Cornsilk
        'rgba(255, 223, 128, ', // Soft Warm Gold
        'rgba(212, 175, 55, ',  // Metallic Gold
        'rgba(255, 192, 203, ', // Soft Rose
        'rgba(255, 255, 255, ', // Extra diamond white
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar(true));
    }

    // Shooting stars system
    const shootingStars = [];
    let lastShootingStarTime = Date.now();

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.85,
        y: Math.random() * height * 0.35,
        length: Math.random() * 90 + 60,
        speed: Math.random() * 9 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
        opacity: 1,
        fadeSpeed: 0.018,
        color: '255, 240, 200',
      });
    };

    // Draw Shining Star with 4 Tapered Rays & Diamond Glint
    const drawShiningStar = (ctx, star, glint, alpha) => {
      const { x, y, size, rotation, isFourPoint, color } = star;
      const rayLen = size * (isFourPoint ? 3.8 : 2.5) * (0.85 + glint * 0.95);
      const rayThickness = isFourPoint ? 1.5 : 0.9;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // 1. Soft Radial Starlight Glow Aura
      const auraRadius = rayLen * 1.4;
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, auraRadius);
      glowGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.9})`);
      glowGrad.addColorStop(0.3, `${color}${alpha * 0.5})`);
      glowGrad.addColorStop(1, `${color}0)`);
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, auraRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Shining 4-Point Tapered Cross Rays (Horizontal & Vertical)
      // Horizontal ray
      ctx.beginPath();
      ctx.moveTo(-rayLen, 0);
      ctx.lineTo(0, -rayThickness);
      ctx.lineTo(rayLen, 0);
      ctx.lineTo(0, rayThickness);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(alpha * 1.1, 1)})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `${color}${alpha})`;
      ctx.fill();

      // Vertical ray
      ctx.beginPath();
      ctx.moveTo(0, -rayLen);
      ctx.lineTo(-rayThickness, 0);
      ctx.lineTo(0, rayLen);
      ctx.lineTo(rayThickness, 0);
      ctx.closePath();
      ctx.fill();

      // If it's a prominent 4-point star, add secondary soft diagonal micro-rays
      if (isFourPoint && glint > 0.4) {
        const diagLen = rayLen * 0.45;
        ctx.beginPath();
        ctx.moveTo(-diagLen, -diagLen);
        ctx.lineTo(diagLen, diagLen);
        ctx.moveTo(-diagLen, diagLen);
        ctx.lineTo(diagLen, -diagLen);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 3. Ultra-Bright Central Diamond Core
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ffffff';
      ctx.fill();

      ctx.restore();
    };

    // Render loop
    let lastTime = Date.now();

    const render = () => {
      const now = Date.now();
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Random shooting star every 5-8 seconds
      if (now - lastShootingStarTime > 5500 && Math.random() < 0.02) {
        spawnShootingStar();
        lastShootingStarTime = now;
      }

      // 1. Draw and update shining stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move gently
        star.y += star.speedY;
        star.x += star.speedX;
        star.rotation += star.rotSpeed;
        star.twinklePhase += star.twinkleSpeed;

        // Wrap around screen edges
        if (star.y > height + 15) {
          star.y = -15;
          star.x = Math.random() * width;
        }
        if (star.x < -15) star.x = width + 15;
        if (star.x > width + 15) star.x = -15;

        // Sharp shining glint calculation (mimics real celestial twinkle)
        const sinVal = (Math.sin(star.twinklePhase) + 1) / 2; // 0 to 1
        const glint = Math.pow(sinVal, star.twinklePower); // sharp glint peaks
        let alpha = star.baseAlpha + (1.0 - star.baseAlpha) * glint;

        // Mouse proximity interaction (stars shine brighter near cursor)
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const proximity = 1 - dist / mouse.radius;
          alpha = Math.min(alpha + proximity * 0.6, 1.0);
        }

        // Draw the shining star
        drawShiningStar(ctx, star, glint, alpha);
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
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing head of shooting star
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.opacity})`;
        ctx.shadowBlur = 12;
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
