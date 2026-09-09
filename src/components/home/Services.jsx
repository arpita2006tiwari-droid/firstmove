import React from 'react';
import { Target, Activity, Users, Waves, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    { name: 'Sports Coaching', icon: <Target size={24} />, desc: 'Expert coaching across multiple disciplines for all skill levels.' },
    { name: 'Private Training', icon: <Activity size={24} />, desc: 'Personalized 1-on-1 sessions designed to accelerate your growth.' },
    { name: 'School Programs', icon: <Users size={24} />, desc: 'Comprehensive sports curriculums tailored for educational institutions.' },
    { name: 'Fitness & Conditioning', icon: <Waves size={24} />, desc: 'Strength, agility, and endurance training for peak performance.' },
    { name: 'Competition Prep', icon: <Target size={24} />, desc: 'Intensive training camps for tournament readiness.' },
    { name: 'Community Sports', icon: <Users size={24} />, desc: 'Group sessions and leagues to foster community engagement.' }
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>What We Offer</div>
          <h2 className="font-display" style={{ fontSize: '56px' }}>Comprehensive Services</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {services.map((service, i) => (
            <div key={i} style={{
              padding: '40px 32px', backgroundColor: 'var(--ink)', borderRadius: '12px',
              border: '1px solid var(--panel-2)', transition: 'var(--transition-fast)'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--gold-dim)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--panel-2)';
            }}>
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--panel)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)',
                marginBottom: '24px', border: '1px solid var(--panel-2)'
              }}>
                {service.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--chalk)' }}>{service.name}</h3>
              <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
