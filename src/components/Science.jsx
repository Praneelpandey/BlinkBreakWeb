import Reveal from './Reveal'

const STATS = [
  {
    value: '18',
    unit: '/min',
    title: 'At rest',
    desc: 'Your natural blink rate — a fresh tear film every three to four seconds.',
  },
  {
    value: '4.2',
    unit: '/min',
    title: 'At a screen',
    desc: 'Screen focus suppresses the blink reflex by up to 70%. Dryness, redness and headaches follow.',
  },
  {
    value: '100',
    unit: '%',
    title: 'In BlinkBreak',
    desc: 'Every trigger requires a complete, deliberate blink — the kind that re-oils your eyes.',
  },
]

export default function Science() {
  return (
    <section className="science" id="science">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The science</span>
          <h2>Screens make you stop blinking.</h2>
          <p className="section-sub">BlinkBreak makes you start again — by making it the game.</p>
        </Reveal>

        <Reveal>
          <div className="science-strip">
            {STATS.map((s) => (
              <div key={s.title} className="stat">
                <div className="stat-num">
                  {s.value}
                  <span className="stat-unit">{s.unit}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="science-note">
            20-20-20 timers fail because they interrupt your flow and get dismissed within
            days. <strong>BlinkBreak folds the fix into the one thing games do best:</strong>{' '}
            making you want to come back tomorrow.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
