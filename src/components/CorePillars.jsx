import React from 'react';
import { Map, Layout, Database } from 'lucide-react';

const pillars = [
    {
        icon: <Map size={40} />,
        title: "A.I Integration",
        desc: "Custom AI solutions — chatbots, predictive models, and automation systems designed around your business processes.",
        color: "blue"
    },
    {
        icon: <Database size={40} />,
        title: "Data Architecture",
        desc: "End-to-end data infrastructure setup, from warehousing and ETL pipelines to real-time analytics dashboards.",
        color: "purple"
    },
    {
        icon: <Layout size={40} />,
        title: "Web & App Development",
        desc: "Responsive websites, web apps, and digital platforms built with scalable, modern technology stacks.",
        color: "pink"
    }
];

const CorePillars = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>What We Deliver</h2>
                    <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>Comprehensive technology solutions to accelerate your business growth.</p>
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
