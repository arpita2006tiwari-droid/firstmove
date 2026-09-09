import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ isLoaded }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [stats, setStats] = useState({ venues: 0, coaches: 0, cities: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setStats({
        venues: Math.floor(easeOut * 482),
        coaches: Math.floor(easeOut * 128),
        cities: Math.floor(easeOut * 24)
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isLoaded]);

  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const p = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 5
    }));
    setParticles(p);
  }, []);

  return (
    <section ref={heroRef} style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative',
      overflow: 'hidden', paddingTop: '120px', paddingBottom: '80px'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top center, rgba(232,185,77,0.08) 0%, transparent 60%)', zIndex: -3 }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.15, zIndex: -2 }}>
        <div style={{ position: 'absolute', width: '200%', height: '200%', top: '-50%', left: '-50%', background: 'conic-gradient(from 0deg, transparent 0deg, var(--gold) 45deg, transparent 90deg)', animation: 'conic-sweep 18s linear infinite' }} />
      </div>

      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: '15vw', height: '150vh',
        background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(212, 175, 55, 0.3))',
        animation: 'beam-spin 24s linear infinite',
        zIndex: -2,
        transformOrigin: 'center center'
      }} />
      
      <div style={{ position: 'absolute', width: '40vw', height: '40vw', borderRadius: '50%', background: 'var(--gold)', filter: 'blur(80px)', opacity: 0.15, top: '10%', left: '10%', animation: 'orb-drift 14s ease-in-out infinite alternate', zIndex: -2 }} />
      <div style={{ position: 'absolute', width: '30vw', height: '30vw', borderRadius: '50%', background: 'var(--sapphire)', filter: 'blur(60px)', opacity: 0.15, bottom: '20%', right: '10%', animation: 'orb-drift 16s ease-in-out infinite alternate-reverse', zIndex: -2 }} />

      <div style={{
        position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: -1,
        left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out', opacity: 0.3
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15, zIndex: -2 }} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <rect x="50" y="50" width="900" height="500" fill="none" stroke="var(--steel)" strokeWidth="2" strokeDasharray="2000" style={{ animation: 'svg-draw 3.5s ease-out forwards' }} />
        <line x1="500" y1="50" x2="500" y2="550" stroke="var(--steel)" strokeWidth="2" strokeDasharray="2000" style={{ animation: 'svg-draw 3.5s ease-out forwards' }} />
        <circle cx="500" cy="300" r="80" fill="none" stroke="var(--steel)" strokeWidth="2" strokeDasharray="2000" style={{ animation: 'svg-draw 3.5s ease-out forwards' }} />
      </svg>

      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', bottom: '-10px', left: p.left, width: '3px', height: '3px',
          backgroundColor: 'var(--gold)', borderRadius: '50%', opacity: 0,
          animation: `hero-fade-up ${p.duration}s linear ${p.delay}s infinite`
        }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '24px', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.2s' }}>
            Premium Sports Coaching & Academy
          </div>
          
          <h1 className="font-display" style={{ fontSize: 'clamp(56px, 9vw, 110px)', marginBottom: '24px', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.4s' }}>
            LEARN. PLAY. TRAIN. <br/> <span style={{ color: 'var(--gold)' }}>COMPETE. GROW.</span>
          </h1>
          
          <p style={{ fontSize: '20px', color: 'var(--steel)', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.6s' }}>
            Elevate your game with elite coaches, structured programs for all ages, and world-class facilities. It's time to make your First Move.
          </p>

          <div style={{ 
            display: 'flex', gap: '24px', justifyContent: 'center',
            opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.8s'
          }}>
            <Link to="/sports" style={{
              backgroundColor: 'var(--gold)', color: 'var(--chalk)', padding: '16px 32px',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none', transition: 'var(--transition-fast)', display: 'inline-block'
            }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Explore Sports
            </Link>
            
            <Link to="/learn-a-sport" style={{
              backgroundColor: 'transparent', color: 'var(--chalk)', padding: '16px 32px', border: '1px solid var(--panel-2)',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none', transition: 'var(--transition-fast)', display: 'inline-block'
            }} onMouseOver={e => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }} onMouseOut={e => {
              e.currentTarget.style.borderColor = 'var(--panel-2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
