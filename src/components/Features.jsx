import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

/* ── Playable demo of the core mechanic ──
   Same interaction as the game: a quick double-trigger fires. */
function CannonDemo() {
  const [charge, setCharge] = useState(0) // 0 idle · 1 first blink · 2 fired
  const [shots, setShots] = useState(0)
  const [firing, setFiring] = useState(false)
  const lastBlinkRef = useRef(0)
  const resetRef = useRef(null)

  const fire = () => {
    const now = performance.now()
    const isDouble = now - lastBlinkRef.current < 650
    lastBlinkRef.current = now
    clearTimeout(resetRef.current)

    if (isDouble) {
      lastBlinkRef.current = 0
      setCharge(2)
      setShots((s) => s + 1)
      setFiring(true)
      resetRef.current = setTimeout(() => {
        setFiring(false)
        setCharge(0)
      }, 850)
    } else {
      setCharge(1)
      resetRef.current = setTimeout(() => setCharge((c) => (c === 1 ? 0 : c)), 650)
    }
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === 'b') fire()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(resetRef.current)
    }
  })

  return (
    <div className={`demo ${firing ? 'is-firing' : ''}`}>
      <div
        className="demo-viewport"
        onClick={fire}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && fire()}
        aria-label="Try the double-blink trigger — activate twice quickly to fire the cannons"
      >
        <span className={`cannon-ship ${charge >= 1 ? 'is-charged' : ''}`} />
        <span className="cannon-beam cannon-beam--a" />
        <span className="cannon-beam cannon-beam--b" />
        <span className="cannon-boom" />
        {[...Array(5)].map((_, i) => (
          <span key={i} className="cannon-star" style={{ '--i': i }} />
        ))}
      </div>
      <div className="demo-hintrow">
        <div className="cannon-meter" aria-hidden="true">
          <span className={`cannon-cell ${charge >= 1 ? 'on' : ''}`} />
          <span className={`cannon-cell ${charge >= 2 ? 'on' : ''}`} />
        </div>
        <span className="demo-hint">
          {charge === 0 && 'Double-tap the viewport — or press B twice.'}
          {charge === 1 && 'Blink again…'}
          {charge >= 2 && 'Cannons fired — tear film refreshed.'}
        </span>
        <span className="demo-shots">{shots} shots</span>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="feature" id="features">
      <div className="container feature-grid">
        <Reveal className="feature-copy">
          <span className="eyebrow">The mechanic</span>
          <h2 className="feature-title">Blink to fire.</h2>
          <p className="feature-desc">
            A quick double-blink pulls the trigger. An on-device machine-learning model
            can tell a combat blink from an accidental one, so nothing fires by mistake.
            And because every shot demands a full, deliberate blink, your tear film gets
            refreshed with every hit.
          </p>
        </Reveal>
        <Reveal className="feature-visual" delay={120}>
          <CannonDemo />
        </Reveal>
      </div>
    </section>
  )
}
