import Reveal from './Reveal'
import { TiltIcon } from './Icons'

/**
 * Beyond the mission — the retention mechanics (Ghost Mode + streaks).
 */
export default function Beyond() {
  return (
    <section className="feature">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Keep flying</span>
          <h2>Built to come back to.</h2>
          <p className="section-sub">The best eye-care routine is the one you actually keep.</p>
        </Reveal>

        <div className="beyond-grid">
          <Reveal className="beyond-block">
            <span className="eyebrow">Ghost Mode</span>
            <h3>Tilt to dodge.</h3>
            <p>
              Subtle head tilts slip your ship past obstacles — keeping your neck and
              shoulders moving while the rest of you sits still.
            </p>
            <div className="beyond-visual tilt-demo" aria-hidden="true">
              <span className="tilt-arrow tilt-arrow--l" />
              <span className="tilt-icon"><TiltIcon /></span>
              <span className="tilt-arrow tilt-arrow--r" />
            </div>
          </Reveal>

          <Reveal className="beyond-block" delay={120}>
            <span className="eyebrow">The habit engine</span>
            <h3>A fleet to earn.</h3>
            <p>
              Daily flights and streaks unlock new ships. Flight hours are blink hours —
              healthy eyes are the only currency in the game.
            </p>
            <div className="beyond-visual streak-row" aria-hidden="true">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={i} className={`streak-day ${i < 5 ? 'done' : ''}`}>{d}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
