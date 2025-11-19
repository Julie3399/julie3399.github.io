import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background/95 backdrop-blur-sm border-white/10' : 'bg-transparent border-transparent py-4'}`}>
      <div className="w-full px-6 md:px-12 flex justify-between items-center h-16">
        <a href="#" className="group flex items-center gap-2 text-accent hover:text-white transition-colors">
            <Terminal size={20} />
            <span className="font-bold tracking-tighter text-lg">~/julie_huang</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors tracking-wide font-mono"
            >
              <span className="text-accent/50 mr-1">0{idx + 1}.</span>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-5 py-2 text-sm font-bold bg-white text-black hover:bg-accent hover:text-black transition-colors font-mono uppercase tracking-wide">
            [ Contact ]
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-background z-40 p-6 flex flex-col gap-6 border-t border-white/10">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-sans font-bold text-white hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-accent text-sm font-mono block mb-1">0{idx + 1}</span>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};