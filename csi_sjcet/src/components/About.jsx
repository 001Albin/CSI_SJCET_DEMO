import React, { useState } from 'react'
import csiLogo from '../assets/logocsi.png'

const STATS = [
  { value: '500+', label: 'Members' },
  { value: '50+', label: 'Events Hosted' },
  { value: '10+', label: 'Years Active' },
]

const About = ({ events = [], onSelectEvent }) => (
  <section id="about" style={{ position: 'relative', zIndex: 1, padding: '60px 24px 52px', scrollMarginTop: 64 }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)' }} />
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', color: '#818cf8', textTransform: 'uppercase', marginBottom: 10 }}>Who we are</div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, margin: '0 0 10px', letterSpacing: '-0.02em', color: '#fff' }}>About the Chapter</h2>
        <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.5)' }}>
          Bridging academia and industry through innovation, collaboration and a love for building things.
        </p>
      </div>

      {/* Info cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, alignItems: 'start' }}>
        <div style={{ padding: 22, borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.025)' }}>
          <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
            </svg>
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>CSI at SJCET</h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
            We are the Computer Society of India chapter at St Joseph's College of Engineering &amp; Technology, Palai — a community for tech enthusiasts to learn, grow and collaborate through workshops, talks and events.
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.025)' }}>
          <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>What is CSI?</h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
            Established in 1965, the Computer Society of India is the nation's largest body of computing professionals — dedicated to advancing the integrity, competence and collaboration of the computing community.
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 18, border: '1px solid rgba(99,102,241,0.25)', background: 'linear-gradient(160deg,rgba(99,102,241,0.14),rgba(139,92,246,0.06))', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
            <div style={{ width: 68, height: 68, borderRadius: 16, background: 'linear-gradient(145deg,#6366f1,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px -10px rgba(99,102,241,.6)' }}>
              <img src={csiLogo} alt="CSI" style={{ width: 48, height: 48, objectFit: 'contain' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700, margin: '0 0 3px', color: '#fff' }}>Computer Society of India</h3>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#a5b4fc', margin: '0 0 10px', letterSpacing: '.04em' }}>EST. MARCH 6, 1965</p>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)', margin: 0, fontStyle: 'italic' }}>
              "Leading India's digital transformation for nearly 60 years."
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 12, marginTop: 16 }}>
        {STATS.map(s => (
          <div key={s.label} style={{ padding: '16px 16px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(255,255,255,0.42)', marginTop: 6, letterSpacing: '.04em' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* All Events — scrolling marquee */}
      {events.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, padding: '0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{ width: 4, height: 20, borderRadius: 3, background: '#6366f1', display: 'block' }} />
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, margin: 0, color: '#fff' }}>All Events</h2>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.38)' }} className="hidden sm:block">hover to pause · click to open</span>
          </div>

          <div style={{ overflow: 'hidden', width: '100%', WebkitMaskImage: 'linear-gradient(to right,transparent,#000 5%,#000 95%,transparent)', maskImage: 'linear-gradient(to right,transparent,#000 5%,#000 95%,transparent)' }}>
            <div className="marquee" style={{ display: 'flex', gap: 20, width: 'max-content', padding: '10px 0' }}>
              {[...events, ...events].map((ev, i) => (
                <MarqueeCard key={`a1-${i}`} ev={ev} onSelect={onSelectEvent} width={240} />
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  </section>
)

const MarqueeCard = ({ ev, onSelect, width, small }) => {
  const [hov, setHov] = useState(false)
  return (
    <div
      onClick={() => onSelect && onSelect(ev.id)}
      style={{ flex: '0 0 auto', width, cursor: 'pointer' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        position: 'relative', borderRadius: small ? 14 : 16, overflow: 'hidden',
        border: `1px solid ${hov ? 'rgba(129,140,248,0.6)' : 'rgba(255,255,255,0.08)'}`,
        background: '#0d0d14',
        boxShadow: hov ? '0 24px 48px -20px rgba(79,70,229,0.45)' : '0 8px 24px -12px rgba(0,0,0,0.7)',
        transition: 'transform .4s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s',
        transform: hov ? `translateY(${small ? -6 : -8}px) scale(1.03)` : 'none',
      }}>
        <div style={{ aspectRatio: '4/5', width: '100%', overflow: 'hidden' }}>
          <img src={ev.img} alt={ev.title} loading="lazy" decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: small ? .9 : 1 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(7,7,11,0.97) 2%,rgba(7,7,11,0.5) 40%,transparent 65%)' }} />
        {!small && (
          <div style={{ position: 'absolute', left: 11, top: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(7,7,11,0.6)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.13)', fontSize: 10, fontWeight: 700, letterSpacing: '.05em', color: '#c7d2fe' }}>
            {ev.category}
          </div>
        )}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: small ? 12 : 14 }}>
          <div style={{ fontSize: small ? 9 : 10, fontWeight: 700, color: '#818cf8', letterSpacing: '.06em', marginBottom: 4 }}>{ev.dateShort}</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: small ? 13 : 16, fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>{ev.title}</div>
          {!small && (
            <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,0.55)' }}>
              View details <span style={{ color: '#818cf8' }}>→</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
