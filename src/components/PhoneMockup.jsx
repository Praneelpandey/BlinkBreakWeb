import { useInViewVideo } from '../hooks/useInViewVideo'

/**
 * CSS iPhone mockup playing a looping app-screen video.
 * `alt` describes the recording for screen readers.
 */
export default function PhoneMockup({ video, poster, alt, className = '' }) {
  const videoRef = useInViewVideo()

  return (
    <div className={`phone ${className}`.trim()} role="img" aria-label={alt}>
      <span className="ph-btn ph-btn--action" aria-hidden="true" />
      <span className="ph-btn ph-btn--volup" aria-hidden="true" />
      <span className="ph-btn ph-btn--voldn" aria-hidden="true" />
      <span className="ph-btn ph-btn--power" aria-hidden="true" />

      <div className="phone-frame">
        <div className="phone-screen">
          <video
            ref={videoRef}
            className="phone-video"
            src={video}
            poster={poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            tabIndex={-1}
            aria-hidden="true"
          />
          <span className="phone-island" aria-hidden="true" />
          <span className="phone-glare" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
