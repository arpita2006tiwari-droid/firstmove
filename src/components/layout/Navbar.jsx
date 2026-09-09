import React, { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/Logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLearnDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Learn a Sport', 
      path: '/learn-a-sport',
      dropdown: [
        { name: 'Private', path: '/learn-a-sport/private' },
        { name: 'Schools', path: '/learn-a-sport/schools' },
        { name: 'FirstMove Centres', path: '/learn-a-sport/centres' }
      ]
    },
    { name: 'Sports', path: '/sports' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const getLinkColor = (path) => {
    if (path === '/' && location.pathname === '/') return 'var(--chalk)';
    if (path !== '/' && location.pathname.startsWith(path)) return 'var(--chalk)';
    return 'var(--steel)';
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '24px 0',
        transition: 'var(--transition-smooth)',
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(24px)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--panel-2)' : '1px solid transparent',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={logoImg} alt="First Move Logo" style={{ height: '40px', objectFit: 'contain' }} />
            </Link>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--panel-2)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--ink)' }}>
              <MapPin size={16} color="var(--gold)" />
              <span className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mumbai</span>
              <ChevronDown size={14} color="var(--steel)" />
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div style={{ display: 'none', '@media (min-width: 1024px)': { display: 'flex' }, alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <style>
              {`
                @media (min-width: 1024px) {
                  .desktop-nav { display: flex !important; }
                  .mobile-nav-toggle { display: none !important; }
                }
                .nav-dropdown-content {
                  display: none;
                  position: absolute;
                  top: 100%;
                  left: 0;
                  background-color: var(--panel);
                  min-width: 200px;
                  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                  border-radius: 8px;
                  padding: 8px 0;
                  border: 1px solid var(--panel-2);
                  z-index: 1;
                }
                .nav-dropdown:hover .nav-dropdown-content {
                  display: block;
                  animation: fade-in 0.2s ease-out forwards;
                }
                @keyframes fade-in {
                  from { opacity: 0; transform: translateY(-10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .dropdown-item {
                  color: var(--steel);
                  padding: 12px 24px;
                  text-decoration: none;
                  display: block;
                  transition: var(--transition-fast);
                }
                .dropdown-item:hover {
                  background-color: var(--panel-2);
                  color: var(--chalk);
                }
              `}
            </style>
            
            {navLinks.map((link, idx) => (
              link.dropdown ? (
                <div key={idx} className="nav-dropdown" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Link to={link.path} className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: getLinkColor(link.path), textDecoration: 'none', transition: 'var(--transition-fast)' }} 
                    onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = getLinkColor(link.path)}>
                    {link.name} <ChevronDown size={14} />
                  </Link>
                  <div className="nav-dropdown-content">
                    {link.dropdown.map((dropItem, dropIdx) => (
                      <Link key={dropIdx} to={dropItem.path} className="dropdown-item font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={idx} to={link.path} className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: getLinkColor(link.path), textDecoration: 'none', transition: 'var(--transition-fast)' }} 
                  onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = getLinkColor(link.path)}>
                  {link.name}
                </Link>
              )
            ))}
            
            <button style={{
              backgroundColor: 'var(--gold)', color: 'var(--chalk)', padding: '12px 24px', border: 'none', cursor: 'pointer', borderRadius: '4px',
              fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              transition: 'var(--transition-fast)'
            }} onMouseOver={e => e.target.style.backgroundColor = '#f0c662'} onMouseOut={e => e.target.style.backgroundColor = 'var(--gold)'}>
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-nav-toggle" style={{ display: 'block' }}>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 99,
        backgroundColor: 'var(--panel)',
        transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        paddingTop: '100px', overflowY: 'auto'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navLinks.map((link, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid var(--panel-2)', paddingBottom: '16px' }}>
              {link.dropdown ? (
                <>
                  <div 
                    onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  >
                    <span className="font-display" style={{ fontSize: '32px', color: 'var(--chalk)' }}>{link.name}</span>
                    <ChevronDown size={24} color="var(--steel)" style={{ transform: learnDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                  </div>
                  <div style={{ 
                    maxHeight: learnDropdownOpen ? '500px' : '0', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.4s ease-in-out',
                    display: 'flex', flexDirection: 'column', gap: '16px',
                    marginTop: learnDropdownOpen ? '16px' : '0'
                  }}>
                    {link.dropdown.map((dropItem, dropIdx) => (
                      <Link key={dropIdx} to={dropItem.path} className="font-mono" style={{ fontSize: '16px', color: 'var(--steel)', textDecoration: 'none', paddingLeft: '16px' }}>
                        — {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.path} className="font-display" style={{ fontSize: '32px', color: 'var(--chalk)', textDecoration: 'none', display: 'block' }}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button style={{
            backgroundColor: 'var(--gold)', color: 'var(--chalk)', padding: '16px', border: 'none', cursor: 'pointer', borderRadius: '4px',
            fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
            marginTop: '24px'
          }}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
