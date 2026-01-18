import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    
    // Use import.meta.env.BASE_URL for correct path in both dev and production
    const logoUrl = `${import.meta.env.BASE_URL}TechSchole Logo.png`;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Product', path: '/product' },
        { name: 'Our Clients', path: '/clients' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '1rem 0',
                background: scrolled || location.pathname !== '/'
                    ? 'rgba(255, 255, 255, 0.85)'
                    : 'rgba(18, 20, 129, 0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: scrolled || location.pathname !== '/'
                    ? '1px solid rgba(18, 20, 129, 0.1)'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <img src={logoUrl} alt="TechSchole" style={{ height: '32px' }} />
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0, color: (scrolled || location.pathname !== '/') ? 'var(--primary-dark)' : 'white' }}>TechSchole</h1>
                </Link>

                {/* Mobile Hamburger */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: (scrolled || location.pathname !== '/') ? '#1e293b' : 'white', cursor: 'pointer', display: 'none' }}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Desktop nav */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                color: (scrolled || location.pathname !== '/') ? 'var(--text-dark)' : 'white',
                                fontWeight: 500,
                                opacity: location.pathname === link.path ? 1 : 0.8,
                                textDecoration: 'none',
                                borderBottom: location.pathname === link.path ? '3px solid var(--primary)' : '3px solid transparent',
                                paddingBottom: '0.25rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
