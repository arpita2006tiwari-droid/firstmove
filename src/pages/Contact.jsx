import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!formData.interest) newErrors.interest = 'Please select an area of interest';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--ink)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '16px' }}>Get In Touch</div>
          <h1 className="font-display" style={{ fontSize: '56px', marginBottom: '24px' }}>Contact Us</h1>
          <p style={{ fontSize: '20px', color: 'var(--steel)', lineHeight: 1.6 }}>
            Whether you want to book a coaching session, partner with us for your school, or just have a general question, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--panel)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px' }}>
          
          {/* Contact Information */}
          <div>
            <h2 className="font-display" style={{ fontSize: '40px', marginBottom: '32px' }}>Let's Connect</h2>
            <p style={{ color: 'var(--steel)', marginBottom: '48px', lineHeight: 1.6 }}>
              Reach out to us using the form, or through any of our official channels below. Our team typically responds within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)', marginBottom: '8px' }}>Email Us</h3>
                  <a href="mailto:hello@firstmove.co.in" style={{ fontSize: '18px', color: 'var(--chalk)', textDecoration: 'none', fontWeight: 600 }}>hello@firstmove.co.in</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)', marginBottom: '8px' }}>Call Us</h3>
                  <a href="tel:+919876543210" style={{ fontSize: '18px', color: 'var(--chalk)', textDecoration: 'none', fontWeight: 600 }}>+91 98765 43210</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-mono" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)', marginBottom: '8px' }}>Headquarters</h3>
                  <p style={{ fontSize: '18px', color: 'var(--chalk)', lineHeight: 1.6, fontWeight: 600 }}>
                    12th Floor, SportsHub Tower<br />
                    Bandra West, Mumbai 400050<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: 'var(--ink)', padding: '48px', borderRadius: '16px', border: '1px solid var(--panel-2)' }}>
            <h3 className="font-display" style={{ fontSize: '32px', marginBottom: '32px' }}>Send a Message</h3>
            
            {status === 'success' && (
              <div style={{ padding: '16px', backgroundColor: 'var(--emerald-dim)', color: 'var(--emerald)', borderRadius: '8px', marginBottom: '24px', border: '1px solid var(--emerald)' }}>
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)' }}>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} 
                    style={{ backgroundColor: 'var(--panel)', border: `1px solid ${errors.name ? 'var(--ruby)' : 'var(--panel-2)'}`, padding: '16px', borderRadius: '8px', color: 'var(--chalk)', fontFamily: 'inherit', fontSize: '16px' }} 
                    placeholder="Your Name" />
                  {errors.name && <span style={{ color: 'var(--ruby)', fontSize: '12px' }}>{errors.name}</span>}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)' }}>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                    style={{ backgroundColor: 'var(--panel)', border: `1px solid ${errors.phone ? 'var(--ruby)' : 'var(--panel-2)'}`, padding: '16px', borderRadius: '8px', color: 'var(--chalk)', fontFamily: 'inherit', fontSize: '16px' }} 
                    placeholder="10-digit Number" />
                  {errors.phone && <span style={{ color: 'var(--ruby)', fontSize: '12px' }}>{errors.phone}</span>}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)' }}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} 
                  style={{ backgroundColor: 'var(--panel)', border: `1px solid ${errors.email ? 'var(--ruby)' : 'var(--panel-2)'}`, padding: '16px', borderRadius: '8px', color: 'var(--chalk)', fontFamily: 'inherit', fontSize: '16px' }} 
                  placeholder="hello@example.com" />
                {errors.email && <span style={{ color: 'var(--ruby)', fontSize: '12px' }}>{errors.email}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)' }}>Interested In</label>
                <select name="interest" value={formData.interest} onChange={handleChange} 
                  style={{ backgroundColor: 'var(--panel)', border: `1px solid ${errors.interest ? 'var(--ruby)' : 'var(--panel-2)'}`, padding: '16px', borderRadius: '8px', color: 'var(--chalk)', fontFamily: 'inherit', fontSize: '16px', appearance: 'none' }}>
                  <option value="" disabled>Select an option</option>
                  <option value="Private Coaching">Private Coaching</option>
                  <option value="School Programs">School Programs</option>
                  <option value="FirstMove Centres">FirstMove Centres</option>
                  <option value="Sports">Sports</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
                {errors.interest && <span style={{ color: 'var(--ruby)', fontSize: '12px' }}>{errors.interest}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--steel)' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                  style={{ backgroundColor: 'var(--panel)', border: `1px solid ${errors.message ? 'var(--ruby)' : 'var(--panel-2)'}`, padding: '16px', borderRadius: '8px', color: 'var(--chalk)', fontFamily: 'inherit', fontSize: '16px', resize: 'vertical' }} 
                  placeholder="How can we help you?" />
                {errors.message && <span style={{ color: 'var(--ruby)', fontSize: '12px' }}>{errors.message}</span>}
              </div>

              <button type="submit" disabled={status === 'loading'} style={{
                backgroundColor: 'var(--gold)', color: 'var(--ink)', padding: '16px', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                transition: 'var(--transition-fast)', marginTop: '8px', opacity: status === 'loading' ? 0.7 : 1
              }} onMouseOver={e => { if(status !== 'loading') e.currentTarget.style.transform = 'translateY(-4px)' }} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                {status === 'loading' ? 'Sending...' : <>Send Message <ArrowRight size={18} /></>}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
