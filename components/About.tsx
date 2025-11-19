import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ArrowRight, Download, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
             <SectionHeading title="About_Me" />
             
             <div className="space-y-6 text-lg text-text-muted font-mono leading-relaxed">
                <p>
                  <span className="text-accent font-bold">{'>'}{'>'}</span> I am a machine learning researcher and engineer driven by the elegance of mathematics and the utility of code.
                  Currently pursuing my <strong className="text-white font-normal">MSc in Machine Learning at UCL</strong>, I previously earned a First-Class Honours BSc in Mathematics from Imperial College London.
                </p>
                <p>
                  <span className="text-accent font-bold">{'>'}{'>'}</span> My research focuses on where AI meets human interaction—from <strong className="text-white font-normal">robot tutoring systems</strong> that adapt in real-time,
                  to <strong className="text-white font-normal">Bayesian models</strong> that uncover patterns in chaotic financial data. I don't just train models; I build the systems that make them useful.
                </p>
                <p>
                  <span className="text-accent font-bold">{'>'}{'>'}</span> Whether creating hedging algorithms at <span className="text-white border-b border-accent/50">Goldman Sachs</span> or
                  debugging autonomous agents at hackathons, I thrive on complex problems that require rigorous theory and creative engineering.
                </p>
             </div>

             <div className="mt-10">
                <button className="group px-6 py-3 bg-white text-black hover:bg-accent transition-colors flex items-center gap-3 font-mono font-bold uppercase text-sm tracking-wider">
                    <Download size={18} />
                    <span>Download_CV.pdf</span>
                </button>
             </div>
          </div>

          {/* Image / Stats */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative mt-12 lg:mt-0">
             <div className="relative w-full border-2 border-white/10 p-2">
                 <div className="absolute top-0 left-0 bg-background px-2 -mt-3 ml-4 text-xs font-mono text-accent">IMG_PROFILE_01.JPG</div>
                 
                 <div className="aspect-[3/4] w-full bg-surfaceHighlight relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                     <img
                        src="/assets/profile.jpg"
                        alt="Julie Huang"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                     />
                     
                     {/* Overlay details */}
                     <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 border border-white/10">
                        <div className="flex items-center gap-2 text-accent mb-1">
                            <Terminal size={14} />
                            <span className="text-xs font-mono font-bold">CURRENT_STATUS</span>
                        </div>
                        <div className="text-white font-sans font-bold text-lg">MSc Student @ UCL</div>
                     </div>
                 </div>
             </div>
             
             {/* Decoration */}
             <div className="flex justify-end mt-2 gap-1">
                 <div className="w-2 h-2 bg-accent"></div>
                 <div className="w-2 h-2 bg-white/20"></div>
                 <div className="w-2 h-2 bg-white/20"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};