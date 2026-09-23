import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero3D } from '../components/Hero3D';
import { PressMarquee } from '../components/PressMarquee';
import { AboutMe } from '../components/AboutMe';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Certifications } from '../components/Certifications';
import { ProjectsSection } from '../components/ProjectsSection';
import { WorkProcess } from '../components/WorkProcess';
import { QuoteBanner } from '../components/QuoteBanner';
import { ContactFooter } from '../components/ContactFooter';
import { ProjectModal } from '../components/ProjectModal';
import { ContactModal } from '../components/ContactModal';

export function HomeScreen() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* Header Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Flow: Hero -> Press -> About Me -> Education -> Skills -> Certification -> Projects */}
      <main className="main-content-flow">
        {/* 1. HERO */}
        <Hero3D />

        {/* PRESS MARQUEE */}
        <PressMarquee />

        {/* 2. ABOUT ME */}
        <AboutMe />

        {/* 3. EDUCATION */}
        <Education />

        {/* 4. SKILLS */}
        <Skills />

        {/* 5. CERTIFICATIONS */}
        <Certifications />

        {/* 6. PROJECTS */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. WORK PROCESS & QUOTE */}
        <section className="process-quote-section">
          <div className="process-quote-container">
            <WorkProcess />
            <QuoteBanner onOpenContact={() => setIsContactOpen(true)} />
          </div>
        </section>

        {/* 8. CONTACT & FOOTER */}
        <ContactFooter onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* MODALS */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
