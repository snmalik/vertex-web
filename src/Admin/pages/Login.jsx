import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Key, Person } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../utils/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await loginAdmin(email, password);
            navigate('/admin');
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/invalid-credential') {
                setError('Invalid email or password.');
            } else if (err.code === 'auth/too-many-requests') {
                setError('Too many failed attempts. Please try again later.');
            } else {
                setError('Failed to login. Please check your credentials.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-wrapper" style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', maxWidth: '450px' }}
            >
                <Card className="border-0 shadow-lg" style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px'
                }}>
                    <Card.Body className="p-5">
                        <div className="text-center mb-5">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 style={{ 
                                    color: '#fff', 
                                    fontWeight: '800', 
                                    letterSpacing: '-1px',
                                    fontSize: '2.5rem'
                                }}>
                                    Vertex <span style={{ color: '#6669F1' }}>Pro</span>
                                </h1>
                                <p className="text-light opacity-50">Admin Control Center</p>
                            </motion.div>
                        </div>

                        {error && <Alert variant="danger" className="py-2 small text-center" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#ff8a8a' }}>{error}</Alert>}

                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className="text-light small fw-bold mb-2" style={{ letterSpacing: '1px', fontSize: '0.75rem' }}>ADMIN EMAIL</Form.Label>
                                <div className="position-relative">
                                    <Person 
                                        size={20} 
                                        className="position-absolute" 
                                        style={{ 
                                            left: '15px', 
                                            top: '50%', 
                                            transform: 'translateY(-50%)', 
                                            color: 'rgba(255,255,255,0.4)',
                                            zIndex: 5
                                        }} 
                                    />
                                    <Form.Control 
                                        type="email" 
                                        placeholder="admin@vertexpro.com" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ 
                                            background: 'rgba(255,255,255,0.05)', 
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            padding: '14px 14px 14px 45px',
                                            borderRadius: '12px',
                                            fontSize: '1rem'
                                        }}
                                        className="shadow-none admin-input"
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label className="text-light small fw-bold mb-2" style={{ letterSpacing: '1px', fontSize: '0.75rem' }}>PASSWORD</Form.Label>
                                <div className="position-relative">
                                    <Key 
                                        size={20} 
                                        className="position-absolute" 
                                        style={{ 
                                            left: '15px', 
                                            top: '50%', 
                                            transform: 'translateY(-50%)', 
                                            color: 'rgba(255,255,255,0.4)',
                                            zIndex: 5
                                        }} 
                                    />
                                    <Form.Control 
                                        type="password" 
                                        placeholder="••••••••" 
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ 
                                            background: 'rgba(255,255,255,0.05)', 
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            padding: '14px 14px 14px 45px',
                                            borderRadius: '12px',
                                            fontSize: '1rem'
                                        }}
                                        className="shadow-none admin-input"
                                    />
                                </div>
                            </Form.Group>

                            <motion.div
                                whileHover={{ scale: 1.02, translateY: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button 
                                    type="submit"
                                    variant="primary" 
                                    disabled={loading}
                                    className="w-100 border-0 shadow-sm" 
                                    style={{ 
                                        background: 'linear-gradient(90deg, #6669F1 0%, #a855f7 100%)',
                                        padding: '16px',
                                        borderRadius: '12px',
                                        fontWeight: '700',
                                        fontSize: '1.1rem',
                                        boxShadow: '0 10px 20px -10px rgba(102, 105, 241, 0.5)'
                                    }}
                                >
                                    {loading ? 'Authenticating...' : 'Access Dashboard'}
                                </Button>
                            </motion.div>
                        </Form>

                        <div className="mt-4 text-center">
                            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-decoration-none small text-light opacity-50 hover-opacity-100 transition-all fw-medium">
                                ← Back to main website
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>

            <style>{`
                .admin-input::placeholder { color: rgba(255,255,255,0.2); }
                .admin-input:focus { 
                    color: #fff; 
                    background: rgba(255,255,255,0.08) !important; 
                    border-color: rgba(102, 105, 241, 0.5) !important;
                    box-shadow: 0 0 0 4px rgba(102, 105, 241, 0.1) !important;
                }
                .transition-all { transition: all 0.3s ease; }
                .hover-opacity-100:hover { opacity: 1 !important; color: #fff !important; }
            `}</style>
        </div>
    );
};

export default Login;
