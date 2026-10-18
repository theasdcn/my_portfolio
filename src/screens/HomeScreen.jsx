import React, { useState } from 'react';
import { useScroll3D } from '../hooks/useScroll3D';
import { Navbar } from '../components/Navbar';
import { Hero3D } from '../components/Hero3D';
import { PressMarquee } from '../components/PressMarquee';
import { AboutMe } from '../components/AboutMe';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Certifications } from '../components/Certifications';
import { ProjectsSection } from '../components/ProjectsSection';
import { Interests } from '../components/Interests';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ProjectModal } from '../components/ProjectModal';
import { ContactModal } from '../components/ContactModal';

export function HomeScreen({ onNavigateToCertifications }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Initialize 3D scroll animations, parallax, and card tilt
  useScroll3D();

  return (
    <div className="portfolio-app-root">
      {/* Header Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Flow: Hero -> Press -> About Me -> Education -> Skills -> Certification -> Projects -> Contact */}
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
        <Certifications onViewAll={onNavigateToCertifications} />

        {/* 6. PROJECTS */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. BEYOND THE CODE: interests and fun fact */}
        <Interests />

        {/* 8. CONTACT */}
        <ContactSection />

        {/* 9. SIMPLE FOOTER */}
        <Footer />
      </main>

      {/* MODALS */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
