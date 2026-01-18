import React from 'react';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--dark-bg)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '5rem 0 2rem', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand Info */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <img src="public/TechSchole Logo.png" alt="TechSchole" style={{ height: '32px' }} />
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white' }}>TechSchole</span>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '300px' }}>
                            Empowering businesses through data-driven intelligence and strategic AI transformation.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                            <li style={{ display: 'flex', gap: '0.75rem' }}>
                                <MapPin size={20} />
                                <span>Address: Bojongsoang, Bandung Regency, West Java, Indonesia. 40287</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 style={{ fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.linkedin.com/company/techschole" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                                <Linkedin size={24} />
                            </a>
                            <a href="#" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} TechSchole Indonesia. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
