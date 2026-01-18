import React from 'react';
import CTA from '../components/CTA';

const Insights = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div style={{ padding: '6rem 0', textAlign: 'center', background: '#f8fafc' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', color: '#1e293b' }}>Insights & Research</h1>
                <p style={{ color: '#64748b', fontSize: '1.2rem', marginTop: '1rem' }}>Latest trends and analysis from our experts.</p>
            </div>

            <div className="container" style={{ padding: '4rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', background: 'white' }}>
                            <div style={{ height: '200px', background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) ${i * 30}%)`, opacity: 0.8 }}></div>
                            <div style={{ padding: '2rem' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase' }}>Article</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0' }}>The Future of Generative AI in Business</h3>
                                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Exploring the transformative impact of LLMs on corporate strategy and operations.</p>
                                <a href="#" style={{ color: 'var(--primary)', fontWeight: '600' }}>Read More &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default Insights;
