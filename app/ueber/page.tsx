'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

const TABS = [
  { id: 'glaube', label: 'Unser Glaube' },
  { id: 'gemeindeleitung', label: 'Unsere Gemeindeleitung' },
  { id: 'geschichte', label: 'Unsere Geschichte' },
  { id: 'ziel', label: 'Unser Ziel' },
  { id: 'gottesdienste', label: 'Unser Gottesdienst' },
]

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
    text: 'Die Gemeinde zieht in ihre heutigen Räumlichkeiten in der Maxim-Gorki-Straße 31/37 in Magdeburg-Stadtfeld. Die größeren Räume ermöglichen reguläre Gottesdienste, Evangelisationsveranstaltungen und Konzerte für ein breiteres Publikum.',
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

function UeberContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeTab = searchParams.get('tab') || 'glaube'

  const setTab = (id: string) => {
    router.push(`/ueber?tab=${id}`, { scroll: false })
  }

  return (
    <>
      <PageHero
        label="Wir über uns"
        title="Über uns"
        subtitle="Bibeltreue christliche Gemeinde in Magdeburg – gegründet 1994."
      />

      <div className="sub-nav">
        <Link href="/">Start</Link>
        <span>›</span>
        <span className="current">Über uns</span>
      </div>

      {/* Tab Bar */}
      <div className="tab-bar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="sinner">

          {activeTab === 'glaube' && (
            <Reveal>
              <div className="prose-section">
                <span className="slabel">Unser Glaube</span>
                <h2 className="stitle" style={{ fontSize: '2rem', marginBottom: '1.4rem' }}>Was uns trägt</h2>
                <p className="prose">
                  Wir sind Menschen aus Magdeburg und Umgebung, die an Jesus Christus glauben und die durch Ihn Frieden mit Gott und ein neues Leben empfangen haben. Dieser Glaube ist nicht bloß eine Überzeugung im Kopf – er verändert das Leben von innen heraus.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  Als entschiedene Christen wollen wir uns auch im Alltag dem Willen Gottes unterordnen und durch unser Leben für andere Menschen Wegweiser zu Jesus Christus hin sein. Wir glauben, dass die Bibel das unfehlbare und vollständige Wort Gottes ist – und dass sie allem, was wir lehren, glauben und tun, als Maßstab dient.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  Unser Glaube gründet sich auf die grundlegenden christlichen Wahrheiten: die Dreieinigkeit Gottes, die Gottheit und Menschheit Jesu Christi, seinen Sühnetod am Kreuz, seine leibliche Auferstehung, die Errettung allein durch Glauben an Christus und die Wiederkunft des Herrn.
                </p>
              </div>
            </Reveal>
          )}

          {activeTab === 'gemeindeleitung' && (
            <Reveal>
              <div className="prose-section">
                <span className="slabel">Unsere Gemeindeleitung</span>
                <h2 className="stitle" style={{ fontSize: '2rem', marginBottom: '1.4rem' }}>Menschen, die dienen</h2>
                <p className="prose">
                  Die Bibelgemeinde Magdeburg wird von einer Gruppe gläubiger Männer geleitet, die sich dem Dienst an der Gemeinde und der Verkündigung des Wortes Gottes verpflichtet haben.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  Weitere Informationen zur Gemeindeleitung folgen in Kürze.
                </p>
              </div>
            </Reveal>
          )}

          {activeTab === 'geschichte' && (
            <section id="geschichte">
              <Reveal>
                <div style={{ maxWidth: '820px' }}>
                  <span className="slabel">Unsere Geschichte</span>
                  <h2 className="stitle" style={{ fontSize: '2rem', marginBottom: '1.4rem' }}>Seit 1994 in Magdeburg</h2>

                  {/* Intro */}
                  <div style={{
                    background: '#0e0e0e',
                    border: '1px solid rgba(201,162,39,0.18)',
                    borderRadius: '18px',
                    padding: '1.6rem 2rem',
                    marginBottom: '2.5rem',
                  }}>
                    <p style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.1rem',
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
                      left: '56px',
                      top: '28px',
                      bottom: '28px',
                      width: '1px',
                      background: 'linear-gradient(to bottom, transparent, rgba(201,162,39,0.3) 10%, rgba(201,162,39,0.3) 90%, transparent)',
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {timeline.map((item, i) => (
                        <div key={i} className="timeline-row">
                          {/* Year + dot */}
                          <div className="timeline-year-col">
                            <span style={{
                              fontFamily: 'Cormorant Garamond, serif',
                              fontSize: '0.88rem',
                              fontWeight: 600,
                              color: '#c9a227',
                              letterSpacing: '0.04em',
                            }}>{item.year}</span>
                            <div style={{
                              position: 'absolute',
                              right: '-7px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '12px',
                              height: '12px',
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
                            borderRadius: '14px',
                            padding: '1.2rem 1.4rem',
                          }}>
                            <h3 style={{
                              fontFamily: 'Cormorant Garamond, serif',
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: '#fff',
                              margin: '0 0 0.5rem',
                              lineHeight: 1.3,
                            }}>{item.title}</h3>
                            <p style={{
                              fontSize: '0.86rem',
                              color: 'rgba(255,255,255,0.5)',
                              lineHeight: 1.75,
                              margin: 0,
                              fontWeight: 300,
                            }}>{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Today */}
                  <div style={{
                    marginTop: '2.5rem',
                    background: 'rgba(201,162,39,0.06)',
                    border: '1px solid rgba(201,162,39,0.2)',
                    borderRadius: '16px',
                    padding: '1.6rem 2rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.9rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                      </svg>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: '#fff' }}>
                        Heute
                      </span>
                    </div>
                    <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 0.75rem', fontWeight: 300 }}>
                      Die Bibelgemeinde Magdeburg versammelt sich bis heute regelmäßig sonntags um 10:00 Uhr und mittwochs
                      um 18:00 Uhr in der Maxim-Gorki-Straße 31/37 in Magdeburg. Die Gottesdienste finden auf Deutsch statt,
                      mit internationalen Mitgliedern aus verschiedenen Sprachräumen. Das Fundament bleibt dasselbe:
                      die unfehlbare Heilige Schrift und Jesus Christus als einzigen Herrn und Retter.
                    </p>
                    <p style={{ fontSize: '0.77rem', color: 'rgba(201,162,39,0.55)', margin: 0, fontStyle: 'italic' }}>
                      »Dein Wort ist meines Fußes Leuchte« – Psalm 119,105
                    </p>
                  </div>

                  {/* Source note */}
                  <p style={{
                    marginTop: '2rem',
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    fontStyle: 'italic',
                  }}>
                    Inhalt basierend auf der bisherigen Website der Bibelgemeinde Magdeburg.
                  </p>
                </div>
              </Reveal>
            </section>
          )}

          {activeTab === 'ziel' && (
            <Reveal>
              <div className="prose-section">
                <span className="slabel">Unser Ziel</span>
                <h2 className="stitle" style={{ fontSize: '2rem', marginBottom: '1.4rem' }}>Wozu wir da sind</h2>
                <p className="prose">
                  Als Bibelgemeinde hier in Magdeburg machen wir es uns zur Aufgabe, entschiedenen Christen eine geistliche Heimat zu bieten, suchenden Menschen den Weg der Erlösung und Errettung zu zeigen und das Wort Gottes, die Bibel, in seiner Gesamtheit zu verkündigen.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  Die Gottesdienste fördern die Ehrfurcht vor Gott durch die fortlaufende Verkündigung der Heiligen Schrift, durch das Singen von Psalmen, Hymnen und geistlichen Liedern und durch das gegenseitige Anspornen zur Liebe und zu guten Werken. Wir wollen kein oberflächliches Christentum pflegen, sondern Menschen tief im Glauben verwurzeln.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  Evangelisation liegt uns am Herzen: Wir wollen das Evangelium nicht nur in unserer Gemeinde, sondern auch in unserer Stadt und darüber hinaus bezeugen. Seelsorge, Gebet und gegenseitige Ermutigung gehören genauso dazu wie der treue Dienst an Kindern und Jugendlichen.
                </p>
              </div>
            </Reveal>
          )}

          {activeTab === 'gottesdienste' && (
            <Reveal>
              <div className="prose-section">
                <span className="slabel">Unsere Gottesdienste</span>
                <h2 className="stitle" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Zeiten &amp; Angebote</h2>
                <div className="cgrid" style={{ marginBottom: '2.5rem' }}>
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
                    <p className="cdesc">Wortverkündigung, Lobpreis und Gemeinschaft. Sonntagsschule für Kinder parallel zum Gottesdienst.</p>
                  </div>
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
                    <p className="cdesc">Gemeinsames, gründliches Studium der Heiligen Schrift für alle, die tiefer in Gottes Wort eintauchen möchten.</p>
                  </div>
                </div>
                <p className="prose">
                  Neben Gottesdienst und Bibelstunde bieten wir weitere Angebote für alle Generationen:{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Jugendstunden</strong>,{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Sonntagsschule</strong>,{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Seelsorge</strong>,{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Evangelisation</strong> sowie{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Männer-</strong> und{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Frauentreffen</strong>.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  Gottesdienste auf <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Deutsch</strong> – Übersetzung ins{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Englische</strong> und{' '}
                  <strong style={{ color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Russische</strong> vorhanden.
                </p>
              </div>
            </Reveal>
          )}

        </div>
      </section>
    </>
  )
}

export default function UeberPage() {
  return (
    <Suspense fallback={null}>
      <UeberContent />
    </Suspense>
  )
}
