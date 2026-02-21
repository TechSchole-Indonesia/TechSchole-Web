import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const useCases = [
    'Telecom support operations',
    'E-commerce order tracking',
    'IT helpdesk & infra monitoring',
    'Financial anomaly detection'
];

const FeaturedProduct = () => {
    return (
        <section style={{ background: '#f8fafc', padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Featured Product</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)', margin: '0.5rem 0' }}>InsightOps</h2>
                </div>

                {/* Problem */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', background: '#fef2f2', padding: '1.5rem 2rem', borderRadius: '1rem', border: '1px solid #fecaca' }}>
                    <AlertTriangle size={24} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <h4 style={{ color: '#991b1b', fontWeight: '700', marginBottom: '0.5rem' }}>The Problem</h4>
                        <p style={{ color: '#7f1d1d', lineHeight: 1.7 }}>
                            Most businesses lose hours manually digging through logs, chasing issues across systems, and managing tickets in spreadsheets. By the time the root cause is found, the damage is already done.
                        </p>
                    </div>
                </div>

                {/* Solution */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', background: '#f0fdf4', padding: '1.5rem 2rem', borderRadius: '1rem', border: '1px solid #bbf7d0' }}>
                    <CheckCircle size={24} style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <h4 style={{ color: '#166534', fontWeight: '700', marginBottom: '0.5rem' }}>How InsightOps Solves It</h4>
                        <p style={{ color: '#14532d', lineHeight: 1.7 }}>
                            InsightOps monitors your systems in real-time, uses AI to detect anomalies and identify root causes automatically, and creates prioritized tickets — so your team can focus on fixing, not finding.
                        </p>
                    </div>
                </div>

                {/* Customizable */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', background: '#eff6ff', padding: '1.5rem 2rem', borderRadius: '1rem', border: '1px solid #bfdbfe' }}>
                    <Settings size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <h4 style={{ color: '#080e1f', fontWeight: '700', marginBottom: '0.5rem' }}>Built to Adapt</h4>
                        <p style={{ color: '#1e3a5f', lineHeight: 1.7 }}>
                            Every business is different. InsightOps is fully customizable — we tailor the platform to fit your systems, workflows, and team structure. You get a solution that works the way you work.
                        </p>
                    </div>
                </div>

                {/* Use Cases */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Works Across Industries</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                        {useCases.map((uc, i) => (
                            <span key={i} style={{ background: '#e0f2fe', color: '#0369a1', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500' }}>{uc}</span>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'var(--primary)', color: 'white', padding: '0.875rem 2rem',
                        borderRadius: '9999px', fontWeight: '700', textDecoration: 'none'
                    }}>
                        Request a Demo <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
