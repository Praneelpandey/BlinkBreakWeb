import Reveal from './Reveal'
import PhoneMockup from './PhoneMockup'

const PHASES = [
  {
    step: '01',
    kicker: 'CALIBRATE',
    title: 'Lock on in seconds',
    desc: 'The TrueDepth camera maps 52 facial blendshapes — no wearables, no setup. Just hold your phone up and the cockpit calibrates itself to your face.',
    video: '/media/calibrate.mp4',
    poster: '/media/calibrate.jpg',
    glow: 'violet',
    tag: 'BIOMETRIC SETUP',
  },
  {
    step: '02',
    kicker: 'COMBAT',
    title: 'Blink to win',
    desc: 'Double-blinks fire the plasma cannons. Head tilts phase you through obstacles. Every full closure re-oils your tear film — the health loop is the game loop.',
    video: '/media/combat.mp4',
    poster: '/media/combat.jpg',
    glow: 'red',
    tag: 'LIVE GAMEPLAY',
    featured: true,
  },
  {
    step: '03',
    kicker: 'DEBRIEF',
    title: 'Fly the data',
    desc: 'Post-flight telemetry scores blink velocity, full-closure rate and strain recovery. Your eyes get a training log, not just a scoreboard.',
    video: '/media/debrief.mp4',
    poster: '/media/debrief.jpg',
    glow: 'blue',
    tag: 'SESSION REPORT',
  },
]

/**
 * The app in motion — three real screen recordings, one flight.
 */
export default function HowItWorks() {
  return (
    <section className="how section" id="how">
      <div className="container">
        <Reveal className="section-head">
          <span className="overline">The app in motion</span>
          <h2>
            One flight. <span className="text-gradient">Three phases.</span>
          </h2>
          <p className="section-sub">
            Real screens, captured from the app. No renders, no smoke — this is exactly what
            flying with your face looks like.
          </p>
        </Reveal>

        <div className="how-grid">
          {PHASES.map((p, i) => (
            <Reveal key={p.step} delay={i * 120} className={`how-card ${p.featured ? 'how-card--featured' : ''}`}>
              <PhoneMockup
                video={p.video}
                poster={p.poster}
                glow={p.glow}
                label={p.tag}
                float={p.featured}
              />
              <div className="how-card-body">
                <div className="how-card-top">
                  <span className="how-step mono-tag">{p.step}</span>
                  <span className="how-kicker">{p.kicker}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
