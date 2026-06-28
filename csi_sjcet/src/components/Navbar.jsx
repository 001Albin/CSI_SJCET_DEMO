import React, { useState, useEffect } from 'react'
import csiLogo from '../assets/logocsi.png'

const NAV_LINKS = ['Home', 'About', 'Team', 'Contact']

const Navbar = ({ onLoginClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && setMobileOpen(false)
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const linkStyle = {
    padding: '9px 14px', borderRadius: 10, fontSize: 14, fontWeight: 600,
    color: 'rgba(255,255,255,.62)', textDecoration: 'none', transition: 'color .2s,background .2s',
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 80,
        background: 'rgba(7,7,11,0.72)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px' }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: 'linear-gradient(145deg,#6366f1,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 18px -6px rgba(99,102,241,.6)', flexShrink: 0 }}>
              <img src={csiLogo} alt="CSI" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>CSI SJCET</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.42)', fontWeight: 600, letterSpacing: '.08em' }}>STUDENT CHAPTER · PALAI</div>
            </div>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden md:flex">
            {NAV_LINKS.map(label => (
              <NavLink key={label} href={`#${label.toLowerCase()}`} label={label} />
            ))}
            <LoginBtn onClick={onLoginClick} />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex md:hidden"
            style={{ width: 40, height: 40, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, background: 'rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 81, background: 'rgba(4,4,8,0.75)', backdropFilter: 'blur(4px)' }}
          />
          <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 82, width: 280, background: '#0c0c14', borderLeft: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} style={{ width: 36, height: 36, border: 'none', borderRadius: 10, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map(label => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', padding: '13px 16px', borderRadius: 12, fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                >
                  {label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <button
                onClick={() => { setMobileOpen(false); onLoginClick() }}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 18px', border: 'none', borderRadius: 12, background: '#6366f1', color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Login
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

const NavLink = ({ href, label }) => {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      style={{ padding: '9px 14px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'color .2s,background .2s', color: hov ? '#fff' : 'rgba(255,255,255,.62)', background: hov ? 'rgba(255,255,255,.06)' : 'transparent' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </a>
  )
}

const LoginBtn = ({ onClick }) => {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 18px', border: 'none', borderRadius: 11, background: hov ? '#818cf8' : '#6366f1', color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 22px -8px rgba(99,102,241,.8)', transition: 'background .2s,transform .2s', transform: hov ? 'translateY(-1px)' : 'none' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
      </svg>
      Login
    </button>
  )
}

export default Navbar
