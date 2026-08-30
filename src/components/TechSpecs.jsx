export default function TechSpecs() {
  const specs = [
    {
      category: 'FACIAL TRACKING',
      title: 'ARKit 4.0 TrueDepth',
      desc: 'Streams 52 distinct facial blendshapes at 60 Hz with sub-millimeter biometric precision.',
      badge: '60 FPS Realtime',
    },
    {
      category: 'MACHINE LEARNING',
      title: 'Apple Neural Engine',
      desc: 'Proprietary temporal CoreML classifier differentiates involuntary twitches from tactical blinks.',
      badge: '2.1 ms Latency',
    },
    {
      category: 'GRAPHICS & SOUND',
      title: 'Metal 3 Pipeline',
      desc: 'Zero-latency particle rendering and 3D spatial audio with dynamic doppler effect.',
      badge: '120 Hz ProMotion',
    },
    {
      category: 'PRIVACY & ENCLAVE',
      title: 'On-Device Secure Enclave',
      desc: 'Camera buffers are processed purely in volatile memory. Zero biometric retention.',
      badge: '100% On-Device',
    },
  ]

  return (
    <section id="specs" className="tech-specs-section">
      <div className="section-header center">
        <span className="apple-overline">HARDWARE ARCHITECTURE</span>
        <h3>Built for Apple Silicon</h3>
        <p className="section-subtext">
          Deeply integrated with iOS TrueDepth cameras, Neural Engine hardware, and Metal 3 compute shaders.
        </p>
      </div>

      <div className="specs-apple-grid">
        {specs.map((s, idx) => (
          <div key={idx} className="spec-apple-card">
            <div className="spec-top-row">
              <span className="spec-category-label">{s.category}</span>
              <span className="spec-badge-pill">{s.badge}</span>
            </div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <div className="spec-bottom-indicator">
              <div className="indicator-bar" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
