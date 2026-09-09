import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoachingBlocks = () => {
  const blocks = [
    { 
      title: 'Private Coaching', 
      desc: 'Personalized 1-on-1 training with our elite certified pros. Tailored drills, intensive feedback, and accelerated growth.',
      accent: 'var(--gold)', 
      accentDim: 'var(--gold-dim)',
      path: '/learn-a-sport/private',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2938&auto=format&fit=crop'
    },
    { 
      title: 'School Programs', 
      desc: 'Structured sports programs and curriculum for schools. Fostering physical activity, teamwork, and competitive spirit among students.',
      accent: 'var(--emerald)', 
      accentDim: 'var(--emerald-dim)',
      path: '/learn-a-sport/schools',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2940&auto=format&fit=crop'
    },
    { 
      title: 'FirstMove Centres', 
      desc: 'Dedicated sports training centres for regular coaching. Multiple sports, age-specific batches, and a vibrant community environment.',
      accent: 'var(--sapphire)', 
      accentDim: 'var(--sapphire-dim)',
      path: '/learn-a-sport/centres',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2940&auto=format&fit=crop'
    }
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Training Pathways</div>
          <h2 className="font-display" style={{ fontSize: '64px' }}>Learn & Master</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {blocks.map((block, i) => (
            <Link key={i} to={block.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                backgroundColor: 'var(--panel)',
                borderRadius: '16px', position: 'relative', overflow: 'hidden',
                border: `1px solid var(--panel-2)`, transition: 'var(--transition-smooth)',
                height: '100%', display: 'flex', flexDirection: 'column'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = `0 32px 60px ${block.accentDim}`;
                e.currentTarget.style.borderColor = block.accentDim;
                e.currentTarget.querySelector('.card-image').style.transform = 'scale(1.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--panel-2)';
                e.currentTarget.querySelector('.card-image').style.transform = 'scale(1)';
              }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img className="card-image" src={block.image} alt={block.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                </div>
                
                <div style={{ padding: '40px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="font-display" style={{ fontSize: '32px', color: block.accent, marginBottom: '16px' }}>{block.title}</h3>
                  <p style={{ color: 'var(--steel)', fontSize: '16px', marginBottom: '32px', lineHeight: 1.6, flex: 1 }}>{block.desc}</p>
                  
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    color: block.accent, fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em'
                  }}>
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingBlocks;
