import React from 'react';

const PlayerSkeleton = () => {
    return (
        <div style={{ display: 'flex', gap: '24px', maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div className="skeleton" style={{ width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-lg)' }} />
                <div className="skeleton" style={{ height: '28px', width: '80%', marginTop: '20px' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="skeleton" style={{ width: '44px', height: '44px', borderRadius: '50%' }} />
                        <div>
                            <div className="skeleton" style={{ height: '16px', width: '120px', marginBottom: '4px' }} />
                            <div className="skeleton" style={{ height: '12px', width: '80px' }} />
                        </div>
                    </div>
                    <div className="skeleton" style={{ height: '36px', width: '100px', borderRadius: 'var(--radius-xl)' }} />
                </div>
                
                <div className="skeleton" style={{ height: '100px', width: '100%', marginTop: '24px', borderRadius: 'var(--radius-lg)' }} />
            </div>
            
            <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="skeleton" style={{ height: '20px', width: '100px' }} />
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{ display: 'flex', gap: '12px' }}>
                        <div className="skeleton" style={{ width: '168px', height: '94px', borderRadius: 'var(--radius-md)', flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                            <div className="skeleton" style={{ height: '14px', width: '90%', marginBottom: '8px' }} />
                            <div className="skeleton" style={{ height: '12px', width: '60%', marginBottom: '4px' }} />
                            <div className="skeleton" style={{ height: '12px', width: '40%' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerSkeleton;
