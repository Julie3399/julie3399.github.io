import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Code } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Modules" subtitle="Deployed projects and research artifacts." />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <a key={project.id} href={project.link} className="group block bg-surface border border-white/10 hover:border-accent transition-colors p-1">
              <div className="relative aspect-[16/9] overflow-hidden bg-black border-b border-white/10">
                <div className="absolute top-2 right-2 z-20 bg-black border border-white/20 p-1.5 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-colors">
                    <ArrowUpRight size={20} />
                </div>
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-accent font-mono text-xs">PRJ_0{index+1}</span>
                    <h3 className="text-2xl font-bold text-white font-sans group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                </div>
                
                <p className="text-text-muted text-sm font-mono leading-relaxed mb-6 h-20 overflow-hidden">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-mono font-bold uppercase text-white border border-white/20 group-hover:border-accent/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};