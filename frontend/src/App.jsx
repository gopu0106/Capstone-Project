import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import Auth from './pages/Auth';
import ChannelStudio from './pages/ChannelStudio';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`app ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', marginTop: '56px' }}>
        <Sidebar isOpen={isSidebarOpen} />
        <main 
          className="main-content"
          style={{ 
            flex: 1, 
            padding: '20px', 
            minHeight: 'calc(100vh - 56px)',
            backgroundColor: 'var(--bg-color)',
            transition: 'margin-left var(--transition-normal)'
          }}
        >
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
      <ToastProvider>
        <Router>
          <AppContent />
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
