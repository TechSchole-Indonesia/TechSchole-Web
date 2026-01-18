import React from 'react';
import CTA from '../components/CTA';
import { Layers, Box, Cpu } from 'lucide-react';

const Platforms = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div style={{ background: '#1e1b4b', padding: '6rem 0', color: 'white', textAlign: 'center' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our Platforms</h1>
                <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>Robust infrastructure for scalable AI deployment.</p>
            </div>

            <div className="container" style={{ padding: '4rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: <Layers size={40} />, title: "Insignia Core", desc: "The central nervous system for your enterprise AI applications." },
                        { icon: <Box size={40} />, title: "Data Nexus", desc: "Unified data pipeline management and orchestration engine." },
                        { icon: <Cpu size={40} />, title: "Model Foundry", desc: "Rapid prototyping and deployment environment for ML models." }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card" style={{ padding: '2rem', borderRadius: '1rem', background: 'white', border: '1px solid #e2e8f0' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: '#64748b' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default Platforms;
