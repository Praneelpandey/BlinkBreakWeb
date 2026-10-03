import { useEffect, useState } from 'react'
import { appStoreHref } from '../config'
import { scrollToId } from '../utils/scroll'
import { BoltIcon, AppleIcon } from './Icons'

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#lab', label: 'Reflex Lab' },
  { href: '#science', label: 'Science' },
  { href: '#fleet', label: 'Hangar' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav-inner container">
        <a
          href="#top"
          className="nav-logo"
          onClick={(e) => {
            setOpen(false)
            scrollToId(e, '#top')
          }}
          aria-label="BlinkBreak — back to top"
        >
          <span className="nav-logo-mark">
            <BoltIcon size={17} />
          </span>
          <span className="nav-logo-text">
            BlinkBreak
            <span className="nav-logo-beta">Spatial</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { setOpen(false); scrollToId(e, l.href) }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={appStoreHref}
            className="btn btn--primary btn--sm"
            onClick={(e) => { if (appStoreHref === '#download') { setOpen(false); scrollToId(e, '#download') } }}
          >
            <AppleIcon size={15} />
            <span>Get the app</span>
          </a>
          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span /><span />
          </button>
        </div>
      </div>

      <div className="nav-mobile" aria-hidden={!open}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => { setOpen(false); scrollToId(e, l.href) }}>
            {l.label}
          </a>
        ))}
        <a
          href={appStoreHref}
          className="nav-mobile-cta"
          onClick={(e) => { if (appStoreHref === '#download') { setOpen(false); scrollToId(e, '#download') } }}
        >
          <AppleIcon size={15} />
          Get the app
        </a>
      </div>
    </header>
  )
}
