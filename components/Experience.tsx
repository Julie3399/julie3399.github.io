import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Log: Experience" subtitle="Career trajectory and deployments." />

        <div className="relative mt-16 font-mono">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 border-l border-dashed border-white/20"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Connector Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-2.5 h-2.5 bg-black border-2 border-accent z-10 mt-1.5"></div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12">
                    <div className={`flex flex-col ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        
                        <div className="inline-block mb-2">
                             <span className="text-accent text-xs border border-accent/30 px-2 py-1 rounded-none uppercase tracking-wider bg-accent/5">
                                {exp.period}
                             </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white font-sans mb-1 leading-tight">{exp.role}</h3>
                        <div className="text-lg text-white/60 mb-4">@ {exp.company}</div>
                        
                        <p className="text-text-muted text-sm leading-relaxed mb-5">
                            {exp.description}
                        </p>
                        
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                             {exp.technologies.map(tech => (
                                <span key={tech} className="text-xs text-white/70 bg-white/5 px-2 py-1 hover:bg-accent hover:text-black transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};