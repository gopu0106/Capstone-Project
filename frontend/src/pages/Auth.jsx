import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
        try {
            const res = await axios.post(`http://localhost:5001${endpoint}`, formData);
            login(res.data);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 120px)', perspective: '1000px' }}
        >
            <motion.div 
                className="input-glass" 
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ 
                    width: '100%', 
                    maxWidth: '450px', 
                    padding: '40px', 
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-lg)'
                }}
            >
                <motion.div layout>
                    <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>
                        {isLogin ? 'Welcome Back' : 'Join Youtube'}
                    </h2>
                    <p style={{ textAlign: 'center', marginBottom: '32px', color: 'var(--text-secondary)', fontSize: '15px' }}>
                        {isLogin ? 'Continue your creative journey' : 'Start sharing your story with the world'}
                    </p>
                </motion.div>

                {error && (
                    <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{ color: '#ff4444', marginBottom: '24px', textAlign: 'center', fontSize: '14px', backgroundColor: 'rgba(255, 68, 68, 0.1)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,68,68,0.2)' }}
                    >
                        {error}
                    </motion.p>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <AnimatePresence mode="popLayout">
                        {!isLogin && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Username" 
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email address" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="btn btn-accent" style={{ padding: '14px', marginTop: '12px', fontSize: '16px', fontWeight: '700' }}>
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                        <hr style={{ flex: 1, border: 'none', borderTop: '1px solid var(--glass-border)' }} />
                        <span>OR</span>
                        <hr style={{ flex: 1, border: 'none', borderTop: '1px solid var(--glass-border)' }} />
                    </div>
                </form>

                <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '15px', color: 'var(--text-secondary)' }}>
                    <span>{isLogin ? "New to YouTube? " : "Already have an account? "}</span>
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className="btn-ghost"
                        style={{ color: '#3ea6ff', fontWeight: '700', padding: '4px 8px', fontSize: '15px' }}
                    >
                        {isLogin ? 'Sign up now' : 'Log in here'}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Auth;
