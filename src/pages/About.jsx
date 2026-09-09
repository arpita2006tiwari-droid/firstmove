import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Our Story</div>
          <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>About FirstMove</h1>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.6 }}>
            We are building India's premier sports coaching and academy platform, creating an environment where everyone can discover, play, and master the sport they love.
          </p>
        </div>
      </section>

      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>Meet the People Behind FirstMove</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
            {[
              { name: '[Owner Name 1]', title: 'Co-Founder & CEO', bio: 'With over 15 years in sports management, [Owner 1] envisioned FirstMove as a platform to bridge the gap between amateur enthusiasts and professional-grade facilities. A former state-level athlete who understands the importance of early coaching.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop' },
              { name: '[Owner Name 2]', title: 'Co-Founder & COO', bio: '[Owner 2] brings a wealth of experience in operations and customer experience. Passionate about grassroots sports development, they focus on ensuring that every FirstMove centre operates at the highest standard of excellence.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop' }
            ].map((owner, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--gold)' }}>
                  <img src={owner.img} alt={owner.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: '28px', color: 'var(--chalk)', marginBottom: '4px' }}>{owner.name}</h3>
                  <div className="font-mono" style={{ fontSize: '13px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{owner.title}</div>
                  <p style={{ color: 'var(--steel)', lineHeight: 1.6 }}>{owner.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--panel)', padding: '48px', borderRadius: '16px', border: '1px solid var(--panel-2)' }}>
            <div className="font-mono" style={{ fontSize: '14px', color: 'var(--sapphire)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Our Vision</div>
            <h2 className="font-display" style={{ fontSize: '32px', color: 'var(--chalk)', marginBottom: '24px', lineHeight: 1.3 }}>
              Build a world where sport is accessible, enjoyable and meaningful for everyone.
            </h2>
          </div>
          <div style={{ backgroundColor: 'var(--panel)', padding: '48px', borderRadius: '16px', border: '1px solid var(--panel-2)' }}>
            <div className="font-mono" style={{ fontSize: '14px', color: 'var(--emerald)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Our Mission</div>
            <h2 className="font-display" style={{ fontSize: '32px', color: 'var(--chalk)', marginBottom: '24px', lineHeight: 1.3 }}>
              Make quality sports coaching and sporting opportunities easier to discover and access.
            </h2>
          </div>
        </div>
      </section>

      <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="font-display" style={{ fontSize: '48px', color: 'var(--chalk)' }}>The Core Team</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { name: '[Team Member 1]', role: 'Head of Coaching', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop' },
              { name: '[Team Member 2]', role: 'Operations Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop' },
              { name: '[Team Member 3]', role: 'Sports Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop' },
              { name: '[Team Member 4]', role: 'Community Lead', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop' }
            ].map((member, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }} />
                </div>
                <h3 className="font-display" style={{ fontSize: '24px', color: 'var(--chalk)', marginBottom: '8px' }}>{member.name}</h3>
                <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
