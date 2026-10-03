import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const TIERS = [
  { max: 200, label: 'S-TIER PILOT', note: 'Faster than a fighter jet ejection seat.' },
  { max: 300, label: 'A-TIER PILOT', note: 'Well inside combat blink range.' },
  { max: Infinity, label: 'B-TIER PILOT', note: 'Room to train — the fleet awaits.' },
]

export default function BlinkLab() {
  const [state, setState] = useState('idle') // idle | armed | lock | early | result
  const [reaction, setReaction] = useState(null)
  const [history, setHistory] = useState([])
  const startRef = useRef(0)
  const timerRef = useRef(null)

  const arm = () => {
    setState('armed')
    setReaction(null)
    const delay = 1400 + Math.random() * 2200
    timerRef.current = setTimeout(() => {
      startRef.current = performance.now()
      setState('lock')
    }, delay)
  }

  const blink = () => {
    if (state === 'armed') {
      clearTimeout(timerRef.current)
      setState('early')
      setTimeout(() => setState('idle'), 1500)
      return
    }
    if (state === 'lock') {
      const ms = Math.round(performance.now() - startRef.current)
      setReaction(ms)
      setHistory((h) => [ms, ...h].slice(0, 4))
      setState('result')
    }
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.code !== 'Space') return
      e.preventDefault()
      if (state === 'idle' || state === 'result') arm()
      else blink()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(timerRef.current)
    }
  })

  const tier = reaction ? TIERS.find((t) => reaction <= t.max) : null
  const best = history.length ? Math.min(...history) : null

  return (
    <section className="lab section" id="lab">
      <div className="container">
        <Reveal className="section-head">
          <span className="overline">Reflex lab</span>
          <h2>
            How fast is <span className="text-gradient">your blink?</span>
          </h2>
          <p className="section-sub">
            The in-browser version of the pilot entry exam. Hold steady, wait for lock-on,
            then blink — or hit <kbd className="kbd">SPACE</kbd>.
          </p>
        </Reveal>

        <Reveal className="lab-shell">
          {/* left — trial log */}
          <aside className="lab-side">
            <div className="lab-panel">
              <span className="lab-panel-title mono-tag">TRIAL LOG</span>
              {history.length === 0 ? (
                <p className="lab-empty">No trials yet. The cockpit is waiting.</p>
              ) : (
                <ul className="lab-history">
                  {history.map((ms, i) => (
                    <li key={i} className={ms === best ? 'is-best' : ''}>
                      <span>{i === 0 ? 'LAST' : `T−${i}`}</span>
                      <strong>{ms} ms</strong>
                    </li>
                  ))}
                </ul>
              )}
              {best !== null && (
                <div className="lab-best">
                  <span>PERSONAL BEST</span>
                  <strong>{best} ms</strong>
                </div>
              )}
            </div>
            <div className="lab-panel">
              <span className="lab-panel-title mono-tag">WHY IT MATTERS</span>
              <p>
                In the app, this reaction window is your combat trigger. Training it here
                trains the full-closure blinks your tear film depends on.
              </p>
            </div>
          </aside>

          {/* center — pad */}
          <div
            className={`lab-pad lab-pad--${state}`}
            onClick={() => (state === 'idle' || state === 'result') ? arm() : blink()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') (state === 'idle' || state === 'result') ? arm() : blink()
            }}
            aria-label="Blink reaction test — click to start, click or press space when the target locks"
          >
            {state === 'idle' && (
              <div className="lab-pad-content">
                <span className="lab-ring" />
                <h3>Reflex simulator ready</h3>
                <p>Arm the target to begin</p>
                <span className="btn btn--primary btn--sm lab-arm">Arm target</span>
              </div>
            )}
            {state === 'armed' && (
              <div className="lab-pad-content">
                <span className="lab-ring lab-ring--scan" />
                <p className="lab-waiting">Focusing… hold steady</p>
              </div>
            )}
            {state === 'lock' && (
              <div className="lab-pad-content">
                <span className="lab-ring lab-ring--lock" />
                <h3 className="lab-lock">BLINK NOW</h3>
                <p>Click or hit space</p>
              </div>
            )}
            {state === 'early' && (
              <div className="lab-pad-content">
                <span className="lab-ring lab-ring--early" />
                <h3 className="lab-early">TOO EARLY</h3>
                <p>Wait for lock-on, pilot</p>
              </div>
            )}
            {state === 'result' && reaction !== null && (
              <div className="lab-pad-content">
                <span className={`lab-tier ${reaction === best ? 'is-best' : ''}`}>{tier.label}</span>
                <div className="lab-score">
                  {reaction}
                  <span className="lab-score-unit">ms</span>
                </div>
                <p className="lab-note">{tier.note}</p>
                <span className="btn btn--ghost btn--sm lab-arm">Run another trial</span>
              </div>
            )}
          </div>

          {/* right — pipeline */}
          <aside className="lab-side">
            <div className="lab-panel">
              <span className="lab-panel-title mono-tag">IN THE APP</span>
              <ol className="lab-pipeline">
                <li>
                  <strong>TrueDepth scan</strong>
                  <span>30,000 IR dots map your face at 60 Hz</span>
                </li>
                <li>
                  <strong>CoreML classifier</strong>
                  <span>separates combat blinks from idle ones</span>
                </li>
                <li>
                  <strong>Lipid release</strong>
                  <span>full closures re-oil the tear film</span>
                </li>
              </ol>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
