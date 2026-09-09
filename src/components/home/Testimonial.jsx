import React from 'react';

const Testimonial = () => (
  <section className="reveal" style={{ padding: '160px 0', backgroundColor: 'var(--ink)', textAlign: 'center' }}>
    <div className="container" style={{ maxWidth: '800px', marginBottom: '80px' }}>
      <div className="font-display" style={{ fontSize: '120px', color: 'var(--gold-dim)', lineHeight: 0.5, marginBottom: '20px' }}></div>
      <h2 className="font-display" style={{ fontSize: '48px', fontStyle: 'italic', color: 'var(--chalk)', marginBottom: '48px', textTransform: 'none', letterSpacing: '0' }}>
        "The facilities are unmatched, but it's the community and the caliber of coaching that makes FirstMove the only club that matters."
      </h2>
      <div className="font-mono" style={{ fontSize: '14px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Rohan B. — Gold Member
      </div>
    </div>
    
    <div className="container" style={{ paddingTop: '80px', borderTop: '1px solid var(--panel-2)' }}>
      <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '48px' }}>
        Trusted by Schools and Partners
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.5 }}>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} style={{ 
            width: '120px', height: '60px', backgroundColor: 'var(--panel)', borderRadius: '8px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--steel)', fontSize: '14px', fontWeight: '600'
          }}>
            Partner Logo
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
