import React from 'react';
import { Link } from 'react-router-dom';

const GetInTouchBanner = () => {
  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--gold)', color: 'var(--ink)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>Ready to Make Your First Move?</h2>
        <p style={{ fontSize: '20px', marginBottom: '48px', lineHeight: 1.6, color: 'var(--ink)' }}>
          Find the right sport, coach or programme for you and take your game to the next level.
        </p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          <Link to="/learn-a-sport" style={{
            backgroundColor: 'var(--ink)', color: 'var(--chalk)', padding: '16px 32px',
            borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
            textDecoration: 'none', transition: 'var(--transition-fast)', border: '1px solid var(--ink)'
          }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            Get Started
          </Link>
          <Link to="/contact" style={{
            backgroundColor: 'transparent', color: 'var(--ink)', padding: '16px 32px', border: '1px solid var(--ink)',
            borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
            textDecoration: 'none', transition: 'var(--transition-fast)'
          }} onMouseOver={e => {
            e.currentTarget.style.backgroundColor = 'var(--ink)';
            e.currentTarget.style.color = 'var(--gold)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }} onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--ink)';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchBanner;
