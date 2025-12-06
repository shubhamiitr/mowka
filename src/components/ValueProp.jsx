import React from 'react';
import { Brain, Code, Heart } from 'lucide-react';

export const ValueProp = () => {
  return (
    <section id="philosophy" className="bg-gray-50/50 relative h-[100dvh] flex flex-col snap-start overflow-hidden">
      
      {/* Ambient Light Leak */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      {/* Main Container with Scroll for Mobile Vertical Layout */}
      <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col relative z-10 scrollable-content">
        <div className="w-full min-h-full flex flex-col justify-center py-10 md:py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto w-full">
                
                <div className="text-center mb-5 md:mb-20 shrink-0">
                    <span className="text-mowka-teal font-bold tracking-[0.2em] uppercase text-[10px] md:text-[10px] mb-2 md:mb-4 block">The Sourcing Methodology</span>
                    <h2 className="text-2xl md:text-5xl font-serif text-mowka-navy mb-3 md:mb-6 leading-tight">
                        Beyond Resumes.<br/>We Scout for Context.
                    </h2>
                    <p className="text-xs md:text-xl text-gray-500 leading-relaxed font-light max-w-3xl mx-auto px-2 hidden md:block">
                        Traditional sourcing fails because it lacks context. We apply deep engineering leadership experience to understand the <strong className="text-mowka-navy font-medium">code</strong> AND the <strong className="text-mowka-navy font-medium">culture</strong>.
                    </p>
                </div>

                {/* Vertical Grid on Mobile, 3-Col Grid on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 pb-6 md:pb-0">
                    
                    {/* Card 1 */}
                    <div className="bg-white p-5 md:p-10 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 rounded-lg md:rounded-2xl flex items-center justify-center mb-3 md:mb-8">
                            <Code className="w-5 h-5 md:w-7 md:h-7 text-mowka-navy" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-serif text-mowka-navy mb-2 md:mb-4">Technical Depth</h3>
                        <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                            We don't just match keywords. As engineering leaders, we understand the architectural nuance—Scale, Complexity, and Trade-offs.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-5 md:p-10 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-12 h-12 md:w-24 md:h-24 bg-mowka-teal/5 rounded-bl-[60px] md:rounded-bl-[100px] transition-transform group-hover:scale-110"></div>
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-50 rounded-lg md:rounded-2xl flex items-center justify-center mb-3 md:mb-8">
                            <Brain className="w-5 h-5 md:w-7 md:h-7 text-mowka-teal" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-serif text-mowka-navy mb-2 md:mb-4">Behavioral DNA</h3>
                        <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                            We scout for the "invisible dimensions"—Pace, Ambiguity Tolerance, and Ownership Levels—matching the human to your environment.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-5 md:p-10 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-indigo-50 rounded-lg md:rounded-2xl flex items-center justify-center mb-3 md:mb-8">
                            <Heart className="w-5 h-5 md:w-7 md:h-7 text-indigo-900" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-serif text-mowka-navy mb-2 md:mb-4">Recruiter Support</h3>
                        <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                            We help you win. We feed your pipeline with pre-calibrated, high-signal talent, allowing you to focus on closing rather than filtering noise.
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
