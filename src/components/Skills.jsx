import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from './TechIcons';
import { playPopSound } from '../utils/soundEffects';

const TECH_GROUPS = [
  {
    category: 'FRONT END',
    items: [
      { id: 'html5', name: 'html5', label: 'HTML5', dropOffset: { x: -20, y: 140, rotate: -8 } },
      { id: 'css3', name: 'css3', label: 'CSS3', dropOffset: { x: 40, y: 160, rotate: 12 } },
      { id: 'javascript', name: 'javascript', label: 'JavaScript', dropOffset: { x: -60, y: 220, rotate: -15 } },
      { id: 'bootstrap', name: 'bootstrap', label: 'Bootstrap', dropOffset: { x: 30, y: 240, rotate: 9 } },
      { id: 'react', name: 'react', label: 'React (Vite)', dropOffset: { x: 80, y: 190, rotate: -10 } },
    ]
  },
  {
    category: 'FULL STACK',
    items: [
      { id: 'nextjs', name: 'nextjs', label: 'Next.js', dropOffset: { x: -40, y: 110, rotate: 14 } },
      { id: 'laravel', name: 'laravel', label: 'Laravel', dropOffset: { x: 50, y: 130, rotate: -12 } },
    ]
  },
  {
    category: 'BACK END',
    items: [
      { id: 'php', name: 'php', label: 'PHP', dropOffset: { x: -80, y: 90, rotate: -6 } },
      { id: 'supabase', name: 'supabase', label: 'Supabase', dropOffset: { x: -20, y: 80, rotate: 18 } },
      { id: 'mysql', name: 'sql', label: 'MySQL', dropOffset: { x: 40, y: 95, rotate: -14 } },
      { id: 'postgresql', name: 'postgresql', label: 'PostgreSQL', dropOffset: { x: 90, y: 85, rotate: 10 } },
      { id: 'aspnet', name: 'aspnet', label: 'ASP.NET', dropOffset: { x: -50, y: 100, rotate: -8 } },
      { id: 'vbnet', name: 'vbnet', label: 'VB.NET', dropOffset: { x: 60, y: 105, rotate: 16 } },
    ]
  },
  {
    category: 'LANGUAGES',
    items: [
      { id: 'csharp', name: 'csharp', label: 'C#', dropOffset: { x: 120, y: 40, rotate: 14 } },
      { id: 'java', name: 'java', label: 'Java', dropOffset: { x: -70, y: 55, rotate: -18 } },
      { id: 'c', name: 'c', label: 'C', dropOffset: { x: -30, y: 80, rotate: 22 } },
      { id: 'sql', name: 'sql', label: 'SQL', dropOffset: { x: 45, y: 65, rotate: -12 } },
    ]
  },
  {
    category: 'TOOLS & DESIGN',
    items: [
      { id: 'vscode', name: 'vscode', label: 'VS Code', dropOffset: { x: 50, y: 25, rotate: -10 } },
      { id: 'git', name: 'github', label: 'Git', dropOffset: { x: -140, y: 45, rotate: -25 } },
      { id: 'figma', name: 'figma', label: 'Figma', dropOffset: { x: 110, y: 35, rotate: 15 } },
      { id: 'canva', name: 'canva', label: 'Canva', dropOffset: { x: -40, y: 30, rotate: -8 } },
      { id: 'capcut', name: 'capcut', label: 'CapCut', dropOffset: { x: 75, y: 20, rotate: 12 } },
    ]
  }
];

export function Skills() {
  const containerRef = useRef(null);
  const [isDropped, setIsDropped] = useState(false);

  const toggleGravity = () => {
    setIsDropped((prev) => !prev);
    playPopSound();
  };

  return (
    <section className="tech-stack-section" id="skills">
      <div className="tech-stack-container" ref={containerRef}>
        {/* Luxury Velvet Cabernet Workspace Card */}
        <div className="tech-stack-card">
          {/* Header Row: Red Layer Icon + "Tech Stack" Title + Interactive Control */}
          <div className="tech-stack-header">
            <div className="tech-stack-title-group">
              <span className="tech-stack-icon-badge" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#B81D36" />
                  <path d="M2 12l10 5 10-5" stroke="#B81D36" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="#B81D36" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h2 className="tech-stack-title">Tech Stack</h2>
            </div>

            <div className="tech-stack-actions">
              <span className="tech-stack-hint">
                <span className="hint-dot" /> Drag badges or drop physics
              </span>
              <button
                type="button"
                className={`tech-stack-gravity-btn ${isDropped ? 'is-active' : ''}`}
                onClick={toggleGravity}
                title="Toggle interactive physics drop"
              >
                {isDropped ? '↺ Reset Grid' : '⚡ Physics Drop'}
              </button>
            </div>
          </div>

          {/* Grouped Layout matching the exact screenshot */}
          <div className="tech-stack-groups-stack">
            {TECH_GROUPS.map((group, groupIdx) => (
              <div key={group.category} className="tech-stack-group-row">
                <span className="tech-stack-category-label">{group.category}</span>
                
                <div className="tech-stack-pills-row">
                  {group.items.map((item, itemIdx) => {
                    const drop = item.dropOffset || { x: 0, y: 40, rotate: 0 };
                    
                    return (
                      <motion.div
                        key={item.id}
                        className="tech-pill-badge"
                        drag
                        dragConstraints={containerRef}
                        dragElastic={0.2}
                        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 280,
                          damping: 20,
                          delay: (groupIdx * 0.08) + (itemIdx * 0.03)
                        }}
                        animate={
                          isDropped
                            ? {
                                x: drop.x,
                                y: drop.y,
                                rotate: drop.rotate,
                                transition: { type: 'spring', stiffness: 180, damping: 14 }
                              }
                            : {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                transition: { type: 'spring', stiffness: 350, damping: 24 }
                              }
                        }
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.15 }
                        }}
                        whileTap={{ scale: 0.96 }}
                        whileDrag={{
                          scale: 1.12,
                          rotate: drop.rotate || 6,
                          zIndex: 100,
                          cursor: 'grabbing'
                        }}
                        onMouseEnter={playPopSound}
                      >
                        <div className="tech-pill-icon">
                          <TechIcon name={item.name} />
                        </div>
                        <span className="tech-pill-label">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
