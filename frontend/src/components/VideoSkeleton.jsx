import React from 'react';

const VideoSkeleton = () => {
    return (
        <div className="video-card">
            <div className="video-thumbnail-container skeleton" style={{ backgroundColor: 'var(--bg-secondary)' }} />
            <div className="video-info">
                <div className="video-avatar skeleton" />
                <div style={{ flex: 1 }}>
                    <div className="skeleton" style={{ height: '16px', width: '90%', marginBottom: '8px' }} />
                    <div className="skeleton" style={{ height: '14px', width: '60%', marginBottom: '4px' }} />
                    <div className="skeleton" style={{ height: '14px', width: '40%' }} />
                </div>
            </div>
        </div>
    );
};

export default VideoSkeleton;
