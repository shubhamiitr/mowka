import React from 'react';
import { Linkedin, ExternalLink, PlayCircle } from 'lucide-react';

export const Founder = () => {
  return (
    <section id="founder" className="bg-white h-[100dvh] flex flex-col border-t border-gray-50 relative overflow-hidden snap-start">
        {/* Soft Background Glow */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-60"></div>

      {/* Main Scrollable Content */}
      <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col relative z-10 scrollable-content">
        <div className="w-full min-h-full flex flex-col justify-start md:justify-center py-10 px-6 md:py-12">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-12 gap-6 lg:gap-20 items-center max-w-6xl mx-auto">
                
                {/* IMAGE */}
                <div className="md:col-span-4 order-1 shrink-0 flex justify-center md:block">
                    <div className="relative aspect-[3/4] rounded-[2px] overflow-hidden shadow-2xl bg-gray-200 group w-[100px] md:w-full md:max-w-sm border-2 md:border-4 border-white ring-1 ring-gray-100">
                        {/* Ensure the image path is correct, might need to be in public folder */}
                        <img 
                            src="/profile.jpeg" 
                            alt="Shubham Kansal" 
                            className="object-cover w-full h-full transform transition-transform duration-[1.5s] ease-in-out group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-mowka-navy/90 via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* TEXT */}
                <div className="md:col-span-8 order-2 text-center md:text-left">
                    <span className="text-mowka-teal font-bold tracking-[0.2em] uppercase text-[10px] mb-2 md:mb-4 block">The Practitioner's Edge</span>
                    
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium text-mowka-navy mb-3 md:mb-6 leading-tight">
                        From Prime Video to Adobe Acquisition.
                    </h2>
                    
                    <div className="space-y-3 md:space-y-4 text-gray-500 font-light text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                        <p>
                            At <strong className="text-mowka-navy font-medium">Amazon</strong>, I invented <a href="https://patents.google.com/patent/US11645249B1" target="_blank" rel="noopener noreferrer" className="text-mowka-teal hover:underline inline-flex items-center gap-0.5">patented algorithms<ExternalLink className="w-3 h-3"/></a> for copyright protection and led the team implementing Skip Intro features, solving 1000x scale challenges for 1M+ catalog items.
                        </p>
                        <p>
                            At <strong className="text-mowka-navy font-medium">Rephrase.ai</strong>, I led the engineering culture that built the world's first generative video engine, scaling 100x to 1M daily videos and powering the Cannes Titanium Lion-winning <a href="https://www.youtube.com/watch?v=R3FnhpelBR0" target="_blank" rel="noopener noreferrer" className="text-mowka-teal hover:underline inline-flex items-center gap-0.5">Cadbury Campaign<PlayCircle className="w-3 h-3"/></a> before our acquisition by Adobe.
                        </p>
                        <p className="border-l-2 border-mowka-teal pl-4 md:pl-6 italic text-gray-400">
                            "I founded Mowka—which means <strong>Opportunity</strong>—because after 2,000+ technical interviews, I saw elite teams wasting hours on 'keyword matches'. I use my 10 years of '0 to 1' scaling experience to connect the <strong>Right Person</strong> to the <strong>Right Team</strong>."
                        </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 md:gap-6 border-t border-gray-100 pt-4 md:pt-8">
                        <div>
                            <span className="block text-lg md:text-3xl font-serif text-mowka-navy mb-1">2k+</span>
                            <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400 font-semibold">Technical Interviews</span>
                        </div>
                        <div>
                            <span className="block text-lg md:text-3xl font-serif text-mowka-navy mb-1">Adobe</span>
                            <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400 font-semibold">Successful Exit</span>
                        </div>
                        <div>
                            <span className="block text-lg md:text-3xl font-serif text-mowka-navy mb-1">IIT Roorkee</span>
                            <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400 font-semibold">Alumni</span>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-10">
                        <a href="https://www.linkedin.com/in/kansalshubham/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mowka-navy font-medium hover:text-mowka-teal transition-colors text-sm">
                            <Linkedin className="w-4 h-4" />
                            Connect on LinkedIn
                        </a>
                    </div>

                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
