import React from 'react';
import { Map, Layout, Database } from 'lucide-react';

const pillars = [
    {
        icon: <Map size={40} />,
        title: "AI Strategy Workshop",
        desc: "Identifying high-impact opportunities where AI can drive value in your specific business context.",
        color: "blue"
    },
    {
        icon: <Layout size={40} />,
        title: "Experience Design",
        desc: "Crafting intuitive and engaging user experiences to ensure seamless adoption of new technologies.",
        color: "purple"
    },
    {
        icon: <Database size={40} />,
        title: "Data Maturity Assessment",
        desc: "Evaluating the readiness of your data infrastructure to support robust AI models and insights.",
        color: "pink"
    }
];

const CorePillars = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>Our Products</h2>
                    <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>Kursus teknologi terkini untuk mengembangkan keterampilan digital masa depan.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '1.5rem',
                                border: '1px solid #e2e8f0',
                                borderTop: '5px solid var(--primary)',
                                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '1.5rem'
                            }}>
                                {pillar.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-dark)' }}>{pillar.title}</h3>
                            <p style={{ color: '#64748b', lineHeight: 1.6 }}>{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePillars;
