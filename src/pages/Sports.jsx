import React from 'react';
import { Target, Activity, Users, Waves, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sports = () => {
  const sports = [
    { name: 'Cricket', icon: <Target size={32} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'cricket', desc: 'Nets, Box Cricket and full ground coaching.' },
    { name: 'Football', icon: <Activity size={32} />, color: 'var(--emerald)', colorDim: 'var(--emerald-dim)', id: 'football', desc: 'Turf coaching, drills and league play.' },
    { name: 'Badminton', icon: <Users size={32} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'badminton', desc: 'Premium indoor wooden and synthetic courts.' },
    { name: 'Tennis', icon: <Target size={32} />, color: 'var(--ruby)', colorDim: 'var(--ruby-dim)', id: 'tennis', desc: 'Clay and hard courts with certified pros.' },
    { name: 'Basketball', icon: <Activity size={32} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'basketball', desc: 'Indoor and outdoor courts.' },
    { name: 'Swimming', icon: <Waves size={32} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'swimming', desc: 'Olympic size temperature-controlled pools.' },
    { name: 'Table Tennis', icon: <Users size={32} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'table-tennis', desc: 'Professional ITTF approved tables.' },
    { name: 'Pickleball', icon: <Target size={32} />, color: 'var(--emerald)', colorDim: 'var(--emerald-dim)', id: 'pickleball', desc: 'The fastest growing sport in India.' },
    { name: 'Athletics', icon: <Activity size={32} />, color: 'var(--ruby)', colorDim: 'var(--ruby-dim)', id: 'athletics', desc: 'Track and field training programs.' },
    { name: 'Fitness', icon: <Users size={32} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'fitness', desc: 'Strength and conditioning.' },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Sport Discovery</div>
          <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>Explore Sports</h1>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.6 }}>
            Discover our extensive range of sports facilities and coaching programs. We cater to all ages and skill levels across multiple disciplines.
          </p>
        </div>
      </section>

      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
            {sports.map((sport, i) => (
              <Link key={i} to={`/sports/${sport.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  backgroundColor: 'var(--ink)', borderRadius: '16px', padding: '32px',
                  border: '1px solid var(--panel-2)', transition: 'var(--transition-smooth)',
                  height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                  cursor: 'pointer'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = sport.colorDim;
                  e.currentTarget.style.boxShadow = `0 16px 32px ${sport.colorDim}`;
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--panel-2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ 
                    width: '80px', height: '80px', borderRadius: '50%', backgroundColor: sport.colorDim, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${sport.color}`,
                    color: sport.color, marginBottom: '24px'
                  }}>
                    {sport.icon}
                  </div>
                  <h2 className="font-display" style={{ fontSize: '28px', color: 'var(--chalk)', marginBottom: '12px' }}>{sport.name}</h2>
                  <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: 1.6, flex: 1, marginBottom: '24px' }}>{sport.desc}</p>
                  
                  <div style={{
                    color: sport.color, fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em',
                    display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
