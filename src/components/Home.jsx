import React from 'react';
import { Hero } from './Hero';
import { ValueProp } from './ValueProp';
import { Comparison } from './Comparison';
import { Founder } from './Founder';
import { Contact } from './Contact';

export const Home = () => {
    return (
        <>
            <Hero />
            <ValueProp />
            <Comparison />
            <Founder />
            <Contact />
        </>
    );
};
