import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--text-main)', color: 'white', padding: '6rem 0 2rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand Column */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: '800' }}>
                            Neuro<span style={{ color: 'var(--primary-light)' }}>Physio</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                            Empowering recovery through specialized neurological physiotherapy. Your journey to independence starts here.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <div key={i} style={{
                                    padding: '0.75rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    <Icon size={20} color="white" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '700' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Home', 'About', 'Services', 'Contact', 'Faq'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseOver={(e) => e.target.style.color = 'var(--primary-light)'}
                                        onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '700' }}>Therapies</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Stroke Rehabilitation', 'Spinal Cord Injury', 'Pediatric Neuro', 'Parkinson\'s Care'].map((item) => (
                                <li key={item} style={{ color: 'var(--text-muted)' }}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '700' }}>Contact Us</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                                <Phone size={20} color="var(--primary-light)" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                                <Mail size={20} color="var(--primary-light)" />
                                <span>hello@neurophysio.com</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                                <MapPin size={24} color="var(--primary-light)" />
                                <span>123 Recovery Lane, Medical District, Pune, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} NeuroPhysioCare. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}>Privacy Policy</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
