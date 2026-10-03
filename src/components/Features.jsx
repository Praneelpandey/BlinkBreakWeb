import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { EyeIcon, TiltIcon, ShieldIcon, GaugeIcon, FlameIcon } from './Icons'

/* Interactive card: fire the cannons with a double-click / double "B" */
function CannonCard() {
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
    <div className={`bento bento--cannon ${firing ? 'is-firing' : ''}`}>
      <div className="bento-head">
        <span className="bento-icon bento-icon--red"><EyeIcon size={22} /></span>
        <span className="mono-tag">CORE MECHANIC</span>
      </div>
      <h3>Double-blink cannons</h3>
      <p>
        A deliberate double-blink pulls the trigger. The on-device CoreML classifier tells
        intentional triggers apart from involuntary blinks — you only fire when you mean it,
        and every full closure spreads a fresh layer of tear film across your cornea.
      </p>

      <div className="cannon-demo" onClick={fire} role="button" tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && fire()}
        aria-label="Try the double-blink trigger">
        <div className="cannon-sky">
          <span className={`cannon-ship ${charge >= 1 ? 'is-charged' : ''}`} />
          <span className="cannon-beam cannon-beam--a" />
          <span className="cannon-beam cannon-beam--b" />
          <span className="cannon-boom" />
          {[...Array(5)].map((_, i) => (
            <span key={i} className="cannon-star" style={{ '--i': i }} />
          ))}
        </div>
        <div className="cannon-panel">
          <div className="cannon-meter">
            <span className={`cannon-cell ${charge >= 1 ? 'on' : ''}`} />
            <span className={`cannon-cell ${charge >= 2 ? 'on' : ''}`} />
          </div>
          <span className="cannon-hint mono-tag">
            {charge === 0 && 'click twice — or tap B twice'}
            {charge === 1 && 'blink again…'}
            {charge >= 2 && 'CANNONS FIRED'}
          </span>
          <span className="cannon-shots mono-tag">{shots} shots</span>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <Reveal className="section-head">
          <span className="overline">Why it feels different</span>
          <h2>
            Every mechanic is <span className="text-gradient">an eye exercise.</span>
          </h2>
          <p className="section-sub">
            Nothing here is a reminder nudging you to behave. The therapy is hidden inside the
            shooting, the dodging and the scoring — so it actually gets done.
          </p>
        </Reveal>

        <div className="bento-grid">
          <Reveal className="bento-cell bento-cell--wide"><CannonCard /></Reveal>

          <Reveal className="bento-cell" delay={80}>
            <div className="bento">
              <div className="bento-head">
                <span className="bento-icon bento-icon--blue"><TiltIcon size={22} /></span>
                <span className="mono-tag">MOBILITY</span>
              </div>
              <h3>Ghost Mode</h3>
              <p>
                Tilt your head to phase through obstacles. Six-axis motion keeps your neck and
                cervical spine moving while you fly — micro-mobility against screen posture.
              </p>
              <div className="tilt-demo" aria-hidden="true">
                <span className="tilt-arrow tilt-arrow--l" />
                <span className="tilt-phone"><TiltIcon size={26} /></span>
                <span className="tilt-arrow tilt-arrow--r" />
              </div>
            </div>
          </Reveal>

          <Reveal className="bento-cell" delay={140}>
            <div className="bento">
              <div className="bento-head">
                <span className="bento-icon bento-icon--green"><ShieldIcon size={22} /></span>
                <span className="mono-tag">PRIVACY</span>
              </div>
              <h3>Private by design</h3>
              <p>
                Camera frames live and die in volatile memory. Nothing is recorded, uploaded
                or stored — your face never leaves the phone.
              </p>
              <ul className="bento-checklist">
                <li>Zero cloud processing</li>
                <li>Zero recordings</li>
                <li>Zero accounts required</li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="bento-cell" delay={200}>
            <div className="bento">
              <div className="bento-head">
                <span className="bento-icon bento-icon--violet"><GaugeIcon size={22} /></span>
                <span className="mono-tag">PERCEPTION</span>
              </div>
              <h3>ARKit, at 60 FPS</h3>
              <p>
                TrueDepth streams 52 facial blendshapes with sub-millimeter precision, so the
                game reads a combat blink from an idle twitch before you finish it.
              </p>
              <div className="blend-bars" aria-hidden="true">
                {[...Array(12)].map((_, i) => (
                  <span key={i} style={{ '--i': i }} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="bento-cell" delay={260}>
            <div className="bento">
              <div className="bento-head">
                <span className="bento-icon bento-icon--amber"><FlameIcon size={22} /></span>
                <span className="mono-tag">RETENTION</span>
              </div>
              <h3>Habit engine</h3>
              <p>
                Daily flights, streaks and a hangar full of ships to unlock. The dry-eye
                routine you keep because it&apos;s a game you actually want to open.
              </p>
              <div className="streak-row" aria-hidden="true">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className={`streak-day ${i < 5 ? 'done' : ''}`}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
