import React from 'react';
import Hero from '../components/Hero';
import CorePillars from '../components/CorePillars';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <div className="page-transition">
            <Hero />
            <CorePillars />
            <CTA />
        </div>
    );
};

export default Home;
