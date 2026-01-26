import { motion } from 'framer-motion';

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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 120px)' }}
        >
            <div className="input-glass" style={{ 
                width: '100%', 
                maxWidth: '450px', 
                padding: '40px', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-lg)'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '24px', fontWeight: '700' }}>
                    {isLogin ? 'Sign In' : 'Create Account'}
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '32px', color: 'var(--text-secondary)' }}>
                    to continue to YouTube
                </p>

                {error && (
                    <motion.p 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ color: '#ff4444', marginBottom: '20px', textAlign: 'center', fontSize: '14px', backgroundColor: 'rgba(255, 68, 68, 0.1)', padding: '10px', borderRadius: 'var(--radius-md)' }}
                    >
                        {error}
                    </motion.p>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {!isLogin && (
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
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
                    <button type="submit" className="btn btn-accent" style={{ padding: '12px', marginTop: '12px', fontSize: '15px' }}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <span>{isLogin ? "Don't have an account? " : "Already have an account? "}</span>
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className="btn-ghost"
                        style={{ color: '#3ea6ff', fontWeight: '600', padding: '4px 8px' }}
                    >
                        {isLogin ? 'Create account' : 'Sign in instead'}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Auth;
