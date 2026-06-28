import React from 'react'

const EventModal = ({ sel, regStep, setRegStep, onClose }) => {
  const stopProp = (e) => e.stopPropagation()

  return (
    <div
      onClick={onClose}
      className="overlay-in"
      style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(4,4,8,0.8)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
    >
      <div
        onClick={stopProp}
        className="modal-in"
        style={{ position: 'relative', width: '100%', maxWidth: 840, maxHeight: '90vh', overflow: 'auto', borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)', background: '#0b0b12', boxShadow: '0 50px 120px -40px rgba(0,0,0,0.9)' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, zIndex: 5, width: 38, height: 38, border: 'none', borderRadius: 11, background: 'rgba(7,7,11,0.6)', backdropFilter: 'blur(6px)', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Grid layout */}
        <div className="event-modal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,300px) 1fr' }}>
          {/* Image panel */}
          <div className="event-modal-img" style={{ position: 'relative', minHeight: 280 }}>
            <img
              src={sel.img}
              alt={sel.title}
              loading="lazy"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,transparent 60%,#0b0b12),linear-gradient(to top,rgba(11,11,18,0.6),transparent 40%)' }} />
          </div>

          {/* Content panel */}
          <div style={{ padding: '34px 32px' }}>
            <div style={{ display: 'inline-block', padding: '5px 12px', borderRadius: 999, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.32)', fontSize: 11.5, fontWeight: 700, letterSpacing: '.05em', color: '#c7d2fe', marginBottom: 16 }}>
              {sel.category}
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, margin: '0 0 18px', lineHeight: 1.12, color: '#fff', letterSpacing: '-0.01em' }}>
              {sel.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginBottom: 22 }}>
              {[['When', sel.date], ['Where', sel.venue], ['Host', sel.host]].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', width: 54, flexShrink: 0, paddingTop: 2 }}>{label}</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: 'rgba(255,255,255,0.82)' }}>{val}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', margin: '0 0 26px' }}>{sel.desc}</p>

            {/* Register flow */}
            {regStep === 'details' && (
              <button
                onClick={() => setRegStep('form')}
                style={{ width: '100%', padding: 14, border: 'none', borderRadius: 13, background: '#6366f1', color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 12px 30px -10px rgba(99,102,241,.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
              >
                Register now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            )}

            {regStep === 'form' && (
              <form onSubmit={(e) => { e.preventDefault(); setRegStep('done') }} style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                {[
                  { placeholder: 'Full name', type: 'text' },
                  { placeholder: 'Email address', type: 'email' },
                  { placeholder: 'Roll number / Class (e.g. S5 CSE)', type: 'text' },
                ].map(({ placeholder, type }) => (
                  <input
                    key={placeholder}
                    type={type}
                    required
                    placeholder={placeholder}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 11, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 14.5, outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => { e.target.style.borderColor = '#6366f1' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                  />
                ))}
                <button type="submit" style={{ marginTop: 4, width: '100%', padding: 14, border: 'none', borderRadius: 13, background: '#6366f1', color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
                  Confirm registration
                </button>
              </form>
            )}

            {regStep === 'done' && (
              <div style={{ textAlign: 'center', padding: '8px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 19, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>You're registered!</h4>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.55)', margin: '0 0 20px' }}>
                  A confirmation for <strong style={{ color: '#c7d2fe' }}>{sel.title}</strong> will be sent to your email.
                </p>
                <button
                  onClick={onClose}
                  style={{ padding: '11px 26px', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 11, background: 'rgba(255,255,255,0.05)', color: '#fff', fontFamily: "'Manrope',sans-serif", fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal
