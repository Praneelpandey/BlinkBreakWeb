import Reveal from './Reveal'
import AppStoreBadge from './AppStoreBadge'

export default function DownloadCTA() {
  return (
    <section className="download section" id="download">
      <div className="download-bg" aria-hidden="true" />
      <div className="container download-inner">
        <Reveal>
          <span className="overline">Clear for takeoff</span>
          <h2 className="download-title">
            Give your eyes a<br />
            <span className="text-gradient">fighting chance.</span>
          </h2>
          <p className="download-sub">
            Free to fly on every iPhone and iPad with a TrueDepth camera. Your first mission
            takes ninety seconds — your eyes will notice by the debrief.
          </p>
          <div className="download-actions">
            <AppStoreBadge large />
          </div>
          <ul className="download-fine mono-tag">
            <li>iOS 18+</li>
            <li>Face ID hardware</li>
            <li>On-device only</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
