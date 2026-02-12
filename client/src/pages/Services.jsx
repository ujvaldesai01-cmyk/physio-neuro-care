import React from 'react';
import { Brain, Activity, Zap, PersonStanding, HelpingHand, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Stroke Rehabilitation',
            icon: <Brain size={40} />,
            desc: 'Comprehensive recovery programs focused on neuroplasticity, regaining motor control, and independence after a stroke.'
        },
        {
            title: 'Spinal Cord Injury',
            icon: <Activity size={40} />,
            desc: 'Specialized therapy to maximize function, improve strength, and manage complications following spinal cord injuries.'
        },
        {
            title: 'Parkinson’s Disease',
            icon: <PersonStanding size={40} />,
            desc: 'Evidence-based strategies (LSVT BIG concepts) to improve gait, balance, and tremor management.'
        },
        {
            title: 'Pediatric Neurology',
            icon: <HelpingHand size={40} />,
            desc: 'Gentle, play-based therapy for children with cerebral palsy, developmental delays, and other congenital conditions.'
        },
        {
            title: 'Post-Traumatic Brain Injury',
            icon: <Zap size={40} />,
            desc: 'Cognitive and physical rehabilitation to aid recovery from TBI, focusing on coordiation and balance.'
        },
        {
            title: 'Advanced Gait Training',
            icon: <Award size={40} />,
            desc: 'Advanced analysis and training to correct walking patterns and prevent falls in elderly and neuro patients.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
            <div className="blob blob-1" style={{ top: '-10%', left: '-10%' }}></div>
            <div className="blob blob-2" style={{ bottom: '10%', right: '-10%' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
                    >
                        World-Class Care
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '4rem', marginBottom: '1.5rem', marginTop: '1rem' }}
                    >
                        Our specialized <span className="text-gradient">Therapies</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem' }}
                    >
                        We provide cutting-edge physiotherapy treatments tailored for neurological conditions.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="card card-glass"
                            style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--secondary-soft)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--secondary)',
                                marginBottom: '2rem',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '1.05rem', opacity: 0.9 }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
