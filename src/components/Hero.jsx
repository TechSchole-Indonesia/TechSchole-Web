import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroResearch from '../assets/hero_research.png';
import heroLaptop from '../assets/hero_laptop.png';
import heroMobile from '../assets/hero_mobile.png';

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

                <h1
                    className="fade-in-up"
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        maxWidth: '900px',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2
                    }}
                >
                    Smarter Business Through A.I, Data & Digital Solutions
                </h1>

                <p className="fade-in-up" style={{ fontSize: '1.25rem', opacity: 0.85, maxWidth: '650px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    We help companies worldwide turn complex technology into competitive advantage — from AI strategy to scalable web platforms.
                </p>

                <div className="fade-in-up" style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/contact" className="btn" style={{
                        background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', borderRadius: '9999px',
                        fontSize: '1.1rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)', textDecoration: 'none', transition: 'transform 0.2s'
                    }}>
                        Get Started <ArrowRight size={20} />
                    </Link>
                    <Link to="/about" style={{
                        border: '2px solid rgba(255,255,255,0.4)', color: 'white', padding: '1rem 2.5rem', borderRadius: '9999px',
                        fontSize: '1.1rem', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                        Learn More
                    </Link>
                </div>

                {/* Visual Composition */}
                <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem',
                    flexWrap: 'wrap', width: '100%', maxWidth: '1200px', perspective: '1000px'
                }}>
                    <div className="slide-in-left-aligned floating-card" style={{
                        width: '260px', height: '400px', borderRadius: '130px', overflow: 'hidden',
                        border: '6px solid rgba(255,255,255,0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', transition: 'all 0.4s ease'
                    }}>
                        <img src={heroResearch} alt="AI Research" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div className="scale-in-aligned floating-card-center" style={{
                        width: '300px', height: '460px', borderRadius: '150px', overflow: 'hidden',
                        border: '8px solid rgba(255,255,255,0.25)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                        zIndex: 2, transform: 'translateY(-20px)', transition: 'all 0.4s ease'
                    }}>
                        <img src={heroLaptop} alt="Data Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div className="slide-in-right-aligned floating-card" style={{
                        width: '260px', height: '400px', borderRadius: '130px', overflow: 'hidden',
                        border: '6px solid rgba(255,255,255,0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', transition: 'all 0.4s ease'
                    }}>
                        <img src={heroMobile} alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

            </div>

            {/* Decorative Background */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.5 }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.5 }}></div>
        </section>
    );
};

export default Hero;
