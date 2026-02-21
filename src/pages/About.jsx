import React from 'react';
import CTA from '../components/CTA';

const About = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>

            {/* Header */}
            {/* Header */}
            <div style={{ background: 'white', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)' }}>About Quorvin</h1>
                <p style={{ color: 'var(--primary)', maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem' }}>
                    A.I, Data & Web Development Consulting for Growing Businesses.
                </p>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                {/* Who We Are */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--primary)', paddingLeft: '1rem' }}>Who we are?</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', background: '#eff6ff', padding: '2rem', borderRadius: '1rem' }}>
                        Quorvin is a technology consulting firm specializing in Artificial Intelligence, Data, and
                        Web Development. We help businesses of all sizes adopt the right technology — from crafting
                        A.I strategies and building solid data infrastructure to developing modern, scalable web platforms.
                        With an experienced team across multiple industries, we deliver measurable solutions that
                        directly impact our clients' growth.
                    </p>
                </section>

                {/* Vision */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--secondary)', paddingLeft: '1rem' }}>Our Vision</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', background: '#f5f3ff', padding: '2rem', borderRadius: '1rem' }}>
                        To be a trusted technology partner for businesses worldwide in implementing A.I, data,
                        and digital solutions that drive sustainable growth.
                    </p>
                </section>

                {/* Mission */}
                <section>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', borderLeft: '5px solid var(--accent)', paddingLeft: '1rem' }}>Our Mission</h2>
                    <div style={{ background: '#fff1f2', padding: '2rem', borderRadius: '1rem' }}>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#475569', fontSize: '1.1rem' }}>
                            <li>Deliver A.I consulting services that help businesses automate processes, improve efficiency, and make data-driven decisions.</li>
                            <li>Build modern data infrastructure that enables clients to fully leverage their data assets.</li>
                            <li>Develop high-quality web solutions and digital platforms that support business operations and growth.</li>
                            <li>Foster long-term partnerships with clients through a collaborative approach and measurable results.</li>
                        </ul>
                    </div>
                </section>
            </div>

            <CTA />
        </div>
    );
};

export default About;
