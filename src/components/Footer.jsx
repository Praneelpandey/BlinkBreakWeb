import { scrollToId } from '../utils/scroll'
import { BoltIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="nav-logo" onClick={(e) => scrollToId(e, '#top')}>
              <span className="nav-logo-mark"><BoltIcon size={17} /></span>
              <span className="nav-logo-text">
                BlinkBreak
                <span className="nav-logo-beta">Spatial</span>
              </span>
            </a>
            <p>
              The spatial combat game you fly with your face — and the healthiest reason to
              keep it on.
            </p>
            <span className="footer-award mono-tag">
              Apple Swift Student Challenge · 2026 Winner
            </span>
          </div>

          <nav className="footer-col" aria-label="Explore">
            <h4>Explore</h4>
            <a href="#how" onClick={(e) => scrollToId(e, '#how')}>How it works</a>
            <a href="#features" onClick={(e) => scrollToId(e, '#features')}>Features</a>
            <a href="#lab" onClick={(e) => scrollToId(e, '#lab')}>Reflex Lab</a>
            <a href="#science" onClick={(e) => scrollToId(e, '#science')}>Science</a>
            <a href="#fleet" onClick={(e) => scrollToId(e, '#fleet')}>The hangar</a>
          </nav>

          <nav className="footer-col" aria-label="Built with">
            <h4>Built with</h4>
            <span>ARKit 4.0 face anchors</span>
            <span>CoreML + Neural Engine</span>
            <span>Metal 3 render pipeline</span>
            <span>SwiftUI + spatial audio</span>
          </nav>

          <nav className="footer-col" aria-label="Platform">
            <h4>Platform</h4>
            <span>iOS 18+ · iPadOS 18+</span>
            <span>TrueDepth camera required</span>
            <span>Works offline</span>
            <a
              href="https://github.com/Praneelpandey/BlinkBreakWeb"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </nav>
        </div>

        <div className="footer-disclaimers">
          <p>
            1. Facial tracking runs entirely on-device via ARKit face anchors. No video or
            biometric data is recorded, stored or transmitted.
          </p>
          <p>
            2. BlinkBreak is a spatial combat game and visual wellness experience. It is not
            intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BlinkBreak. All rights reserved.</span>
          <a href="#top" onClick={(e) => scrollToId(e, '#top')}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
