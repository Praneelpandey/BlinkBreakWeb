import { APP_STORE_URL } from '../config'
import { scrollToId } from '../utils/scroll'
import { AppleIcon } from './Icons'

/**
 * Official-style App Store badge. Links to the configured App Store URL
 * (see src/config.js). Until the real link is set, it scrolls smoothly
 * to the download section instead.
 */
export default function AppStoreBadge({ large = false, className = '' }) {
  const isExternal = Boolean(APP_STORE_URL)
  const onClick = isExternal ? undefined : (e) => scrollToId(e, '#download')

  return (
    <a
      href={APP_STORE_URL || '#download'}
      onClick={onClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`appstore-badge ${large ? 'appstore-badge--large' : ''} ${className}`}
      aria-label="Download BlinkBreak on the App Store"
    >
      <AppleIcon size={large ? 32 : 24} />
      <span className="appstore-badge-text">
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </a>
  )
}
