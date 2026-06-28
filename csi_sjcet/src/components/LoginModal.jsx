import React, { useState, useEffect } from 'react'
import csiLogo from '../assets/logocsi.png'

const LoginModal = ({ onClose }) => {
  const [tab, setTab] = useState('login')
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); onClose() }

  const tabBtnStyle = (active) => ({
    flex: 1, padding: '9px', border: 'none', borderRadius: 9,
    fontFamily: "'Manrope',sans-serif", fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
    transition: 'background .2s,color .2s',
    background: active ? '#6366f1' : 'transparent',
    color: active ? '#fff' : 'rgba(255,255,255,0.45)',
    boxShadow: active ? '0 8px 20px -8px rgba(99,102,241,.7)' : 'none',
  })

  const inputStyle = {
    width: '100%', padding: '12px 14px', borderRadius: 11,
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 14.5,
    outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '.07em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 7,
  }

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="overlay-in"
      style={{ position: 'fixed', inset: 0, zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(0,0,0,0.85)' }}
    >
      <div
        className="modal-in"
        style={{ position: 'relative', width: '100%', maxWidth: 410, borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)', background: '#0c0c14', boxShadow: '0 50px 120px -40px rgba(0,0,0,0.9)', overflow: 'hidden' }}
      >
        <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.6),transparent)' }} />

        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 14, right: 14, width: 36, height: 36, border: 'none', borderRadius: 11, background: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s,color .2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div style={{ padding: 32 }}>
          {/* Logo + title */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(145deg,#6366f1,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 13, boxShadow: '0 10px 26px -8px rgba(99,102,241,.6)' }}>
              <img src={csiLogo} alt="CSI" style={{ width: 34, height: 34, objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, margin: 0, color: '#fff' }}>CSI SJCET Portal</h3>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.4)', margin: '5px 0 0' }}>Member access dashboard</p>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 13, padding: 5, marginBottom: 24 }}>
            <button onClick={() => setTab('login')} style={tabBtnStyle(tab === 'login')}>Log in</button>
            <button onClick={() => setTab('register')} style={tabBtnStyle(tab === 'register')}>Register</button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            {tab === 'register' && (
              <>
                <div>
                  <label style={labelStyle}>Full name</label>
                  <input name="name" type="text" required placeholder="Your full name" value={formData.name} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#6366f1' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                  />
                </div>
              </>
            )}
            <div>
              <label style={labelStyle}>Email address</label>
              <input name="email" type="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#6366f1' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
              />
            </div>
            <div>
              <label style={labelStyle}>Password</label>
              <input name="password" type="password" required placeholder="Enter your password" value={formData.password} onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#6366f1' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
              />
            </div>
            <button
              type="submit"
              style={{ marginTop: 4, width: '100%', padding: 14, border: 'none', borderRadius: 12, background: '#6366f1', color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 12px 30px -10px rgba(99,102,241,.85)', transition: 'background .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#818cf8' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6366f1' }}
            >
              {tab === 'login' ? 'Log in to portal' : 'Create account'}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Google */}
          <button
            type="button"
            style={{ width: '100%', padding: 12, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.75)', fontFamily: "'Manrope',sans-serif", fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'background .2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, textAlign: 'center', marginTop: 20 }}>
            {tab === 'login' ? "Don't have an account? " : 'Already a member? '}
            <button type="button" onClick={() => setTab(tab === 'login' ? 'register' : 'login')}
              style={{ background: 'none', border: 'none', color: '#818cf8', cursor: 'pointer', fontSize: 12, padding: 0 }}>
              {tab === 'login' ? 'Register here' : 'Log in here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
