import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-transition" style={{ paddingTop: '80px' }}>
            <div className="container" style={{ padding: '4rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                    <div>
                        <h1 className="fade-in-up" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1e293b' }}>Get in Touch</h1>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>
                            Have a question or want to collaborate? Reach out to us.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}><MapPin /></div>
                                <div>
                                    <h3 style={{ fontWeight: '700' }}>Address</h3>
                                    <p style={{ color: '#64748b' }}>Bojongsoang, Bandung Regency,<br />West Java, Indonesia 40287</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}><Mail /></div>
                                <div>
                                    <h3 style={{ fontWeight: '700' }}>Email Us</h3>
                                    <p style={{ color: '#64748b' }}>info@techschole.id</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'white', padding: '3rem', borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#475569' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#475569' }}>Email</label>
                                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#475569' }}>Message</label>
                                <textarea rows="4" placeholder="How can we help?" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', fontFamily: 'inherit' }}></textarea>
                            </div>
                            <button
                                type="button"
                                className="btn-primary"
                                style={{ width: '100%', fontSize: '1.1rem', marginTop: '1rem' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
