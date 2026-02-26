import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function AnfahrtPage() {
  return (
    <>
      <PageHero
        label="So finden Sie uns"
        title="Anfahrt"
        subtitle="Wir freuen uns auf Ihren Besuch – kommen Sie einfach vorbei."
      />

      <div className="sub-nav">
        <Link href="/">Start</Link>
        <span>›</span>
        <Link href="/kontakt">Kontakt</Link>
        <span>›</span>
        <span className="current">Anfahrt</span>
      </div>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="sinner">
          <Reveal>
            <div className="addr-box">
              <div className="addr-row">
                <div className="aicon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="alabel">Adresse</p>
                  <p className="aval">Maxim-Gorki-Straße 31–37<br />39108 Magdeburg</p>
                </div>
              </div>

              <div className="addr-row">
                <div className="aicon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="alabel">Telefon</p>
                  <p className="aval">(039204) 63 903</p>
                </div>
              </div>

              <div className="addr-row">
                <div className="aicon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="alabel">E-Mail</p>
                  <p className="aval">BKMcKenzie@t-online.de</p>
                </div>
              </div>

              <div className="addr-row">
                <div className="aicon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="alabel">Gottesdienst</p>
                  <p className="aval">Sonntag · 10:00 Uhr</p>
                </div>
              </div>

              <div className="addr-row">
                <div className="aicon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="alabel">Ansprechpartner</p>
                  <p className="aval">Bradley McKenzie</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay="d1">
            <div className="map-ph">
              <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.695 3 7.531v13.147c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.28)', textAlign: 'center' }}>
                Maxim-Gorki-Straße 31–37, 39108 Magdeburg
              </p>
              <a
                className="map-link"
                href="https://maps.google.com/?q=Maxim-Gorki-Stra%C3%9Fe+31,+39108+Magdeburg"
                target="_blank"
                rel="noopener noreferrer"
              >
                In Google Maps öffnen →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
