import React from 'react';

const Logo = ({ size = 32, light = false }) => {
    const navy = '#0f1b3d';
    const cyan = '#00d4ff';
    const gold = '#f0b429';
    const text = light ? '#e8edf5' : navy;
    const scale = size / 32;

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: `${6 * scale}px` }}>
            {/* Icon Q — matches favicon */}
            <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 20A11 11 0 1 0 20 24" stroke={light ? '#e8edf5' : navy} strokeWidth="3" strokeLinecap="round" fill="none"/>
                <line x1="20" y1="22" x2="25" y2="27" stroke={cyan} strokeWidth="3" strokeLinecap="round"/>
                <circle cx="25" cy="27" r="2.5" fill={gold}/>
            </svg>
            {/* Wordmark */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{
                    fontSize: `${18 * scale}px`,
                    fontWeight: 800,
                    color: text,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                }}>
                    Quor<span style={{ color: cyan }}>vin</span>
                </span>
                <svg 
                    width={18 * scale} 
                    height={3 * scale} 
                    style={{ position: 'absolute', bottom: `${-3 * scale}px`, right: 0 }}
                >
                    <line x1="0" y1="1.5" x2={18 * scale} y2="1.5" stroke={gold} strokeWidth={2 * scale} strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Logo;
