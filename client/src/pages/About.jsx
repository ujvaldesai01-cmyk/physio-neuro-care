import React from 'react';
import { Award, GraduationCap, BriefcaseMedical, UserCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '6rem' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.span variants={fadeInUp} style={{
                        color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.875rem'
                    }}>About the Doctor</motion.span>
                    <motion.h1 variants={fadeInUp} style={{ fontSize: '3rem', margin: '1rem 0 1.5rem', lineHeight: '1.2' }}>Dedicated to Neurological Excellence & Patient Recovery</motion.h1>
                    <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2rem' }}>
                        With specialized training in Neurology (MPT) and years of clinical experience, we bridge the gap between injury and independence.
                    </motion.p>

                    <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>8+</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Years Experience</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>1k+</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Patients Recovered</p>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* Image Placeholder */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        width: '100%', paddingBottom: '100%', background: '#cbd5e1', borderRadius: '24px', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-xl)'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                            DOCTOR IMAGE
                        </div>
                    </div>
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            position: 'absolute', bottom: '-20px', right: '-20px', background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)', border: '1px solid #f1f5f9'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: 'var(--text-main)' }}>
                           <CheckCircle size={24} color="var(--primary)" /> BPT, MPT Neuro
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Qualifications */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="card card-glass" 
                style={{ padding: '4rem 2rem', border: '1px solid rgba(0,0,0,0.05)' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Qualifications & Expertise</h2>
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
                >
                    {[
                        { icon: <GraduationCap size={32} />, title: "MPT - Neurology", desc: "Master of Physiotherapy specializing in neurological conditions, stroke rehab, and spinal injuries." },
                        { icon: <Award size={32} />, title: "BPT", desc: "Bachelor of Physiotherapy foundational degree with distinction in anatomy and rehabilitation." },
                        { icon: <BriefcaseMedical size={32} />, title: "Certified Specialist", desc: "Additional certifications in gait analysis, manual therapy, and pediatric neuro-development." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i} 
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            style={{ textAlign: 'center', padding: '1.5rem' }}
                        >
                            <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', background: '#ccfbf1' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <style>{`
                @media (max-width: 768px) {
                    .container > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
                }
            `}</style>
        </div>
    );
};

export default About;
