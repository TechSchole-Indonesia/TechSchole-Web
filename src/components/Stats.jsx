import React from 'react';
import { Bot, Database, Globe, Wrench } from 'lucide-react';

const highlights = [
    { icon: <Bot size={28} />, value: 'A.I Solutions', label: 'Strategy to Deployment' },
    { icon: <Database size={28} />, value: 'Data Architecture', label: 'Pipelines & Analytics' },
    { icon: <Globe size={28} />, value: 'Web Platforms', label: 'Modern & Scalable' },
    { icon: <Wrench size={28} />, value: 'Custom Products', label: 'Built for Your Business' }
];

const Stats = () => {
    return (
        <section style={{ background: 'white', padding: '4rem 0', borderBottom: '1px solid #e2e8f0' }}>
            <div className="container">
                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                    {highlights.map((item, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{item.icon}</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1.2 }}>{item.value}</div>
                            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
