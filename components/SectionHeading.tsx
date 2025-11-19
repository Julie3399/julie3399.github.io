import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 md:mb-20 animate-fade-in-up">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-accent font-mono text-xl hidden md:inline-block">##</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white font-sans tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-muted max-w-2xl font-mono pl-0 md:pl-10 border-l border-white/10 ml-1 md:ml-2">
            // {subtitle}
        </p>
      )}
    </div>
  );
};