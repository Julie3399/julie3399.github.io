import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surfaceHighlight border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading title="Initiate_Comms" subtitle="Open channels for research collaborations." />

        <div className="mt-12 bg-background border border-white/10 p-8 md:p-12 shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                        <label htmlFor="name" className="block text-xs font-bold font-mono text-accent mb-2 uppercase">[ INPUT_NAME ]</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="w-full bg-surface border border-white/20 p-4 text-white font-mono focus:outline-none focus:border-accent focus:bg-surfaceHighlight transition-colors placeholder:text-white/20" 
                            placeholder="Enter your name..."
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="email" className="block text-xs font-bold font-mono text-accent mb-2 uppercase">[ INPUT_EMAIL ]</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full bg-surface border border-white/20 p-4 text-white font-mono focus:outline-none focus:border-accent focus:bg-surfaceHighlight transition-colors placeholder:text-white/20" 
                            placeholder="Enter your email..."
                        />
                    </div>
                </div>
                
                 <div className="group">
                    <label htmlFor="message" className="block text-xs font-bold font-mono text-accent mb-2 uppercase">[ INPUT_MESSAGE ]</label>
                    <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full bg-surface border border-white/20 p-4 text-white font-mono focus:outline-none focus:border-accent focus:bg-surfaceHighlight transition-colors resize-none placeholder:text-white/20" 
                        placeholder="Type your message here..."
                    ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                    <button type="submit" className="px-8 py-4 bg-white text-black font-mono font-bold uppercase tracking-wider hover:bg-accent hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all">
                        [ SEND_TRANSMISSION ]
                    </button>
                </div>
            </form>
            
            <div className="mt-12 pt-8 border-t border-dashed border-white/10 flex flex-col md:flex-row justify-between gap-6 font-mono text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-text-muted">STATUS:</span>
                    <span className="text-accent flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        ONLINE
                    </span>
                </div>
                <div>
                    <a href="mailto:hello@juliehuang.com" className="text-text-muted hover:text-white transition-colors">
                        hello@juliehuang.com
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};