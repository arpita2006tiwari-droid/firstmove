import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Schools = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '80px 0 120px', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}>
          <div style={{ flex: '1 1 500px', height: '700px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
            <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2940&auto=format&fit=crop" alt="School Programs" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                 onMouseOver={e => e.target.style.transform = 'scale(1.05)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} />
          </div>
          
          <div className="overlap-card">
            <div className="eyebrow" style={{ color: 'var(--emerald)', marginBottom: '16px' }}>For Institutions</div>
            <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px', color: 'var(--chalk)' }}>School Sports Programs</h1>
            <p style={{ fontSize: '18px', color: 'var(--steel)', marginBottom: '40px', lineHeight: 1.7 }}>
              Partner with FirstMove to bring world-class sports education to your school. We provide structured curriculums, certified coaches, and complete program management to foster student development.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {[
                { title: 'Structured Curriculum', desc: 'Age-appropriate development' },
                { title: 'Certified Coaches', desc: 'Expert staff provided' },
                { title: 'Tournaments', desc: 'Inter-school competitions' },
                { title: 'Physical Literacy', desc: 'Holistic fitness approach' },
                { title: 'Equipment Supply', desc: 'Premium gear included' },
                { title: 'Progress Reports', desc: 'Track student growth' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--emerald)', border: '1px solid var(--panel-2)' }}>
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
              backgroundColor: 'var(--emerald)', color: 'var(--ink)', padding: '16px 32px', border: 'none', cursor: 'pointer',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'var(--transition-fast)', alignSelf: 'flex-start'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Partner With Us <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;
