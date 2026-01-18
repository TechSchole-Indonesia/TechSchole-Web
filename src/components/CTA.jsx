import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section style={{ padding: '8rem 0', background: 'white' }}>
            <div className="container">
                <div style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    borderRadius: '3rem',
                    padding: '6rem 2rem',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(18, 20, 129, 0.25)' // Deep Blue shadow
                }}>

                    {/* Background decoration */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '2rem' }}>
                            Ready to Accelerate?
                        </h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Schedule a personalized session to see how Insignia can transform your business with intelligent solutions.
                        </p>
                        <button
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
                                cursor: 'pointer',
                                border: 'none',
                                transition: 'transform 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Setup Demo Session <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
