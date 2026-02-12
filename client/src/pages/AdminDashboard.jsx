import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Calendar, Phone } from 'lucide-react';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }
        fetchAppointments();
    }, [navigate]);

    const fetchAppointments = async () => {
        try {
            // In real app, send token in headers
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/appointments`);
            const data = await res.json();
            setAppointments(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
            {/* Topbar */}
            <div style={{ background: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
                <h2 style={{ color: 'var(--primary-dark)' }}>Doctor Dashboard</h2>
                <button onClick={handleLogout} className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <LogOut size={16} /> Logout
                </button>
            </div>

            <div className="container" style={{ padding: '3rem 1.5rem' }}>
                <h3 style={{ marginBottom: '2rem' }}>Upcoming Appointments ({appointments.length})</h3>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {appointments.length === 0 ? (
                        <p>No appointments yet.</p>
                    ) : (
                        appointments.map((appt) => (
                            <div key={appt._id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem' }}>{appt.patientName}</h4>
                                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> {appt.phone}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {new Date(appt.date).toLocaleDateString()}</span>
                                    </div>
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.875rem' }}>
                                            {appt.service}
                                        </span>
                                    </div>
                                    {appt.message && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>"{appt.message}"</p>}
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        background: appt.status === 'Pending' ? '#fef3c7' : '#dcfce7',
                                        color: appt.status === 'Pending' ? '#b45309' : '#15803d',
                                        fontWeight: '600',
                                        fontSize: '0.875rem'
                                    }}>
                                        {appt.status}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
