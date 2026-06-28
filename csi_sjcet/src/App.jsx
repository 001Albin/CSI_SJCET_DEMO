import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import EventModal from './components/EventModal'
import event1 from './assets/event1.jpg'
import event2 from './assets/event2.jpg'
import event3 from './assets/event3.jpg'
import event4 from './assets/event4.jpg'
import event5 from './assets/event5.jpg'

export const EVENTS = [
  {
    id: 'figma',
    title: 'Figma Fusion',
    category: 'Design Workshop',
    dateShort: 'FEB 9, 2024',
    date: 'February 9, 2024 · Online',
    venue: 'Online · Google Meet',
    host: 'Mathews P Mathew',
    img: event1,
    desc: 'An insightful online Figma session designed to elevate your design prowess. Learn modern UI workflows, components, auto-layout and prototyping from the ground up.',
  },
  {
    id: 'techsprint',
    title: 'TechSprint 2024',
    category: 'Flagship Competition',
    dateShort: 'OCT 23, 2024',
    date: 'October 23, 2024',
    venue: 'SJCET Campus, Palai',
    host: 'CSI Chapter, SJCET',
    img: event2,
    desc: 'The ultimate tech flex for your team. A high-energy sprint of coding, problem-solving and innovation — with swags worth ₹3K up for grabs.',
  },
  {
    id: 'gamedev',
    title: '2D Game Development',
    category: 'Hands-on Workshop',
    dateShort: 'NOV 10, 2023',
    date: 'November 10, 2023 · 1:30–4:30 PM',
    venue: 'MTB 213, SJCET',
    host: 'Tomin Joy & Gautham Krishna (S7 CSE)',
    img: event3,
    desc: 'Build your very own 2D game using HTML, CSS & JavaScript. A practical, classic-arcade themed session for beginners and beyond. Only 60 spots — act fast.',
  },
  {
    id: 'cyber',
    title: 'Talk on Cyber Security',
    category: 'Tech Talk',
    dateShort: 'FEB 10, 2024',
    date: 'February 10, 2024 · 7:00 PM',
    venue: 'Online',
    host: 'R Ashwin — Cybersecurity Lead & Penetration Tester',
    img: event4,
    desc: 'Protecting your system. A focused session on cybersecurity essentials, real-world threat models and practical defence techniques for students.',
  },
  {
    id: 'blend',
    title: 'Blend It Up!',
    category: 'Blender Workshop',
    dateShort: 'MAR 4, 2024',
    date: 'March 4, 2024',
    venue: 'CADD Centre · with Arena Animation',
    host: 'CSI × CADD Centre',
    img: event5,
    desc: 'Unleashing creativity with Blender. A hands-on 3D workshop — bring your own laptop. Registration ₹100, only 30 seats available.',
  },
]

const App = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const [selId, setSelId] = useState(null)
  const [regStep, setRegStep] = useState('details')

  const sel = EVENTS.find(e => e.id === selId) || null

  const openEvent = (id) => { setSelId(id); setRegStep('details'); document.body.style.overflow = 'hidden' }
  const closeEvent = () => { setSelId(null); document.body.style.overflow = '' }
  const openLogin = () => { setLoginOpen(true); document.body.style.overflow = 'hidden' }
  const closeLogin = () => { setLoginOpen(false); document.body.style.overflow = '' }

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden', background: '#07070b' }}>
      <ToastContainer theme="dark" position="top-right" />

      {/* Wire mesh grid */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(99,102,241,0.09) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.09) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)', backgroundSize: '48px 48px', backgroundPosition: '24px 24px' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 130% 95% at 50% -8%,transparent 52%,rgba(7,7,11,0.72))' }} />

      <Navbar onLoginClick={openLogin} />
      <Hero events={EVENTS} onSelectEvent={openEvent} />
      <About events={EVENTS} onSelectEvent={openEvent} />
      <Team />
      <Contact />
      <Footer />

      {loginOpen && <LoginModal onClose={closeLogin} />}
      {sel && <EventModal sel={sel} regStep={regStep} setRegStep={setRegStep} onClose={closeEvent} />}
    </div>
  )
}

export default App
