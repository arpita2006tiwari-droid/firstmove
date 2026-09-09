import React from 'react';

const WhoWeServe = () => {
  const groups = [
    { name: 'Kids — Girls & Boys', img: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=2787&auto=format&fit=crop' },
    { name: 'Teens', img: 'https://images.unsplash.com/photo-1530549387722-4c1ba9c87893?q=80&w=2938&auto=format&fit=crop' },
    { name: 'Women', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop' },
    { name: 'Men', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop' },
    { name: 'Adults', img: 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=2940&auto=format&fit=crop' },
    { name: 'Senior Citizens', img: 'https://images.unsplash.com/photo-1574175390022-77e8346e090f?q=80&w=2940&auto=format&fit=crop' }
  ];

  return (
    <section className="reveal" style={{ padding: '120px 0', backgroundColor: 'var(--ink)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Inclusive Community</div>
          <h2 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>Sport For Every Body. Every Age. Every Goal.</h2>
          <p style={{ fontSize: '18px', color: 'var(--steel)', lineHeight: 1.7 }}>
            We believe that sports should be accessible to everyone. From beginners finding their footing to seasoned players honing their craft, FirstMove provides an inclusive environment for all.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {groups.map((group, i) => (
            <div key={i} style={{
              position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
              e.currentTarget.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.3)';
            }}
            onMouseOut={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              e.currentTarget.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.5)';
            }}>
              <img src={group.img} alt={group.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
              <div className="overlay" style={{
                position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', transition: 'background-color 0.4s ease',
                display: 'flex', alignItems: 'flex-end', padding: '24px'
              }}>
                <h3 className="font-display" style={{ fontSize: '24px', color: 'var(--chalk)', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>{group.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
