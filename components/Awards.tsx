import React from 'react';
import { SectionHeading } from './SectionHeading';
import { AWARDS } from '../constants';
import { Trophy } from 'lucide-react';

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-24 bg-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Achievements" subtitle="System accolades and verified honors." />

        <div className="grid md:grid-cols-3 gap-6">
          {AWARDS.map((award, index) => (
            <div 
                key={award.id} 
                className="group relative bg-background border border-white/10 p-6 hover:border-accent transition-colors duration-300 flex flex-col justify-between h-full"
            >
              <div>
                  <div className="flex justify-between items-start mb-6">
                      <Trophy size={32} className="text-white/20 group-hover:text-accent transition-colors" />
                      <span className="text-xs font-mono text-white/30 group-hover:text-accent/70">ID: 00{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-sans mb-2 leading-tight group-hover:underline decoration-accent decoration-2 underline-offset-4">
                      {award.title}
                  </h3>
                  <div className="text-sm text-accent font-mono mb-4">{award.organization}</div>
                  <p className="text-text-muted text-sm leading-relaxed border-t border-dashed border-white/10 pt-4">
                      {award.description}
                  </p>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-white/40">
                  <span>VERIFIED</span>
                  <span className="w-full h-px bg-white/10"></span>
                  <span>{award.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};