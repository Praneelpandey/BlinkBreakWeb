/* Minimal icon set — consistent 1.8px stroke, inherits currentColor.
   Only what the page actually uses. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function AppleIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.04-2.87 0-.15-.01-.3-.04-.43-.99.04-2.18.66-2.88 1.48-.56.64-1.05 1.69-1.05 2.76 0 .15.02.3.05.42 1.1.09 2.25-.57 2.88-1.36z" />
    </svg>
  )
}

export function ChevronRightIcon({ size = 15, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  )
}

export function ChevronDownIcon({ size = 15, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}>
      <path d="M5 9l7 7 7-7" />
    </svg>
  )
}

export function LockIcon({ size = 12, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.4} {...props}>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

export function TiltIcon({ size = 26, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="7.5" y="4" width="9" height="16" rx="2" />
      <path d="M2.8 9.5a9.6 9.6 0 0 0 0 5M21.2 9.5a9.6 9.6 0 0 1 0 5" />
    </svg>
  )
}
