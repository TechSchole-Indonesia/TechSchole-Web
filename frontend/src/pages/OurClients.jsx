import React from 'react';
import CTA from '../components/CTA';
import { Users } from 'lucide-react';

const OurClients = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div style={{ background: '#1e1b4b', padding: '6rem 0', color: 'white', textAlign: 'center' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our Clients</h1>
                <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>Trusted by leading organizations across Indonesia.</p>
            </div>

            <div className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '3rem', alignItems: 'center', opacity: 0.6 }}>
                    {/* Placeholder Client Logos */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} style={{ fontSize: '1.5rem', fontWeight: '700', color: '#64748b' }}>
                            CLIENT LOGO {i}
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default OurClients;
