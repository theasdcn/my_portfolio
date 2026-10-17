import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from './TechIcons';
import { playPopSound } from '../utils/soundEffects';

const TECH_GROUPS = [
  {
    category: 'FRONT END & MOBILE',
    items: [
      { id: 'react-native', name: 'react-native', label: 'React Native' },
      { id: 'react', name: 'react', label: 'React (Vite)' },
      { id: 'nextjs', name: 'nextjs', label: 'Next.js' },
      { id: 'tailwind', name: 'tailwind', label: 'Tailwind CSS' },
      { id: 'javascript', name: 'javascript', label: 'JavaScript' },
      { id: 'html5', name: 'html5', label: 'HTML5' },
      { id: 'css3', name: 'css3', label: 'CSS3' },
      { id: 'bootstrap', name: 'bootstrap', label: 'Bootstrap' },
    ]
  },
  {
    category: 'BACK END & FULL STACK',
    items: [
      { id: 'laravel', name: 'laravel', label: 'Laravel' },
      { id: 'codeigniter', name: 'codeigniter', label: 'CodeIgniter' },
      { id: 'nodejs', name: 'nodejs', label: 'Node.js' },
      { id: 'php', name: 'php', label: 'PHP' },
      { id: 'apache', name: 'apache', label: 'Apache' },
      { id: 'supabase', name: 'supabase', label: 'Supabase' },
      { id: 'mysql', name: 'sql', label: 'MySQL' },
      { id: 'postgresql', name: 'postgresql', label: 'PostgreSQL' },
      { id: 'sqlite', name: 'sqlite', label: 'SQLite' },
      { id: 'docker', name: 'docker', label: 'Docker' },
    ]
  },
  {
    category: 'LANGUAGES',
    items: [
      { id: 'swift', name: 'swift', label: 'Swift' },
      { id: 'kotlin', name: 'kotlin', label: 'Kotlin' },
      { id: 'cpp', name: 'cpp', label: 'C++' },
      { id: 'java', name: 'java', label: 'Java' },
      { id: 'sql', name: 'sql', label: 'SQL' },
    ]
  },
  {
    category: 'TOOLS, IDE & DESIGN',
    items: [
      { id: 'androidstudio', name: 'androidstudio', label: 'Android Studio' },
      { id: 'xcode', name: 'xcode', label: 'Xcode' },
      { id: 'vscode', name: 'vscode', label: 'VS Code' },
      { id: 'git', name: 'github', label: 'Git' },
      { id: 'figma', name: 'figma', label: 'Figma' },
      { id: 'photoshop', name: 'photoshop', label: 'Photoshop' },
      { id: 'canva', name: 'canva', label: 'Canva' },
      { id: 'capcut', name: 'capcut', label: 'CapCut' },
    ]
  }
];

export function Skills() {
  const containerRef = useRef(null);

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
