import React, { useState } from 'react'

const AVATAR = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#1e1b4b"/><circle cx="50" cy="36" r="19" fill="#6366f1"/><ellipse cx="50" cy="84" rx="30" ry="22" fill="#6366f1"/></svg>')}`

const LEADERSHIP = [
  { role: 'Chairperson' },
  { role: 'Vice Chairperson' },
  { role: 'Secretary' },
  { role: 'Joint Secretary' },
  { role: 'Treasurer' },
  { role: 'Faculty Coordinator' },
]

const TEAMS = [
  { name: 'Technical Team', lead: 'Technical Lead', count: 6 },
  { name: 'Events Team', lead: 'Event Lead', count: 6 },
  { name: 'Design Team', lead: 'Design Lead', count: 4 },
  { name: 'PR & Media Team', lead: 'PR Lead', count: 4 },
  { name: 'Content Team', lead: 'Content Lead', count: 3 },
]

const Team = () => (
  <section id="team" style={{ position: 'relative', zIndex: 1, padding: '96px 24px', scrollMarginTop: 64, background: '#07070b' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)' }} />
    <div style={{ maxWidth: 1140, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.18em', color: '#818cf8', textTransform: 'uppercase', marginBottom: 14 }}>The people</div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.5vw,48px)', fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.02em', color: '#fff' }}>Meet the Team</h2>
        <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>
          The students who plan, build and run everything CSI SJCET does.
        </p>
      </div>

      {/* Core Committee */}
      <SectionLabel color="#6366f1" label="Core Committee" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 18, marginBottom: 50 }}>
        {LEADERSHIP.map(m => <MemberCard key={m.role} role={m.role} />)}
      </div>

      {/* Teams */}
      <SectionLabel color="#8b5cf6" label="Teams" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 20 }}>
        {TEAMS.map(t => <TeamCard key={t.name} t={t} />)}
      </div>
    </div>
  </section>
)

const SectionLabel = ({ color, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
    <span style={{ width: 4, height: 18, borderRadius: 3, background: color, display: 'block' }} />
    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, margin: 0, color: '#fff' }}>{label}</h3>
  </div>
)

const MemberCard = ({ role }) => {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        padding: '26px 18px', borderRadius: 20,
        border: `1px solid ${hov ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)'}`,
        background: 'rgba(255,255,255,0.03)', textAlign: 'center',
        transition: 'border-color .3s,transform .3s,box-shadow .3s',
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? '0 20px 40px -20px rgba(0,0,0,0.6)' : 'none',
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <img src={AVATAR} alt={role} style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(99,102,241,0.45)', marginBottom: 15 }} />
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{role}</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', marginTop: 5, fontStyle: 'italic' }}>Name to be added</div>
    </div>
  )
}

const TeamCard = ({ t }) => (
  <div style={{ padding: 24, borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
      <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, margin: 0, color: '#fff' }}>{t.name}</h4>
      <span style={{ padding: '4px 11px', borderRadius: 999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>
        {t.count + 1} members
      </span>
    </div>
    {/* Lead */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: 12, borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', marginBottom: 16 }}>
      <img src={AVATAR} alt={t.lead} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(129,140,248,0.5)', flexShrink: 0 }} />
      <div style={{ lineHeight: 1.25 }}>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700, color: '#fff' }}>{t.lead}</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#a5b4fc', letterSpacing: '.04em' }}>TEAM LEAD</div>
      </div>
    </div>
    {/* Members */}
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.34)', marginBottom: 11 }}>Members</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
      {Array.from({ length: t.count }).map((_, i) => (
        <img key={i} src={AVATAR} alt="Member" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(255,255,255,0.12)' }} />
      ))}
    </div>
  </div>
)

export default Team
