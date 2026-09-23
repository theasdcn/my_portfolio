import { useRef, useEffect } from 'react';

export function use3DTilt(maxTilt = 15, scale = 1.03) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let requestId;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      requestId = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        
        // Dynamic sheen glow effect update
        const sheen = card.querySelector('.tilt-sheen');
        if (sheen) {
          const sheenX = (x / rect.width) * 100;
          const sheenY = (y / rect.height) * 100;
          sheen.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 30, 39, 0.25), transparent 70%)`;
        }
      });
    };

    const handleMouseLeave = () => {
      requestId = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        const sheen = card.querySelector('.tilt-sheen');
        if (sheen) {
          sheen.style.background = 'transparent';
        }
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (requestId) cancelAnimationFrame(requestId);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, scale]);

  return cardRef;
}
