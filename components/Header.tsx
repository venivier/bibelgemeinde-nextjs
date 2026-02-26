'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isActive = (paths: string[]) => paths.includes(pathname)

  return (
    <header id="hdr" className={scrolled ? 'scrolled' : ''}>
      <div className="hglow" />
      <div className="hinner">
        <Link href="/" className="logo-link" onClick={() => setMobileOpen(false)}>
          <span className="logo-name">Bibelgemeinde Magdeburg</span>
          <span className="logo-claim">Die Bibel, maßgebend fürs Leben</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

        <nav className={mobileOpen ? 'open' : ''}>
          {/* Start */}
          <div className="nav-item">
            <Link
              href="/"
              className={`nav-link${pathname === '/' ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Start
            </Link>
          </div>

          {/* Über uns */}
          <div
            className={`nav-item${expandedItem === 'ueber' ? ' expanded' : ''}`}
            onClick={() => setExpandedItem(expandedItem === 'ueber' ? null : 'ueber')}
          >
            <Link
              href="/ueber"
              className={`nav-link${isActive(['/ueber']) ? ' active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setMobileOpen(false) }}
            >
              Über uns
              <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </Link>
            <div className="dropdown">
              <Link href="/ueber?tab=glaube" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" /></svg>
                Unser Glaube
              </Link>
              <Link href="/ueber?tab=gemeindeleitung" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                Unsere Gemeindeleitung
              </Link>
              <Link href="/ueber?tab=geschichte" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                Unsere Geschichte
              </Link>
              <Link href="/ueber?tab=ziel" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Unser Ziel
              </Link>
              <div className="dropdown-divider" />
              <Link href="/ueber?tab=gottesdienste" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Unser Gottesdienst
              </Link>
            </div>
          </div>

          {/* Botschaften */}
          <div className="nav-item">
            <Link
              href="/botschaften"
              className={`nav-link${pathname === '/botschaften' ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Botschaften
            </Link>
          </div>

          {/* Kontakt */}
          <div
            className={`nav-item${expandedItem === 'kontakt' ? ' expanded' : ''}`}
            onClick={() => setExpandedItem(expandedItem === 'kontakt' ? null : 'kontakt')}
          >
            <Link
              href="/kontakt"
              className={`nav-link${isActive(['/kontakt', '/anfahrt', '/datenschutz', '/impressum']) ? ' active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setMobileOpen(false) }}
            >
              Kontakt
              <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </Link>
            <div className="dropdown">
              <Link href="/anfahrt" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                Anfahrt
              </Link>
              <Link href="/kontakt" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                Kontakt
              </Link>
              <div className="dropdown-divider" />
              <Link href="/datenschutz" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                Datenschutz
              </Link>
              <Link href="/impressum" className="dropdown-item" onClick={() => setMobileOpen(false)}>
                <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                Impressum
              </Link>
            </div>
          </div>
        </nav>

        <div className="hright">
          <Link href="/botschaften" className="btn-gold">
            Neueste Botschaft
          </Link>
          <img className="logo-img" src="/logo.png" alt="Bibelgemeinde Magdeburg" />
        </div>
      </div>
    </header>
  )
}
