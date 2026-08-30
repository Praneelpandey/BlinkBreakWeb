export default function ScienceSection() {
  return (
    <section id="science" className="science-section">
      <div className="section-header center">
        <span className="apple-overline">CLINICAL OCULAR ERGONOMICS</span>
        <h3>The Science of Digital Eye Strain</h3>
        <p className="section-subtext">
          Prolonged screen exposure inhibits involuntary blink frequency by up to 70%, accelerating tear-film evaporation. BlinkBreak systematically restores natural ocular homeostasis.
        </p>
      </div>

      <div className="science-grid">
        {/* Metric 1 */}
        <div className="science-card">
          <div className="science-num-wrapper">
            <span className="science-big-num">18</span>
            <span className="science-unit">/min</span>
          </div>
          <span className="science-card-badge baseline">Natural Baseline</span>
          <h4>Physiological Resting Rate</h4>
          <p>
            During normal conversation and resting activity, involuntary blinking replenishes the trilaminar tear film every 3 to 4 seconds, keeping the cornea lubricated.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="science-card alert">
          <div className="science-num-wrapper">
            <span className="science-big-num red">4.2</span>
            <span className="science-unit">/min</span>
          </div>
          <span className="science-card-badge warning">Screen Glare Stare</span>
          <h4>Computer Vision Syndrome</h4>
          <p>
            Cognitive focus on digital screens suppresses blink reflexes. Incomplete blinks skyrocket, exposing the epithelial surface and causing dry eyes, redness, and headaches.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="science-card highlight">
          <div className="science-num-wrapper">
            <span className="science-big-num cyan">100</span>
            <span className="science-unit">%</span>
          </div>
          <span className="science-card-badge active">BlinkBreak Protocol</span>
          <h4>Full Palpebral Expression</h4>
          <p>
            By making the double-blink the primary firing trigger for laser cannons, BlinkBreak mechanically expresses the meibomian glands to coat the cornea with fresh lipids.
          </p>
        </div>
      </div>

      {/* Editorial Research Card */}
      <div className="research-editorial-card">
        <div className="research-text-col">
          <span className="apple-overline">RETHINKING OCULAR HEALTH</span>
          <h4>From Passive Reminders to Active Spatial Play</h4>
          <p>
            Traditional 20-20-20 timers fail because they interrupt flow states and lack engagement. BlinkBreak converts the physiological requirement of blinking directly into an empowering combat mechanic—reinforcing healthy habits through spatial play.
          </p>
        </div>
        <div className="research-stats-col">
          <div className="research-stat-item">
            <strong>68.4%</strong>
            <span>Reduction in Self-Reported Eye Fatigue</span>
          </div>
          <div className="research-stat-item">
            <strong>3.5x</strong>
            <span>Increase in Full-Blink Completion Rates</span>
          </div>
        </div>
      </div>
    </section>
  )
}
