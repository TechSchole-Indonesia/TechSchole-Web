import React from 'react';
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
            paddingTop: '80px', // Navbar offset
            overflow: 'hidden'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', zIndex: 10 }}>

                <h1
                    className="fade-in-up"
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        maxWidth: '900px',
                        marginBottom: '4rem',
                        lineHeight: 1.2
                    }}
                >
                    A.I Transformation Consultant for Business Acceleration
                </h1>

                {/* Visual Composition */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    width: '100%',
                    maxWidth: '1200px',
                    perspective: '1000px'
                }}>
                    {/* Left Image (Research) */}
                    <div
                        className="slide-in-left-aligned floating-card"
                        style={{
                            width: '260px',
                            height: '400px',
                            borderRadius: '130px',
                            overflow: 'hidden',
                            border: '6px solid rgba(255,255,255,0.15)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            transform: 'translateY(0)',
                            transition: 'all 0.4s ease'
                        }}
                    >
                        <img src={heroResearch} alt="Research" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Center Image (Laptop) */}
                    <div
                        className="scale-in-aligned floating-card-center"
                        style={{
                            width: '300px',
                            height: '460px',
                            borderRadius: '150px',
                            overflow: 'hidden',
                            border: '8px solid rgba(255,255,255,0.25)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                            zIndex: 2,
                            transform: 'translateY(-20px)', // Slightly elevated
                            transition: 'all 0.4s ease'
                        }}
                    >
                        <img src={heroLaptop} alt="Collaboration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Right Image (Mobile) */}
                    <div
                        className="slide-in-right-aligned floating-card"
                        style={{
                            width: '260px',
                            height: '400px',
                            borderRadius: '130px',
                            overflow: 'hidden',
                            border: '6px solid rgba(255,255,255,0.15)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            transform: 'translateY(0)',
                            transition: 'all 0.4s ease'
                        }}
                    >
                        <img src={heroMobile} alt="Mobile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

            </div>

            {/* Decorative Background Elements */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.5 }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.5 }}></div>
        </section>
    );
};

export default Hero;
