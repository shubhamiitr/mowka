"use client";

import { Footer } from './Footer';

export const NotFound = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-mowka-bg-primary relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mowka-action-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mowka-teal-vibrant/5 rounded-full blur-3xl" />
                </div>

                <div className="flex-grow flex flex-col items-center justify-center px-4 z-10 relative">
                    <div className="text-center max-w-5xl mx-auto animate-fade-in-up flex flex-col items-center">
                        <div className="mb-6 md:mb-10">
                            <span className="text-8xl md:text-9xl font-serif text-mowka-text-primary tracking-tight">404</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-medium tracking-tighter md:tracking-tight text-mowka-text-primary leading-[1.05] font-serif mb-6 md:mb-8">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mowka-action-primary via-mowka-teal-vibrant to-mowka-action-primary animate-shine bg-[length:200%_auto] pr-2">
                                Page Not Found
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl font-light text-mowka-text-secondary max-w-2xl mx-auto px-4 leading-relaxed opacity-90">
                            The page you are looking for doesn't exist or has been moved.
                        </p>

                        <a
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-4 bg-mowka-action-primary text-white rounded-full font-medium hover:bg-mowka-action-primary-hover transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-8"
                        >
                            Return Home
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};
