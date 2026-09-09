import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Centres = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '80px 0 120px', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}>
          <div style={{ flex: '1 1 500px', height: '700px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
            <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2940&auto=format&fit=crop" alt="FirstMove Centres" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                 onMouseOver={e => e.target.style.transform = 'scale(1.05)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} />
          </div>
          
          <div className="overlap-card">
            <div className="eyebrow" style={{ color: 'var(--sapphire)', marginBottom: '16px' }}>Group Training</div>
            <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px', color: 'var(--chalk)' }}>FirstMove Centres</h1>
            <p style={{ fontSize: '18px', color: 'var(--steel)', marginBottom: '40px', lineHeight: 1.7 }}>
              Join regular coaching batches at our dedicated training centres. Experience a vibrant community environment, multiple sports options, and structured learning under certified coaches.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {[
                { title: 'Multiple Sports', desc: 'Varied training options' },
                { title: 'Regular Batches', desc: 'Consistent schedule' },
                { title: 'Age-Group Training', desc: 'Train with peers' },
                { title: 'Community Vibe', desc: 'Engaging environment' },
                { title: 'Skill Assessments', desc: 'Periodic evaluations' },
                { title: 'Matches & Leagues', desc: 'Internal competitions' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--sapphire)', border: '1px solid var(--panel-2)' }}>
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
              backgroundColor: 'var(--sapphire)', color: 'var(--ink)', padding: '16px 32px', border: 'none', cursor: 'pointer',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'var(--transition-fast)', alignSelf: 'flex-start'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Explore Centres <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Centres;
