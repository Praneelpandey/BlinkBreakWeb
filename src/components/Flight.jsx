import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import PhoneMockup from './PhoneMockup'
import { useMedia } from '../hooks/useMedia'

const PHASES = [
  {
    key: 'calibrate',
    tab: 'Calibrate',
    step: 'Phase 01',
    title: 'Lock on in seconds.',
    desc: 'Point the camera at yourself. TrueDepth maps 52 facial blendshapes — no wearables, no account. Every frame is processed on-device and discarded instantly.',
    facts: ['60 Hz tracking', '52 blendshapes', '0 bytes uploaded'],
    video: '/media/calibrate.mp4',
    poster: '/media/calibrate.jpg',
    alt: 'BlinkBreak calibration screen: the TrueDepth camera locking onto the player’s face',
  },
  {
    key: 'combat',
    tab: 'Combat',
    step: 'Phase 02',
    title: 'Blink. Fire. Repeat.',
    desc: 'A quick double-blink fires the cannons. Tilt your head to slip past debris — and every full, deliberate blink re-oils your tear film.',
    facts: [],
    video: '/media/combat.mp4',
    poster: '/media/combat.jpg',
    alt: 'BlinkBreak gameplay: ships firing plasma cannons triggered by double-blinks',
  },
  {
    key: 'debrief',
    tab: 'Debrief',
    step: 'Phase 03',
    title: 'Read the flight.',
    desc: 'Blink velocity, full-closure rate, strain recovery. Your eyes get a training log — and you get to watch it improve week over week.',
    facts: [],
    video: '/media/debrief.mp4',
    poster: '/media/debrief.jpg',
    alt: 'BlinkBreak debrief screen showing blink velocity and recovery stats',
  },
]

/**
 * How it works — a pinned stage that walks through one full flight
 * (calibrate → combat → debrief) as the visitor scrolls. On small
 * screens it degrades to simple stacked phases.
 */
export default function Flight() {
  const [phase, setPhase] = useState(0)
  const isStacked = useMedia('(max-width: 767px)')
  const sentinels = useRef([])

  useEffect(() => {
    if (isStacked) return
    const els = sentinels.current.filter(Boolean)
    if (els.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observers = els.map((el, i) => {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setPhase(i)),
        { rootMargin: '-50% 0px -50% 0px' },
      )
      io.observe(el)
      return io
    })
    return () => observers.forEach((io) => io.disconnect())
  }, [isStacked])

  const jumpTo = (i) => {
    const el = sentinels.current[i]
    if (el) el.scrollIntoView({ block: 'center' })
  }

  return (
    <section className="flight" id="how">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>One flight. Three phases.</h2>
          <p className="section-sub">Scroll on — calibration to debrief in ninety seconds.</p>
        </Reveal>
      </div>

      {isStacked ? (
        <div className="container flight-stack">
          {PHASES.map((p) => (
            <div key={p.key} className="flight-stack-phase">
              <div className="flight-caption">
                <span className="flight-step">{p.step} · {p.tab}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {p.facts.length > 0 && (
                  <p className="flight-facts">{p.facts.join(' · ')}</p>
                )}
              </div>
              <PhoneMockup video={p.video} poster={p.poster} alt={p.alt} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flight-track">
          <div className="flight-pin">
            <div className="container flight-stage">
              <div className="flight-copy">
                <div className="flight-captions">
                  {PHASES.map((p, i) => (
                    <div
                      key={p.key}
                      className={`flight-caption ${i === phase ? 'is-active' : ''}`}
                      aria-hidden={i !== phase}
                    >
                      <span className="flight-step">{p.step}</span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      {p.facts.length > 0 && (
                        <p className="flight-facts">{p.facts.join(' · ')}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flight-tabs" role="tablist" aria-label="Flight phases">
                  {PHASES.map((p, i) => (
                    <button
                      key={p.key}
                      role="tab"
                      aria-selected={i === phase}
                      className={`flight-tab ${i === phase ? 'is-active' : ''}`}
                      onClick={() => jumpTo(i)}
                    >
                      <span className="flight-tab-num">0{i + 1}</span>
                      {p.tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flight-phones">
                {PHASES.map((p, i) => (
                  <div
                    key={p.key}
                    className={`flight-phone ${i === phase ? 'is-active' : ''}`}
                    aria-hidden={i !== phase}
                  >
                    <PhoneMockup video={p.video} poster={p.poster} alt={p.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flight-sentinels" aria-hidden="true">
            {PHASES.map((p, i) => (
              <div
                key={p.key}
                className="flight-sentinel"
                ref={(el) => (sentinels.current[i] = el)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
