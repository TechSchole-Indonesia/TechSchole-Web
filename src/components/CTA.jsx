import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section style={{ padding: '8rem 0', background: 'white' }}>
            <div className="container">
                <div style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    borderRadius: '2rem',
                    padding: 'clamp(3rem, 8vw, 6rem) 1.5rem',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(15, 27, 61, 0.25)'
                }}>

                    {/* Background decoration */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '2rem' }}>
                            Let's Build Something Great
                        </h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Discuss your A.I, data, or web development needs with the Quorvin team.
                        </p>
                        <Link
                            to="/contact"
                            className="btn"
                            style={{
                                background: 'white',
                                color: 'var(--primary)',
                                padding: '1.25rem 3rem',
                                borderRadius: '9999px',
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                textDecoration: 'none',
                                transition: 'transform 0.2s'
                            }}
                        >
                            Contact Us <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
