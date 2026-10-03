import { useState } from 'react'
import Reveal from './Reveal'
import { LockIcon } from './Icons'

const SHIPS = [
  {
    id: 'alpha',
    name: 'Alpha Dart',
    sub: 'Light interceptor · Mk-I',
    unlock: null,
    desc: 'High-agility fighter tuned for rapid eye-tracking bursts and quick cervical maneuvers. Every pilot starts here.',
    stats: { Speed: 94, Firepower: 78, Shields: 65 },
    art: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="50,8 90,80 50,70 10,80" />
        <line x1="50" y1="8" x2="50" y2="70" />
        <polygon points="40,80 50,91 60,80" fill="currentColor" stroke="none" />
        <circle cx="50" cy="44" r="3.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'omega',
    name: 'Omega Cruiser',
    sub: 'Heavy assault battleship',
    unlock: 'Level 10',
    desc: 'Heavily armored gunship with twin plasma railguns and a reinforced shield matrix — built for long engagement sessions.',
    stats: { Speed: 62, Firepower: 96, Shields: 90 },
    art: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M30,30 L70,30 L85,60 L90,85 L50,75 L10,85 L15,60 Z" />
        <rect x="42" y="14" width="16" height="18" />
        <line x1="30" y1="52" x2="70" y2="52" />
      </svg>
    ),
  },
  {
    id: 'valkyrie',
    name: 'Valkyrie Phantom',
    sub: 'Stealth evasion fighter',
    unlock: 'Level 25',
    desc: 'Experimental cloaking interceptor that rewards extreme head-tilt evasion — the deepest mobility training in the fleet.',
    stats: { Speed: 99, Firepower: 84, Shields: 70 },
    art: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="50,5 95,50 80,95 50,70 20,95 5,50" />
        <circle cx="50" cy="50" r="8" />
      </svg>
    ),
  },
]

export default function Fleet() {
  const [active, setActive] = useState('alpha')
  const ship = SHIPS.find((s) => s.id === active)

  return (
    <section className="fleet" id="fleet">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The hangar</span>
          <h2>Earn your fleet.</h2>
          <p className="section-sub">
            Ships unlock with flight hours — healthy eyes are the only currency.
          </p>
        </Reveal>

        <Reveal className="fleet-shell">
          <div className="fleet-list" role="tablist" aria-label="Choose a ship">
            {SHIPS.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                className={`fleet-item ${active === s.id ? 'is-active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                <span className="fleet-item-art" aria-hidden="true">{s.art}</span>
                <span className="fleet-item-info">
                  <strong>{s.name}</strong>
                  <span>{s.sub}</span>
                </span>
                {s.unlock ? (
                  <span className="fleet-item-lock"><LockIcon />{s.unlock}</span>
                ) : (
                  <span className="fleet-item-live">Active</span>
                )}
              </button>
            ))}
          </div>

          <div className="fleet-detail">
            <div className="fleet-detail-art" aria-hidden="true">{ship.art}</div>
            <div className="fleet-detail-body">
              <div className="fleet-detail-title">
                <h3>{ship.name}</h3>
                <span>{ship.sub}</span>
              </div>
              <p>{ship.desc}</p>
              <div className="fleet-stats">
                {Object.entries(ship.stats).map(([k, v]) => (
                  <div key={k} className="fleet-stat">
                    <span className="fleet-stat-label">{k}</span>
                    <div className="fleet-stat-bar">
                      <span className="fleet-stat-fill" style={{ '--w': `${v}%` }} />
                    </div>
                    <span className="fleet-stat-val">{v}</span>
                  </div>
                ))}
              </div>
              {ship.unlock && (
                <span className="fleet-req"><LockIcon />Unlocks at {ship.unlock}</span>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
