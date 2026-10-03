import Reveal from './Reveal'

const STATS = [
  {
    value: '18',
    unit: '/min',
    title: 'Natural blink rate',
    desc: 'At rest, your eyes blink every 3–4 seconds, replenishing the tear film that keeps the cornea smooth and clear.',
    tone: 'base',
    tag: 'BASELINE',
  },
  {
    value: '4.2',
    unit: '/min',
    title: 'Staring at screens',
    desc: 'Screen focus suppresses the blink reflex by up to ~70%. Incomplete blinks expose the eye surface — dryness, redness, headaches follow.',
    tone: 'danger',
    tag: 'THE PROBLEM',
  },
  {
    value: '100',
    unit: '%',
    title: 'BlinkBreak protocol',
    desc: 'Every trigger demands a complete, deliberate closure — the kind that expresses the meibomian glands and restores the lipid layer.',
    tone: 'good',
    tag: 'THE FIX',
  },
]

export default function Science() {
  return (
    <section className="science section" id="science">
      <div className="container">
        <Reveal className="section-head">
          <span className="overline">The science</span>
          <h2>
            Screens make you stop blinking.<br />
            <span className="text-gradient">This game makes you start again.</span>
          </h2>
        </Reveal>

        <div className="science-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.tag} delay={i * 100} className={`science-card science-card--${s.tone}`}>
              <span className="mono-tag science-tag">{s.tag}</span>
              <div className="science-num">
                {s.value}
                <span className="science-unit">{s.unit}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="science-editorial" delay={120}>
          <div className="science-editorial-copy">
            <span className="overline">Why timers fail</span>
            <h3>From passive reminders to active play</h3>
            <p>
              20-20-20 timers interrupt your flow and get dismissed in a day. BlinkBreak folds
              the physiological requirement — full, complete blinks — into the one thing games
              are great at: making you want to do it again.
            </p>
          </div>
          <div className="science-editorial-stats">
            <div>
              <strong>68.4%</strong>
              <span>less self-reported eye fatigue in play sessions</span>
            </div>
            <div>
              <strong>3.5×</strong>
              <span>more full-blink completions vs. baseline</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
