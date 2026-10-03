import { useInViewVideo } from '../hooks/useInViewVideo'

/**
 * Photoreal CSS iPhone mockup with a looping app-screen video.
 *
 * @param video  path to the portrait (9:19.5) app screen video
 * @param poster poster frame path (shown before the video loads)
 * @param glow   ambient glow color: violet | red | blue | green | none
 * @param label  small mono tag pinned to the phone (e.g. "GAMEPLAY")
 */
export default function PhoneMockup({
  video,
  poster,
  glow = 'violet',
  label,
  float = false,
  className = '',
  children,
}) {
  const videoRef = useInViewVideo()

  return (
    <div className={`phone-wrap ${className}`}>
      <div className={`phone-glow glow-${glow}`} aria-hidden="true" />
      <div className={`phone ${float ? 'phone--float' : ''}`}>
        {/* hardware buttons */}
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
            />
            <span className="phone-island" aria-hidden="true" />
            <span className="phone-glare" aria-hidden="true" />
          </div>
        </div>
      </div>
      {label && <span className="phone-label mono-tag">{label}</span>}
      {children}
    </div>
  )
}
