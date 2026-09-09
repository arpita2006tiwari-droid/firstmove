import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: '5 Ways to Improve Your Backhand in Tennis',
      category: 'Coaching',
      date: 'Oct 12, 2026',
      excerpt: 'Struggling with your backhand? Our top coaches share the 5 critical adjustments that will instantly add power and precision to your shots.',
      img: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2942&auto=format&fit=crop'
    },
    {
      title: 'The Role of Nutrition in Youth Sports',
      category: 'Nutrition',
      date: 'Oct 08, 2026',
      excerpt: 'Discover what young athletes should be eating before and after training to maximize their energy levels and promote healthy recovery.',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2906&auto=format&fit=crop'
    },
    {
      title: 'Why Pickleball is the Perfect Sport for All Ages',
      category: 'Sports',
      date: 'Sep 28, 2026',
      excerpt: 'Pickleball is taking the country by storm. We break down why it is easy to learn, intensely competitive, and fun for the whole family.',
      img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2940&auto=format&fit=crop'
    },
    {
      title: 'How to Prevent Common Football Injuries',
      category: 'Fitness',
      date: 'Sep 15, 2026',
      excerpt: 'Stay on the pitch longer with these essential warm-up routines and strength exercises designed to protect your knees and ankles.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop'
    },
    {
      title: 'FirstMove Hosts Annual Corporate League',
      category: 'Events',
      date: 'Sep 02, 2026',
      excerpt: 'Highlights from last weekend\'s Corporate Cup where over 40 companies battled it out across cricket and football turfs.',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2940&auto=format&fit=crop'
    },
    {
      title: 'Women in Sports: Breaking Barriers',
      category: 'Lifestyle',
      date: 'Aug 21, 2026',
      excerpt: 'We sit down with our top female coaches to discuss the changing landscape of women\'s sports and how to encourage more girls to play.',
      img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop'
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Insights & News</div>
          <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>The FirstMove Blog</h1>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.6 }}>
            Expert advice, training tips, nutrition guides, and community news to help you stay ahead of the game.
          </p>
        </div>
      </section>

      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
            {posts.map((post, i) => (
              <div key={i} style={{ 
                backgroundColor: 'var(--panel)', borderRadius: '16px', overflow: 'hidden',
                border: '1px solid var(--panel-2)', transition: 'var(--transition-smooth)',
                display: 'flex', flexDirection: 'column', cursor: 'pointer'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--gold-dim)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--panel-2)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                  <div className="font-mono" style={{ 
                    position: 'absolute', top: '16px', left: '16px', backgroundColor: 'var(--gold)', color: 'var(--ink)',
                    padding: '4px 12px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700
                  }}>
                    {post.category}
                  </div>
                </div>
                
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="font-mono" style={{ fontSize: '12px', color: 'var(--steel)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {post.date}
                  </div>
                  <h2 className="font-display" style={{ fontSize: '28px', color: 'var(--chalk)', marginBottom: '16px' }}>{post.title}</h2>
                  <p style={{ color: 'var(--steel)', fontSize: '15px', lineHeight: 1.6, flex: 1, marginBottom: '24px' }}>{post.excerpt}</p>
                  
                  <div style={{
                    color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em',
                    display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
