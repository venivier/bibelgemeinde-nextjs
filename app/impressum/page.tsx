import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Bibelgemeinde Magdeburg',
}

export default function ImpressumPage() {
  return (
    <section className="section" style={{ paddingTop: '10rem' }}>
      <div className="sinner">
        <span className="slabel">Rechtliches</span>
        <h2 className="stitle" style={{ marginBottom: '2.5rem' }}>Impressum</h2>
        <div className="prose">

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>
              Angaben gemäß § 5 TMG
            </h3>
            <p>
              Bibelgemeinde Magdeburg e.V.<br />
              Maxim-Gorki-Str. 31<br />
              39110 Magdeburg
            </p>
            <p style={{ marginTop: '.5rem' }}>
              Vereinsregister: VR4118<br />
              Registergericht: Amtsgericht Stendal
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong style={{ color: 'rgba(255,255,255,.7)' }}>Vertreten durch:</strong><br />
              Bradley McKenzie
            </p>
          </div>

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>
              Kontakt
            </h3>
            <p>
              Telefon: 039204 63903<br />
              E-Mail: info@bibelgemeinde-magdeburg.de
            </p>
          </div>

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p>
              Bradley McKenzie<br />
              Birkenweg 9<br />
              39167 Niederndodeleben
            </p>
            <p style={{ marginTop: '1rem' }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="prose-section">
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>
              Haftung für Inhalte
            </h4>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p style={{ marginTop: '.5rem' }}>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </div>

          <div className="prose-section">
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>
              Haftung für Links
            </h4>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            <p style={{ marginTop: '.5rem' }}>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          </div>

          <div className="prose-section">
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>
              Urheberrecht
            </h4>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            <p style={{ marginTop: '.5rem' }}>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
