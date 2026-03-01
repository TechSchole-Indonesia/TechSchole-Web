import React, { useState } from 'react';
import { ExternalLink, Layers, Smartphone, Globe } from 'lucide-react';

const projects = [
    {
        title: 'InsightOps Analytics',
        category: 'SaaS Platform',
        description: 'A comprehensive web dashboard for real-time system monitoring and AI-driven data insights.',
        icon: <Layers size={24} />,
        image: '/project_mockup_1_1772347549832.png',
        tags: ['React', 'Node.js', 'Web']
    },
    {
        title: 'E-Commerce Nexus',
        category: 'Digital Storefront',
        description: 'Seamlessly integrated web shopping experience with advanced filtering and secure checkout.',
        icon: <Globe size={24} />,
        image: '/project_mockup_3_1772347580194.png',
        tags: ['E-commerce', 'Next.js', 'Web']
    },
    {
        title: 'Admin Portal v2',
        category: 'Business Tool',
        description: 'Internal management system for automated reporting and cross-team collaboration.',
        icon: <Layers size={24} />,
        image: '/project_mockup_2_1772347563003.png',
        tags: ['Dashboard', 'Web App', 'RestAPI']
    }
];

const OurWork = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="our-work" style={{ background: '#080e1f', padding: '8rem 0', color: 'white', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Portfolio</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', margin: '0.5rem 0', background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.6))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Work</h2>
                    <p style={{ color: 'rgba(255, 255, 255, 0.6)', maxWidth: '600px', margin: '1rem auto', fontSize: '1.1rem' }}>
                        Transforming complex problems into elegant digital solutions. Here are a few projects we've built recently.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                position: 'relative',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Image Wrapper */}
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease',
                                        transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                                        opacity: hoveredIndex === index ? 0.3 : 0.8
                                    }}
                                />
                                {/* Overlay Content */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    padding: '2rem',
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    transition: 'opacity 0.4s ease',
                                    background: 'linear-gradient(to top, rgba(8, 14, 31, 0.9), transparent)'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{project.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                                        {project.description}
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{ background: 'rgba(0, 212, 255, 0.2)', color: '#00d4ff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Default Footer */}
                            <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', fontWeight: '700' }}>{project.category}</span>
                                    <h4 style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem', fontWeight: '600' }}>{project.title}</h4>
                                </div>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '10px',
                                    background: hoveredIndex === index ? 'var(--secondary)' : 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <ExternalLink size={18} style={{ color: hoveredIndex === index ? '#080e1f' : 'white' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
