export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="apple-footer">
      <div className="apple-footer-container">
        {/* Footnote Disclaimers */}
        <div className="footer-disclaimer-box">
          <p>
            1. Facial biometric tracking uses on-device ARKit 4.0 face anchors. No video or biometric telemetry is stored or transmitted over networks.
          </p>
          <p>
            2. BlinkBreak is a spatial combat simulation and visual wellness experience. It is not intended to diagnose, treat, cure, or prevent any clinical disease.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col brand">
            <h4 className="footer-logo">BlinkBreak</h4>
            <p className="footer-tagline">
              Step into the future of spatial ocular wellness and gaming.
            </p>
            <div className="footer-apple-badge">
              <span>Apple Swift Student Challenge 2026 Winner</span>
            </div>
          </div>

          <div className="footer-col">
            <h5>Experience</h5>
            <ul>
              <li><a href="#hero">Overview</a></li>
              <li><a href="#features">Weaponized Blinking</a></li>
              <li><a href="#demo">Spatial Console</a></li>
              <li><a href="#simulator">Interactive Reflex Lab</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Architecture</h5>
            <ul>
              <li><a href="#science">Ocular Health Science</a></li>
              <li><a href="#specs">Apple Silicon Specs</a></li>
              <li><a href="#career">Pilot Career Shipyard</a></li>
              <li><a href="https://github.com/Praneelpandey/BlinkBreakWeb" target="_blank" rel="noreferrer">GitHub Project</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              <li><span className="platform-tag">iOS 18+</span></li>
              <li><span className="platform-tag">iPadOS 18+</span></li>
              <li><span className="platform-tag">VisionOS Ready</span></li>
              <li><span className="platform-tag">TrueDepth Required</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>Copyright © 2026 BlinkBreak. All rights reserved.</span>
          <div className="footer-legal-links">
            <a href="#hero" onClick={handleScrollTop}>Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
