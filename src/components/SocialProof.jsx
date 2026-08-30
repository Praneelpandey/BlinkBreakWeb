export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="glow-backdrop" />
      <div className="proof-container">
        <div className="award-badge-wrapper">
          <div className="swift-icon-glow">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M19.78 4.22a9.96 9.96 0 0 0-7.07-2.93A10 10 0 0 0 2.71 11.3a10.02 10.02 0 0 0 4.14 7.07C7.62 17.5 8.7 16 10.14 14.63c-2.31-.05-4.14-1.2-4.14-1.2s2.07.65 4.35.33c-1.85-.92-3.1-2.61-3.1-2.61s1.63.49 3.48.22c-2.01-1.36-2.61-3.48-2.61-3.48s2.07 1.09 4.68.87c.71-.54 1.58-1.03 2.56-1.47 1.25-.54 2.61-.92 4.02-1.09-1.03.82-1.8 1.9-2.28 3.1 1.09-.43 2.18-.76 3.26-.98-.65.71-1.47 1.3-2.34 1.74 2.77 1.36 4.79 3.97 5.22 7.07.82-1.8 1.25-3.8 1.25-5.87 0-3.32-1.14-6.36-3.08-8.73z" fill="url(#swiftGrad)" />
              <defs>
                <linearGradient id="swiftGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF5E3A" />
                  <stop offset="0.5" stopColor="#FF2A2A" />
                  <stop offset="1" stopColor="#2997FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="award-badge-title">APPLE GLOBAL RECOGNITION</span>
        </div>

        <h2 className="proof-headline">
          Apple Swift Student Challenge<br />
          <span className="proof-headline-gradient">2026 Winner</span>
        </h2>

        <p className="proof-subtext">
          Recognized by Apple engineers for spatial health innovation—transforming the TrueDepth camera system and ARKit into a clinical combat simulator that combats screen fatigue.
        </p>

        <div className="proof-pills-row">
          <div className="proof-pill">
            <span className="proof-pill-label">CATEGORY</span>
            <strong className="proof-pill-val">Spatial Computing & Health</strong>
          </div>
          <div className="proof-pill">
            <span className="proof-pill-label">COMPATIBILITY</span>
            <strong className="proof-pill-val">iOS 18+ // TrueDepth Camera</strong>
          </div>
          <div className="proof-pill">
            <span className="proof-pill-label">SECURITY</span>
            <strong className="proof-pill-val">100% On-Device Neural Compute</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
