import Reveal from './Reveal'
import AppStoreBadge from './AppStoreBadge'

export default function DownloadCTA() {
  return (
    <section className="download" id="download">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Clear for takeoff</span>
          <h2 className="download-title">Give your eyes a fighting chance.</h2>
          <p className="download-sub">
            Free on the App Store. Your first flight takes ninety seconds — your eyes will
            notice by the debrief.
          </p>
          <AppStoreBadge large />
          <p className="download-fine">
            <span>iOS 18+</span>
            <span>iPhone &amp; iPad with TrueDepth</span>
            <span>Works offline</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
