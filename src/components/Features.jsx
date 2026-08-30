import { useState } from 'react'

export default function Features() {
  const [laserActive, setLaserActive] = useState(false)

  const triggerLaser = () => {
    setLaserActive(true)
    setTimeout(() => setLaserActive(false), 700)
  }

  return (
    <section id="features" className="features">
      <div className="section-header center">
        <span className="apple-overline">INNOVATIVE ARCHITECTURE</span>
        <h3>Engineered for Precision & Ergonomics</h3>
        <p className="section-subtext">
          Every game mechanic directly translates into an ocular health intervention.
        </p>
      </div>

      <div className="bento-grid">
        {/* Card 1: Weaponized Blinking (Span 2) */}
        <div className={`bento-card span-2 ${laserActive ? 'laser-firing' : ''}`} onClick={triggerLaser}>
          <div className="bento-card-glow" />
          <div className="bento-badge-pill">Clinical Innovation</div>

          <div className="bento-card-body">
            <div className="bento-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997FF" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="9" x2="12" y2="15" />
                <line x1="9" y1="12" x2="15" y2="12" />
              </svg>
            </div>
            <h4>Weaponized Blinking</h4>
            <p>
              Fire your laser cannons with an intentional double-blink. Each complete palpebral closure activates meibomian lipid secretion, spreading a fresh protective tear film over the cornea to eradicate dry eyes.
            </p>
          </div>

          <div className="bento-interactive-footer">
            <button className="btn-bento-action" onClick={(e) => { e.stopPropagation(); triggerLaser(); }}>
              {laserActive ? 'Cannon Discharged ✓' : 'Test Double-Blink Laser'}
            </button>
            <span className="bento-stat-chip">Tear Layer Refresh +100%</span>
          </div>
        </div>

        {/* Card 2: Ghost Mode Head Tilt (Span 1) */}
        <div className="bento-card">
          <div className="bento-card-glow" />
          <div className="bento-badge-pill">Cervical Mobility</div>

          <div className="bento-card-body">
            <div className="bento-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997FF" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h4>Ghost Mode Evasion</h4>
            <p>
              Subtle head tilts navigate around obstacles, encouraging cervical spine mobility to release neck tension and postural stiffness.
            </p>
          </div>

          <div className="bento-gyro-bar">
            <div className="gyro-track"><div className="gyro-dot" /></div>
            <span className="gyro-label">6-Axis Spatial Tracking</span>
          </div>
        </div>

        {/* Card 3: Privacy by Design (Span 1) */}
        <div className="bento-card">
          <div className="bento-card-glow" />
          <div className="bento-badge-pill">Air-Gapped Security</div>

          <div className="bento-card-body">
            <div className="bento-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997FF" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h4>Privacy by Design</h4>
            <p>
              100% on-device processing. Camera data never leaves hardware memory and is never uploaded, recorded, or shared.
            </p>
          </div>

          <div className="bento-security-badge">
            <span className="security-green-dot" />
            <span>Zero Cloud Storage</span>
          </div>
        </div>

        {/* Card 4: Neural ARKit Tracking (Span 2) */}
        <div className="bento-card span-2">
          <div className="bento-card-glow" />
          <div className="bento-badge-pill">Apple Neural Engine</div>

          <div className="bento-card-body">
            <div className="bento-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997FF" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h4>60 FPS TrueDepth Face Tracking</h4>
            <p>
              Leverages ARKit 4.0 to stream 52 facial blendshapes in real time with sub-millimeter precision. The proprietary CoreML model seamlessly differentiates unconscious blinks from deliberate combat triggers.
            </p>
          </div>

          <div className="bento-tech-metrics">
            <div className="metric-pill"><span>Sampling Rate</span><strong>60 Hz</strong></div>
            <div className="metric-pill"><span>Inference Latency</span><strong>2.1 ms</strong></div>
            <div className="metric-pill"><span>Blendshapes</span><strong>52 Points</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
