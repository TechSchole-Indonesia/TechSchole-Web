import React from 'react';
import { MessageSquare, Code, Rocket } from 'lucide-react';

const steps = [
    { icon: <MessageSquare size={32} />, step: '01', title: 'Consult', desc: 'We listen to your challenges, understand your goals, and identify where A.I, data, or web solutions can make the biggest impact.' },
    { icon: <Code size={32} />, step: '02', title: 'Build', desc: 'Our team designs and develops the solution — tailored to your systems, workflows, and business requirements.' },
    { icon: <Rocket size={32} />, step: '03', title: 'Deploy & Scale', desc: 'We launch, monitor, and iterate — ensuring the solution delivers real results and scales with your growth.' }
];

const HowWeWork = () => {
    return (
        <section style={{ background: '#f8fafc', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>How We Work</h2>
                    <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: '550px', margin: '1rem auto 0' }}>A straightforward process designed to get you from problem to solution — fast.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {steps.map((s, i) => (
                        <div key={i} style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
                            <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '3rem', fontWeight: '800', color: 'rgba(15,27,61,0.08)' }}>{s.step}</span>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>{s.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>{s.title}</h3>
                            <p style={{ color: '#64748b', lineHeight: 1.6 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
