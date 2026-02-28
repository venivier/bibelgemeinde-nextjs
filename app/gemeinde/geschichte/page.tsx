import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Geschichte der Gemeinde – Bibelgemeinde Magdeburg',
  description: 'Die Geschichte der Bibelgemeinde Magdeburg seit ihrer Gründung 1994 bis heute.',
}

const timeline = [
  {
    year: '1986',
    title: 'Ein Gebet auf der Autobahn',
    text: 'Bradley McKenzie, auf einer Durchreise durch Deutschland, fühlt sich auf der Autobahn nahe Magdeburg von Gott berufen. Er betet, dass Gott jemanden senden möge, das Evangelium in dieser Stadt zu verkündigen – und verpflichtet sich selbst, dorthin zu gehen, wohin der Herr ihn führen würde.',
  },
  {
    year: '1993',
    title: 'Erkundungsreisen nach Ostdeutschland',
    text: 'Bradley McKenzie und Kevin Matthia – beide ordinierte Prediger der Mount Calvary Baptist Church in South Carolina, USA – bereisen gemeinsam Ostdeutschland, um den richtigen Standort für eine neue Gemeinde zu finden. In Beratung mit dem Evangelisten Dieter Weidensdörfer identifizieren sie Magdeburg als unterversorgtes Gebiet mit besonderem Bedarf.',
  },
  {
    year: '1994',
    title: 'Gründung in Magdeburg',
    text: 'Beide Familien ziehen nach Magdeburg. Der Herr sorgt rasch für Wohnungen. Die ersten Gottesdienste finden in der Privatwohnung der Familie McKenzie statt – mit einem improvisierten Kanzeltisch aus einem einfachen Tisch und einer Faltbox. So beginnt die Bibelgemeinde Magdeburg.',
  },
  {
    year: '1996',
    title: 'Umzug in größere Räume',
    text: 'Die wachsende Gemeinde zieht in ein zusammengelegtes Wohnungsquartier um. Durch das Entfernen einer Innenwand entsteht ein größerer Versammlungsraum, der der steigenden Zahl der Gottesdienstbesucher gerecht wird.',
  },
  {
    year: '1998',
    title: 'Sonntagsschule und Unterstützung für Studenten',
    text: 'Eine zusätzliche Erdgeschosswohnung wird für den Sonntagsschulunterricht der Kinder eingerichtet. Gleichzeitig bietet sie Theologiestudenten kostenlosen Wohnraum und ermöglicht so die Unterstützung des nächsten Predigernachwuchses.',
  },
  {
    year: '2007',
    title: 'Neues Domizil in Magdeburg-Stadtfeld',
    text: 'Die Gemeinde zieht in ihre heutigen Räumlichkeiten in der Maxim-Gorki-Straße 31–37 in Magdeburg-Stadtfeld. Die größeren Räume ermöglichen reguläre Gottesdienste, Evangelisationsveranstaltungen und Konzerte für ein breiteres Publikum.',
  },
  {
    year: '2009',
    title: 'Gebetsgemeinschaft der Männer',
    text: 'Männer der Gemeinde beginnen mit regelmäßigen Gebetstreffen an Samstagabenden. Diese Treffen stärken das Vertrauen auf Gott – besonders in einer Zeit, in der sich mehrere Familien der Gemeinde anderweitig niederließen.',
  },
  {
    year: '2014',
    title: 'Eingetragener Verein und erste Älteste',
    text: 'Die Bibelgemeinde Magdeburg wird offiziell als eingetragener Verein (e.V.) anerkannt. In diesem Jahr werden auch zwei Älteste eingesetzt: Alexander Mantay und Bradley McKenzie – ein wichtiger Schritt in der Reifung und Struktur der Gemeinde.',
  },
]

export default function GeschichtePage() {
  return (
    <>
      <PageHero
        label="Wir über uns"
        title="Geschichte der Gemeinde"
        subtitle="Von einem Gebet auf der Autobahn bis zur lebendigen Gemeinde in Magdeburg – ein Rückblick auf drei Jahrzehnte Gottes Treue."
      />

      <section className="section">
        <div className="sinner" style={{ maxWidth: '820px' }}>

          {/* Intro */}
          <div style={{
            background: '#0e0e0e',
            border: '1px solid rgba(201,162,39,0.18)',
            borderRadius: '18px',
            padding: '2rem 2.2rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.2rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.8,
              margin: 0,
              fontStyle: 'italic',
            }}>
              Die Bibelgemeinde Magdeburg ist eine bibeltreue christliche Gemeinde, die 1994 gegründet wurde.
              Ihre Geschichte ist eine Geschichte des Glaubens – von kleinen Anfängen in einer Privatwohnung
              bis hin zu einer wachsenden, internationalen Gemeinde im Herzen Magdeburgs.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '72px',
              top: '28px',
              bottom: '28px',
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(201,162,39,0.3) 10%, rgba(201,162,39,0.3) 90%, transparent)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

                  {/* Year + dot */}
                  <div style={{ flexShrink: 0, width: '72px', textAlign: 'right', paddingTop: '1.35rem', position: 'relative' }}>
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#c9a227',
                      letterSpacing: '0.04em',
                    }}>{item.year}</span>
                    {/* dot on the line */}
                    <div style={{
                      position: 'absolute',
                      right: '-8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '13px',
                      height: '13px',
                      borderRadius: '50%',
                      background: '#080808',
                      border: '2px solid rgba(201,162,39,0.6)',
                      boxShadow: '0 0 8px rgba(201,162,39,0.3)',
                      zIndex: 1,
                    }} />
                  </div>

                  {/* Card */}
                  <div style={{
                    flex: 1,
                    background: '#0e0e0e',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '16px',
                    padding: '1.4rem 1.6rem',
                    transition: 'border-color 0.2s',
                  }}>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: '#fff',
                      margin: '0 0 0.6rem',
                      lineHeight: 1.3,
                    }}>{item.title}</h3>
                    <p style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.52)',
                      lineHeight: 1.75,
                      margin: 0,
                      fontWeight: 300,
                    }}>{item.text}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Today section */}
          <div style={{
            marginTop: '3rem',
            background: 'rgba(201,162,39,0.06)',
            border: '1px solid rgba(201,162,39,0.2)',
            borderRadius: '18px',
            padding: '2rem 2.2rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
              </svg>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>
                Heute
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 0.75rem', fontWeight: 300 }}>
              Die Bibelgemeinde Magdeburg versammelt sich bis heute regelmäßig sonntags um 10:00 Uhr und mittwochs
              um 18:00 Uhr in der Maxim-Gorki-Straße 31–37 in Magdeburg. Die Gottesdienste finden auf Deutsch statt,
              mit internationalen Mitgliedern aus verschiedenen Sprachräumen. Das Fundament bleibt dasselbe:
              die unfehlbare Heilige Schrift und Jesus Christus als einzigen Herrn und Retter.
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(201,162,39,0.55)', margin: 0, fontStyle: 'italic' }}>
              »Dein Wort ist meines Fußes Leuchte« – Psalm 119,105
            </p>
          </div>

          {/* Source note */}
          <p style={{
            marginTop: '2.5rem',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.2)',
            textAlign: 'center',
            fontStyle: 'italic',
          }}>
            Inhalt basierend auf der bisherigen Website der Bibelgemeinde Magdeburg.
          </p>

        </div>
      </section>
    </>
  )
}
