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
            <Reveal>
              <div className="prose-section">
                <span className="slabel">Unsere Geschichte</span>
                <h2 className="stitle" style={{ fontSize: '2rem', marginBottom: '1.4rem' }}>Seit 1994 in Magdeburg</h2>
                <p className="prose">
                  Die Bibelgemeinde Magdeburg wurde 1994 gegründet – mit dem Ziel, Gott die Ehre zu geben und auf die Bedürfnisse der Menschen mittels seines unfehlbaren Wortes, der Bibel, einzugehen. Was damals als kleine Gemeinschaft begann, ist über die Jahre gewachsen und zu einer geistlichen Heimat für viele Menschen aus Magdeburg und der Umgebung geworden.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  In den vergangenen Jahren haben wir die Freude gehabt, mit Gläubigen aus diversen Ländern Gemeinschaft zu pflegen. Unsere Gemeinde ist geprägt von einer herzlichen Atmosphäre, in der Menschen jeden Hintergrunds willkommen sind – ob alteingesessen oder neu in der Stadt, ob Suchende oder bereits überzeugte Christen.
                </p>
                <p className="prose" style={{ marginTop: '1rem' }}>
                  Gottesdienste werden auf Deutsch gehalten. Eine Übersetzung ins Englische und Russische wird angeboten.
                </p>
              </div>
            </Reveal>
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
