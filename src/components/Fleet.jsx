import { useState } from 'react'
import Reveal from './Reveal'
import { LockIcon } from './Icons'

const SHIPS = [
  {
    id: 'alpha',
    name: 'Alpha Dart',
    sub: 'Light interceptor · Mk-I',
    status: 'Active',
    req: null,
    unlock: 'Starter vessel',
    desc: 'High-agility fighter tuned for rapid eye-tracking bursts and quick cervical maneuvers. Every pilot starts here.',
    stats: { Speed: 94, Firepower: 78, Shields: 65 },
    accent: 'violet',
    art: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="50,8 90,80 50,70 10,80" fill="rgba(139,92,246,0.10)" stroke="currentColor" />
        <line x1="50" y1="8" x2="50" y2="70" stroke="currentColor" strokeOpacity="0.5" />
        <polygon points="40,80 50,91 60,80" fill="currentColor" />
        <circle cx="50" cy="44" r="3.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'omega',
    name: 'Omega Cruiser',
    sub: 'Heavy assault battleship',
    status: 'Locked',
    req: 'Unlocks at Level 10',
    unlock: 'Level 10',
    desc: 'Heavily armored gunship with twin plasma railguns and a reinforced shield matrix — built for long engagement sessions.',
    stats: { Speed: 62, Firepower: 96, Shields: 90 },
    accent: 'red',
    art: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M30,30 L70,30 L85,60 L90,85 L50,75 L10,85 L15,60 Z" fill="rgba(255,69,58,0.08)" stroke="currentColor" />
        <rect x="42" y="14" width="16" height="18" fill="rgba(255,69,58,0.15)" stroke="currentColor" />
        <line x1="30" y1="52" x2="70" y2="52" stroke="currentColor" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'valkyrie',
    name: 'Valkyrie Phantom',
    sub: 'Stealth evasion fighter',
    status: 'Locked',
    req: 'Unlocks at Level 25',
    unlock: 'Level 25',
    desc: 'Experimental cloaking interceptor that rewards extreme head-tilt evasion — the deepest cervical mobility training in the fleet.',
    stats: { Speed: 99, Firepower: 84, Shields: 70 },
    accent: 'blue',
    art: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="50,5 95,50 80,95 50,70 20,95 5,50" fill="rgba(71,191,255,0.08)" stroke="currentColor" />
        <circle cx="50" cy="50" r="8" stroke="currentColor" />
      </svg>
    ),
  },
]

export default function Fleet() {
  const [active, setActive] = useState('alpha')
  const ship = SHIPS.find((s) => s.id === active)

  return (
    <section className="fleet section" id="fleet">
      <div className="container">
        <Reveal className="section-head">
          <span className="overline">The hangar</span>
          <h2>
            Fly the fleet. <span className="text-gradient">Earn every ship.</span>
          </h2>
          <p className="section-sub">
            Flight hours are blink hours — every vessel is unlocked by keeping your eyes
            healthy, not by purchases.
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
                <span className={`fleet-item-art fleet-item-art--${s.accent}`}>{s.art}</span>
                <span className="fleet-item-info">
                  <strong>{s.name}</strong>
                  <span>{s.sub}</span>
                </span>
                {s.req ? (
                  <span className="fleet-item-lock mono-tag"><LockIcon size={12} />{s.unlock}</span>
                ) : (
                  <span className="fleet-item-live mono-tag">ACTIVE</span>
                )}
              </button>
            ))}
          </div>

          <div className={`fleet-detail fleet-detail--${ship.accent}`}>
            <div className="fleet-detail-art" aria-hidden="true">{ship.art}</div>
            <div className="fleet-detail-body">
              <div className="fleet-detail-title">
                <h3>{ship.name}</h3>
                <span className="mono-tag">{ship.sub}</span>
              </div>
              <p>{ship.desc}</p>
              <div className="fleet-stats">
                {Object.entries(ship.stats).map(([k, v]) => (
                  <div key={k} className="fleet-stat">
                    <span className="fleet-stat-label">{k}</span>
                    <div className="fleet-stat-bar">
                      <span style={{ '--w': `${v}%` }} className="fleet-stat-fill" />
                    </div>
                    <span className="fleet-stat-val mono-tag">{v}</span>
                  </div>
                ))}
              </div>
              {ship.req && <span className="fleet-req mono-tag"><LockIcon size={12} />{ship.req}</span>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
