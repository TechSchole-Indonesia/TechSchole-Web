import React from 'react';
import CTA from '../components/CTA';

const About = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>

            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', padding: '6rem 0 4rem', textAlign: 'center', color: 'white' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800' }}>About Quorvin</h1>
                <p style={{ opacity: 0.8, maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem' }}>
                    Seek. Structure. Conquer.
                </p>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>

                {/* Who We Are */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--primary)', paddingLeft: '1rem', color: 'var(--primary)' }}>Who We Are</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', background: 'rgba(15, 27, 61, 0.04)', padding: '2rem', borderRadius: '1rem' }}>
                        Quorvin is a strategic intelligence partner specializing in AI, Data, and Web Development consulting.
                        We help businesses navigate complexity — transforming raw data into structured insight, and insight into decisive action.
                        Our name comes from Latin: <em>Quaerere</em> (to seek) and <em>Vincere</em> (to conquer).
                    </p>
                </section>

                {/* Philosophy */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--secondary)', paddingLeft: '1rem', color: 'var(--primary)' }}>Our Philosophy</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { num: '01', title: 'QUAERE', sub: 'Seek', color: 'var(--primary)', desc: 'Ask the right questions. Explore the unknown. Understand the problem before proposing solutions.' },
                            { num: '02', title: 'ORDO', sub: 'Structure', color: 'var(--secondary)', desc: 'Organize chaos into clarity. Build frameworks, architect systems, create order from complexity.' },
                            { num: '03', title: 'VINCE', sub: 'Conquer', color: 'var(--accent)', desc: 'Deliver decisive results. Ship solutions that create measurable impact and lasting advantage.' }
                        ].map((p, i) => (
                            <div key={i} style={{ background: 'rgba(15, 27, 61, 0.04)', padding: '2rem', borderRadius: '1rem', borderTop: `4px solid ${p.color}` }}>
                                <span style={{ fontSize: '2rem', fontWeight: '800', color: p.color }}>{p.num}</span>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', margin: '0.5rem 0 0.25rem', color: 'var(--primary)' }}>{p.title}</h3>
                                <span style={{ fontSize: '0.85rem', letterSpacing: '2px', color: p.color, textTransform: 'uppercase' }}>{p.sub}</span>
                                <p style={{ color: '#475569', marginTop: '1rem', lineHeight: 1.7 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vision */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--accent)', paddingLeft: '1rem', color: 'var(--primary)' }}>Our Vision</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', background: 'rgba(240, 180, 41, 0.06)', padding: '2rem', borderRadius: '1rem' }}>
                        To be a trusted strategic intelligence partner for businesses worldwide — turning complex challenges in AI, data, and digital into sustainable competitive advantage.
                    </p>
                </section>

                {/* Mission */}
                <section>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--secondary)', paddingLeft: '1rem', color: 'var(--primary)' }}>Our Mission</h2>
                    <div style={{ background: 'rgba(0, 212, 255, 0.04)', padding: '2rem', borderRadius: '1rem' }}>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#475569', fontSize: '1.1rem' }}>
                            {[
                                'Deliver AI consulting that helps businesses automate, optimize, and make data-driven decisions.',
                                'Build modern data infrastructure that turns raw data into actionable intelligence.',
                                'Develop high-performance web platforms that support business operations and growth.',
                                'Foster long-term partnerships through disciplined execution and measurable results.'
                            ].map((m, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem', lineHeight: 1.7 }}>
                                    <span style={{ color: 'var(--secondary)', fontWeight: '700', flexShrink: 0 }}>→</span>
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            <CTA />
        </div>
    );
};

export default About;
