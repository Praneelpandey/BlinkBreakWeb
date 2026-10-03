import { SparkIcon } from './Icons'

const ITEMS = [
  'Apple Swift Student Challenge 2026 Winner',
  '60 FPS ARKit face tracking',
  '52 blendshapes, 2.1 ms latency',
  'On-device CoreML — zero cloud',
  'Metal 3 + spatial audio',
  '120 Hz ProMotion ready',
  'Double-blink combat system',
]

/**
 * Infinite marquee strip of proof points.
 */
export default function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}
            <SparkIcon size={11} />
          </span>
        ))}
      </div>
    </div>
  )
}
