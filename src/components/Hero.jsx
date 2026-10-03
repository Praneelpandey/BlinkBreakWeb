import { useCallback, useEffect, useRef } from 'react'
import PhoneMockup from './PhoneMockup'
import AppStoreBadge from './AppStoreBadge'
import { scrollToId } from '../utils/scroll'
import { AwardIcon, ArrowDownIcon } from './Icons'

/**
 * Hero — headline on the left, live app gameplay on the right.
 * The phone tilts subtly with the pointer (disabled for touch /
 * reduced-motion users).
 */
export default function Hero() {
  const stageRef = useRef(null)

  const onPointerMove = useCallback((e) => {
    const stage = stageRef.current
    if (!stage || window.matchMedia('(pointer: coarse)').matches) return
    const rect = stage.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    stage.style.setProperty('--ry', `${x * 10}deg`)
    stage.style.setProperty('--rx', `${-y * 8}deg`)
  }, [])

  const onPointerLeave = useCallback(() => {
    const stage = stageRef.current
    if (!stage) return
    stage.style.setProperty('--ry', '0deg')
    stage.style.setProperty('--rx', '0deg')
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    stage.addEventListener('pointermove', onPointerMove)
    stage.addEventListener('pointerleave', onPointerLeave)
    return () => {
      stage.removeEventListener('pointermove', onPointerMove)
      stage.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [onPointerMove, onPointerLeave])

  return (
    <section className="hero section" id="top">
      <div className="container hero-grid">
        {/* ── Copy ── */}
        <div className="hero-copy">
          <div className="hero-award">
            <span className="hero-award-icon"><AwardIcon size={14} /></span>
            Apple Swift Student Challenge — 2026 Winner
          </div>

          <h1 className="hero-title">
            Your blinks are<br />
            now <span className="text-gradient">weapons.</span>
          </h1>

          <p className="hero-sub">
            BlinkBreak is a spatial combat game you fly with your face. Double-blink to fire
            plasma cannons, tilt your head to dodge debris — and repair the eye strain that
            screens cause, one shot at a time.
          </p>

          <div className="hero-cta">
            <AppStoreBadge />
            <a href="#how" className="btn btn--ghost" onClick={(e) => scrollToId(e, '#how')}>
              <span>See it in motion</span>
              <ArrowDownIcon size={15} />
            </a>
          </div>

          <ul className="hero-specs">
            <li>
              <strong>60 FPS</strong>
              <span>TrueDepth face tracking</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>on-device &amp; private</span>
            </li>
            <li>
              <strong>iOS 18+</strong>
              <span>free to fly</span>
            </li>
          </ul>
        </div>

        {/* ── Live phone ── */}
        <div className="hero-stage" ref={stageRef}>
          <div className="hero-stage-orbit" aria-hidden="true" />
          <PhoneMockup
            video="/media/combat.mp4"
            poster="/media/combat.jpg"
            glow="red"
            label="LIVE GAMEPLAY"
            className="hero-phone"
          >
            <div className="hud-chip hud-chip--fire" aria-hidden="true">
              <span className="hud-chip-dot" />
              <span className="hud-chip-key">BLINK ×2</span>
              <span className="hud-chip-val">CANNONS FIRED</span>
            </div>
            <div className="hud-chip hud-chip--ghost" aria-hidden="true">
              <span className="hud-chip-key">HEAD TILT</span>
              <span className="hud-chip-val">GHOST MODE</span>
            </div>
            <div className="hud-chip hud-chip--health" aria-hidden="true">
              <span className="hud-chip-val hud-chip-val--green">+98%</span>
              <span className="hud-chip-key">tear-film refresh</span>
            </div>
          </PhoneMockup>
        </div>
      </div>

      <a href="#how" className="hero-scrollcue mono-tag" onClick={(e) => scrollToId(e, '#how')}>
        <ArrowDownIcon size={14} />
        scroll
      </a>
    </section>
  )
}
