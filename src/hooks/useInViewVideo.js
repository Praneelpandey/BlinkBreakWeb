import { useEffect, useRef } from 'react'

/**
 * Plays a muted looping video only while it is on screen.
 * Keeps the page light when several mockup videos exist.
 */
export function useInViewVideo(pauseOffscreen = true) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (typeof IntersectionObserver === 'undefined' || !pauseOffscreen) {
      const p = video.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const p = video.play()
            if (p && typeof p.catch === 'function') p.catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.25 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [pauseOffscreen])

  return videoRef
}
