import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SportDetail = () => {
  const { id } = useParams();
  
  // Format ID to Title Case
  const formatName = (str) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  const sportName = id ? formatName(id) : 'Sport';

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ 
        padding: '120px 0', 
        backgroundColor: 'var(--ink)', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        {/* Abstract Background */}
        <div style={{ position: 'absolute', top: '0', right: '0', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.2, zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px', textTransform: 'uppercase' }}>FirstMove {sportName}</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(56px, 8vw, 96px)', marginBottom: '32px' }}>
            Master <span style={{ color: 'var(--gold)' }}>{sportName}</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--steel)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '48px' }}>
            Experience premium coaching, elite facilities, and a competitive environment designed to help you excel at {sportName}.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/contact" style={{
              backgroundColor: 'var(--gold)', color: 'var(--chalk)', padding: '16px 32px',
              borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none', transition: 'var(--transition-fast)'
            }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Book a Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: '48px', marginBottom: '32px' }}>Why Learn {sportName}?</h2>
            <p style={{ color: 'var(--steel)', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px' }}>
              {sportName} is a fantastic way to build physical fitness, improve coordination, and develop strategic thinking. At FirstMove, we provide a holistic approach to {sportName} training that focuses on technical skills, physical conditioning, and mental toughness.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Expert certified coaches',
                'Premium equipment and facilities',
                'Programs for all age groups',
                'Video analysis and performance tracking'
              ].map((benefit, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CheckCircle2 size={24} color="var(--gold)" />
                  <span style={{ fontSize: '16px', color: 'var(--chalk)' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: '500px', borderRadius: '16px', overflow: 'hidden', backgroundColor: 'var(--ink)' }}>
             <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--steel)' }}>
               {/* Placeholder for sport specific image */}
               [Sport Image: {sportName}]
             </div>
          </div>
        </div>
      </section>
      
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: '48px', marginBottom: '64px' }}>Coaching Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Private 1-on-1', desc: 'Accelerated learning with dedicated attention.', path: '/learn-a-sport/private' },
              { title: 'Group Batches', desc: 'Train with peers of similar age and skill level.', path: '/learn-a-sport/centres' },
              { title: 'Advanced Camps', desc: 'Intensive training for competitive players.', path: '/contact' }
            ].map((opt, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--panel)', padding: '40px', borderRadius: '12px', border: '1px solid var(--panel-2)' }}>
                <h3 className="font-display" style={{ fontSize: '28px', color: 'var(--gold)', marginBottom: '16px' }}>{opt.title}</h3>
                <p style={{ color: 'var(--steel)', marginBottom: '32px' }}>{opt.desc}</p>
                <Link to={opt.path} className="font-mono" style={{ color: 'var(--chalk)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportDetail;
