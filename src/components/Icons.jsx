/* Shared SVG icon set — 24x24 grid, stroke-based, inherits currentColor */

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

export function EyeIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  )
}

export function BoltIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
    </svg>
  )
}

export function ShieldIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.4 7.5 10 4.3-1.6 7.5-5.4 7.5-10v-6L12 2.5z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  )
}

export function GaugeIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="m12 14 4.5-4.5" />
      <circle cx="12" cy="14" r="1.6" />
      <path d="M2.5 19.5h19" />
    </svg>
  )
}

export function TiltIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="7.5" y="4" width="9" height="16" rx="2" />
      <path d="M2.8 9.5a9.6 9.6 0 0 0 0 5M21.2 9.5a9.6 9.6 0 0 1 0 5" />
    </svg>
  )
}

export function LockIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

export function SparkIcon({ size = 14, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c.9 6.9 4.2 10.2 12 12-7.8 1.8-11.1 5.1-12 12-.9-6.9-4.2-10.2-12-12C7.8 10.2 11.1 6.9 12 0z" />
    </svg>
  )
}

export function AwardIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1.5 7.5L12 19.5l5 2L15.5 14" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  )
}

export function ArrowDownIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  )
}

export function PlayIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11-7.2c.6-.4.6-1.4 0-1.8l-11-7.2C7.9 3.5 7 4 7 4.8z" />
    </svg>
  )
}

export function ChartIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 20V10M10 20V4M16 20v-8M21 20H3" />
    </svg>
  )
}

export function ChipIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 2.5v3M14 2.5v3M10 18.5v3M14 18.5v3M2.5 10h3M2.5 14h3M18.5 10h3M18.5 14h3" />
    </svg>
  )
}

export function AudioIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10.5v3" />
    </svg>
  )
}

export function ShipIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.5 15 9l6.5 3.5L15 16l-3 5.5L9 16l-6.5-3.5L9 9l3-6.5z" />
    </svg>
  )
}

export function FlameIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.5S6 8 6 13.5a6 6 0 0 0 12 0c0-2-1-3.8-2.2-5.4-.6 1.2-1.5 2-2.3 2.4.4-2.6-.4-6-1.5-8z" />
    </svg>
  )
}

export function CheckIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}
