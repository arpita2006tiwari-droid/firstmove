import React, { useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    document.body.classList.add('locked');
    const timer = setTimeout(() => {
      document.body.classList.remove('locked');
      onComplete();
    }, 2100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'var(--ink)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      animation: 'preloader-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 2.1s forwards'
    }}>
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0, animation: 'floodlight-flicker 2s ease-out forwards' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0, animation: 'floodlight-flicker 2s ease-out 0.2s forwards' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '25%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', filter: 'blur(100px)', opacity: 0, animation: 'floodlight-flicker 2s ease-out 0.4s forwards' }} />

      <div style={{ position: 'relative', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {['3', '2', '1', 'GO'].map((digit, i) => (
          <div key={digit} className="font-display" style={{
            position: 'absolute', fontSize: '120px', color: 'var(--gold)',
            opacity: 0, animation: `countdown-pop 0.35s ease-out ${i * 0.35}s forwards`
          }}>
            {digit}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'hero-fade-up 0.4s ease-out 1.4s forwards' }}>
        <div className="font-mono" style={{ letterSpacing: '0.28em', fontSize: '14px', marginBottom: '16px' }}>FIRST MOVE</div>
        <div style={{ width: '200px', height: '2px', backgroundColor: 'var(--panel)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', backgroundColor: 'var(--gold)', animation: 'progress-fill 0.6s ease-in-out 1.4s forwards' }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
