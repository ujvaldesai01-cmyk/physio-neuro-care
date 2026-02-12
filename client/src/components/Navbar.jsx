import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = {
        position: 'fixed',
        top: isScrolled ? '20px' : '0',
        left: '0',
        right: '0',
        width: isScrolled ? '90%' : '100%',
        maxWidth: 'var(--container-width)',
        margin: '0 auto',
        zIndex: 9999,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderRadius: isScrolled ? '50px' : '0',
        padding: isScrolled ? '0.75rem 2rem' : '1.5rem 2rem',
        boxShadow: isScrolled ? 'var(--shadow-lg)' : 'none',
        border: isScrolled ? '1px solid rgba(255,255,255,0.5)' : 'none'
    };

    return (
        <nav style={navbarStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-main)', zIndex: 10002 }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                        padding: '0.6rem',
                        borderRadius: '14px',
                        color: 'white',
                        display: 'flex',
                        boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)'
                    }}>
                        <Brain size={26} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.03em', fontFamily: 'Outfit, sans-serif' }}>
                        Neuro<span className="text-gradient">Physio</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden-mobile" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                        <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="nav-link"
                            style={{
                                textDecoration: 'none',
                                color: 'var(--text-body)',
                                fontWeight: '600',
                                transition: 'color 0.2s',
                                fontSize: '1rem'
                            }}
                            onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-body)'}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', borderRadius: '50px', fontSize: '0.95rem' }}>
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', zIndex: 10002 }} className="mobile-toggle">
                    {isMobileOpen ? <X size={32} color="var(--text-main)" /> : <Menu size={32} color="var(--text-main)" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileOpen && (
                <div className="mobile-menu-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%)',
                    zIndex: 10001,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', width: '100%', maxWidth: '300px' }}>
                        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                            <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                onClick={() => setIsMobileOpen(false)}
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--text-main)',
                                    fontWeight: '800',
                                    fontSize: '2.5rem',
                                    letterSpacing: '-0.02em',
                                    animation: `slideUp 0.4s ease-out ${index * 0.1}s backwards`
                                }}>
                                {item}
                            </a>
                        ))}
                        <div style={{ marginTop: '2rem', animation: 'slideUp 0.4s ease-out 0.4s backwards' }}>
                            <a href="/contact" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', justifyContent: 'center', boxShadow: '0 20px 40px -10px rgba(15, 118, 110, 0.4)' }}>
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @media (max-width: 768px) {
                  .hidden-mobile { display: none !important; }
                  .mobile-toggle { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
