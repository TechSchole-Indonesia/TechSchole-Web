import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';
    const showLight = isHome && !scrolled;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', path: '/product' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '1rem 0',
            background: showLight ? 'rgba(37, 99, 235, 0.15)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderBottom: showLight ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(37, 99, 235, 0.1)',
            boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo size={32} light={showLight} />
                </Link>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} style={{
                            color: showLight ? 'white' : 'var(--text-dark)',
                            fontWeight: 500,
                            opacity: location.pathname === link.path ? 1 : 0.8,
                            textDecoration: 'none',
                            borderBottom: location.pathname === link.path ? '3px solid var(--primary)' : '3px solid transparent',
                            paddingBottom: '0.25rem',
                            transition: 'all 0.3s ease'
                        }}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
