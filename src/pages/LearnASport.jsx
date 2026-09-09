import React from 'react';
import CoachingBlocks from '../components/home/CoachingBlocks';

const LearnASport = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)', borderBottom: '1px solid var(--panel-2)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Your Journey Starts Here</div>
          <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>Learn a Sport</h1>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.6 }}>
            Whether you are looking for personalized 1-on-1 attention, structured programs for your school, or regular training at our elite centres, we have the perfect coaching pathway for you.
          </p>
        </div>
      </section>
      
      <CoachingBlocks />
    </div>
  );
};

export default LearnASport;
