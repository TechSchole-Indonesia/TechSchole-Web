import React from 'react';
import ServiceOfferings from '../components/ServiceOfferings';
import CTA from '../components/CTA';

const Solutions = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div style={{ background: '#0f172a', padding: '4rem 0 2rem', textAlign: 'center', color: 'white' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800' }}>Our Solutions</h1>
                <p style={{ opacity: 0.7, maxWidth: '600px', margin: '1rem auto' }}>
                    Comprehensive AI and Data solutions designed to propel your business forward.
                </p>
            </div>
            <ServiceOfferings />
            <CTA />
        </div>
    );
};

export default Solutions;
