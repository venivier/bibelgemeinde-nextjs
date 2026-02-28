import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

type Newest = { titel: string; sprecher: string; datum: string; bibelstelle?: string; kategorie?: string }

function fmtDate(d: string) {
  try { return new Date(d).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }) }
  catch { return d }
}

export default async function HomePage() {
  const { data: newest } = await supabase
    .from('botschaften')
    .select('titel, sprecher, datum, bibelstelle, kategorie')
    .eq('veroeffentlicht', true)
    .order('datum', { ascending: false })
    .limit(1)
    .single() as { data: Newest | null }
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-radial" />
        <div className="cross-wrap">
          <svg className="cross-svg" viewBox="0 0 340 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
                <stop offset="18%" stopColor="#c9a227" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#c9a227" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ch" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
                <stop offset="30%" stopColor="#c9a227" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#c9a227" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect x="159" y="0" width="22" height="480" fill="url(#cv)" filter="url(#glow)" rx="2" />
            <rect x="0" y="148" width="340" height="18" fill="url(#ch)" filter="url(#glow)" rx="2" />
          </svg>
        </div>
        <div className="hero-noise" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="eline" />
            <span className="etxt">Bibeltreue christliche Gemeinde · Magdeburg · seit 1994</span>
            <span className="eline" />
          </div>

          <h1 className="hero-h1">
            <span className="t1">Bibelgemeinde</span>
            <span className="t2">Magdeburg</span>
          </h1>

          <p className="hero-claim">»Die Bibel. maßgebend fürs Leben«</p>

          <div className="div-row">
            <span className="dline" />
            <span className="dstar">✦</span>
            <span className="dline" />
          </div>

          <p className="hero-desc">
            Wir freuen uns, dass Sie unsere Seite besuchen! Wir heißen Sie herzlich willkommen und freuen uns, Sie bald bei uns begrüßen zu dürfen.
          </p>

          <div className="hero-btns">
            <Link href="/ueber" className="btn-hero">
              Unsere Gottesdienste
            </Link>
            <Link href="/botschaften" className="btn-out">
              Neueste Botschaft
            </Link>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="sline" />
        </div>

        <div className="hero-fade" />
      </section>

      {/* ── ZUSAMMENKÜNFTE ── */}
      <section className="section">
        <div className="sinner">
          <Reveal className="section-header-center">
            <span className="slabel">Herzlich willkommen</span>
            <h2 className="stitle">Unsere Zusammenkünfte</h2>
            <p className="ssub">
              Sie sind herzlich eingeladen – ob zum ersten Mal oder als langjähriges Mitglied.
            </p>
          </Reveal>

          <div className="cgrid">
            <Reveal delay="d1">
              <div className="card">
                <div className="cglow" />
                <div className="cicon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                  </svg>
                </div>
                <div>
                  <p className="ctitle">Gottesdienst</p>
                  <p className="ctime">Sonntag · 10:00 Uhr</p>
                </div>
                <p className="cdesc">
                  Fortlaufende Verkündigung der Heiligen Schrift, Singen von Psalmen, Hymnen und geistlichen Liedern – und das gegenseitige Anspornen zur Liebe und zu guten Werken.
                </p>
              </div>
            </Reveal>

            <Reveal delay="d2">
              <div className="card">
                <div className="cglow" />
                <div className="cicon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <p className="ctitle">Bibelstunde</p>
                  <p className="ctime">Mittwoch · 18:00 Uhr</p>
                </div>
                <p className="cdesc">
                  Gemeinsam in die Tiefe der Heiligen Schrift gehen – das Wort Gottes in seiner Gesamtheit gründlich verstehen und für das eigene Leben fruchtbar machen.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── NEUESTE BOTSCHAFT ── */}
      {newest && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="sinner">
            <Reveal>
              <div style={{
                background: '#0e0e0e',
                border: '1px solid rgba(201,162,39,0.2)',
                borderRadius: '20px',
                padding: '2rem 2.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                flexWrap: 'wrap',
                boxShadow: '0 0 40px rgba(201,162,39,0.04)',
              }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#c9a227',
                    background: 'rgba(201,162,39,0.1)',
                    border: '1px solid rgba(201,162,39,0.25)',
                    borderRadius: '20px',
                    padding: '0.2rem 0.7rem',
                    marginBottom: '0.75rem',
                  }}>
                    Neueste Botschaft {newest.kategorie ? `· ${newest.kategorie}` : ''}
                  </span>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.55rem',
                    fontWeight: 600,
                    color: '#fff',
                    margin: '0 0 0.3rem',
                    lineHeight: 1.2,
                  }}>{newest.titel}</h3>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.45)',
                    margin: 0,
                    fontFamily: 'Outfit, sans-serif',
                  }}>
                    {newest.sprecher}
                    {newest.bibelstelle && (
                      <> · <span style={{ color: 'rgba(201,162,39,0.7)' }}>{newest.bibelstelle}</span></>
                    )}
                    <span style={{ marginLeft: '0.8rem', opacity: 0.5 }}>{fmtDate(newest.datum)}</span>
                  </p>
                </div>
                <Link href="/botschaften" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.4rem',
                  background: 'rgba(201,162,39,0.1)',
                  border: '1px solid rgba(201,162,39,0.35)',
                  borderRadius: '50px',
                  color: '#c9a227',
                  fontSize: '0.85rem',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 500,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                  Jetzt anhören
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── DIVIDER ── */}
      <div className="sdiv">
        <div className="sdiv-line" />
      </div>

      {/* ── VALUES ── */}
      <div className="values">
        <div className="vbg" />
        <div className="vinner">
          <Reveal direction="left">
            <div>
              <span className="slabel">Unser Fundament</span>
              <h2 className="vtitle">
                Wofür wir<br /><em>stehen</em>
              </h2>
              <p className="vdesc">
                Seit 1994 existiert die Bibelgemeinde Magdeburg, um Gott die Ehre zu geben und auf die Bedürfnisse der Menschen einzugehen – durch sein unfehlbares Wort, die Bibel. Wir sind Menschen aus Magdeburg und Umgebung, die an Jesus Christus glauben und durch Ihn Frieden mit Gott empfangen haben.
              </p>
              <div className="vverse">
                <span className="vvline" />
                <span>»Dein Wort ist meines Fußes Leuchte« – Psalm 119,105</span>
              </div>
            </div>
          </Reveal>

          <div className="flist">
            <Reveal delay="d1">
              <div className="fitem">
                <div className="ficon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <p className="ftitle">Bibeltreue</p>
                  <p className="fdesc">Die Heilige Schrift ist Gottes unfehlbares Wort – die alleinige Grundlage unseres Glaubens, unserer Lehre und unseres Lebens.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay="d2">
              <div className="fitem">
                <div className="ficon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <p className="ftitle">Gemeinschaft</p>
                  <p className="fdesc">Als entschiedene Christen wollen wir füreinander und für andere da sein – und durch unser Leben Wegweiser zu Jesus Christus hin sein.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay="d3">
              <div className="fitem">
                <div className="ficon">
                  <svg viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div>
                  <p className="ftitle">Christus im Mittelpunkt</p>
                  <p className="fdesc">Jesus Christus ist der Herr und Retter. Sein Werk am Kreuz ist der unveränderliche Kern unserer Botschaft und unseres Lebens.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── BANNER ── */}
      <div className="banner">
        <div className="bbg" />
        <div className="btop" />
        <div className="bbot" />
        <Reveal>
          <p className="bquote">»Die Bibel. maßgebend fürs <strong>Leben«</strong></p>
        </Reveal>
        <Reveal>
          <p className="bname">Bibelgemeinde Magdeburg</p>
        </Reveal>
        <Reveal>
          <Link href="/anfahrt" className="bbtn">
            Wie finde ich zu euch?
          </Link>
        </Reveal>
      </div>
    </>
  )
}
