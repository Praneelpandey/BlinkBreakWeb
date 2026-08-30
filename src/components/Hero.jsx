import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import IPhoneScene from './IPhoneScene'

function CanvasLoader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#2997FF" wireframe />
    </mesh>
  )
}

export default function Hero() {
  const scrollToDemo = (e) => {
    e.preventDefault()
    const el = document.querySelector('#demo')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSimulator = (e) => {
    e.preventDefault()
    const el = document.querySelector('#simulator')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Left Column — Editorial Apple Keynote Headline */}
      <div className="hero-content">
        <div className="apple-hero-badge">
          <span className="badge-glow-dot" />
          <span>Apple Swift Student Challenge 2026 Winner</span>
        </div>

        <h1 className="hero-title">
          Protect Your Eyes.<br />
          <span className="hero-title-gradient">Play Smarter.</span>
        </h1>

        <p className="hero-subtitle">
          The revolutionary spatial combat simulator designed to destroy digital eye strain. 
          Powered by real-time TrueDepth facial biometrics and weaponized double-blinks.
        </p>

        <div className="hero-actions">
          <a href="#demo" onClick={scrollToDemo} className="btn-apple-primary">
            <svg className="apple-logo-svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.04-2.87 0-.15-.01-.3-.04-.43-.99.04-2.18.66-2.88 1.48-.56.64-1.05 1.69-1.05 2.76 0 .15.02.3.05.42 1.1.09 2.25-.57 2.88-1.36z"/>
            </svg>
            <span>Download on App Store</span>
          </a>

          <button className="btn-apple-glass" onClick={scrollToSimulator}>
            <span>Try Interactive Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Apple Pro Key Specs Row */}
        <div className="hero-spec-strip">
          <div className="spec-item">
            <span className="spec-value">60 FPS</span>
            <span className="spec-label">TrueDepth ARKit</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-value">100%</span>
            <span className="spec-label">On-Device Privacy</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-value">iOS 18+</span>
            <span className="spec-label">Spatial Gaming</span>
          </div>
        </div>
      </div>

      {/* Right Column — 3D Interactive iPhone Showcase */}
      <div className="hero-canvas-wrapper">
        <div className="canvas-ambient-halo" />
        <Canvas
          camera={{ position: [0, 0, 5.8], fov: 38 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ background: 'transparent' }}
          shadows
        >
          <Suspense fallback={<CanvasLoader />}>
            <IPhoneScene />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
