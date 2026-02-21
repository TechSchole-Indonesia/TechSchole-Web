import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const res = await fetch('https://formspree.io/f/mdalwnvb', {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' }
        });
        if (res.ok) { setSubmitted(true); form.reset(); }
    };

    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div className="container" style={{ padding: '4rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                    <div>
                        <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--primary)' }}>Get in Touch</h1>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>
                            Have a question or want to collaborate? Reach out to us.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(15, 27, 61, 0.05)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}><MapPin /></div>
                                <div>
                                    <h3 style={{ fontWeight: '700' }}>Address</h3>
                                    <p style={{ color: '#64748b' }}>Bojongsoang, Bandung Regency,<br />West Java, Indonesia 40287</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(15, 27, 61, 0.05)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}><Mail /></div>
                                <div>
                                    <h3 style={{ fontWeight: '700' }}>Email Us</h3>
                                    <p style={{ color: '#64748b' }}>info@quorvin.id</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'white', padding: '3rem', borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                                <p style={{ color: '#64748b' }}>We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#475569' }}>Name</label>
                                    <input name="name" type="text" required placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#475569' }}>Email</label>
                                    <input name="email" type="email" required placeholder="your@email.com" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#475569' }}>Message</label>
                                    <textarea name="message" rows="4" required placeholder="How can we help?" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', fontFamily: 'inherit' }}></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.1rem', marginTop: '1rem' }}>
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
