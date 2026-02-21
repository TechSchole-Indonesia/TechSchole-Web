import React from 'react';
import FeaturedProduct from '../components/FeaturedProduct';
import CorePillars from '../components/CorePillars';
import CTA from '../components/CTA';

const Product = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div style={{ background: 'white', padding: '4rem 0 2rem', textAlign: 'center', color: 'var(--text-dark)' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)' }}>Our Services & Products</h1>
                <p style={{ color: '#64748b', maxWidth: '600px', margin: '1rem auto' }}>
                    A.I, data, and web development solutions — plus ready-to-deploy products customizable to your business.
                </p>
            </div>
            <CorePillars />
            <FeaturedProduct />
            <CTA />
        </div>
    );
};

export default Product;
