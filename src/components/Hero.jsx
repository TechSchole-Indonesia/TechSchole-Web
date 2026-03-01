import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', zIndex: 10 }}>

                <span className="fade-in-up" style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                    Seek. Structure. Conquer.
                </span>

                <h1 className="fade-in-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, maxWidth: '900px', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    Smarter Business Through <span style={{ color: 'var(--secondary)' }}>A.I, Data</span> & Digital Solutions
                </h1>

                <p className="fade-in-up" style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '650px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    We help companies worldwide turn complex technology into competitive advantage — from AI strategy to scalable web platforms.
                </p>

                <div className="fade-in-up" style={{ display: 'flex', gap: '1rem', marginBottom: '5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/contact" className="btn" style={{
                        background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', borderRadius: '9999px',
                        fontSize: '1.1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)', textDecoration: 'none', transition: 'transform 0.2s'
                    }}>
                        Get Started <ArrowRight size={20} />
                    </Link>
                    <Link to="/about" style={{
                        border: '2px solid rgba(255,255,255,0.3)', color: 'white', padding: '1rem 2.5rem', borderRadius: '9999px',
                        fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                        Learn More
                    </Link>
                </div>

                {/* Abstract geometric visual */}
                <div className="md-hide" style={{ position: 'relative', width: '100%', maxWidth: '700px', height: '200px' }}>
                    {/* Three pillars */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'flex-end' }}>
                        {[
                            { label: 'QUAERE', h: 120, color: 'rgba(255,255,255,0.1)', border: 'rgba(255,255,255,0.2)' },
                            { label: 'ORDO', h: 160, color: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.3)' },
                            { label: 'VINCE', h: 200, color: 'rgba(240,180,41,0.1)', border: 'rgba(240,180,41,0.3)' }
                        ].map((p, i) => (
                            <div key={i} className="fade-in-up" style={{
                                width: '140px', height: `${p.h}px`, background: p.color,
                                border: `1px solid ${p.border}`, borderRadius: '1rem 1rem 0 0',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <span style={{ fontSize: '0.75rem', letterSpacing: '3px', opacity: 0.6, fontWeight: 700 }}>{p.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Background decorations */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.15 }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.1 }}></div>
            {/* Grid pattern */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </section>
    );
};

export default Hero;
