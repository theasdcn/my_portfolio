import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Subtle night-sky backdrop for dark mode.
 *
 * Design goals: sparse, small, calm. Stars hold their position (no falling
 * "snow" effect), a minority twinkle very slowly, and three depth layers shift
 * a few pixels on scroll for a quiet sense of depth. A rare, faint shooting
 * star is the only moving accent. Everything pauses when the tab is hidden and
 * collapses to a single static frame for visitors who prefer reduced motion.
 */

// Cool white, blue-white, and a soft champagne that echoes the gold accent.
const STAR_COLORS = ['255, 255, 255', '255, 255, 255', '214, 226, 255', '255, 238, 205'];

// Depth layers: far stars are dimmest/smallest and barely move on scroll.
const LAYERS = [
  { share: 0.55, radius: [0.5, 0.85], alpha: [0.25, 0.5], parallax: 0.015, glow: false },
  { share: 0.33, radius: [0.75, 1.15], alpha: [0.38, 0.66], parallax: 0.04, glow: false },
  { share: 0.12, radius: [1.0, 1.5], alpha: [0.55, 0.85], parallax: 0.08, glow: true },
];

const FRAME_INTERVAL = 1000 / 30; // twinkle is slow, 30fps is plenty and saves battery
const rand = (min, max) => Math.random() * (max - min) + min;
const wrap = (value, max) => ((value % max) + max) % max;

export function StarField() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== 'dark') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = 0;
    let height = 0;
    let stars = [];
    let rafId = null;
    let lastFrame = 0;
    let scrollY = window.scrollY;
    let shootingStar = null;
    let nextShootingStarAt = performance.now() + rand(15000, 30000);
    let resizeTimer = null;

    const animate = () => !motionQuery.matches;

    const buildStars = () => {
      const count = Math.max(45, Math.min(150, Math.round((width * height) / 9000)));
      stars = [];
      LAYERS.forEach((layer) => {
        const layerCount = Math.round(count * layer.share);
        for (let i = 0; i < layerCount; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: rand(layer.radius[0], layer.radius[1]),
            alpha: rand(layer.alpha[0], layer.alpha[1]),
            parallax: layer.parallax,
            glow: layer.glow,
            color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
            // Only about a third of the stars twinkle at all.
            twinkles: Math.random() < 0.35,
            twinkleSpeed: rand(0.5, 1.4),
            twinklePhase: Math.random() * Math.PI * 2,
          });
        }
      });
    };

    const setup = () => {
      // Size from the CSS box (stable) rather than window.innerHeight, which
      // jitters on mobile as the address bar collapses.
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.round(rect.width) || window.innerWidth;
      const nextHeight = Math.round(rect.height) || window.innerHeight;
      if (nextWidth === width && nextHeight === height && stars.length) return false;

      width = nextWidth;
      height = nextHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
      return true;
    };

    const drawShootingStar = (now) => {
      if (!shootingStar) return;
      const s = shootingStar;
      const elapsed = now - s.born;
      const progress = elapsed / s.life;
      if (progress >= 1) {
        shootingStar = null;
        return;
      }
      const dx = Math.cos(s.angle);
      const dy = Math.sin(s.angle);
      const headX = s.x + dx * s.speed * elapsed;
      const headY = s.y + dy * s.speed * elapsed;
      const tailX = headX - dx * s.length;
      const tailY = headY - dy * s.length;
      const fade = Math.sin(progress * Math.PI); // ease in and out

      const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${0.55 * fade})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.beginPath();
      ctx.moveTo(headX, headY);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.stroke();
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, width, height);
      const moving = animate();

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const y = moving ? wrap(star.y - scrollY * star.parallax, height) : star.y;
        const twinkle =
          moving && star.twinkles
            ? 0.72 + 0.28 * Math.sin(now * 0.001 * star.twinkleSpeed + star.twinklePhase)
            : 1;
        const alpha = star.alpha * twinkle;

        ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        if (star.glow) {
          ctx.fillStyle = `rgba(${star.color}, ${alpha * 0.14})`;
          ctx.beginPath();
          ctx.arc(star.x, y, star.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (moving) {
        if (!shootingStar && now >= nextShootingStarAt) {
          shootingStar = {
            x: rand(width * 0.1, width * 0.7),
            y: rand(0, height * 0.35),
            angle: Math.PI / 4 + rand(-0.12, 0.12),
            length: rand(70, 120),
            speed: rand(0.55, 0.8), // px per ms
            born: now,
            life: 900,
          };
          nextShootingStarAt = now + rand(25000, 45000);
        }
        drawShootingStar(now);
      }
    };

    const loop = (now) => {
      rafId = requestAnimationFrame(loop);
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;
      draw(now);
    };

    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const start = () => {
      stop();
      if (animate() && !document.hidden) {
        rafId = requestAnimationFrame(loop);
      } else {
        draw(performance.now()); // single static frame
      }
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (setup()) start();
      }, 150);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    setup();
    start();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    motionQuery.addEventListener('change', start);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      motionQuery.removeEventListener('change', start);
    };
  }, [theme]);

  if (theme !== 'dark') {
    return null;
  }

  return <canvas ref={canvasRef} className="celestial-night-canvas" aria-hidden="true" />;
}
