import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import Auth from './pages/Auth';
import ChannelStudio from './pages/ChannelStudio';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', marginTop: '56px' }}>
        <Sidebar isOpen={isSidebarOpen} />
        <main style={{ 
          flex: 1, 
          padding: '20px', 
          marginLeft: isSidebarOpen ? '240px' : '72px', 
          minHeight: 'calc(100vh - 56px)',
          backgroundColor: 'var(--bg-color)'
        }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/video/:id" element={<VideoPlayer />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/studio" element={<ChannelStudio />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
