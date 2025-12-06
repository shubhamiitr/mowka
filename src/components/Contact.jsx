import React, { useState } from 'react';
import { Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Footer } from './Footer';

export const Contact = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phone }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setEmail('');
                    setPhone('');
                }, 4000);
            } else {
                setError(data.error || 'Submission failed. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection.');
            console.error('Submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <section id="contact" className="bg-white h-[100dvh] flex flex-col justify-between overflow-hidden snap-start">
      <div className="flex-grow flex flex-col justify-center relative w-full overflow-hidden">
        
        {/* Background ambient light */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 flex flex-col justify-center py-10 md:py-16">
            <div className="bg-mowka-navy text-white rounded-[24px] md:rounded-[32px] p-8 md:p-16 lg:p-20 overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(23,48,84,0.3)] animate-on-scroll">
                
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 relative z-10 items-center">
                    <div className="text-center lg:text-left">
                        <span className="text-mowka-teal font-bold tracking-[0.2em] uppercase text-[10px] mb-3 md:mb-4 block">Strategic Partnership</span>
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium font-serif mb-3 md:mb-4 leading-[1.1]">
                            Empower Your<br/>Talent Team.
                        </h2>
                        <p className="text-sm md:text-lg text-gray-300 mb-4 md:mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                            Turn your engineering hiring from a bottleneck into a competitive advantage.
                        </p>
                        
                        <ul className="space-y-3 mb-6 hidden lg:block">
                            {[
                                'Increase Screen-to-Offer Ratio',
                                'Uncover Passive Engineering Talent',
                                'Zero Cost Until You Hire'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <CheckCircle2 className="w-5 h-5 text-mowka-teal shrink-0 group-hover:text-white transition-colors" />
                                    <span className="text-gray-300 font-light group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="bg-white text-mowka-navy p-6 md:p-10 rounded-[20px] md:rounded-[24px] w-full max-w-md shadow-2xl relative border border-white/10">
                            
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-bold mb-2 md:mb-3 uppercase tracking-wide text-gray-400">Work Email</label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            required
                                            disabled={isLoading}
                                            placeholder="name@company.com"
                                            className="w-full px-0 py-2 md:py-3 bg-transparent border-b border-gray-200 focus:border-mowka-teal outline-none transition-all font-medium text-lg placeholder:text-gray-300 rounded-none focus:ring-0 disabled:opacity-50"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-bold mb-2 md:mb-3 uppercase tracking-wide text-gray-400">Mobile Number</label>
                                        <input 
                                            type="tel" 
                                            id="phone"
                                            required
                                            disabled={isLoading}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-0 py-2 md:py-3 bg-transparent border-b border-gray-200 focus:border-mowka-teal outline-none transition-all font-medium text-lg placeholder:text-gray-300 rounded-none focus:ring-0 disabled:opacity-50"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    {error && (
                                        <p className="text-red-500 text-sm text-center">{error}</p>
                                    )}
                                    <button 
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 md:py-4 bg-mowka-navy text-white font-semibold text-base rounded-xl hover:bg-[#233f6b] transition-all flex items-center justify-center gap-3 group shadow-lg shadow-mowka-navy/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Submitting...' : 'Partner with Us'}
                                        {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                    <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-wide">
                                        Direct line to Shubham. Limited availability.
                                    </p>
                                </form>
                            ) : (
                                <div className="py-12 text-center animate-fade-in">
                                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-medium mb-2">Request Received!</h3>
                                    <p className="text-gray-500 font-light">Shubham will reach out within 24 hours.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Decorative BG elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-mowka-teal/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[150px] mix-blend-screen"></div>
            </div>
        </div>
      </div>
      
      {/* Footer embedded in scroll snap flow */}
      <Footer />
    </section>
  );
};

