import React from 'react'
import csiLogo from '../assets/logocsi.png'

const Footer = () => (
  <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '34px 24px', background: 'rgba(7,7,11,0.6)' }}>
    <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: 'linear-gradient(145deg,#6366f1,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <img src={csiLogo} alt="CSI" style={{ width: 24, height: 24, objectFit: 'contain' }} />
        </div>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, color: '#fff' }}>CSI SJCET · Student Chapter</span>
      </div>
      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)' }}>
        © 2026 Computer Society of India · SJCET Palai. All rights reserved.
      </span>
    </div>
  </footer>
)

export default Footer
