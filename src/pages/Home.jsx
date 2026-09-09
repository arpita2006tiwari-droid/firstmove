import React from 'react';
import { ArrowRight, Star, MapPin, Smartphone, QrCode } from 'lucide-react';
import Hero from '../components/home/Hero';
import BrowseBySport from '../components/home/BrowseBySport';
import CoachingBlocks from '../components/home/CoachingBlocks';
import Services from '../components/home/Services';
import WhoWeServe from '../components/home/WhoWeServe';
import Testimonial from '../components/home/Testimonial';
import GetInTouchBanner from '../components/home/GetInTouchBanner';

const FeaturedVenues = () => {
  const venues = [
    { name: "The Willingdon Club", area: "Tardeo", price: "₹2,500/hr", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2940&auto=format&fit=crop", sport: "Tennis", accent: "var(--ruby)", accentDim: "var(--ruby-dim)", rating: "4.9", dist: "1.2 km" },
    { name: "NSCI Premium Grass", area: "Worli", price: "₹3,200/hr", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2940&auto=format&fit=crop", sport: "Football", accent: "var(--emerald)", accentDim: "var(--emerald-dim)", rating: "4.8", dist: "3.4 km" },
    { name: "FirstMove Signature", area: "Bandra", price: "Members Only", image: "https://images.unsplash.com/photo-1599818987151-54b9f29a0de5?q=80&w=2938&auto=format&fit=crop", sport: "Badminton", accent: "var(--sapphire)", accentDim: "var(--sapphire-dim)", rating: "5.0", dist: "4.8 km" },
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Curated Spaces</div>
            <h2 className="font-display" style={{ fontSize: '64px' }}>Premium Venues</h2>
          </div>
          <button style={{ color: 'var(--chalk)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--gold)', paddingBottom: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
            View All <ArrowRight size={16} color="var(--gold)" />
          </button>
        </div>

        <div style={{ display: 'flex', gap: '32px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '80px', paddingTop: '16px', margin: '-16px 0' }}>
          {venues.map((venue, i) => (
            <div key={i} style={{
              width: '380px', flex: '0 0 380px', scrollSnapAlign: 'start',
              backgroundColor: 'var(--panel)', borderRadius: '12px', border: '1px solid var(--panel-2)',
              transition: 'var(--transition-smooth)', cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 24px 40px ${venue.accentDim}`;
              e.currentTarget.querySelector('img').style.filter = 'grayscale(0%) scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.querySelector('img').style.filter = 'grayscale(15%) scale(1)';
            }}>
              <div style={{ overflow: 'hidden', height: '260px', borderRadius: '10px 10px 0 0' }}>
                <img src={venue.image} alt={venue.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)', transition: 'var(--transition-smooth)' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <div className="font-mono" style={{ fontSize: '12px', color: venue.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                  {venue.sport}
                </div>
                <h3 className="font-display" style={{ fontSize: '32px', marginBottom: '16px' }}>{venue.name}</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--steel)', marginBottom: '24px', fontSize: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold)' }}><Star size={16} fill="var(--gold)" /> {venue.rating}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={16} /> {venue.area} ({venue.dist})</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--panel-2)' }}>
                  <div>
                    <div className="font-mono" style={{ fontSize: '11px', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Starting at</div>
                    <div className="font-mono" style={{ fontSize: '18px', color: 'var(--chalk)' }}>{venue.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    { name: 'Silver', price: '₹4,999', accent: 'var(--silver)', accentDim: 'var(--silver-dim)', desc: 'Access to standard courts and basic tracking.' },
    { name: 'Gold', price: '₹12,999', accent: 'var(--gold)', accentDim: 'var(--gold-dim)', desc: 'Priority booking, 2 coaching sessions, full analytics.', popular: true },
    { name: 'Black', price: 'Invite', accent: 'var(--ruby)', accentDim: 'var(--ruby-dim)', desc: 'Unlimited access, concierge, dedicated pro coach.', invite: true }
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--panel)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Membership</div>
          <h2 className="font-display" style={{ fontSize: '64px' }}>FirstMove Elite</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {tiers.map((tier, i) => (
            <div key={i} className={tier.popular ? 'gold-glow' : ''} style={{
              backgroundColor: tier.invite ? 'var(--panel-2)' : 'var(--ink)',
              borderRadius: '16px', padding: '48px 32px', position: 'relative', overflow: 'hidden',
              border: tier.popular ? 'none' : `1px solid ${tier.accentDim}`, transition: 'var(--transition-smooth)'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = `0 32px 60px ${tier.accentDim}`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '150px', height: '150px', background: `radial-gradient(circle, ${tier.accentDim} 0%, transparent 70%)`, filter: 'blur(40px)' }} />
              
              {tier.popular && <div className="font-mono" style={{ position: 'absolute', top: '24px', right: '24px', backgroundColor: 'var(--gold)', color: 'var(--chalk)', padding: '4px 12px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '4px', fontWeight: 700 }}>Most Chosen</div>}
              {tier.invite && <div className="font-mono" style={{ position: 'absolute', top: '24px', right: '24px', backgroundColor: 'var(--ruby)', color: 'var(--ink)', padding: '4px 12px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '4px', fontWeight: 700 }}>Invite Only</div>}

              <h3 className="font-display" style={{ fontSize: '32px', color: tier.accent, marginBottom: '16px' }}>{tier.name}</h3>
              <div className="font-mono" style={{ fontSize: '48px', color: 'var(--chalk)', marginBottom: '24px' }}>{tier.price}</div>
              <p style={{ color: 'var(--steel)', fontSize: '16px', marginBottom: '48px', lineHeight: 1.6 }}>{tier.desc}</p>
              
              <button style={{
                width: '100%', padding: '16px', border: `1px solid ${tier.accent}`, borderRadius: '4px', cursor: 'pointer',
                color: tier.accent, fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: 'transparent',
                transition: 'var(--transition-fast)'
              }} onMouseOver={e => { e.currentTarget.style.backgroundColor = tier.accent; e.currentTarget.style.color = 'var(--ink)'; }} onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = tier.accent; }}>
                {tier.invite ? 'Request Invite' : 'Select Tier'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppBanner = () => (
  <section className="reveal" style={{ padding: '120px 0', background: 'linear-gradient(135deg, #E8F0FA 0%, #FDF4E5 100%)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
      <div>
        <h2 className="font-display" style={{ fontSize: '64px', marginBottom: '24px', color: 'var(--ink)' }}>BOOK FASTER<br/>ON THE APP</h2>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '40px', lineHeight: 1.6 }}>
          Get exclusive app-only drops, manage your reservations seamlessly, and track your game performance.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ padding: '12px 24px', backgroundColor: 'var(--ink)', border: '1px solid var(--panel-2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
             <Smartphone size={24} color="var(--gold)" />
             <div>
               <div style={{ fontSize: '10px', color: 'var(--steel)' }}>GET IT ON</div>
               <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--chalk)' }}>Google Play</div>
             </div>
          </div>
          <div style={{ padding: '12px 24px', backgroundColor: 'var(--ink)', border: '1px solid var(--panel-2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
             <Smartphone size={24} color="var(--gold)" />
             <div>
               <div style={{ fontSize: '10px', color: 'var(--steel)' }}>Download on the</div>
               <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--chalk)' }}>App Store</div>
             </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ padding: '32px', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid var(--gold-dim)', textAlign: 'center' }}>
          <div style={{ width: '200px', height: '200px', backgroundColor: 'var(--chalk)', margin: '0 auto 24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <QrCode size={120} color="var(--ink)" />
          </div>
          <div className="font-mono" style={{ fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scan to Download</div>
        </div>
      </div>
    </div>
  </section>
);

const Home = ({ isLoaded }) => {
  return (
    <div>
      <Hero isLoaded={isLoaded} />
      <BrowseBySport />
      <CoachingBlocks />
      <Services />
      <WhoWeServe />
      <FeaturedVenues />
      <Pricing />
      <Testimonial />
      <AppBanner />
      <GetInTouchBanner />
    </div>
  );
};

export default Home;
