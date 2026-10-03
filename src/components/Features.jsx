import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import PhoneMockup from './PhoneMockup'
import { TiltIcon } from './Icons'

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
          {charge === 0 && 'Go on — double-tap the viewport, or press B twice.'}
          {charge === 1 && 'Blink again…'}
          {charge >= 2 && 'Cannons fired. Feel better?'}
        </span>
        <span className="demo-shots">{shots} shots</span>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <div id="features">
      {/* ── 01 · The mechanic ── */}
      <section className="feature">
        <div className="container feature-grid">
          <Reveal className="feature-copy">
            <span className="eyebrow">01 — The mechanic</span>
            <h2 className="feature-title">Blink to fire.</h2>
            <p className="feature-desc">
              A quick double-blink pulls the trigger. An on-device machine-learning model can
              tell a combat blink from an accidental one, so nothing fires by mistake. And
              because every shot demands a full, deliberate blink, your tear film gets
              refreshed with every hit.
            </p>
          </Reveal>
          <Reveal className="feature-visual" delay={120}>
            <CannonDemo />
          </Reveal>
        </div>
      </section>

      {/* ── 02 · Setup ── */}
      <section className="feature feature--alt">
        <div className="container feature-grid feature-grid--flip">
          <Reveal className="feature-copy">
            <span className="eyebrow">02 — Setup</span>
            <h2 className="feature-title">Calibrated to your face.</h2>
            <p className="feature-desc">
              Point the camera at yourself and BlinkBreak locks on in seconds — no wearables,
              no account, no setup screens. Camera frames are processed in memory and
              discarded instantly. Nothing is ever recorded or uploaded.
            </p>
            <div className="feature-facts">
              <div className="fact">
                <strong>60 Hz</strong>
                <span>face tracking</span>
              </div>
              <div className="fact">
                <strong>52</strong>
                <span>blendshapes</span>
              </div>
              <div className="fact">
                <strong>0 bytes</strong>
                <span>uploaded</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="feature-visual" delay={120}>
            <PhoneMockup
              video="/media/calibrate.mp4"
              poster="/media/calibrate.jpg"
              alt="BlinkBreak calibration screen: the TrueDepth camera locking onto the player's face"
            />
          </Reveal>
        </div>
      </section>

      {/* ── 03 · The debrief ── */}
      <section className="feature">
        <div className="container feature-grid">
          <Reveal className="feature-copy">
            <span className="eyebrow">03 — The debrief</span>
            <h2 className="feature-title">A readout for your eyes.</h2>
            <p className="feature-desc">
              Every mission ends with a debrief: blink velocity, full-closure rate, strain
              recovery. Trends, not guesses — so you can watch your eyes get faster, and
              healthier, week over week.
            </p>
          </Reveal>
          <Reveal className="feature-visual" delay={120}>
            <PhoneMockup
              video="/media/debrief.mp4"
              poster="/media/debrief.jpg"
              alt="BlinkBreak post-flight debrief screen showing blink velocity and eye-strain recovery stats"
            />
          </Reveal>
        </div>
      </section>

      {/* ── 04 · Beyond the mission ── */}
      <section className="feature feature--alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">04 — Keep flying</span>
            <h2>Built to come back to.</h2>
            <p className="section-sub">The best eye-care routine is the one you actually keep.</p>
          </Reveal>

          <div className="beyond-grid">
            <Reveal className="beyond-block">
              <span className="eyebrow">Ghost Mode</span>
              <h3>Tilt to dodge.</h3>
              <p>
                Subtle head tilts slip your ship past obstacles — keeping your neck and
                shoulders moving while the rest of you sits still.
              </p>
              <div className="beyond-visual tilt-demo" aria-hidden="true">
                <span className="tilt-arrow tilt-arrow--l" />
                <span className="tilt-icon"><TiltIcon /></span>
                <span className="tilt-arrow tilt-arrow--r" />
              </div>
            </Reveal>

            <Reveal className="beyond-block" delay={120}>
              <span className="eyebrow">The habit engine</span>
              <h3>A fleet to earn.</h3>
              <p>
                Daily flights and streaks unlock new ships. Flight hours are blink hours —
                healthy eyes are the only currency in the game.
              </p>
              <div className="beyond-visual streak-row" aria-hidden="true">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className={`streak-day ${i < 5 ? 'done' : ''}`}>{d}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
