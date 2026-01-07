import React from 'react';
import { TrendingUp, Target } from 'lucide-react';

const WhoWeAre = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Left: Vision */}
                    <div>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Who We Are</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1.2, margin: '1rem 0 2rem' }}>
                            Your Partner in <span className="gradient-text">Business Transformation</span>
                        </h2>
                        <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Insignia is more than just a tech consultancy. We are the architects of your digital future. We bridge the gap between complex AI technology and real-world business value, ensuring every innovation drives tangible growth.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ padding: '2rem', background: '#f0f9ff', borderRadius: '1rem', flex: 1 }}>
                                <Target size={32} color="var(--primary)" />
                                <h4 style={{ margin: '1rem 0 0.5rem', fontSize: '1.25rem' }}>Precision</h4>
                                <p style={{ fontSize: '0.9rem', color: '#475569' }}>Targeted solutions that solve actual business problems.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: R.O.A.I */}
                    <div>
                        <div className="glass-card" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', padding: '3rem', color: 'white', borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%' }}>
                                    <TrendingUp size={32} color="#4ade80" />
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '700' }}>R.O.A.I</h3>
                            </div>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#a5b4fc' }}>Return on A.I Investment</h4>
                            <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
                                We don't just implement AI for the sake of technology. We introduce the concept of <strong>R.O.A.I</strong> — ensuring that every dollar invested in Artificial Intelligence yields a measurable financial return and strategic advantage for your organization.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
