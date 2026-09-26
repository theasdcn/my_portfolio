import React from 'react';
import { 
  Search, 
  Layout, 
  Figma, 
  Cpu, 
  Sliders, 
  CheckCircle2 
} from 'lucide-react';
import { WORK_PROCESS } from '../constants/portfolioData';

const iconMap = {
  Search,
  Layout,
  Figma,
  Cpu,
  Sliders,
  CheckCircle2
};

export function WorkProcess() {
  return (
    <div className="work-process-container-box reveal-3d-left">
      <div className="process-header-wrap">
        <span className="process-top-badge">✦ DEVELOPMENT METHODOLOGY</span>
        <h3 className="process-main-title">Crafting Purposeful Solutions</h3>
        <p className="process-desc">A structured, end-to-end engineering and design workflow from concept to live deployment.</p>
      </div>
      
      <div className="process-timeline">
        <div className="timeline-laser-line" />

        {WORK_PROCESS.map((proc, index) => {
          const IconComponent = iconMap[proc.icon] || Search;
          return (
            <div key={index} className={`process-step-node group reveal-3d-card delay-${index + 1}`}>
              <div className="step-icon-wrapper">
                <IconComponent size={18} className="step-icon" />
              </div>

              <div className="step-content">
                <h5 className="step-title">{proc.step}. {proc.title}</h5>
                <span className="step-subtitle">{proc.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
