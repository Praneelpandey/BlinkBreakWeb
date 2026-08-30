import { useState } from 'react'

export default function ProgressionDashboard() {
  const [selectedShip, setSelectedShip] = useState('alpha')

  const ships = {
    alpha: {
      name: 'Alpha Dart',
      subtitle: 'Light Interceptor // Mk-I',
      status: 'Active Vessel',
      unlocked: true,
      req: 'Default Pilot Vessel',
      speed: '94%',
      firepower: '78%',
      shields: '65%',
      tearHydration: '98%',
      desc: 'High-agility light fighter optimized for rapid eye-tracking micro-bursts and quick cervical maneuvers.',
      svg: (
        <svg width="84" height="84" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="50,10 90,80 50,70 10,80" fill="rgba(41, 151, 255, 0.12)" stroke="#2997FF" />
          <line x1="50" y1="10" x2="50" y2="70" stroke="#2997FF" />
          <polygon points="40,80 50,90 60,80" fill="#2997FF" />
          <circle cx="50" cy="45" r="3.5" fill="#2997FF" />
        </svg>
      )
    },
    omega: {
      name: 'Omega Cruiser',
      subtitle: 'Heavy Assault Battleship',
      status: 'Requires Level 10',
      unlocked: false,
      req: 'Unlocked at Level 10',
      speed: '62%',
      firepower: '96%',
      shields: '90%',
      tearHydration: '92%',
      desc: 'Heavily armored gunship equipped with twin plasma double-blink railguns and reinforced shield matrix.',
      svg: (
        <svg width="84" height="84" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30,30 L70,30 L85,60 L90,85 L50,75 L10,85 L15,60 Z" fill="rgba(255, 42, 42, 0.1)" stroke="#FF2A2A" />
          <rect x="42" y="15" width="16" height="20" fill="rgba(255, 42, 42, 0.2)" stroke="#FF2A2A" />
          <line x1="30" y1="50" x2="70" y2="50" stroke="#FF2A2A" />
        </svg>
      )
    },
    valkyrie: {
      name: 'Valkyrie Phantom',
      subtitle: 'Stealth Evasion Fighter',
      status: 'Requires Level 25',
      unlocked: false,
      req: 'Unlocked at Level 25',
      speed: '99%',
      firepower: '84%',
      shields: '70%',
      tearHydration: '100%',
      desc: 'Experimental cloaking interceptor utilizing advanced cervical head-tilt gyro evasion to slip through asteroid belts.',
      svg: (
        <svg width="84" height="84" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="50,5 95,50 80,95 50,70 20,95 5,50" fill="rgba(255, 255, 255, 0.06)" stroke="#888" />
          <circle cx="50" cy="50" r="8" stroke="#888" />
        </svg>
      )
    },
  }

  const activeShip = ships[selectedShip]

  return (
    <section id="career" className="progression-dashboard">
      <div className="section-header center">
        <span className="apple-overline">CAREER TELEMETRY & SHIPYARD</span>
        <h3>Pilot Progression Studio</h3>
        <p className="section-subtext">
          Track long-term ocular training consistency, unlock modular combat vessels, and advance through the ranks.
        </p>
      </div>

      <div className="dashboard-glass-container">
        {/* Left Column: Career Summary */}
        <div className="dashboard-left-panel">
          <div className="pilot-profile-card">
            <div className="rank-badge-row">
              <span className="rank-tag">Cadet Pilot</span>
              <span className="level-indicator">Level 01</span>
            </div>
            <h4>Lieutenant Praneel</h4>
            <div className="xp-metric-row">
              <span>Experience Points</span>
              <strong>3,450 / 10,000 XP</strong>
            </div>
            <div className="apple-progress-bar">
              <div className="bar-fill" style={{ width: '34.5%' }} />
            </div>
          </div>

          <div className="stat-cards-grid">
            <div className="stat-card">
              <span className="stat-title">Total Sessions</span>
              <strong className="stat-number">42</strong>
            </div>
            <div className="stat-card">
              <span className="stat-title">Asteroids Cleared</span>
              <strong className="stat-number">1,893</strong>
            </div>
            <div className="stat-card">
              <span className="stat-title">Blink Accuracy</span>
              <strong className="stat-number cyan">94.2%</strong>
            </div>
            <div className="stat-card">
              <span className="stat-title">Fatigue Reduction</span>
              <strong className="stat-number green">+68.4%</strong>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Shipyard */}
        <div className="dashboard-right-panel">
          <div className="hangar-header">
            <h4>Modular Hangar</h4>
            <span className="hangar-subtitle">Select a vessel to inspect schematic</span>
          </div>

          <div className="ship-selector-row">
            {Object.entries(ships).map(([key, ship]) => (
              <div
                key={key}
                className={`ship-card-apple ${selectedShip === key ? 'selected' : ''} ${!ship.unlocked ? 'locked' : ''}`}
                onClick={() => setSelectedShip(key)}
              >
                <span className={`ship-status-tag ${ship.unlocked ? 'active' : 'locked'}`}>
                  {ship.unlocked ? 'Ready' : 'Locked'}
                </span>
                <div className="ship-icon-container">{ship.svg}</div>
                <h5>{ship.name}</h5>
                <span className="ship-sub">{ship.subtitle}</span>
              </div>
            ))}
          </div>

          {/* Active Ship Inspection HUD */}
          <div className="ship-inspection-box">
            <div className="inspection-header">
              <div>
                <h5>{activeShip.name}</h5>
                <span className="vessel-class-label">{activeShip.subtitle}</span>
              </div>
              <span className={`vessel-badge ${activeShip.unlocked ? 'active' : 'req'}`}>
                {activeShip.req}
              </span>
            </div>

            <p className="vessel-description">{activeShip.desc}</p>

            <div className="vessel-stats-grid">
              <div className="vessel-stat-bar-item">
                <div className="stat-bar-header">
                  <span>Maneuverability</span>
                  <strong>{activeShip.speed}</strong>
                </div>
                <div className="stat-track"><div className="stat-fill cyan" style={{ width: activeShip.speed }} /></div>
              </div>
              <div className="vessel-stat-bar-item">
                <div className="stat-bar-header">
                  <span>Plasma Firepower</span>
                  <strong>{activeShip.firepower}</strong>
                </div>
                <div className="stat-track"><div className="stat-fill red" style={{ width: activeShip.firepower }} /></div>
              </div>
              <div className="vessel-stat-bar-item">
                <div className="stat-bar-header">
                  <span>Deflector Shields</span>
                  <strong>{activeShip.shields}</strong>
                </div>
                <div className="stat-track"><div className="stat-fill white" style={{ width: activeShip.shields }} /></div>
              </div>
              <div className="vessel-stat-bar-item">
                <div className="stat-bar-header">
                  <span>Tear Hydration Multiplier</span>
                  <strong>{activeShip.tearHydration}</strong>
                </div>
                <div className="stat-track"><div className="stat-fill cyan" style={{ width: activeShip.tearHydration }} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
