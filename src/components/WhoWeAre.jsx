import React from 'react';
import { Target, Users } from 'lucide-react';

const WhoWeAre = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Who We Are</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1.2, margin: '1rem 0 2rem' }}>
                        Your Partner in <span className="gradient-text">Intelligent Growth</span>
                    </h2>
                    <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '3rem' }}>
                        Quorvin is more than just a tech consultancy. We help businesses leverage A.I, build solid data foundations, and create digital experiences that drive real results — from strategy to execution.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(15, 27, 61, 0.04)', borderRadius: '1rem' }}>
                            <Target size={32} color="var(--primary)" />
                            <h4 style={{ margin: '1rem 0 0.5rem', fontSize: '1.25rem' }}>Precision</h4>
                            <p style={{ fontSize: '0.9rem', color: '#475569' }}>Targeted solutions that solve actual business problems.</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'rgba(15, 27, 61, 0.04)', borderRadius: '1rem' }}>
                            <Users size={32} color="var(--primary)" />
                            <h4 style={{ margin: '1rem 0 0.5rem', fontSize: '1.25rem' }}>Partnership</h4>
                            <p style={{ fontSize: '0.9rem', color: '#475569' }}>We work alongside your team, not just for you — building lasting relationships.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
