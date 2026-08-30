export default function CommandConsole() {
  return (
    <section id="demo" className="command-console">
      <div className="section-header center">
        <span className="apple-overline">SPATIAL CONSOLE</span>
        <h3>Three Pillars of Visual Therapy</h3>
        <p className="section-subtext">
          Engineered as a seamless spatial triad: precision biometric setup, high-octane laser combat, and detailed clinical recovery telemetry.
        </p>
      </div>

      <div className="console-stage">
        {/* Left Phone — Calibration */}
        <div className="console-mockup-wrapper left">
          <div className="phone-frame">
            <div className="console-mockup cyan-glow">
              <div className="hw-btn-action" />
              <div className="hw-btn-vol-up" />
              <div className="hw-btn-vol-down" />
              <div className="hw-btn-power" />
              <div className="dynamic-island" />
              <div className="screen-glass-glare" />
              <video autoPlay loop muted playsInline className="mockup-video">
                <source src="/setup-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mockup-info-card">
            <span className="mockup-number">01</span>
            <div>
              <h4 className="mockup-title">Biometric Calibration</h4>
              <p className="mockup-desc">ARKit TrueDepth camera locks onto 52 facial blendshapes.</p>
            </div>
          </div>
        </div>

        {/* Center Phone — Combat Simulation */}
        <div className="console-mockup-wrapper center">
          <div className="phone-frame">
            <div className="center-phone-wrapper">
              <div className="hw-btn-action" />
              <div className="hw-btn-vol-up" />
              <div className="hw-btn-vol-down" />
              <div className="hw-btn-power" />
              <div className="console-mockup red-glow">
                <div className="dynamic-island" />
                <div className="screen-glass-glare" />
                <video autoPlay loop muted playsInline className="mockup-video">
                  <source src="/action-loop.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="mockup-info-card highlighted">
            <span className="mockup-number red">02</span>
            <div>
              <h4 className="mockup-title">Weaponized Laser Combat</h4>
              <p className="mockup-desc">Double-blinks trigger plasma cannons while restoring corneal moisture.</p>
            </div>
          </div>
        </div>

        {/* Right Phone — Telemetry Report */}
        <div className="console-mockup-wrapper right">
          <div className="phone-frame">
            <div className="console-mockup cyan-glow">
              <div className="hw-btn-action" />
              <div className="hw-btn-vol-up" />
              <div className="hw-btn-vol-down" />
              <div className="hw-btn-power" />
              <div className="dynamic-island" />
              <div className="screen-glass-glare" />
              <video autoPlay loop muted playsInline className="mockup-video">
                <source src="/proof-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mockup-info-card">
            <span className="mockup-number">03</span>
            <div>
              <h4 className="mockup-title">Ocular Health Debrief</h4>
              <p className="mockup-desc">Session analytics measure blink velocity and eye strain reduction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
