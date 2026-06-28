import React, { useState } from 'react'

const Contact = () => (
  <section id="contact" style={{ position: 'relative', zIndex: 1, padding: '96px 24px 80px', scrollMarginTop: 64, overflow: 'hidden', background: '#07070b' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)' }} />

    <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 46 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.18em', color: '#818cf8', textTransform: 'uppercase', marginBottom: 14 }}>Say hello</div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.5vw,48px)', fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.02em', color: '#fff' }}>Get in Touch</h2>
        <p style={{ maxWidth: 520, margin: '0 auto', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>
          Questions about an event or the chapter? Reach us here.
        </p>
      </div>

      {/* Info cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
        <ContactCard
          href="mailto:csi@sjcetpalai.ac.in"
          iconBg="#fff"
          iconBorder="rgba(99,102,241,0.3)"
          icon={<EmailIcon />}
          label="Email"
          value="csi@sjcetpalai.ac.in"
        />
        <ContactCard
          href="tel:+919048879303"
          iconBg="#fff"
          iconBorder="rgba(139,92,246,0.3)"
          icon={<PhoneIcon />}
          label="Phone"
          value="+91 90488 79303"
        />
        <ContactCard
          iconBg="#fff"
          iconBorder="rgba(59,130,246,0.3)"
          icon={<LocationIcon />}
          label="Location"
          value={<>SJCET, Palai<br />Kerala, India</>}
        />
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 32 }}>
        <SocialLink icon={<InstagramIcon />} label="@csisjcet" />
        <SocialLink icon={<LinkedInIcon />} label="LinkedIn" />
        <SocialLink icon={<WhatsAppIcon />} label="WhatsApp Group" />
      </div>
    </div>
  </section>
)

const ContactCard = ({ href, iconBg, iconBorder, icon, label, value }) => {
  const [hov, setHov] = useState(false)
  const el = (
    <div
      style={{
        padding: '30px 26px', borderRadius: 22,
        border: `1px solid ${hov ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)'}`,
        background: 'rgba(255,255,255,0.03)',
        transition: 'border-color .3s,transform .3s,box-shadow .3s',
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? '0 20px 40px -20px rgba(0,0,0,0.6)' : 'none',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ width: 50, height: 50, borderRadius: 14, background: iconBg, border: `1px solid ${iconBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
        {icon}
      </div>
      <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 600, color: '#fff', wordBreak: 'break-word', lineHeight: 1.35 }}>{value}</div>
    </div>
  )
  return href ? <a href={href} style={{ textDecoration: 'none', display: 'block' }}>{el}</a> : el
}

const SocialLink = ({ icon, label }) => {
  const [hov, setHov] = useState(false)
  return (
    <a
      href="#"
      onClick={e => e.preventDefault()}
      style={{
        textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9,
        padding: '11px 18px', borderRadius: 13,
        border: `1px solid ${hov ? 'rgba(129,140,248,0.4)' : 'rgba(255,255,255,0.1)'}`,
        background: hov ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
        color: hov ? '#fff' : 'rgba(255,255,255,0.7)',
        fontSize: 14, fontWeight: 600, transition: 'background .2s,color .2s,border-color .2s',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {icon}{label}
    </a>
  )
}

const EmailIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
  </svg>
)
const PhoneIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const LocationIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)
const YouTubeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)
const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

export default Contact
