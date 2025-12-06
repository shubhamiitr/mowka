import React from 'react';
import { X, Check } from 'lucide-react';

export const Comparison = () => {
  return (
    <section id="process" className="bg-white h-[100dvh] flex flex-col relative snap-start overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#173054 1px, transparent 1px), linear-gradient(90deg, #173054 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      {/* Main Scrollable Content */}
      <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col relative z-10 scrollable-content">
        {/* Mobile: justify-center with reduced padding, Desktop: justify-center */}
        <div className="w-full min-h-full flex flex-col justify-center py-12 md:py-12 px-4 md:px-12">
            <div className="max-w-7xl mx-auto w-full">
                
                <div className="text-center mb-8 md:mb-16 shrink-0">
                    <span className="text-mowka-teal font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">The Strategic Shift</span>
                    <h2 className="text-3xl md:text-5xl font-medium font-serif mb-3 md:mb-4 text-mowka-navy">Vendor vs. Partner</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl isolate max-w-6xl mx-auto w-full">
                    
                    {/* Typical Agency */}
                    <div className="bg-gray-50/80 backdrop-blur-sm p-8 md:p-14 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center group hover:bg-gray-100/50 transition-colors">
                        <h3 className="text-2xl md:text-4xl font-medium text-gray-400 mb-2 font-serif group-hover:text-gray-500 transition-colors">Standard Agency</h3>
                        <p className="text-[10px] text-gray-400 mb-6 md:mb-8 uppercase tracking-[0.2em] font-bold">The "Transactional" Model</p>
                        
                        <ul className="space-y-5 md:space-y-8">
                            <li className="flex gap-3 md:gap-5 items-start opacity-60">
                                <div className="mt-1"><X className="w-4 h-4 text-gray-400" /></div>
                                <div>
                                    <strong className="block text-gray-600 font-semibold text-sm md:text-lg">Volume & Noise</strong>
                                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1">Focuses on quantity, forcing hours of filtering.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 md:gap-5 items-start opacity-60">
                                <div className="mt-1"><X className="w-4 h-4 text-gray-400" /></div>
                                <div>
                                    <strong className="block text-gray-600 font-semibold text-sm md:text-lg">Keyword Matching</strong>
                                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1">Matches "Java" to "Java" without context.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 md:gap-5 items-start opacity-60">
                                <div className="mt-1"><X className="w-4 h-4 text-gray-400" /></div>
                                <div>
                                    <strong className="block text-gray-600 font-semibold text-sm md:text-lg">High Flat Fees</strong>
                                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mt-1">Charges 20-30% regardless of role.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Mowka */}
                    <div className="bg-mowka-navy p-8 md:p-14 relative overflow-hidden text-white flex flex-col justify-center group z-10">
                        <h3 className="text-2xl md:text-4xl font-medium text-white mb-2 font-serif relative z-10">Mowka</h3>
                        <p className="text-[10px] text-mowka-teal mb-6 md:mb-8 uppercase tracking-[0.2em] font-bold relative z-10">The "Extension" Model</p>
                        
                        <ul className="space-y-5 md:space-y-8 relative z-10">
                            <li className="flex gap-3 md:gap-5 items-start">
                                <div className="p-1 bg-mowka-teal/20 border border-mowka-teal/50 rounded-full mt-1">
                                    <Check className="w-3 h-3 text-mowka-teal" />
                                </div>
                                <div>
                                    <strong className="block text-white font-semibold text-sm md:text-lg">Pre-Calibrated Signal</strong>
                                    <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed mt-1">Only viable technical matches.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 md:gap-5 items-start">
                                <div className="p-1 bg-mowka-teal/20 border border-mowka-teal/50 rounded-full mt-1">
                                    <Check className="w-3 h-3 text-mowka-teal" />
                                </div>
                                <div>
                                    <strong className="block text-white font-semibold text-sm md:text-lg">Environment Alignment</strong>
                                    <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed mt-1">Matches pace, ambiguity, and ownership.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 md:gap-5 items-start">
                                <div className="p-1 bg-mowka-teal/20 border border-mowka-teal/50 rounded-full mt-1">
                                    <Check className="w-3 h-3 text-mowka-teal" />
                                </div>
                                <div>
                                    <strong className="block text-white font-semibold text-sm md:text-lg">Empowering Partnership</strong>
                                    <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed mt-1">Improving your Screen-to-Offer ratio.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
