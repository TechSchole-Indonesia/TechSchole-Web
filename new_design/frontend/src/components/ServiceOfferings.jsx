import React from 'react';
import { Bot, Lightbulb, BarChart3 } from 'lucide-react';

const services = [
    {
        title: "Artificial Intelligence",
        desc: "Implementation of cutting-edge AI tools and custom solutions to automate processes and generate insights.",
        icon: <Bot size={48} />,
        bg: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)"
    },
    {
        title: "Strategic Innovation",
        desc: "Comprehensive roadmaps and strategic frameworks to navigate the complexities of digital transformation.",
        icon: <Lightbulb size={48} />,
        bg: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)"
    },
    {
        title: "Data Engineering",
        desc: "Building the robust data infrastructure required to power intelligent systems and organizational efficiency.",
        icon: <BarChart3 size={48} />,
        bg: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)"
    }
];

const ServiceOfferings = () => {
    return (
        <section id="solutions" style={{ background: 'var(--dark-bg)', padding: '6rem 0', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div className="container">

                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Our Expertise</h2>
                </div>

                <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card" // Added class for hover effect in CSS
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '3rem',
                                borderRadius: '2rem',
                                width: '350px',
                                flexShrink: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: service.bg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1rem',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '700' }}>{service.title}</h3>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
                    <h3
                        style={{ fontSize: '2rem', fontWeight: '800', background: 'linear-gradient(to right, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                        "DATA as the Foundation & A.I as the Enabler"
                    </h3>
                </div>

            </div>
        </section>
    );
};

export default ServiceOfferings;
