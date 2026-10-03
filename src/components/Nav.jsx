import { useEffect, useState } from 'react'
import { appStoreHref } from '../config'
import { scrollToId } from '../utils/scroll'
import { AppleIcon } from './Icons'

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#lab', label: 'Reflex Lab' },
  { href: '#science', label: 'Science' },
  { href: '#fleet', label: 'Hangar' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    setOpen(false)
    scrollToId(e, href)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-logo" onClick={(e) => go(e, '#top')} aria-label="BlinkBreak — back to top">
          <img className="nav-appicon" src="/favicon.svg" alt="" width="26" height="26" />
          <span className="nav-logo-text">BlinkBreak</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={appStoreHref}
            className="btn btn--primary btn--sm"
            onClick={(e) => { if (appStoreHref === '#download') go(e, '#download') }}
          >
            Download
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
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href={appStoreHref} className="nav-mobile-cta" onClick={(e) => { if (appStoreHref === '#download') go(e, '#download') }}>
          <AppleIcon size={16} />
          Download BlinkBreak
        </a>
      </div>
    </header>
  )
}
