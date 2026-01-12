import React from 'react';
import ServiceOfferings from '../components/ServiceOfferings'; // Reusing for now, can rename component later
import CTA from '../components/CTA';

const Product = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div style={{ background: 'white', padding: '4rem 0 2rem', textAlign: 'center', color: 'var(--text-dark)' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)' }}>Our Products</h1>
                <p style={{ color: 'var(--primary)', maxWidth: '600px', margin: '1rem auto' }}>
                    Kursus teknologi terkini untuk mengembangkan keterampilan digital masa depan.
                </p>
            </div>
            <ServiceOfferings />
            <CTA />
        </div>
    );
};

export default Product;
