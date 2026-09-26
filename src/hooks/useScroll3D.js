import { useEffect } from 'react';

/**
 * useScroll3D
 * Provides:
 * 1. IntersectionObserver-based 3D perspective reveals on scroll (.reveal-3d, .reveal-3d-left, .reveal-3d-right, .reveal-3d-flip, .reveal-3d-scale, .reveal-3d-card)
 * 2. Continuous 3D scroll parallax on elements with data-parallax (e.g. hero polaroids, filmstrip, quote card)
 * 3. Interactive 3D mouse tilt with specular sheen on cards (.tilt-card-3d, .project-polaroid-card, .edu-paper-card, .cert-card-paper, .stat-paper-card)
 */
export function useScroll3D() {
  useEffect(() => {
    // ----------------------------------------------------
    // 1. Intersection Observer for 3D Scroll Reveal
    // ----------------------------------------------------
    const revealSelector = '.reveal-3d, .reveal-3d-left, .reveal-3d-right, .reveal-3d-flip, .reveal-3d-scale, .reveal-3d-card';
    const revealElements = document.querySelectorAll(revealSelector);

    const observerOptions = {
      root: null,
      rootMargin: '100px 0px 50px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      observer.observe(el);
      // Immediately reveal if element is already within or near viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150) {
        el.classList.add('is-visible');
      }
    });

    // ----------------------------------------------------
    // 2. Smooth Continuous 3D Scroll Parallax
    // ----------------------------------------------------
    let ticking = false;
    const parallaxItems = document.querySelectorAll('[data-parallax-speed]');

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Parallax for marked elements
          parallaxItems.forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.1');
            const rect = el.getBoundingClientRect();
            const offsetFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
            const translateY = offsetFromCenter * speed;
            const rotateX = offsetFromCenter * 0.015 * (speed > 0 ? 1 : -1);
            
            el.style.setProperty('--parallax-y', `${translateY}px`);
            el.style.setProperty('--parallax-rot-x', `${rotateX}deg`);
          });

          // Global scroll progress for 3D background depth
          document.documentElement.style.setProperty('--global-scroll-y', `${scrollY}px`);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial tick

    // ----------------------------------------------------
    // 3. Interactive 3D Cursor Tilt for Cards
    // ----------------------------------------------------
    const tiltCards = document.querySelectorAll('.tilt-card-3d, .project-polaroid-card, .edu-paper-card, .cert-card-paper, .stat-paper-card');
    const cleanups = [];

    tiltCards.forEach((card) => {
      let frameId = null;

      const onMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        frameId = requestAnimationFrame(() => {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
          
          // Specular light sheen
          const sheen = card.querySelector('.tilt-sheen-layer');
          if (sheen) {
            const px = (x / rect.width) * 100;
            const py = (y / rect.height) * 100;
            sheen.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255, 255, 255, 0.22), transparent 60%)`;
          }
        });
      };

      const onMouseLeave = () => {
        if (frameId) cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(() => {
          card.style.transform = '';
          const sheen = card.querySelector('.tilt-sheen-layer');
          if (sheen) sheen.style.background = 'transparent';
        });
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);

      cleanups.push(() => {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
        if (frameId) cancelAnimationFrame(frameId);
      });
    });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      cleanups.forEach((fn) => fn());
    };
  }, []);
}
