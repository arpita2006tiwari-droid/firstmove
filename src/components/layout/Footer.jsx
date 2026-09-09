import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/Logo.jpeg';

const Footer = () => (
  <footer className="reveal" style={{ padding: '80px 0 40px', borderTop: '1px solid var(--panel-2)', backgroundColor: 'var(--panel)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px', marginBottom: '80px' }}>
      <div style={{ gridColumn: '1 / -1', '@media (minWidth: 1024px)': { gridColumn: 'span 2' }, maxWidth: '300px' }}>
        <div style={{ marginBottom: '24px' }}>
          <img src={logoImg} alt="First Move Logo" style={{ height: '48px', objectFit: 'contain' }} />
        </div>
        <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px' }}>
          The premium sports club for those who demand excellence in every match. Play on elite courts across the country.
        </p>
      </div>
      
      <div>
        <div className="eyebrow" style={{ color: 'var(--chalk)', marginBottom: '24px' }}>Quick Links</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Home', path: '/' },
            { name: 'Learn a Sport', path: '/learn-a-sport' },
            { name: 'Sports', path: '/sports' },
            { name: 'Blog', path: '/blog' },
            { name: 'About Us', path: '/about' },
            { name: 'Contact Us', path: '/contact' }
          ].map((link, j) => (
            <Link key={j} to={link.path} className="font-mono" style={{ fontSize: '13px', color: 'var(--steel)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
               onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      
      <div>
        <div className="eyebrow" style={{ color: 'var(--chalk)', marginBottom: '24px' }}>Learn a Sport</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Private Coaching', path: '/learn-a-sport/private' },
            { name: 'School Programs', path: '/learn-a-sport/schools' },
            { name: 'FirstMove Centres', path: '/learn-a-sport/centres' }
          ].map((link, j) => (
            <Link key={j} to={link.path} className="font-mono" style={{ fontSize: '13px', color: 'var(--steel)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
               onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="eyebrow" style={{ color: 'var(--chalk)', marginBottom: '24px' }}>Contact & Social</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Instagram', path: '#' },
            { name: 'Facebook', path: '#' },
            { name: 'Twitter', path: '#' },
            { name: 'hello@firstmove.co.in', path: 'mailto:hello@firstmove.co.in' },
            { name: '+91 98765 43210', path: 'tel:+919876543210' }
          ].map((link, j) => (
            <a key={j} href={link.path} className="font-mono" style={{ fontSize: '13px', color: 'var(--steel)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
               onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
      
    </div>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid var(--panel-2)', color: 'var(--steel)', fontSize: '12px' }}>
      <div className="font-mono">© 2026 FirstMove.co.in. All rights reserved.</div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link to="/privacy" className="font-mono" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</Link>
        <Link to="/terms" className="font-mono" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
