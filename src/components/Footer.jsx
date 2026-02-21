import { Linkedin, Instagram, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--dark-bg)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '5rem 0 2rem', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Logo size={32} light />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '300px' }}>
                            Helping businesses grow through measurable A.I, data, and web development solutions.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                            <li style={{ display: 'flex', gap: '0.75rem' }}>
                                <MapPin size={20} />
                                <span>Bojongsoang, Bandung, West Java, Indonesia 40287</span>
                            </li>
                        </ul>
                    </div>

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
                    <p>&copy; {new Date().getFullYear()} TechSchole. All rights reserved.</p>
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
