import { useEffect, useState } from 'react'

/**
 * Reactive CSS media query. Re-renders the component when the
 * query starts or stops matching (used to switch the Flight
 * section between its sticky and stacked layouts).
 */
export function useMedia(query) {
  const [matches, setMatches] = useState(
    () =>
      typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia(query).matches
        : false,
  )

  useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return matches
}
