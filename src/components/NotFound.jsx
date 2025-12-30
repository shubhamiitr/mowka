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

                <div className="flex-grow flex flex-col items-center justify-center px-4 pt-24 pb-12 z-10">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-mowka-text-primary mb-6">
                            The page you’re looking for can’t be found.
                        </h2>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};
