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
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
             <div className="p-1.5 bg-slate-800 rounded border border-slate-700">
                <Terminal size={16} className="text-teal-500" />
            </div>
            <span className="text-lg font-bold text-slate-200">Jane Doe</span>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((social) => {
            const Icon = IconMap[social.iconName] || Terminal;
            return (
              <a 
                key={social.platform} 
                href={social.url} 
                className="text-slate-500 hover:text-teal-400 transition-colors"
                aria-label={social.platform}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <div className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Jane Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};