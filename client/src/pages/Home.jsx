import React from 'react';
import { ArrowRight, Activity, User, HeartPulse, Brain, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div style={{ paddingTop: '80px', overflow: 'hidden' }}>
            {/* Decorative Background Blobs */}
            <div className="blob blob-1" style={{ top: '10%', left: '-10%' }}></div>
            <div className="blob blob-2" style={{ top: '20%', right: '-5%' }}></div>

            {/* Massive Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                padding: '4rem 0'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center' }}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1.5rem',
                                background: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '50px',
                                border: '1px solid var(--primary-light)',
                                color: 'var(--primary-dark)',
                                fontWeight: '700',
                                marginBottom: '2rem',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                fontSize: '0.875rem'
                            }}>
                                <span style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></span>
                                Neuro-Rehabilitation Excellence
                            </motion.div>

                            <motion.h1 variants={fadeInUp} style={{
                                fontSize: 'clamp(3.5rem, 5vw, 6rem)',
                                marginBottom: '1.5rem',
                                lineHeight: '1',
                            }}>
                                Restart Your <br />
                                <span className="text-gradient">Possibilities.</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} style={{
                                fontSize: '1.35rem',
                                color: 'var(--text-body)',
                                marginBottom: '3rem',
                                maxWidth: '600px',
                                fontWeight: '500',
                                lineHeight: '1.6'
                            }}>
                                Advanced, evidence-based physiotherapy tailored to rewrite your recovery story. Stoke, Spinal Cord, and Neuro specialized care.
                            </motion.p>

                            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Book Initial Assessment <ArrowRight size={20} />
                                </Link>
                                <Link to="/services" className="btn btn-secondary">
                                    Explore Therapies
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} style={{ marginTop: '4rem', display: 'flex', gap: '3rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', margin: 0 }}>500+</h3>
                                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-muted)' }}>Patients Recovered</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', margin: 0 }}>15+</h3>
                                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-muted)' }}>Years Experience</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Visual Composition */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            className="hero-visual"
                        >
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: 'radial-gradient(circle at center, var(--secondary-soft), transparent 70%)',
                                zIndex: -1,
                                opacity: 0.6
                            }}></div>

                            <motion.div
                                className="card-glass float-hover"
                                style={{
                                    padding: '3rem',
                                    width: '100%',
                                    maxWidth: '450px',
                                    borderTop: '6px solid var(--primary)',
                                    position: 'relative',
                                    zIndex: 2
                                }}
                            >
                                <div style={{ position: 'absolute', top: '-30px', right: '-30px', background: 'var(--accent)', color: 'white', padding: '1.5rem', borderRadius: '50%', fontWeight: '700', transform: 'rotate(15deg)', boxShadow: 'var(--shadow-lg)' }}>
                                    Top<br />Rated
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ padding: '1rem', background: 'var(--primary-soft)', borderRadius: '15px', color: 'var(--primary)' }}>
                                        <Activity size={32} />
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Recovery Tracker</h3>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}>
                                        <span>Mobility</span>
                                        <span style={{ color: 'var(--primary)' }}>94%</span>
                                    </div>
                                    <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '10px' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '94%' }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            style={{ height: '100%', background: 'var(--primary)', borderRadius: '10px', boxShadow: '0 0 10px var(--primary-light)' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}>
                                        <span>Strength</span>
                                        <span style={{ color: 'var(--secondary)' }}>88%</span>
                                    </div>
                                    <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '10px' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '88%' }}
                                            transition={{ duration: 1.5, delay: 1.2 }}
                                            style={{ height: '100%', background: 'var(--secondary)', borderRadius: '10px', boxShadow: '0 0 10px var(--secondary-soft)' }}
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative elements behind card */}
                            <div className="animate-mesh" style={{
                                position: 'absolute',
                                width: '300px',
                                height: '300px',
                                border: '2px solid var(--primary-light)',
                                borderRadius: '50%',
                                bottom: '0',
                                left: '-50px',
                                zIndex: 1,
                                opacity: 0.3
                            }}></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bold Features Grid */}
            <section style={{ padding: '8rem 0', position: 'relative' }}>
                <div className="blob blob-1" style={{ top: '50%', right: '0', opacity: 0.4 }}></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '800px', margin: '0 auto 6rem auto', textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Not Just Therapy.<br /> <span className="text-gradient">A Transformation.</span></h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>We don't just treat symptoms. We rebuild neural pathways and restore independence through cutting-edge science and compassionate care.</p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        {[
                            {
                                icon: <Brain size={40} />,
                                title: "Neuro Plasticity Focus",
                                desc: "Evidence-based exercises designed to rewire the brain and restore lost connections.",
                                color: "var(--primary)"
                            },
                            {
                                icon: <User size={40} />,
                                title: "1-on-1 Dedicated Care",
                                desc: "No divided attention. Your session is 100% focused on your specific recovery goals.",
                                color: "var(--secondary)"
                            },
                            {
                                icon: <HeartPulse size={40} />,
                                title: "Holistic Wellbeing",
                                desc: "Addressing the physical, emotional, and psychological aspects of recovery.",
                                color: "var(--accent)"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15 }}
                                className="card"
                                style={{
                                    padding: '3rem',
                                    borderTop: `5px solid ${feature.color}`,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: `linear-gradient(135deg, ${feature.color}22, transparent)`,
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: feature.color,
                                    marginBottom: '2rem'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{feature.title}</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7', flexGrow: 1 }}>{feature.desc}</p>
                                <div style={{ marginTop: '2rem', fontWeight: '700', color: feature.color, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark & Bold Statement Section */}
            <section style={{
                background: 'var(--text-main)',
                color: 'white',
                padding: '10rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 80% 20%, var(--primary-dark), transparent 50%)', opacity: 0.4 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '4rem', marginBottom: '2rem', color: 'white' }}>Recovery is a <br /><span style={{ color: 'var(--primary-light)' }}>Journey.</span></h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem', lineHeight: '1.8' }}>
                            We map out every step of the way. From the initial assessment to the day you achieve your biggest milestone, we are your partners in progress.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                "Comprehensive Kinetic Assessment",
                                "Customized Milestones Framework",
                                "Continuous Adaptation & Progress Tracking"
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', fontWeight: '500' }}>
                                    <CheckCircle color="var(--primary-light)" size={24} />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '3rem',
                            borderRadius: '2rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="carousel-mock" style={{ textAlign: 'center' }}>
                                <Star size={40} fill="var(--accent)" color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>"Life Changing Experience"</h3>
                                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.9, lineHeight: '1.8', marginBottom: '2rem' }}>
                                    "I was told I would plateau, but the team here pushed me beyond my limits. I'm now doing things I thought were impossible."
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'white', borderRadius: '50%', overflow: 'hidden' }}>
                                        {/* Placeholder for avatar */}
                                        <User size={50} color="#333" style={{ transform: 'translate(0, 5px)' }} />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>hello</div>
                                        <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>Stroke Survivor</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '8rem 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="card-glass"
                        style={{
                            padding: '5rem',
                            borderRadius: '3rem',
                            background: 'linear-gradient(135deg, var(--secondary-soft) 0%, white 100%)',
                            border: '2px solid white'
                        }}
                    >
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to Start?</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                            Your first consultation is the biggest step towards recovery. Let's discuss your goals and how we can achieve them together.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
                            Schedule Appointment
                        </Link>
                    </motion.div>
                </div>
            </section>
            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 900px) {
                    .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                    .hero-grid > div:first-child { display: flex; flex-direction: column; alignItems: center; }
                    .hero-grid p { margin-left: auto; margin-right: auto; }
                }
            `}</style>
        </div>
    );
};

export default Home;
