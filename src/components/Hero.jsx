import Reveal from './Reveal'
import PhoneMockup from './PhoneMockup'
import AppStoreBadge from './AppStoreBadge'
import { scrollToId } from '../utils/scroll'
import { ChevronDownIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal>
          <p className="hero-kicker">
            <img src="/favicon.svg" alt="" width="30" height="30" />
            BlinkBreak
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="hero-title">Your blinks are now weapons.</h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero-sub">
            A space combat game you fly with your face. Double-blink to fire, tilt your head
            to dodge — and give your screen-tired eyes the break they&apos;ve been missing.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero-ctas">
            <AppStoreBadge />
            <a href="#features" className="link-arrow" onClick={(e) => scrollToId(e, '#features')}>
              See it in action
              <ChevronDownIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="hero-facts">
            <span>Winner of the Apple Swift Student Challenge 2026</span>
            <span>iOS 18+</span>
            <span>TrueDepth camera</span>
            <span>100% on-device</span>
          </p>
        </Reveal>

        <Reveal delay={200} className="hero-stage">
          <PhoneMockup
            video="/media/combat.mp4"
            poster="/media/combat.jpg"
            alt="BlinkBreak gameplay on iPhone: a ship firing plasma cannons triggered by double-blinks"
          />
        </Reveal>
      </div>
    </section>
  )
}
