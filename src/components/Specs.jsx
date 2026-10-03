import Reveal from './Reveal'
import { EyeIcon, ChipIcon, GaugeIcon, ShieldIcon } from './Icons'

const SPECS = [
  {
    icon: <EyeIcon size={22} />,
    cat: 'FACE TRACKING',
    title: 'ARKit 4.0 TrueDepth',
    desc: '52 facial blendshapes streamed at 60 Hz with sub-millimeter precision.',
    badge: '60 FPS',
  },
  {
    icon: <ChipIcon size={22} />,
    cat: 'MACHINE LEARNING',
    title: 'Apple Neural Engine',
    desc: 'Temporal CoreML classifier that reads intent — combat blinks vs. idle twitches.',
    badge: '2.1 ms',
  },
  {
    icon: <GaugeIcon size={22} />,
    cat: 'GRAPHICS & SOUND',
    title: 'Metal 3 pipeline',
    desc: 'Zero-latency particle rendering with 3D spatial audio and doppler effects.',
    badge: '120 Hz',
  },
  {
    icon: <ShieldIcon size={22} />,
    cat: 'PRIVACY',
    title: 'Secure Enclave',
    desc: 'Camera buffers are processed in volatile memory only. Zero biometric retention.',
    badge: 'On-device',
  },
]

export default function Specs() {
  return (
    <section className="specs section" id="specs">
      <div className="container">
        <Reveal className="section-head">
          <span className="overline">Under the hood</span>
          <h2>
            Built for <span className="text-gradient">Apple silicon.</span>
          </h2>
          <p className="section-sub">
            Deeply integrated with the TrueDepth camera, the Neural Engine and Metal — the
            parts of iOS that make face-first play feel instant.
          </p>
        </Reveal>

        <div className="specs-grid">
          {SPECS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="spec-card">
              <div className="spec-top">
                <span className="spec-icon">{s.icon}</span>
                <span className="spec-badge mono-tag">{s.badge}</span>
              </div>
              <span className="spec-cat mono-tag">{s.cat}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
