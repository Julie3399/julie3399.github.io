import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROJECTS } from '../constants';
import { Github, Youtube, ExternalLink, FileText, MonitorPlay } from 'lucide-react';
import { ProjectLink } from '../types';

const getLinkIcon = (type: ProjectLink['type']) => {
  switch (type) {
    case 'github':
      return Github;
    case 'youtube':
      return Youtube;
    case 'demo':
      return MonitorPlay;
    case 'pdf':
      return FileText;
    case 'external':
      return ExternalLink;
    default:
      return ExternalLink;
  }
};

const getLinkLabel = (link: ProjectLink) => {
  if (link.label) return link.label;
  switch (link.type) {
    case 'github':
      return 'Code';
    case 'youtube':
      return 'Video';
    case 'demo':
      return 'Demo';
    case 'pdf':
      return 'Paper';
    case 'external':
      return 'View';
    default:
      return 'Link';
  }
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Modules" subtitle="Deployed projects and research artifacts." />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="group bg-surface border border-white/10 hover:border-accent transition-colors p-1">
              <div className="relative aspect-[16/9] overflow-hidden bg-black border-b border-white/10">
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

                <p className="text-text-muted text-sm font-mono leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-mono font-bold uppercase text-white border border-white/20 group-hover:border-accent/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                    {project.links.map((link, idx) => {
                      const Icon = getLinkIcon(link.type);
                      const label = getLinkLabel(link);
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 bg-black border border-white/20 hover:border-accent hover:bg-accent/10 text-white hover:text-accent transition-all font-mono text-xs uppercase tracking-wider group/link"
                        >
                          <Icon size={14} className="group-hover/link:scale-110 transition-transform" />
                          <span>{label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};