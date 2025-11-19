
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { SOCIALS } from '../constants';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const githubUrl = SOCIALS.find(s => s.platform === "GitHub")?.url || "#";
  const linkedinUrl = SOCIALS.find(s => s.platform === "LinkedIn")?.url || "#";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateMousePosition = (ev: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      container.style.setProperty('--x', `${x}px`);
      container.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 bg-background border-b border-white/10 overflow-hidden"
      style={{
        '--x': '50%',
        '--y': '50%',
      } as React.CSSProperties}
    >
      
      {/* 1. Static Base Grid (Dim) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* 2. Interactive Spotlight Grid (Bright Green) 
          Uses a mask that moves with the mouse coordinates (--x, --y)
      */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00FF41_1px,transparent_1px),linear-gradient(to_bottom,#00FF41_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-50"
        style={{
          maskImage: 'radial-gradient(circle 300px at var(--x) var(--y), black, transparent)',
          WebkitMaskImage: 'radial-gradient(circle 300px at var(--x) var(--y), black, transparent)',
        }}
      ></div>

      {/* 3. Subtle Green Glow Orb behind cursor for atmosphere */}
      <div 
        className="absolute pointer-events-none z-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[80px] translate-x-[-50%] translate-y-[-50%] transition-transform duration-75 ease-out will-change-transform"
        style={{
            left: 'var(--x)',
            top: 'var(--y)',
        }}
      ></div>

      <div className="max-w-7xl w-full mx-auto z-10 relative pointer-events-none">
        {/* Pointer events auto for content so links work */}
        <div className="pointer-events-auto">
            <div className="mb-4 animate-fade-in-up opacity-0 [animation-delay:100ms] fill-mode-forwards">
            <span className="font-mono text-accent text-sm tracking-wider">
                {'>'} SYSTEM.INIT(USER="JULIE_HUANG")<span className="animate-blink">_</span>
            </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-8 font-sans animate-fade-in-up opacity-0 [animation-delay:200ms] fill-mode-forwards">
            JULIE <br className="hidden md:block" />
            HUANG
            </h1>

            <div className="max-w-2xl border-l-2 border-accent pl-6 py-2 mb-12 animate-fade-in-up opacity-0 [animation-delay:400ms] fill-mode-forwards bg-black/40 backdrop-blur-sm">
                <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-mono">
                Building intelligent systems at the intersection of <span className="text-white">academic research</span> and <span className="text-white">real-world applications</span>.
                </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center animate-fade-in-up opacity-0 [animation-delay:600ms] fill-mode-forwards">
            <a 
                href={githubUrl} 
                className="group flex items-center gap-3 px-5 py-3 bg-transparent border border-white/20 hover:border-accent hover:bg-accent/10 text-white transition-all duration-300 font-mono uppercase tracking-wider text-sm relative overflow-hidden"
            >
                {/* Button Scanline Effect */}
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Github size={18} className="group-hover:text-accent transition-colors relative z-10" />
                <span className="relative z-10">:: GitHub</span>
            </a>
            <a 
                href={linkedinUrl}
                className="group flex items-center gap-3 px-5 py-3 bg-transparent border border-white/20 hover:border-accent hover:bg-accent/10 text-white transition-all duration-300 font-mono uppercase tracking-wider text-sm relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Linkedin size={18} className="group-hover:text-accent transition-colors relative z-10" />
                <span className="relative z-10">:: LinkedIn</span>
            </a>
            </div>
        </div>
      </div>

      {/* Static More Indicator */}
      <div className="absolute bottom-8 right-6 md:right-12 z-10">
        <div className="flex flex-col items-end gap-2 text-text-muted/50">
            <span className="font-mono text-xs uppercase tracking-widest">Scroll_Down</span>
            <ArrowDown size={20} className="text-accent" />
        </div>
      </div>
    </section>
  );
};
