export default function Navbar() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="apple-nav-header">
      <div className="apple-nav-container">
        <div className="apple-nav-logo" onClick={(e) => handleSmoothScroll(e, '#hero')}>
          <span className="logo-text">BlinkBreak</span>
          <span className="logo-pro-badge">Spatial</span>
        </div>
        
        <nav className="apple-nav-links">
          <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')}>Overview</a>
          <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>Features</a>
          <a href="#demo" onClick={(e) => handleSmoothScroll(e, '#demo')}>Spatial Console</a>
          <a href="#simulator" onClick={(e) => handleSmoothScroll(e, '#simulator')}>Reflex Lab</a>
          <a href="#science" onClick={(e) => handleSmoothScroll(e, '#science')}>Science</a>
          <a href="#career" onClick={(e) => handleSmoothScroll(e, '#career')}>Shipyard</a>
        </nav>

        <div className="apple-nav-cta">
          <button className="btn-nav-download" onClick={(e) => handleSmoothScroll(e, '#demo')}>
            <span>Experience</span>
          </button>
        </div>
      </div>
    </header>
  )
}
