import React from 'react';

const Logo = ({ size = 32, light = false }) => {
    const primary = light ? '#ffffff' : '#2563eb';
    const accent = '#06b6d4';
    const text = light ? '#ffffff' : '#1e293b';
    const scale = size / 32;

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: `${8 * scale}px` }}>
            {/* Icon: Abstract "TS" mark */}
            <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill={primary} />
                <path d="M8 10h16v3H18.5v12h-5V13H8v-3z" fill={light ? '#2563eb' : '#ffffff'} />
                <circle cx="24" cy="8" r="3" fill={accent} />
            </svg>
            <span style={{
                fontSize: `${18 * scale}px`,
                fontWeight: 800,
                color: text,
                letterSpacing: '-0.02em',
                lineHeight: 1
            }}>
                Tech<span style={{ color: primary }}>Schole</span>
            </span>
        </div>
    );
};

export default Logo;
