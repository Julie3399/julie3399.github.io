import React from 'react';
import { SOCIALS } from '../constants';
import { Github, Linkedin, Twitter, Mail, Terminal } from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Mail
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-2">
             <div className="p-1.5 bg-black rounded border border-white/20">
                <Terminal size={16} className="text-accent" />
            </div>
            <span className="text-lg font-bold text-white font-mono">JULIE HUANG</span>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((social) => {
            const Icon = IconMap[social.iconName] || Terminal;
            return (
              <a
                key={social.platform}
                href={social.url}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label={social.platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <div className="text-text-muted text-sm font-mono">
          © {new Date().getFullYear()} Julie Huang
        </div>
      </div>
    </footer>
  );
};