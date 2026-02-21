import React from 'react';

const Logo = ({ size = 32, light = false }) => {
    const primary = light ? '#ffffff' : '#0f1b3d';
    const accent = '#00d4ff';
    const text = light ? '#ffffff' : '#0f1b3d';
    const scale = size / 32;

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: `${8 * scale}px` }}>
            <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill={primary} />
                <path d="M20.5 22.5q-1.8 1-4 1-2.8 0-4.8-2T9.7 16.5q0-3 2-5t4.8-2q2.2 0 4 1l-1.8 2.5q-1-.6-2.2-.6-1.6 0-2.7 1.2-1.1 1.1-1.1 2.9 0 1.8 1.1 2.9 1.1 1.2 2.7 1.2 1.2 0 2.2-.6z" fill={light ? '#0f1b3d' : '#ffffff'} />
                <circle cx="24" cy="8" r="3" fill={accent} />
            </svg>
            <span style={{
                fontSize: `${18 * scale}px`,
                fontWeight: 800,
                color: text,
                letterSpacing: '-0.02em',
                lineHeight: 1
            }}>
                Quor<span style={{ color: primary }}>vin</span>
            </span>
        </div>
    );
};

export default Logo;
