import Reveal from './Reveal'

const SPECS = [
  {
    label: 'Face tracking',
    name: 'ARKit 4.0 + TrueDepth',
    desc: '52 facial blendshapes streamed at 60 Hz with sub-millimeter precision.',
  },
  {
    label: 'Intelligence',
    name: 'CoreML on the Neural Engine',
    desc: 'Tells a deliberate trigger from an idle twitch in about two milliseconds.',
  },
  {
    label: 'Graphics & audio',
    name: 'Metal 3',
    desc: 'Particle rendering at up to 120 Hz, with spatial audio and doppler effects.',
  },
  {
    label: 'Privacy',
    name: 'On-device only',
    desc: 'Camera frames live and die in volatile memory. Zero recording, zero uploads.',
  },
]

export default function Specs() {
  return (
    <section className="specs" id="specs">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Specifications</span>
          <h2>Built on Apple&apos;s frameworks.</h2>
        </Reveal>

        <div className="specs-grid">
          {SPECS.map((s, i) => (
            <Reveal key={s.label} className="spec" delay={i * 80}>
              <span className="spec-label">{s.label}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
