import { motion } from 'framer-motion';

const categories = ['All', 'Music', 'Gaming', 'Code', 'News', 'Movies', 'Sports'];

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get(`http://localhost:5001/api/videos?title=${searchQuery}&category=${activeCategory}`);
                setVideos(res.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, [searchQuery, activeCategory]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none' }}>
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
                        style={{ 
                            padding: '6px 12px',
                            whiteSpace: 'nowrap',
                            fontSize: '13px',
                            border: activeCategory === cat ? 'none' : '1px solid var(--glass-border)'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div className="video-grid" style={{ padding: 0 }}>
                {videos.length > 0 ? (
                    videos.map(video => <VideoCard key={video._id} video={video} />)
                ) : (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '80px', color: 'var(--text-secondary)' }}>
                        <p style={{ fontSize: '16px' }}>No videos found. Try uploading some!</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Home;
