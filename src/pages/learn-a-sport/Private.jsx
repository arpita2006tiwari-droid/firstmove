import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Private = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '80px 0 120px', backgroundColor: 'var(--panel)', borderBottom: '1px solid var(--panel-2)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}>
          <div style={{ flex: '1 1 500px', height: '700px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2938&auto=format&fit=crop" alt="Private Coaching" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                 onMouseOver={e => e.target.style.transform = 'scale(1.05)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} />
          </div>
          
          <div className="overlap-card">
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Signature 1-on-1</div>
            <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px', color: 'var(--chalk)' }}>Private Coaching Sessions</h1>
            <p style={{ fontSize: '18px', color: 'var(--steel)', marginBottom: '40px', lineHeight: 1.7 }}>
              Elevate your game with personalized, 1-on-1 sessions from our elite certified pros. Tailored drills, intensive feedback, and accelerated growth designed exclusively for you.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {[
                { title: 'Custom Plans', desc: 'Built for your goals' },
                { title: 'Video Analysis', desc: 'Frame-by-frame breakdown' },
                { title: 'Elite Pros', desc: 'Train with the best' },
                { title: 'Tracked Growth', desc: 'Analytics on the app' },
                { title: 'Flexible Schedule', desc: 'Train when you want' },
                { title: 'Coach Matching', desc: 'Find the perfect fit' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold)', border: '1px solid var(--panel-2)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--chalk)', fontSize: '15px' }}>{item.title}</div>
                    <div style={{ color: 'var(--steel)', fontSize: '13px', marginTop: '4px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <button style={{
              backgroundColor: 'var(--gold)', color: 'var(--chalk)', padding: '16px 32px', border: 'none', cursor: 'pointer',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'var(--transition-fast)', alignSelf: 'flex-start'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Find Your Coach <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Existing Coaching coaches layout can be embedded here */}
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Meet Our Elite Coaches</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { name: 'Arjun S.', sport: 'Tennis', exp: '12 Yrs Pro', rate: '₹2,500/hr', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop' },
              { name: 'Priya M.', sport: 'Badminton', exp: 'Nat. Champ', rate: '₹2,000/hr', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop' },
              { name: 'Vikram R.', sport: 'Football', exp: 'A-License', rate: '₹3,000/hr', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop' },
              { name: 'Neha K.', sport: 'Swimming', exp: 'Olympian', rate: '₹3,500/hr', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop' }
            ].map((coach, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--panel)', padding: '40px 32px', borderRadius: '16px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                border: '1px solid var(--panel-2)', cursor: 'pointer', transition: 'var(--transition-smooth)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--gold-dim)';
                e.currentTarget.style.boxShadow = '0 16px 32px var(--gold-dim)';
                e.currentTarget.querySelector('img').style.filter = 'grayscale(0%)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--panel-2)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('img').style.filter = 'grayscale(10%)';
              }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', padding: '4px', border: '2px solid var(--gold-dim)', marginBottom: '24px' }}>
                  <img src={coach.img} alt={coach.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: 'grayscale(10%)', transition: 'var(--transition-smooth)' }} />
                </div>
                <div className="font-display" style={{ fontSize: '24px', marginBottom: '8px' }}>{coach.name}</div>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                  {coach.sport} • {coach.exp}
                </div>
                <div className="font-mono" style={{ fontSize: '16px', color: 'var(--chalk)' }}>{coach.rate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Private;
