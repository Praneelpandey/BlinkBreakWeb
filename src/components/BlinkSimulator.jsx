import { useState, useEffect, useRef } from 'react'

export default function BlinkSimulator() {
  const [gameState, setGameState] = useState('idle') // 'idle' | 'waiting' | 'target' | 'result'
  const [reactionTime, setReactionTime] = useState(null)
  const [hydrationScore, setHydrationScore] = useState(null)
  const [combatRating, setCombatRating] = useState(null)
  const [scoreHistory, setScoreHistory] = useState([182, 195, 178])
  const startTimeRef = useRef(0)
  const timeoutRef = useRef(null)

  const startTest = () => {
    setGameState('waiting')
    setReactionTime(null)
    setHydrationScore(null)
    setCombatRating(null)

    const delay = 1400 + Math.random() * 2200
    timeoutRef.current = setTimeout(() => {
      setGameState('target')
      startTimeRef.current = performance.now()
    }, delay)
  }

  const triggerBlink = () => {
    if (gameState === 'waiting') {
      clearTimeout(timeoutRef.current)
      setGameState('idle')
      alert('Too early! Wait for the circular target lock.')
      return
    }

    if (gameState === 'target') {
      const elapsed = Math.round(performance.now() - startTimeRef.current)
      setReactionTime(elapsed)
      
      const hydration = Math.min(100, Math.max(85, Math.round(100 - (elapsed - 150) * 0.1)))
      setHydrationScore(hydration)

      let rating = 'Exceptional Reflex'
      if (elapsed < 200) rating = 'Ultra-High Velocity // S-Tier'
      else if (elapsed < 280) rating = 'Clinical Baseline // A-Tier'
      else rating = 'Normal Reflex // B-Tier'
      setCombatRating(rating)

      setScoreHistory(prev => [elapsed, ...prev.slice(0, 2)])
      setGameState('result')
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        if (gameState === 'idle' || gameState === 'result') {
          startTest()
        } else if (gameState === 'target' || gameState === 'waiting') {
          triggerBlink()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timeoutRef.current)
    }
  }, [gameState])

  return (
    <section id="simulator" className="blink-simulator-section">
      <div className="section-header center">
        <span className="apple-overline">INTERACTIVE REFLEX LAB</span>
        <h3>Test Your Neural Blink Velocity</h3>
        <p className="section-subtext">
          Experience the double-blink trigger mechanic directly in your browser. Press <kbd className="apple-kbd">SPACE</kbd> or click the target ring.
        </p>
      </div>

      <div className="simulator-glass-card">
        {/* Left Side: Physiological Telemetry */}
        <div className="sim-stats-column">
          <div className="sim-info-box">
            <span className="sim-box-title">Ocular Rest Interval</span>
            <div className="sim-big-stat">3.2<span className="unit">sec</span></div>
            <div className="sim-progress-track">
              <div className="sim-progress-fill" style={{ width: '85%' }} />
            </div>
            <p className="sim-box-desc">Maintains optimal tear-film stability over the cornea.</p>
          </div>

          <div className="sim-info-box">
            <span className="sim-box-title">Trial History</span>
            <div className="sim-history-list">
              {scoreHistory.map((s, idx) => (
                <div key={idx} className="history-row">
                  <span>Trial 0{idx + 1}</span>
                  <strong>{s} ms</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Main Interactive Focus Ring */}
        <div 
          className={`simulator-interactive-area ${gameState}`} 
          onClick={gameState === 'target' || gameState === 'waiting' ? triggerBlink : undefined}
        >
          {gameState === 'idle' && (
            <div className="sim-state-content">
              <div className="sim-target-ring idle-pulse" />
              <h4>Reflex Simulator Ready</h4>
              <p>Test your ocular motor reaction latency</p>
              <button className="btn-apple-primary" onClick={startTest}>
                <span>Begin Test</span>
              </button>
            </div>
          )}

          {gameState === 'waiting' && (
            <div className="sim-state-content">
              <div className="sim-target-ring tracking-spin" />
              <p className="waiting-pulse-text">Focusing... Stand by</p>
            </div>
          )}

          {gameState === 'target' && (
            <div className="sim-state-content target-locked">
              <div className="sim-target-ring fire-pulse" />
              <h2 className="fire-alert-heading">BLINK NOW</h2>
              <span className="fire-subtext">Click or hit Spacebar</span>
            </div>
          )}

          {gameState === 'result' && (
            <div className="sim-state-content result-view">
              <span className="result-pill-badge">{combatRating}</span>
              <div className="result-giant-number">
                {reactionTime}<span className="unit">ms</span>
              </div>
              <div className="result-meta-row">
                <div className="meta-item">
                  <span>Tear Film Restored</span>
                  <strong>+{hydrationScore}%</strong>
                </div>
                <div className="meta-item">
                  <span>Trigger Accuracy</span>
                  <strong>99.4%</strong>
                </div>
              </div>
              <button className="btn-apple-primary" onClick={startTest}>
                <span>Run Another Trial</span>
              </button>
            </div>
          )}
        </div>

        {/* Right Side: TrueDepth Pipeline */}
        <div className="sim-stats-column">
          <div className="sim-info-box">
            <span className="sim-box-title">TrueDepth Pipeline</span>
            <div className="pipeline-step">
              <div className="step-dot" />
              <div>
                <strong>Structured Light Sensor</strong>
                <p>Projects 30,000 IR dots for facial depth mapping</p>
              </div>
            </div>
            <div className="pipeline-step">
              <div className="step-dot" />
              <div>
                <strong>CoreML Blink Classifier</strong>
                <p>Differentiates involuntary twitches from triggers</p>
              </div>
            </div>
            <div className="pipeline-step">
              <div className="step-dot" />
              <div>
                <strong>Lipid Layer Spread</strong>
                <p>Expresses meibomian glands on complete closure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
