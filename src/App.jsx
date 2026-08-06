import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, MapPin, Calendar, Menu, ArrowRight, Star, ChevronRight, CheckCircle2,
  ChevronDown, Activity, Target, Waves, Users, Smartphone, QrCode
} from 'lucide-react';
import './index.css';

// --- HOOKS ---
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// --- COMPONENTS ---

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    document.body.classList.add('locked');
    const timer = setTimeout(() => {
      document.body.classList.remove('locked');
      onComplete();
    }, 2100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'var(--ink)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      animation: 'preloader-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 2.1s forwards'
    }}>
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0, animation: 'floodlight-flicker 2s ease-out forwards' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0, animation: 'floodlight-flicker 2s ease-out 0.2s forwards' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '25%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', filter: 'blur(100px)', opacity: 0, animation: 'floodlight-flicker 2s ease-out 0.4s forwards' }} />

      <div style={{ position: 'relative', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {['3', '2', '1', 'GO'].map((digit, i) => (
          <div key={digit} className="font-display" style={{
            position: 'absolute', fontSize: '120px', color: 'var(--gold)',
            opacity: 0, animation: `countdown-pop 0.35s ease-out ${i * 0.35}s forwards`
          }}>
            {digit}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'hero-fade-up 0.4s ease-out 1.4s forwards' }}>
        <div className="font-mono" style={{ letterSpacing: '0.28em', fontSize: '14px', marginBottom: '16px' }}>FIRST MOVE</div>
        <div style={{ width: '200px', height: '2px', backgroundColor: 'var(--panel)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', backgroundColor: 'var(--gold)', animation: 'progress-fill 0.6s ease-in-out 1.4s forwards' }} />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '24px 0',
      transition: 'var(--transition-smooth)',
      backgroundColor: scrolled ? 'rgba(11, 11, 13, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--panel-2)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
            <div className="font-display" style={{ fontSize: '28px', color: 'var(--gold)', letterSpacing: '0.05em' }}>FM</div>
            <span className="font-display" style={{ fontSize: '24px', letterSpacing: '0.02em', display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
              First Move
            </span>
          </div>
          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--panel-2)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--chalk)' }}>
            <MapPin size={16} color="var(--gold)" />
            <span className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mumbai</span>
            <ChevronDown size={14} color="var(--steel)" />
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['Venues', 'Coaching', 'Membership', 'Events'].map(link => (
             <a key={link} href="#" className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)', transition: 'var(--transition-fast)' }} 
                onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
               {link}
             </a>
          ))}
          <button style={{
            backgroundColor: 'var(--gold)', color: 'var(--ink)', padding: '12px 24px',
            fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
            transition: 'var(--transition-fast)'
          }} onMouseOver={e => e.target.style.backgroundColor = '#f0c662'} onMouseOut={e => e.target.style.backgroundColor = 'var(--gold)'}>
            Book a Slot
          </button>
        </div>
      </div>
    </nav>
  );
};

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
        background: 'linear-gradient(to bottom, rgba(91, 155, 213, 0.4), rgba(63, 174, 106, 0.4))',
        animation: 'beam-spin 24s linear infinite',
        zIndex: -2,
        transformOrigin: 'center center'
      }} />
      
      <div style={{ position: 'absolute', width: '40vw', height: '40vw', borderRadius: '50%', background: 'var(--gold)', filter: 'blur(80px)', opacity: 0.05, top: '10%', left: '10%', animation: 'orb-drift 14s ease-in-out infinite alternate', zIndex: -2 }} />
      <div style={{ position: 'absolute', width: '30vw', height: '30vw', borderRadius: '50%', background: 'var(--turf)', filter: 'blur(60px)', opacity: 0.1, bottom: '20%', right: '10%', animation: 'orb-drift 16s ease-in-out infinite alternate-reverse', zIndex: -2 }} />

      <div style={{
        position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: -1,
        left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out', opacity: 0.3
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2, zIndex: -2 }} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <rect x="50" y="50" width="900" height="500" fill="none" stroke="var(--turf)" strokeWidth="2" strokeDasharray="2000" style={{ animation: 'svg-draw 3.5s ease-out forwards' }} />
        <line x1="500" y1="50" x2="500" y2="550" stroke="var(--turf)" strokeWidth="2" strokeDasharray="2000" style={{ animation: 'svg-draw 3.5s ease-out forwards' }} />
        <circle cx="500" cy="300" r="80" fill="none" stroke="var(--turf)" strokeWidth="2" strokeDasharray="2000" style={{ animation: 'svg-draw 3.5s ease-out forwards' }} />
      </svg>

      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', bottom: '-10px', left: p.left, width: '3px', height: '3px',
          backgroundColor: 'var(--gold)', borderRadius: '50%', opacity: 0,
          animation: `hero-fade-up ${p.duration}s linear ${p.delay}s infinite`
        }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '24px', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.2s' }}>
            India's Premier Sports Club
          </div>
          
          <h1 className="font-display" style={{ fontSize: 'clamp(64px, 10vw, 120px)', marginBottom: '24px', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.4s' }}>
            EVERY CHAMPION <br/> MAKES THE <span style={{ color: 'var(--gold)' }}>FIRST MOVE.</span>
          </h1>
          
          <p style={{ fontSize: '20px', color: 'var(--steel)', marginBottom: '64px', maxWidth: '600px', margin: '0 auto 64px', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.6s' }}>
            Reserve elite courts, train with certified pros, and join a members' circle built for people serious about their game.
          </p>

          <div style={{ 
            position: 'relative', padding: '2px', borderRadius: '12px', overflow: 'hidden', 
            maxWidth: '900px', margin: '0 auto', opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 0.8s'
          }}>
            <div style={{ position: 'absolute', inset: -100, background: 'conic-gradient(from 0deg, var(--gold), var(--emerald), var(--sapphire), var(--gold))', animation: 'conic-sweep 6s linear infinite' }} />
            
            <div style={{
              position: 'relative', background: 'rgba(11, 16, 12, 0.95)', backdropFilter: 'blur(20px)',
              borderRadius: '10px', display: 'flex', flexWrap: 'wrap'
            }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', padding: '24px', borderRight: '1px solid var(--panel-2)', textAlign: 'left' }}>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sport</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', fontWeight: 600 }}>
                  Cricket Nets <ChevronDown size={16} />
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', padding: '24px', borderRight: '1px solid var(--panel-2)', textAlign: 'left' }}>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>City</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', fontWeight: 600 }}>
                  Mumbai <ChevronDown size={16} />
                </div>
              </div>
              <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '4px', padding: '24px', textAlign: 'left' }}>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Date & Time</div>
                <div style={{ fontSize: '16px', fontWeight: 600 }}>Today, 7:00 PM</div>
              </div>
              <button style={{
                backgroundColor: 'var(--gold)', color: 'var(--ink)', flex: '0 0 auto', margin: '16px', padding: '0 32px',
                borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                transition: 'var(--transition-fast)'
              }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                Find Courts
              </button>
            </div>
          </div>

          <div style={{ 
            display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '100px', flexWrap: 'wrap',
            opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease-out 1s'
          }}>
            {[
              { label: 'Live Venues', value: stats.venues },
              { label: 'Elite Coaches', value: stats.coaches, border: true },
              { label: 'Cities', value: stats.cities }
            ].map((stat, i) => (
              <div key={stat.label} style={{ textAlign: 'center', position: 'relative', flex: 1 }}>
                {stat.border && <div style={{ position: 'absolute', top: '-20px', bottom: '-20px', left: '-40px', width: '1px', backgroundColor: 'var(--panel)' }} />}
                {stat.border && <div style={{ position: 'absolute', top: '-20px', bottom: '-20px', right: '-40px', width: '1px', backgroundColor: 'var(--panel)' }} />}
                <div className="font-mono" style={{ fontSize: '56px', color: 'var(--gold)', lineHeight: 1 }}>{stat.value}</div>
                <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '12px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const BrowseBySport = () => {
  const sports = [
    { name: 'Cricket', icon: <Target size={24} />, color: 'var(--gold)' },
    { name: 'Football', icon: <Activity size={24} />, color: 'var(--emerald)' },
    { name: 'Badminton', icon: <Users size={24} />, color: 'var(--sapphire)' },
    { name: 'Tennis', icon: <Target size={24} />, color: 'var(--ruby)' },
    { name: 'Basketball', icon: <Activity size={24} />, color: 'var(--gold)' },
    { name: 'Swimming', icon: <Waves size={24} />, color: 'var(--sapphire)' },
    { name: 'Table Tennis', icon: <Users size={24} />, color: 'var(--sapphire)' },
    { name: 'Chess', icon: <Target size={24} />, color: 'var(--gold)' },
  ];

  return (
    <section className="reveal" style={{ padding: '64px 0', backgroundColor: 'var(--panel)', borderBottom: '1px solid var(--panel-2)' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '32px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '24px' }}>
          {sports.map((sport, i) => (
            <div key={i} style={{
              flex: '0 0 auto', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
              cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              const iconBox = e.currentTarget.children[0];
              iconBox.style.backgroundColor = sport.color;
              iconBox.style.color = 'var(--ink)';
              iconBox.style.boxShadow = `0 8px 24px ${sport.color.replace(')', ', 0.35)').replace('rgb', 'rgba')}`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              const iconBox = e.currentTarget.children[0];
              iconBox.style.backgroundColor = 'var(--ink)';
              iconBox.style.color = 'var(--chalk)';
              iconBox.style.boxShadow = 'none';
            }}>
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--ink)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--panel-2)',
                transition: 'var(--transition-fast)', color: 'var(--chalk)'
              }}>
                {sport.icon}
              </div>
              <div className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel)' }}>
                {sport.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedVenues = () => {
  const venues = [
    { name: "The Willingdon Club", area: "Tardeo", price: "₹2,500/hr", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2940&auto=format&fit=crop", sport: "Tennis", accent: "var(--ruby)", accentDim: "var(--ruby-dim)", rating: "4.9", dist: "1.2 km" },
    { name: "NSCI Premium Grass", area: "Worli", price: "₹3,200/hr", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2940&auto=format&fit=crop", sport: "Football", accent: "var(--emerald)", accentDim: "var(--emerald-dim)", rating: "4.8", dist: "3.4 km" },
    { name: "First Move Signature", area: "Bandra", price: "Members Only", image: "https://images.unsplash.com/photo-1599818987151-54b9f29a0de5?q=80&w=2938&auto=format&fit=crop", sport: "Badminton", accent: "var(--sapphire)", accentDim: "var(--sapphire-dim)", rating: "5.0", dist: "4.8 km" },
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Curated Spaces</div>
            <h2 className="font-display" style={{ fontSize: '64px' }}>Premium Venues</h2>
          </div>
          <button style={{ color: 'var(--chalk)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--gold)', paddingBottom: '4px' }}>
            View All <ArrowRight size={16} color="var(--gold)" />
          </button>
        </div>

        <div style={{ display: 'flex', gap: '32px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '80px', paddingTop: '16px', margin: '-16px 0' }}>
          {venues.map((venue, i) => (
            <div key={i} style={{
              width: '380px', flex: '0 0 380px', scrollSnapAlign: 'start',
              backgroundColor: 'var(--panel)', borderRadius: '12px', borderTop: `2px solid ${venue.accent}`,
              transition: 'var(--transition-smooth)', cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 24px 40px ${venue.accentDim}`;
              e.currentTarget.querySelector('img').style.filter = 'grayscale(0%) sepia(0%) scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.querySelector('img').style.filter = 'grayscale(100%) sepia(30%) scale(1)';
            }}>
              <div style={{ overflow: 'hidden', height: '260px', borderRadius: '10px 10px 0 0' }}>
                <img src={venue.image} alt={venue.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) sepia(30%)', transition: 'var(--transition-smooth)' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <div className="font-mono" style={{ fontSize: '12px', color: venue.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                  {venue.sport}
                </div>
                <h3 className="font-display" style={{ fontSize: '32px', marginBottom: '16px' }}>{venue.name}</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--steel)', marginBottom: '24px', fontSize: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold)' }}><Star size={16} fill="var(--gold)" /> {venue.rating}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={16} /> {venue.area} ({venue.dist})</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--panel-2)' }}>
                  <div>
                    <div className="font-mono" style={{ fontSize: '11px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Starting at</div>
                    <div className="font-mono" style={{ fontSize: '18px', color: 'var(--chalk)' }}>{venue.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Coaching = () => {
  const coaches = [
    { name: 'Aryan Desai', sport: 'Tennis', exp: '12 Yrs', rate: '₹3k/hr', img: 'https://images.unsplash.com/photo-1551122089-4e3e77ce7cb4?q=80&w=2938&auto=format&fit=crop' },
    { name: 'Vikram Singh', sport: 'Football', exp: '8 Yrs', rate: '₹2k/hr', img: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2800&auto=format&fit=crop' },
    { name: 'Neha Sharma', sport: 'Badminton', exp: '5 Yrs', rate: '₹1.5k/hr', img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2940&auto=format&fit=crop' },
    { name: 'Rahul Khanna', sport: 'Cricket', exp: '15 Yrs', rate: '₹5k/hr', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=2787&auto=format&fit=crop' },
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel-2)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--emerald)', marginBottom: '16px' }}>Expert Guidance</div>
            <h2 className="font-display" style={{ fontSize: '64px' }}>Certified Academies</h2>
          </div>
          <button style={{ color: 'var(--chalk)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--emerald)', paddingBottom: '4px' }}>
            All Coaches <ArrowRight size={16} color="var(--emerald)" />
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {coaches.map((coach, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--ink)', padding: '40px 32px', borderRadius: '12px', border: '1px solid var(--panel)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'var(--emerald-dim)';
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(63, 174, 106, 0.1)';
              e.currentTarget.querySelector('img').style.filter = 'grayscale(0%)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--panel)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.querySelector('img').style.filter = 'grayscale(100%)';
            }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', padding: '4px', border: '2px solid var(--emerald-dim)', marginBottom: '24px' }}>
                <img src={coach.img} alt={coach.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: 'grayscale(100%)', transition: 'var(--transition-smooth)' }} />
              </div>
              <div className="font-display" style={{ fontSize: '24px', marginBottom: '8px' }}>{coach.name}</div>
              <div className="font-mono" style={{ fontSize: '11px', color: 'var(--emerald)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                {coach.sport} • {coach.exp}
              </div>
              <div className="font-mono" style={{ fontSize: '16px', color: 'var(--chalk)' }}>{coach.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    { name: 'Silver', price: '₹4,999', accent: 'var(--silver)', accentDim: 'var(--silver-dim)', desc: 'Access to standard courts and basic tracking.' },
    { name: 'Gold', price: '₹12,999', accent: 'var(--gold)', accentDim: 'var(--gold-dim)', desc: 'Priority booking, 2 coaching sessions, full analytics.', popular: true },
    { name: 'Black', price: 'Invite', accent: 'var(--ruby)', accentDim: 'var(--ruby-dim)', desc: 'Unlimited access, concierge, dedicated pro coach.', invite: true }
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Membership</div>
          <h2 className="font-display" style={{ fontSize: '64px' }}>First Move Elite</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{
              backgroundColor: tier.invite ? 'var(--panel-2)' : 'var(--panel)',
              borderRadius: '16px', padding: '48px 32px', position: 'relative', overflow: 'hidden',
              border: `1px solid ${tier.accentDim}`, transition: 'var(--transition-smooth)'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = `0 32px 60px ${tier.accentDim}`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '150px', height: '150px', background: `radial-gradient(circle, ${tier.accentDim} 0%, transparent 70%)`, filter: 'blur(40px)' }} />
              
              {tier.popular && <div className="font-mono" style={{ position: 'absolute', top: '24px', right: '24px', backgroundColor: 'var(--gold)', color: 'var(--ink)', padding: '4px 12px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '4px', fontWeight: 700 }}>Most Chosen</div>}
              {tier.invite && <div className="font-mono" style={{ position: 'absolute', top: '24px', right: '24px', backgroundColor: 'var(--ruby)', color: 'var(--chalk)', padding: '4px 12px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '4px', fontWeight: 700 }}>Invite Only</div>}

              <h3 className="font-display" style={{ fontSize: '32px', color: tier.accent, marginBottom: '16px' }}>{tier.name}</h3>
              <div className="font-mono" style={{ fontSize: '48px', color: 'var(--chalk)', marginBottom: '24px' }}>{tier.price}</div>
              <p style={{ color: 'var(--steel)', fontSize: '16px', marginBottom: '48px', lineHeight: 1.6 }}>{tier.desc}</p>
              
              <button style={{
                width: '100%', padding: '16px', border: `1px solid ${tier.accent}`, borderRadius: '4px',
                color: tier.accent, fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em',
                transition: 'var(--transition-fast)'
              }} onMouseOver={e => { e.currentTarget.style.backgroundColor = tier.accent; e.currentTarget.style.color = 'var(--ink)'; }} onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = tier.accent; }}>
                {tier.invite ? 'Request Invite' : 'Select Tier'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--sapphire)', marginBottom: '16px' }}>Tournaments & Leagues</div>
          <h2 className="font-display" style={{ fontSize: '64px', marginBottom: '32px' }}>The Competitive Edge</h2>
          <p style={{ fontSize: '20px', color: 'var(--steel)', marginBottom: '48px', lineHeight: 1.6 }}>
            Compete in city-wide leagues, weekend mixers, and rated tournaments. Keep your competitive spirit alive.
          </p>
          <button style={{ borderBottom: '1px solid var(--sapphire)', color: 'var(--sapphire)', paddingBottom: '4px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '0.1em' }}>View Calendar →</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { date: 'OCT 12', name: 'First Move Masters', sport: 'Tennis', color: 'var(--ruby)' },
            { date: 'NOV 05', name: 'Winter Corporate Cup', sport: 'Football', color: 'var(--emerald)' },
            { date: 'DEC 01', name: 'Pro-Am Mixer', sport: 'Badminton', color: 'var(--sapphire)' },
          ].map((ev, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px',
              backgroundColor: 'var(--ink)', borderRadius: '12px', border: '1px solid var(--panel-2)',
              transition: 'var(--transition-fast)', cursor: 'pointer'
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.borderColor = 'var(--sapphire-dim)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'var(--panel-2)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <div className="font-mono" style={{ fontSize: '20px', color: 'var(--sapphire)' }}>{ev.date}</div>
                <div className="font-display" style={{ fontSize: '24px' }}>{ev.name}</div>
              </div>
              <div className="font-mono" style={{ padding: '6px 12px', backgroundColor: 'var(--panel)', color: ev.color, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '4px' }}>
                {ev.sport}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppBanner = () => (
  <section className="reveal" style={{ padding: '120px 0', background: 'linear-gradient(135deg, var(--panel-2), var(--ink))' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
      <div>
        <h2 className="font-display" style={{ fontSize: '64px', marginBottom: '24px' }}>BOOK FASTER<br/>ON THE APP</h2>
        <p style={{ fontSize: '20px', color: 'var(--steel)', marginBottom: '40px', lineHeight: 1.6 }}>
          Get exclusive app-only drops, manage your reservations seamlessly, and track your game performance.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ padding: '12px 24px', backgroundColor: 'var(--panel)', border: '1px solid var(--panel-2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
             <Smartphone size={24} color="var(--gold)" />
             <div>
               <div style={{ fontSize: '10px', color: 'var(--steel)' }}>GET IT ON</div>
               <div style={{ fontWeight: 700, fontSize: '14px' }}>Google Play</div>
             </div>
          </div>
          <div style={{ padding: '12px 24px', backgroundColor: 'var(--panel)', border: '1px solid var(--panel-2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
             <Smartphone size={24} color="var(--gold)" />
             <div>
               <div style={{ fontSize: '10px', color: 'var(--steel)' }}>Download on the</div>
               <div style={{ fontWeight: 700, fontSize: '14px' }}>App Store</div>
             </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ padding: '32px', backgroundColor: 'rgba(11, 16, 12, 0.6)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid var(--gold-dim)', textAlign: 'center' }}>
          <div style={{ width: '200px', height: '200px', backgroundColor: 'var(--chalk)', margin: '0 auto 24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <QrCode size={120} color="var(--ink)" />
          </div>
          <div className="font-mono" style={{ fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scan to Download</div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="reveal" style={{ padding: '160px 0', backgroundColor: 'var(--ink)', textAlign: 'center' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <div className="font-display" style={{ fontSize: '120px', color: 'var(--gold-dim)', lineHeight: 0.5, marginBottom: '40px' }}>"</div>
      <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)', marginBottom: '48px', textTransform: 'none', letterSpacing: '0' }}>
        The facilities are unmatched, but it's the community and the caliber of coaching that makes First Move the only club that matters.
      </h2>
      <div className="font-mono" style={{ fontSize: '14px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Rohan B. — Gold Member
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="reveal" style={{ padding: '80px 0 40px', borderTop: '1px solid var(--panel-2)', backgroundColor: 'var(--panel)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px', marginBottom: '80px' }}>
      <div style={{ gridColumn: '1 / -1', '@media (minWidth: 1024px)': { gridColumn: 'span 2' }, maxWidth: '300px' }}>
        <div className="font-display" style={{ fontSize: '32px', color: 'var(--gold)', marginBottom: '24px' }}>FIRST MOVE</div>
        <p style={{ color: 'var(--steel)', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px' }}>
          The premium sports club for those who demand excellence in every match. Play on elite courts across the country.
        </p>
      </div>
      
      {[
        { title: 'Popular Cities', links: ['Mumbai', 'Bengaluru', 'Pune', 'Hyderabad', 'Ahmedabad', 'Chandigarh'] },
        { title: 'Popular Sports', links: ['Cricket Turfs', 'Football Turfs', 'Badminton Courts', 'Tennis Courts', 'Pickleball Courts', 'Box Cricket'] },
        { title: 'Company', links: ['About Us', 'Careers', 'Partnerships', 'List Your Venue'] },
        { title: 'Support', links: ['FAQs', 'Cancellation Policy', 'Terms of Service', 'Privacy Policy', 'Contact Us'] }
      ].map((col, i) => (
        <div key={i}>
          <div className="eyebrow" style={{ color: 'var(--chalk)', marginBottom: '24px' }}>{col.title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {col.links.map((link, j) => (
              <a key={j} href="#" className="font-mono" style={{ fontSize: '13px', color: 'var(--steel)', transition: 'var(--transition-fast)' }}
                 onMouseOver={e => e.target.style.color = 'var(--chalk)'} onMouseOut={e => e.target.style.color = 'var(--steel)'}>
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid var(--panel-2)', color: 'var(--steel)', fontSize: '12px' }}>
      <div className="font-mono">© 2026 First Move. All rights reserved.</div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="#" className="font-mono">Privacy</a>
        <a href="#" className="font-mono">Terms</a>
      </div>
    </div>
  </footer>
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useScrollReveal();

  return (
    <div>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <Navbar />
      <Hero isLoaded={isLoaded} />
      <BrowseBySport />
      <FeaturedVenues />
      <Coaching />
      <Pricing />
      <Events />
      <AppBanner />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
