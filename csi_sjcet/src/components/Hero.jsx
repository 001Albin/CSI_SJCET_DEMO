import React, { useState, useEffect, useRef } from 'react'

const QUOTES = [
  "Engineers don't just build machines — they build the future, one bold idea at a time.",
  "Behind every line of code is a curious mind solving problems the world hasn't named yet.",
  'Technology is the quiet force that turns ordinary ideas into extraordinary, everyday reality.',
  "Great software isn't written by individuals — it's grown by communities that learn together.",
  'The computer only does what we imagine first; engineering is imagination made precise.',
  'Every breakthrough begins as a question that no one else thought was worth asking.',
  'We debug today so that someone, somewhere, can build something far better tomorrow.',
]

const Hero = ({ events, onSelectEvent }) => {
  const [twText, setTwText] = useState('')
  const aliveRef = useRef(true)
  const twRef = useRef(null)

  useEffect(() => {
    aliveRef.current = true
    let qi = 0, ci = 0, deleting = false

    const tick = () => {
      if (!aliveRef.current) return
      const full = QUOTES[qi]
      if (!deleting) {
        ci++
        setTwText(full.slice(0, ci))
        if (ci === full.length) { deleting = true; twRef.current = setTimeout(tick, 2800); return }
        twRef.current = setTimeout(tick, 52 + Math.random() * 46)
      } else {
        ci--
        setTwText(full.slice(0, ci))
        if (ci === 0) { deleting = false; qi = (qi + 1) % QUOTES.length; twRef.current = setTimeout(tick, 600); return }
        twRef.current = setTimeout(tick, 80)
      }
    }
    twRef.current = setTimeout(tick, 500)
    return () => { aliveRef.current = false; clearTimeout(twRef.current) }
  }, [])

  // Show top 4 as featured; rest as smaller
  const featured = events.slice(0, 4)

  return (
    <section id="home" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', padding: '96px 0 28px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden', scrollMarginTop: 70 }}>
      {/* Glow blobs */}
      <div className="float-glow" style={{ position: 'absolute', top: '8%', left: '50%', width: 680, height: 680, background: 'radial-gradient(circle,rgba(99,102,241,0.16),transparent 65%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '6%', left: '12%', width: 340, height: 340, background: 'radial-gradient(circle,rgba(139,92,246,0.12),transparent 65%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', right: '10%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(59,130,246,0.10),transparent 65%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.5),transparent)' }} />

      {/* Hero intro text */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto 28px', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 15px', borderRadius: 999, border: '1px solid rgba(99,102,241,0.35)', background: 'rgba(99,102,241,0.10)', marginBottom: 26 }}>
          <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#818cf8', display: 'block', flexShrink: 0 }} />
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.16em', color: '#c7d2fe', textTransform: 'uppercase' }}>Computer Society of India · SJCET Palai</span>
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(38px,6vw,72px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.02em', margin: '0 0 20px', color: '#fff' }}>
          Where Tech Meets<br />
          <span style={{ background: 'linear-gradient(110deg,#818cf8,#c084fc 55%,#60a5fa)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Community
          </span>
        </h1>
        <p style={{ maxWidth: 680, minHeight: 56, margin: '0 auto', fontSize: 'clamp(15px,2vw,20px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500 }}>
          {twText}
          <span className="cursor-blink" style={{ display: 'inline-block', width: 2, height: '1.05em', marginLeft: 3, background: '#818cf8', verticalAlign: '-3px' }} />
        </p>
      </div>

      {/* Section label */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto 14px', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ width: 4, height: 20, borderRadius: 3, background: '#6366f1', display: 'block' }} />
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, margin: 0, color: '#fff' }}>Latest Events</h2>
        </div>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.38)' }} className="hidden sm:block">click to open · scroll down for all</span>
      </div>

      {/* Featured cards grid — top 4 big */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {featured.map(ev => (
            <FeaturedCard key={ev.id} ev={ev} onSelect={onSelectEvent} />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="bob" style={{ position: 'absolute', bottom: 22, left: '50%', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none', color: 'rgba(255,255,255,0.4)' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' }}>About</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  )
}

const FeaturedCard = ({ ev, onSelect }) => {
  const [hov, setHov] = useState(false)
  return (
    <div
      onClick={() => onSelect(ev.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: 'pointer', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column',
        border: `1px solid ${hov ? 'rgba(129,140,248,0.65)' : 'rgba(255,255,255,0.09)'}`,
        background: '#0d0d14',
        boxShadow: hov ? '0 32px 64px -24px rgba(79,70,229,0.5)' : '0 8px 32px -16px rgba(0,0,0,0.8)',
        transition: 'transform .4s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s',
        transform: hov ? 'translateY(-8px) scale(1.02)' : 'none',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 160, flexShrink: 0, overflow: 'hidden' }}>
        <img
          src={ev.img} alt={ev.title} loading="lazy" decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .5s ease', transform: hov ? 'scale(1.07)' : 'scale(1)' }}
        />
        {/* Category badge */}
        <div style={{ position: 'absolute', left: 12, top: 12, padding: '4px 10px', borderRadius: 999, background: 'rgba(7,7,11,0.65)', border: '1px solid rgba(255,255,255,0.14)', fontSize: 10, fontWeight: 700, letterSpacing: '.06em', color: '#c7d2fe' }}>
          {ev.category}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: '#818cf8', letterSpacing: '.07em', marginBottom: 5 }}>{ev.dateShort}</div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 6 }}>{ev.title}</div>
        <p style={{ fontSize: 12.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.48)', margin: '0 0 10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {ev.desc}
        </p>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)' }}>
          View details <span style={{ color: '#818cf8' }}>→</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
