import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import WhoWeAre from '../components/WhoWeAre';
import ServiceOfferings from '../components/ServiceOfferings';
import HowWeWork from '../components/HowWeWork';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <div className="page-transition">
            <Hero />
            <Stats />
            <WhoWeAre />
            <ServiceOfferings />
            <HowWeWork />
            <CTA />
        </div>
    );
};

export default Home;
