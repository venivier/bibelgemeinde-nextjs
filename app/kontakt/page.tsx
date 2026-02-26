import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title="Kontakt"
        subtitle="Wir freuen uns von Ihnen zu hören – nehmen Sie gerne Kontakt auf."
      />

      <div className="sub-nav">
        <Link href="/">Start</Link>
        <span>›</span>
        <span className="current">Kontakt</span>
      </div>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="sinner">
          <Reveal>
            <div className="kontakt-grid">
              <Link href="/anfahrt" className="kontakt-card">
                <div className="kicon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3>Anfahrt</h3>
                <p>Maxim-Gorki-Straße 31–37<br />39108 Magdeburg<br /><br />Klicken für Details &amp; Karte →</p>
              </Link>

              <div className="kontakt-card">
                <div className="kicon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3>E-Mail</h3>
                <p>BKMcKenzie@t-online.de<br /><br />Ansprechpartner:<br />Bradley McKenzie</p>
              </div>

              <div className="kontakt-card">
                <div className="kicon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3>Telefon</h3>
                <p>(039204) 63 903<br /><br />Sie erreichen uns gerne<br />zu den Gottesdienstzeiten</p>
              </div>

              <div className="kontakt-card">
                <div className="kicon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Gottesdienst</h3>
                <p>Sonntag · 10:00 Uhr<br />Bibelstunde: Mittwoch · 18:00 Uhr<br /><br />Sie sind herzlich willkommen!</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
