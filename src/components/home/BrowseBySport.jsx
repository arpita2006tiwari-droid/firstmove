import React from 'react';
import { Target, Activity, Users, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BrowseBySport = () => {
  const navigate = useNavigate();

  const sports = [
    { name: 'Cricket', icon: <Target size={24} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'cricket' },
    { name: 'Football', icon: <Activity size={24} />, color: 'var(--emerald)', colorDim: 'var(--emerald-dim)', id: 'football' },
    { name: 'Badminton', icon: <Users size={24} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'badminton' },
    { name: 'Tennis', icon: <Target size={24} />, color: 'var(--ruby)', colorDim: 'var(--ruby-dim)', id: 'tennis' },
    { name: 'Basketball', icon: <Activity size={24} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'basketball' },
    { name: 'Swimming', icon: <Waves size={24} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'swimming' },
    { name: 'Table Tennis', icon: <Users size={24} />, color: 'var(--sapphire)', colorDim: 'var(--sapphire-dim)', id: 'table-tennis' },
    { name: 'Chess', icon: <Target size={24} />, color: 'var(--gold)', colorDim: 'var(--gold-dim)', id: 'chess' },
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
            onClick={() => navigate(`/sports/${sport.id}`)}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              const iconBox = e.currentTarget.children[0];
              iconBox.style.backgroundColor = sport.color;
              iconBox.style.color = 'var(--ink)';
              iconBox.style.boxShadow = `0 8px 24px ${sport.colorDim}`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              const iconBox = e.currentTarget.children[0];
              iconBox.style.backgroundColor = sport.colorDim;
              iconBox.style.color = sport.color;
              iconBox.style.boxShadow = 'none';
            }}>
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', backgroundColor: sport.colorDim, 
                display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${sport.color}`,
                transition: 'var(--transition-fast)', color: sport.color
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

export default BrowseBySport;
