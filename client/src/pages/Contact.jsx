import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, CheckCircle, Loader2, User, FileText, ChevronRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        date: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [focusedField, setFocusedField] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/appointments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', phone: '', service: '', date: '', message: '' });
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to connect to the server.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleFocus = (field) => setFocusedField(field);
    const handleBlur = () => setFocusedField('');

    const inputStyle = (fieldName) => ({
        width: '100%',
        padding: '1.25rem 1rem 1.25rem 3rem',
        borderRadius: '16px',
        border: focusedField === fieldName ? '2px solid var(--primary)' : '2px solid rgba(0,0,0,0.05)',
        outline: 'none',
        background: 'rgba(255,255,255,0.8)',
        transition: 'all 0.3s ease',
        fontSize: '1rem',
        color: 'var(--text-main)',
        boxShadow: focusedField === fieldName ? '0 0 0 4px rgba(13, 148, 136, 0.1)' : 'none'
    });

    const iconStyle = (fieldName) => ({
        position: 'absolute',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: focusedField === fieldName ? 'var(--primary)' : 'var(--text-muted)',
        transition: 'color 0.3s ease'
    });

    return (
        <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '120px', paddingBottom: '6rem' }}>
            {/* Decorative Background */}
            <div className="blob blob-1" style={{ top: '0', right: '-10%' }}></div>
            <div className="blob blob-2" style={{ bottom: '0', left: '-10%' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

                    {/* Contact Info Side */}
                    <div className="animate-in" style={{ animationDelay: '0.1s' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Get In Touch</span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Start Your <br /><span className="text-gradient">Recovery Journey.</span></h1>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '500px' }}>
                            We are here to answer your questions and guide you towards the right therapy plan. Reach out to us today.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {[
                                { icon: <Phone size={24} />, title: 'Call Center', info: '+91 98765 43210', sub: 'Mon-Sat, 9am - 7pm' },
                                { icon: <Mail size={24} />, title: 'Email Support', info: 'hello@neurophysio.care', sub: '24/7 Response' },
                                { icon: <MapPin size={24} />, title: 'Visit Clinic', info: '123 Recovery Lane', sub: 'Medical District, Pune' }
                            ].map((item, i) => (
                                <div key={i} className="card-glass" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.6)' }}>
                                    <div style={{
                                        padding: '1rem',
                                        background: 'var(--primary)',
                                        borderRadius: '50%',
                                        color: 'white',
                                        boxShadow: '0 4px 10px rgba(13, 148, 136, 0.3)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0.2rem 0' }}>{item.info}</p>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fancy Appointment Form */}
                    <div className="card-glass" style={{ padding: '3.5rem', borderRadius: '3rem', position: 'relative', boxShadow: 'var(--shadow-xl)', background: 'rgba(255,255,255,0.85)' }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    background: 'var(--primary-soft)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 2rem auto',
                                    color: 'var(--primary)'
                                }}>
                                    <CheckCircle size={50} />
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Request Received!</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>We've received your appointment request. Our team will contact you shortly to confirm the details.</p>
                                <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ width: '100%', padding: '1rem' }}>Book Another Appointment</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="animate-in">
                                <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>Book Appointment</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Fill in the form below and we will get back to you.</p>

                                {error && (
                                    <div style={{ padding: '1rem', background: '#fee2e2', color: '#dc2626', borderRadius: '12px', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                                        <span style={{ fontSize: '1.2rem' }}>!</span> {error}
                                    </div>
                                )}

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                    <div style={{ position: 'relative' }}>
                                        <User size={20} style={iconStyle('name')} />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            style={inputStyle('name')}
                                            placeholder="Patient Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('name')}
                                            onBlur={handleBlur}
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div style={{ position: 'relative' }}>
                                            <Phone size={20} style={iconStyle('phone')} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                style={inputStyle('phone')}
                                                placeholder="Mobile Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('phone')}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <Calendar size={20} style={iconStyle('date')} />
                                            <input
                                                type="date"
                                                name="date"
                                                required
                                                style={inputStyle('date')}
                                                value={formData.date}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('date')}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ position: 'relative' }}>
                                        <FileText size={20} style={iconStyle('service')} />
                                        <select
                                            name="service"
                                            style={{ ...inputStyle('service'), appearance: 'none', cursor: 'pointer' }}
                                            value={formData.service}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('service')}
                                            onBlur={handleBlur}
                                        >
                                            <option value="">Select Service Required...</option>
                                            <option value="Stroke Rehab">Stroke Rehabilitation</option>
                                            <option value="Spinal Cord">Spinal Cord Injury</option>
                                            <option value="Parkinsons">Parkinson's Disease</option>
                                            <option value="Pediatric">Pediatric Neuro</option>
                                            <option value="Gait Training">Advanced Gait Training</option>
                                            <option value="Other">Other Consultation</option>
                                        </select>
                                        <ChevronRight size={20} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%) rotate(90deg)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                                    </div>

                                    <div style={{ position: 'relative' }}>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            style={{ ...inputStyle('message'), paddingLeft: '1.5rem', resize: 'none' }}
                                            placeholder="Tell us a bit about the condition..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('message')}
                                            onBlur={handleBlur}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', padding: '1.25rem', marginTop: '1rem', fontSize: '1.1rem' }}>
                                        {loading ? <Loader2 className="animate-spin" /> : <>Confirm Appointment</>}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
        @media (max-width: 900px) {
          .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
        </div>
    );
};

export default Contact;
